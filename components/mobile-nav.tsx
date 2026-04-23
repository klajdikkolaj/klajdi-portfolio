"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/content/portfolio";

type MobileNavProps = {
  links: LinkItem[];
  email: string;
};

export function MobileNav({ links, email }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-100 transition hover:border-white/35 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 md:hidden"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-dialog"
      >
        Menu
      </button>

      <div
        id="mobile-navigation-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-[60] transition ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          tabIndex={isOpen ? 0 : -1}
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
          aria-label="Close menu overlay"
        />

        <div className="absolute inset-x-4 top-5 rounded-2xl border border-white/15 bg-slate-900/95 p-5 shadow-2xl shadow-slate-950/70">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/90">Navigation</p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-semibold text-slate-100 transition hover:border-white/40"
            >
              Close
            </button>
          </div>

          <nav className="mt-5" aria-label="Mobile">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm font-medium text-slate-100 transition hover:border-cyan-300/45 hover:bg-cyan-400/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={`mailto:${email}`}
            onClick={() => setIsOpen(false)}
            className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Email Klajdi
          </a>
        </div>
      </div>
    </>
  );
}
