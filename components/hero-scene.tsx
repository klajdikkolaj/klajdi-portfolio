"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Sparkles } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

type MotionSceneProps = {
  prefersReducedMotion: boolean;
};

function IridescentCore({ prefersReducedMotion }: MotionSceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    if (prefersReducedMotion) {
      return;
    }

    const time = clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.13 + pointer.y * 0.12;
      meshRef.current.rotation.y = time * 0.18 + pointer.x * 0.16;
      meshRef.current.position.y = Math.sin(time * 0.72) * 0.08;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x = Math.sin(time * 0.3) * 0.16;
      ringRef.current.rotation.y = time * 0.12;
      ringRef.current.rotation.z = time * 0.08;
    }
  });

  return (
    <group position={[0.28, 0.28, -0.62]}>
      <Float
        speed={prefersReducedMotion ? 0 : 1.15}
        rotationIntensity={prefersReducedMotion ? 0 : 0.24}
        floatIntensity={prefersReducedMotion ? 0 : 0.32}
      >
        <mesh ref={meshRef} castShadow>
          <sphereGeometry args={[0.82, 128, 128]} />
          <meshPhysicalMaterial
            clearcoat={1}
            clearcoatRoughness={0.08}
            color="#ffffff"
            emissive="#143a36"
            emissiveIntensity={0.18}
            iridescence={1}
            iridescenceIOR={1.82}
            metalness={0.08}
            reflectivity={0.82}
            roughness={0.18}
            sheen={1}
            sheenColor="#9ffff4"
            sheenRoughness={0.24}
          />
        </mesh>
      </Float>

      <group ref={ringRef} scale={1.01}>
        {[
          { color: "#73fff2", opacity: 0.32, rotation: [1.38, 0.16, 0.28], scale: 1 },
          { color: "#ff67c8", opacity: 0.28, rotation: [1.72, -0.28, -0.12], scale: 1.12 },
          { color: "#b8b4ff", opacity: 0.22, rotation: [1.48, 0.54, 0.82], scale: 0.88 },
          { color: "#ffffff", opacity: 0.18, rotation: [1.24, -0.72, 0.34], scale: 0.74 },
        ].map((ring) => (
          <mesh key={ring.color} rotation={ring.rotation as [number, number, number]} scale={ring.scale}>
            <torusGeometry args={[0.98, 0.006, 12, 220]} />
            <meshBasicMaterial color={ring.color} transparent opacity={ring.opacity} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function ReflectiveTerrain() {
  const geometry = useMemo(() => {
    const terrain = new THREE.PlaneGeometry(21, 15, 144, 96);
    const position = terrain.getAttribute("position") as THREE.BufferAttribute;

    for (let index = 0; index < position.count; index += 1) {
      const x = position.getX(index);
      const y = position.getY(index);
      const distance = Math.sqrt(x * x + y * y);
      const fracture =
        Math.sin(x * 2.1) * 0.035 +
        Math.cos(y * 2.7) * 0.04 +
        Math.sin((x + y) * 4.2) * 0.018;
      const basin = Math.max(0, 1.2 - distance * 0.12) * -0.16;

      position.setZ(index, fracture + basin);
    }

    position.needsUpdate = true;
    terrain.computeVertexNormals();
    return terrain;
  }, []);

  return (
    <mesh geometry={geometry} position={[0, -1.42, -0.55]} receiveShadow rotation-x={-Math.PI / 2}>
      <meshStandardMaterial
        color="#050606"
        emissive="#071918"
        emissiveIntensity={0.14}
        metalness={0.36}
        roughness={0.82}
      />
    </mesh>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.36} />
      <directionalLight color="#ffffff" intensity={2.4} position={[2.8, 4.5, 3.6]} />
      <pointLight color="#68fff0" intensity={4.8} position={[-2.8, 1.6, 1.5]} />
      <pointLight color="#ff63cc" intensity={3.2} position={[2.9, 1.2, 1.2]} />
      <spotLight angle={0.42} color="#bffcff" intensity={4.2} penumbra={0.75} position={[0, 4.4, 2.2]} />
    </>
  );
}

function SceneWorld({ prefersReducedMotion }: MotionSceneProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    if (!groupRef.current || prefersReducedMotion) {
      return;
    }

    const time = clock.getElapsedTime();
    groupRef.current.rotation.y = pointer.x * 0.045;
    groupRef.current.position.x = pointer.x * 0.18;
    groupRef.current.position.y = Math.sin(time * 0.4) * 0.025;
  });

  return (
    <group ref={groupRef}>
      <IridescentCore prefersReducedMotion={prefersReducedMotion} />
      <ReflectiveTerrain />
      <Sparkles
        color="#bffff8"
        count={86}
        opacity={0.34}
        position={[0, 0.05, -1.8]}
        scale={[8.5, 2.8, 4.8]}
        size={1.4}
        speed={prefersReducedMotion ? 0 : 0.24}
      />
      <Sparkles
        color="#ff7ed6"
        count={34}
        opacity={0.24}
        position={[0.5, 0.4, -1.4]}
        scale={[5.2, 2.2, 3.6]}
        size={1.05}
        speed={prefersReducedMotion ? 0 : 0.18}
      />
    </group>
  );
}

export function HeroScene() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <Canvas
      className="hero-canvas"
      dpr={[1, 1.75]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      shadows
    >
      <PerspectiveCamera makeDefault fov={40} position={[0, 0.92, 6.2]} rotation={[-0.08, 0, 0]} />
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 6.2, 14.5]} />
      <SceneLights />
      <SceneWorld prefersReducedMotion={prefersReducedMotion} />
    </Canvas>
  );
}
