import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';

// Simple animated grid floor and moving network lines
const Grid = () => {
  const ref = useRef<any>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.0005;
    }
  });
  const size = 100;
  const divisions = 20;
  const points: [number, number, number][] = [];
  for (let i = -size; i <= size; i += size / divisions) {
    points.push([-size, 0, i], [size, 0, i]);
    points.push([i, 0, -size], [i, 0, size]);
  }
  return (
    <Line
      ref={ref}
      points={points}
      color="#2d4a6a"
      lineWidth={0.5}
      dashed={true}
    />
  );
};

export const BackgroundFX: React.FC = () => (
  <Canvas
    camera={{ position: [0, 10, 10], fov: 50 }}
    gl={{ antialias: true, alpha: true }}
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
  >
    <ambientLight intensity={0.3} />
    <directionalLight position={[5, 10, 5]} intensity={0.8} />
    <Grid />
  </Canvas>
);
