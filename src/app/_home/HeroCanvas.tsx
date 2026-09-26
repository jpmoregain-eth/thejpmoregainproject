"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./home.module.css";

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    let dead = false;
    let dispose: (() => void) | undefined;

    if (!hasWebGL()) {
      setFallback(true);
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.innerWidth < 768 || window.devicePixelRatio < 1.5;

    import("./hero-scene")
      .then(({ init }) => {
        if (dead || !canvasRef.current) return;
        const scene = init(canvasRef.current, {
          count: small ? 10000 : 22000,
          speed: reduceMotion ? 0 : 1,
        });
        dispose = scene.dispose;
      })
      .catch((e) => {
        console.error("hero scene", e);
        if (!dead) setFallback(true);
      });

    return () => {
      dead = true;
      dispose?.();
    };
  }, []);

  return fallback ? (
    <div className={styles.fallback} aria-hidden="true" />
  ) : (
    <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
  );
}
