"use client";

import dynamic from "next/dynamic";

const LoadedHeroScene = dynamic(
  () => import("@/components/hero-scene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => <div className="hero-scene-fallback" aria-hidden="true" />,
  },
);

export function HeroSceneLoader() {
  return <LoadedHeroScene />;
}
