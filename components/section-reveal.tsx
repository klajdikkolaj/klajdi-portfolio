"use client";

import { useEffect, useRef, useState } from "react";

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionReveal({ children, className }: SectionRevealProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal${visible ? " reveal-visible" : ""}${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
