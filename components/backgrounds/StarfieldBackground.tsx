"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  baseOpacity: number;
  driftY: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

const STAR_COUNT = 140;

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;

    function createStars() {
      const area = width * height;
      const count = Math.min(STAR_COUNT, Math.round(area / 9000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.1 + 0.3,
        baseOpacity: Math.random() * 0.5 + 0.35,
        driftY: Math.random() * 0.06 + 0.015,
        twinkleSpeed: Math.random() * 0.0008 + 0.0002,
        twinklePhase: Math.random() * Math.PI * 2,
      }));
    }

    function resize() {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      createStars();
    }

    function drawStatic() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${star.baseOpacity})`;
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let frame = 0;
    let rafId: number;

    function animate(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        star.y += star.driftY;
        if (star.y > height + 2) {
          star.y = -2;
          star.x = Math.random() * width;
        }
        const twinkle =
          Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.25;
        const opacity = Math.max(0.1, Math.min(1, star.baseOpacity + twinkle));
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${opacity})`;
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      frame++;
      rafId = requestAnimationFrame(animate);
    }

    resize();
    if (prefersReducedMotion) {
      drawStatic();
    } else {
      rafId = requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#06060a]">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
