"use client";

import { useEffect } from "react";

export function MotionEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.classList.add("page-ready");
    document.documentElement.classList.toggle("motion-safe", !reduce);

    if (reduce) return;

    const handlePointer = (event: PointerEvent) => {
      document.body.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.body.style.setProperty("--pointer-y", `${event.clientY}px`);

      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (event.clientX - cx) / cx;
      const dy = (event.clientY - cy) / cy;

      document.querySelectorAll<HTMLElement>(".parallax").forEach((el) => {
        const strength = Number(el.dataset.parallaxStrength || 12);
        el.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`;
      });

      document.querySelectorAll<HTMLElement>(".magnetic-btn").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        const near = Math.abs(x) < rect.width * 0.9 && Math.abs(y) < rect.height * 0.9;
        if (near) {
          el.style.transform = `translate3d(${x * 0.08}px, ${y * 0.08}px, 0)`;
        } else {
          el.style.transform = "translate3d(0,0,0)";
        }
      });

      document.querySelectorAll<HTMLElement>(".tilt-card").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        const near = Math.abs(x) < rect.width * 0.8 && Math.abs(y) < rect.height * 0.8;

        if (near) {
          const ry = Math.max(-8, Math.min(8, (x / rect.width) * 14));
          const rx = Math.max(-6, Math.min(6, (-y / rect.height) * 10));
          el.style.transform = `translateY(-8px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        } else {
          el.style.transform = "translateY(0) rotateX(0) rotateY(0)";
        }
      });
    };

    const resetMagnetic = () => {
      document.querySelectorAll<HTMLElement>(".magnetic-btn").forEach((el) => {
        el.style.transform = "translate3d(0,0,0)";
      });
      document.querySelectorAll<HTMLElement>(".tilt-card").forEach((el) => {
        el.style.transform = "translateY(0) rotateX(0) rotateY(0)";
      });
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });
    window.addEventListener("pointerleave", resetMagnetic);

    return () => {
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("pointerleave", resetMagnetic);
    };
  }, []);

  return null;
}
