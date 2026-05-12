"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Aurora shader background.
 * Two layers: warped fbm-noise for the aurora ribbons, and floating particles for depth.
 */

const auroraVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const auroraFragment = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;

  // Simplex-like value noise + fbm
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
  float noise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }
  float fbm(vec2 p){
    float v = 0.0;
    float a = 0.5;
    for(int i = 0; i < 5; i++){
      v += a * noise(p);
      p *= 2.02;
      a *= 0.5;
    }
    return v;
  }

  void main(){
    vec2 uv = vUv;
    vec2 p = (uv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);

    // Slow flowing field, slightly biased by pointer
    float t = uTime * 0.06;
    vec2 m = (uMouse - 0.5) * 0.4;

    float n1 = fbm(p * 1.8 + vec2(t, -t * 0.7) + m);
    float n2 = fbm(p * 2.6 - vec2(t * 1.3, t * 0.4));
    float n  = fbm(p * 1.2 + vec2(n1, n2));

    // Three ribbons at different y bands
    float band1 = smoothstep(0.55, 0.15, abs(uv.y - 0.30 + (n - 0.5) * 0.55));
    float band2 = smoothstep(0.55, 0.10, abs(uv.y - 0.55 + (n1 - 0.5) * 0.65));
    float band3 = smoothstep(0.55, 0.18, abs(uv.y - 0.78 + (n2 - 0.5) * 0.50));

    vec3 col = vec3(0.0);
    col += uColorA * band1 * 0.85;
    col += uColorB * band2 * 0.85;
    col += uColorC * band3 * 0.70;

    // Soft vignette around center
    float vig = smoothstep(1.2, 0.2, length(p));
    col *= mix(0.55, 1.0, vig);

    // Subtle grain
    float g = (hash(uv * uResolution.xy * 0.5 + t) - 0.5) * 0.03;
    col += g;

    // Lift dark areas slightly so it never goes pitch black; main bg is in DOM
    col = pow(col, vec3(0.95));
    float alpha = clamp(max(max(col.r, col.g), col.b) * 1.4, 0.0, 0.9);
    gl_FragColor = vec4(col, alpha);
  }
`;

export function GlobalBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      // matches CSS HSLs converted to linear-ish rgb (approx). violet, cyan, amber.
      uColorA: { value: new THREE.Color("#a36bff") }, // primary violet
      uColorB: { value: new THREE.Color("#3ed8ff") }, // accent cyan
      uColorC: { value: new THREE.Color("#ffb24a") }, // highlight amber
    };

    const material = new THREE.ShaderMaterial({
      vertexShader: auroraVertex,
      fragmentShader: auroraFragment,
      uniforms,
      transparent: true,
      depthWrite: false,
    });
    const geom = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geom, material);
    scene.add(mesh);

    const targetMouse = { x: 0.5, y: 0.5 };
    const onMouseMove = (e: MouseEvent) => {
      targetMouse.x = e.clientX / window.innerWidth;
      targetMouse.y = 1 - e.clientY / window.innerHeight;
      if (glowRef.current) {
        glowRef.current.style.setProperty("--mx", `${e.clientX}px`);
        glowRef.current.style.setProperty("--my", `${e.clientY}px`);
      }
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    const clock = new THREE.Clock();
    let raf = 0;
    let running = !document.hidden;
    const onVis = () => { running = !document.hidden; };
    document.addEventListener("visibilitychange", onVis);

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!running) return;
      uniforms.uTime.value = clock.getElapsedTime();
      uniforms.uMouse.value.x += (targetMouse.x - uniforms.uMouse.value.x) * 0.04;
      uniforms.uMouse.value.y += (targetMouse.y - uniforms.uMouse.value.y) * 0.04;
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
      geom.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div
        ref={mountRef}
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.55] mix-blend-screen"
        aria-hidden
      />
      <div
        ref={glowRef}
        className="pointer-events-none fixed inset-0 z-0 mix-blend-screen"
        aria-hidden
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), hsl(var(--primary) / 0.18), transparent 60%)",
        }}
      />
    </>
  );
}
