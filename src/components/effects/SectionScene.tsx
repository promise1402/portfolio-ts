import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";
import * as THREE from "three";

import { cn } from "@/lib/utils";

type SceneVariant = "projects" | "certifications";

type SectionSceneProps = {
  variant?: SceneVariant;
  className?: string;
};

const palettes: Record<SceneVariant, { primary: string; secondary: string; tertiary: string }> = {
  projects: {
    primary: "#0ea5e9",
    secondary: "#14b8a6",
    tertiary: "#f59e0b",
  },
  certifications: {
    primary: "#0284c7",
    secondary: "#06b6d4",
    tertiary: "#f97316",
  },
};

const SceneCluster = ({ variant }: { variant: SceneVariant }) => {
  const groupRef = useRef<Group>(null);
  const ringRef = useRef<Mesh>(null);
  const palette = palettes[variant];

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.08;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.15;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.22;
    }
  });

  return (
    <group
      ref={groupRef}
      position={variant === "projects" ? [0.85, -0.2, 0] : [0.55, -0.15, 0]}
      scale={variant === "projects" ? 1.05 : 0.92}
    >
      <Float speed={1.4} rotationIntensity={0.75} floatIntensity={0.8}>
        <mesh position={[-1.35, 0.8, -0.4]} scale={0.92}>
          <icosahedronGeometry args={[0.92, 8]} />
          <MeshDistortMaterial
            color={palette.primary}
            roughness={0.1}
            metalness={0.35}
            speed={1.9}
            distort={0.28}
            transparent
            opacity={0.5}
          />
        </mesh>
      </Float>

      <Float speed={1.1} rotationIntensity={0.45} floatIntensity={1.15}>
        <mesh position={[1.2, -0.35, 0.15]} rotation={[0.7, 0.3, 0.25]}>
          <torusKnotGeometry args={[0.58, 0.18, 180, 28]} />
          <meshStandardMaterial color={palette.secondary} wireframe transparent opacity={0.38} />
        </mesh>
      </Float>

      <mesh ref={ringRef} rotation={[Math.PI / 2.7, 0, 0.25]} position={[0.2, -1.05, -0.15]} scale={1.7}>
        <ringGeometry args={[1.2, 1.28, 120]} />
        <meshBasicMaterial color={palette.tertiary} transparent opacity={0.16} side={THREE.DoubleSide} />
      </mesh>

      <Sparkles
        count={variant === "projects" ? 48 : 36}
        scale={4.8}
        size={2.4}
        speed={0.45}
        opacity={0.45}
        color={palette.primary}
      />
    </group>
  );
};

const SectionScene = ({ variant = "projects", className }: SectionSceneProps) => {
  const palette = palettes[variant];

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]",
        className,
      )}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            variant === "projects"
              ? "radial-gradient(circle at 75% 30%, rgba(14,165,233,0.18), transparent 32%), radial-gradient(circle at 60% 70%, rgba(245,158,11,0.12), transparent 26%)"
              : "radial-gradient(circle at 72% 28%, rgba(2,132,199,0.18), transparent 32%), radial-gradient(circle at 64% 72%, rgba(249,115,22,0.12), transparent 24%)",
        }}
      />
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 5.6], fov: 38 }}
      >
        <ambientLight intensity={1.25} />
        <pointLight position={[4, 5, 4]} intensity={28} color={palette.primary} />
        <pointLight position={[-3, -2, 5]} intensity={18} color={palette.tertiary} />
        <SceneCluster variant={variant} />
      </Canvas>
    </div>
  );
};

export default SectionScene;
