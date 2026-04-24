"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const value = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, value)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-white via-[var(--acid)] to-[var(--plasma)] shadow-[0_0_20px_rgba(168,255,246,0.52)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
