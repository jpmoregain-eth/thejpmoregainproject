"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const GOLD = "#D4A843";
const GREEN = "#00FF88";

function Starfield({ count = 1400 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 70;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 70;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 70 - 10;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.012;
      points.current.rotation.x += delta * 0.003;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color={GOLD}
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingGeometry({
  mouse,
}: {
  mouse: React.RefObject<{ x: number; y: number }>;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    g.rotation.y = t * 0.045;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, mouse.current.y * 0.15, 0.03);
    g.position.x = THREE.MathUtils.lerp(g.position.x, mouse.current.x * 0.6, 0.03);
    g.position.y = THREE.MathUtils.lerp(g.position.y, -mouse.current.y * 0.3, 0.03);
  });

  return (
    <group ref={group}>
      <mesh position={[-4.5, 1.6, -3]} rotation={[0.4, 0.2, 0]}>
        <icosahedronGeometry args={[1.3, 0]} />
        <meshBasicMaterial color={GOLD} wireframe transparent opacity={0.5} />
      </mesh>
      <mesh position={[4.2, -1.2, -5]} rotation={[0.2, 0.6, 0]}>
        <octahedronGeometry args={[1.1, 0]} />
        <meshBasicMaterial color={GREEN} wireframe transparent opacity={0.45} />
      </mesh>
      <mesh position={[1.8, 2.6, -7]} rotation={[0.3, 0.1, 0]}>
        <torusKnotGeometry args={[0.75, 0.22, 120, 16]} />
        <meshBasicMaterial color={GOLD} wireframe transparent opacity={0.4} />
      </mesh>
      <mesh position={[-2.5, -2.4, -6]} rotation={[0.1, 0.5, 0.2]}>
        <dodecahedronGeometry args={[0.9, 0]} />
        <meshBasicMaterial color={GREEN} wireframe transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

function ScrollRig() {
  const progress = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.current = max > 0 ? window.scrollY / max : 0;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((state) => {
    const targetZ = 9 - progress.current * 8;
    state.camera.position.z = THREE.MathUtils.lerp(
      state.camera.position.z,
      targetZ,
      0.04
    );
    state.camera.rotation.z = THREE.MathUtils.lerp(
      state.camera.rotation.z,
      progress.current * 0.06,
      0.04
    );
  });

  return null;
}

export default function SiteScene() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <fog attach="fog" args={["#0A0A0F", 6, 22]} />
        <Starfield />
        <FloatingGeometry mouse={mouse} />
        <ScrollRig />
      </Canvas>
    </div>
  );
}
