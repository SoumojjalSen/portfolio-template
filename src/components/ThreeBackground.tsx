import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThree } from '../hooks/useThree';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scene, camera, startAnimation, stopAnimation } = useThree(containerRef);
  const geometryRef = useRef<THREE.BufferGeometry | null>(null);
  const materialRef = useRef<THREE.Material | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!scene || !camera) return;

    // Create floating geometry
    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, -5);
    scene.add(mesh);

    // Create particles
    const particleCount = 100;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      colors[i * 3] = Math.random() * 0.5 + 0.5;
      colors[i * 3 + 1] = Math.random() * 0.5 + 0.5;
      colors[i * 3 + 2] = 1;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Store references
    geometryRef.current = geometry;
    materialRef.current = material;
    meshRef.current = mesh;
    particlesRef.current = particles;

    // Animation
    const animate = (time: number) => {
      if (mesh) {
        mesh.rotation.x = time * 0.001;
        mesh.rotation.y = time * 0.002;
      }
      if (particles) {
        particles.rotation.y = time * 0.0005;
      }
    };

    startAnimation(animate);

    return () => {
      stopAnimation();
      if (scene) {
        scene.remove(mesh);
        scene.remove(particles);
      }
      geometry.dispose();
      material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, [scene, camera, startAnimation, stopAnimation]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 -z-10"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
    />
  );
};

export default ThreeBackground;