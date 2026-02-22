"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  attribute float size;
  attribute vec3 customColor;
  varying vec3 vColor;
  void main() {
    vColor = customColor;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform sampler2D pointTexture;
  varying vec3 vColor;
  void main() {
    gl_FragColor = vec4(vColor, 1.0) * texture2D(pointTexture, gl_PointCoord);
  }
`;

export function GlobalBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const smoothMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);
    
    // Particles
    const particlesCount = 2200;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);
    const baseSizes = new Float32Array(particlesCount);
    
    const primaryColor = new THREE.Color('hsl(22, 96%, 60%)');
    const accentColor = new THREE.Color('hsl(25, 81%, 50%)');

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
      
      const color = Math.random() > 0.5 ? primaryColor : accentColor;
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
      
      const size = Math.random() * 0.06 + 0.01;
      sizes[i] = size;
      baseSizes[i] = size;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particleTexture = new THREE.TextureLoader().load(
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABl0RVh0U29mdHdhcmUAUGl4ZWxtYXRvciBQcm8gMy4zLjEwRDg0AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmBwsLECb/36d3AAABMklEQVRYw9WXSxLCMAxEx/+/s/eBEILSq2S+sW1iBfG4A6lMpqxWJ5k8z/sVz31blmXz/U+f43jeP2g+s2ma9oV9RjS99/29Y9s2+w9Z/r/D43i/L8vy/4H8BwT/fzAMw+5/3u/79v2g4Xj+95/2PYBv/x+mabrv+y/A8B0C/x84jvf9kiRJksb7ft/3/R8I/H/g+37f9z2G4TjO83/D83/L8/y6Loqi+P6v+D7+fwj+f3Acx3Gc4zg+DMMwDMPw/U+f5/keP8b3/V8A/38Az/M8z3M8x/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8T/35f6Zp2hZ9YxzA9/3/C/z8/wB+MyMdD0hEcQAAACV0RVh0Y3JlYXRlLWRhdGUAMjAyMi0wNy0xMVQxMTo0NDoyNiswMDowMBR052YAAAAldEVYdG1vZGlmeS1kYXRlADIwMjItMDctMTFUMTE6NDQ6MjYrMDA6MDAxT3oEAAAAAElFTkSuQmCC'
    );

    const particlesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        pointTexture: { value: particleTexture },
      },
      vertexShader,
      fragmentShader,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // Mouse move handler
    const onMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

      if (glowRef.current) {
        glowRef.current.style.setProperty('--mouse-x', `${event.clientX}px`);
        glowRef.current.style.setProperty('--mouse-y', `${event.clientY}px`);
      }
    };
    window.addEventListener('mousemove', onMouseMove);

    // Resize handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', onResize);

    // Animation loop
    const clock = new THREE.Clock();
    const rayPlanePoint = new THREE.Vector3();
    const pointerVector = new THREE.Vector3();
    const pointerDirection = new THREE.Vector3();
    const cameraWorldPosition = new THREE.Vector3();
    const sizeAttribute = particlesGeometry.attributes.size as THREE.BufferAttribute;
    let rafId = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      
      // Animate particles
      particleSystem.rotation.y = elapsedTime * 0.08;
      particleSystem.rotation.x = elapsedTime * 0.03;

      // Smooth pointer values for camera and interaction
      smoothMouse.current.x += (mouse.current.x - smoothMouse.current.x) * 0.05;
      smoothMouse.current.y += (mouse.current.y - smoothMouse.current.y) * 0.05;

      camera.position.x += (smoothMouse.current.x * 0.6 - camera.position.x) * 0.04;
      camera.position.y += (smoothMouse.current.y * 0.4 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      // Make particles react to mouse
      pointerVector.set(smoothMouse.current.x, smoothMouse.current.y, 0.5);
      pointerVector.unproject(camera);
      camera.getWorldPosition(cameraWorldPosition);
      pointerDirection.copy(pointerVector).sub(cameraWorldPosition).normalize();
      const distance = -camera.position.z / pointerDirection.z;
      rayPlanePoint.copy(cameraWorldPosition).add(pointerDirection.multiplyScalar(distance));

      const positions = (particlesGeometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
      const sizesArray = sizeAttribute.array as Float32Array;

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        const dx = positions[i3] - rayPlanePoint.x;
        const dy = positions[i3 + 1] - rayPlanePoint.y;
        const dz = positions[i3 + 2] - rayPlanePoint.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        const intensity = Math.max(0, 1 - dist / 2);

        sizesArray[i] = baseSizes[i] * (1 + intensity * 2.2);
      }
      sizeAttribute.needsUpdate = true;


      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafId);
      if (renderer.domElement.parentNode === currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed inset-0 z-0 opacity-100 mix-blend-screen"
        style={{
          background:
            "radial-gradient(320px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.2), transparent 62%)",
        }}
      />
      <div ref={mountRef} className="pointer-events-none fixed inset-0 z-0 opacity-90" />
    </>
  );
}
