"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
uniform float uTime;
uniform vec2 uMouse;
uniform float uRadius;

attribute float aSize;
attribute vec3 aColor;

varying vec3 vColor;
varying float vDistance;

void main() {
  vColor = aColor;

  vec3 pos = position;

  float distanceToMouse = length(position.xy - uMouse);
  float strength = 1.0 - smoothstep(0.0, uRadius, distanceToMouse);
  
  pos.z += strength * 2.0;
  
  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
  
  // Wave effect
  modelPosition.z += sin(modelPosition.x * 0.5 + uTime * 0.5) * 0.1;
  modelPosition.z += cos(modelPosition.y * 0.5 + uTime * 0.5) * 0.1;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
  gl_PointSize = aSize * (1.0 + strength * 2.0) * (300.0 / -viewPosition.z);
  vDistance = strength;
}
`;

const fragmentShader = `
varying vec3 vColor;
varying float vDistance;

void main() {
  float dist = length(gl_PointCoord - vec2(0.5));
  float opacity = 1.0 - smoothstep(0.45, 0.5, dist);
  
  gl_FragColor = vec4(vColor, opacity * (0.3 + vDistance * 0.7));
}
`;

function Particles() {
  const count = 5000;
  const shaderRef = useRef<THREE.ShaderMaterial>(null);

  const { positions, sizes, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    
    const primaryColor = new THREE.Color('hsl(285, 87%, 65%)');
    const accentColor = new THREE.Color('hsl(283, 91%, 55%)');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 25;
      positions[i3 + 1] = (Math.random() - 0.5) * 25;
      positions[i3 + 2] = (Math.random() - 0.5) * 5;
      sizes[i] = Math.random() * 1.5 + 0.5;
      
      const color = Math.random() > 0.5 ? primaryColor : accentColor;
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    return { positions, sizes, colors };
  }, [count]);

  useFrame((state) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      shaderRef.current.uniforms.uMouse.value.x = state.pointer.x * state.viewport.width / 2;
      shaderRef.current.uniforms.uMouse.value.y = state.pointer.y * state.viewport.height / 2;
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aSize"
          count={count}
          array={sizes}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aColor"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={shaderRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2(0, 0) },
          uRadius: { value: 2.5 }
        }}
      />
    </points>
  );
}


export function GlobalBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Particles />
      </Canvas>
    </div>
  );
}
