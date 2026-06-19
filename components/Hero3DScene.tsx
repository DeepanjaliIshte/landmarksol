import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Torus, Sphere, SpotLight } from '@react-three/drei';

// Simple datacenter scene with floating VMs, shield, and clouds
const Datacenter = () => {
  const shieldRef = useRef<any>(null);
  useFrame((state, delta) => {
    if (shieldRef.current) {
      shieldRef.current.rotation.y += delta * 0.5; // rotate shield
    }
  });
  return (
    <group>
      {/* Main server rack */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4, 2, 2]} />
        <meshStandardMaterial color="#1e3a8a" emissive="#1e3a8a" emissiveIntensity={0.3} />
      </mesh>
      {/* Floating virtual machine cubes */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-1.5, 1, 0] }>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial color="#7c3aed" />
        </mesh>
        <mesh position={[1.5, 1.2, -0.5] }>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial color="#7c3aed" />
        </mesh>
        <mesh position={[0, 1.5, 1] }>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial color="#7c3aed" />
        </mesh>
      </Float>
      {/* Shield */}
      <Torus args={[1.2, 0.1, 16, 100]} ref={shieldRef} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} />
      </Torus>
      {/* Clouds */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1.5, 32, 32]} position={[-3, 2, -2]}>
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.4} />
        </Sphere>
      </Float>
    </group>
  );
};

export const Hero3DScene: React.FC = () => (
  <Canvas
    camera={{ position: [0, 5, 10], fov: 45 }}
    gl={{ antialias: true, alpha: true }}
    style={{ width: '100%', height: '600px' }}
  >
    <ambientLight intensity={0.4} />
    <directionalLight position={[5, 10, 5]} intensity={0.8} />
    <SpotLight position={[0, 10, 0]} angle={0.2} penumbra={0.5} intensity={1} castShadow />
    <Datacenter />
    {/* Disable orbit controls but keep for possible parallax debugging */}
    {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
  </Canvas>
);
