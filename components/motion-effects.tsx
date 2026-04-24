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

    if (reduce) {
      return;
    }

    let cancelled = false;
    let cleanupGsap: (() => void) | undefined;

    void (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (cancelled) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".hero-heading > span",
          { yPercent: 18, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
          },
        );

        const hero = document.querySelector<HTMLElement>(".avant-hero");

        if (hero && !smallScreen) {
          gsap.to(".hero-scene-shell", {
            scale: 1.08,
            yPercent: -4,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.65,
            },
          });

          gsap.to(".hero-title-block", {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.65,
            },
          });
        }

        gsap.utils.toArray<HTMLElement>(".project-row").forEach((row) => {
          gsap.fromTo(
            row,
            { opacity: 0.62 },
            {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top 84%",
                end: "top 52%",
                scrub: 0.45,
              },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 42, opacity: 0.01 },
            {
              y: 0,
              opacity: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                end: "top 54%",
                scrub: 0.48,
              },
            },
          );
        });
      });

      cleanupGsap = () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        ctx.revert();
      };
    })();

    const handlePointer = (event: PointerEvent) => {
      document.body.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.body.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    if (!coarsePointer) {
      window.addEventListener("pointermove", handlePointer, { passive: true });
    }

    return () => {
      cancelled = true;

      if (!coarsePointer) {
        window.removeEventListener("pointermove", handlePointer);
      }

      cleanupGsap?.();
    };
  }, []);

  return null;
}
