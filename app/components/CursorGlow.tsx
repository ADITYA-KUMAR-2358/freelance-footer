"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [smooth, setSmooth] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setSmooth(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }));
    });
    return () => cancelAnimationFrame(id);
  }, [pos, smooth]);

  return (
    <>
      {/* Core glow */}
      <div
        className="pointer-events-none fixed z-0 h-[260px] w-[260px]
        -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
        style={{
          left: smooth.x,
          top: smooth.y,
          background:
            "radial-gradient(circle, rgba(211,110,250,0.45), transparent 65%)",
        }}
      />

      {/* Outer bloom */}
      <div
        className="pointer-events-none fixed z-0 h-[520px] w-[520px]
        -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px] opacity-30"
        style={{
          left: smooth.x,
          top: smooth.y,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)",
        }}
      />
    </>
  );
}