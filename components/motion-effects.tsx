"use client";

import { useEffect } from "react";

export function MotionEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const smallScreen = window.matchMedia("(max-width: 1023px)").matches;
    document.body.classList.add("page-ready");
    document.documentElement.classList.toggle("motion-safe", !reduce);
    document.documentElement.classList.toggle("coarse-pointer", coarsePointer);

    if (reduce) return;

    let cleanupGsap: (() => void) | undefined;

    void (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const hero = document.querySelector<HTMLElement>(".hero-stage");
        if (hero) {
          gsap.fromTo(
            ".hero-anim",
            { y: 28, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              stagger: 0.12,
              ease: "power3.out",
            },
          );

          if (!smallScreen) {
            ScrollTrigger.create({
              trigger: hero,
              start: "top top",
              end: "+=30%",
              pin: true,
              scrub: 0.5,
              anticipatePin: 1,
            });
          }
        }

        gsap.utils.toArray<HTMLElement>(".parallax").forEach((el, i) => {
          gsap.to(el, {
            yPercent: i % 2 === 0 ? -10 : 12,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 40, opacity: 0.01, scale: 0.985 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                end: "top 48%",
                scrub: 0.45,
              },
            },
          );
        });
      });

      cleanupGsap = () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
        ctx.revert();
      };
    })();

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

    if (!coarsePointer) {
      window.addEventListener("pointermove", handlePointer, { passive: true });
      window.addEventListener("pointerleave", resetMagnetic);
    }

    return () => {
      if (!coarsePointer) {
        window.removeEventListener("pointermove", handlePointer);
        window.removeEventListener("pointerleave", resetMagnetic);
      }
      cleanupGsap?.();
    };
  }, []);

  return null;
}
