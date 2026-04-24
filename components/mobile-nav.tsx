"use client";

import { Mail, Menu, X } from "lucide-react";
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
        className="inline-flex size-10 items-center justify-center border border-white/15 bg-white/5 text-white transition hover:border-white/35 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-dialog"
        aria-label="Open navigation"
      >
        <Menu aria-hidden="true" size={18} strokeWidth={1.8} />
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
          className="absolute inset-0 bg-black/86 backdrop-blur-sm"
          aria-label="Close menu overlay"
        />

        <div className="absolute inset-x-4 top-5 border border-white/15 bg-black/95 p-5 shadow-2xl shadow-black/70">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase text-white/54">Navigation</p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex size-9 items-center justify-center border border-white/15 text-white transition hover:border-white/40"
              aria-label="Close navigation"
            >
              <X aria-hidden="true" size={17} strokeWidth={1.8} />
            </button>
          </div>

          <nav className="mt-5" aria-label="Mobile">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block border-b border-white/12 px-1 py-3 text-sm font-medium text-white/76 transition hover:text-white"
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
            className="mt-5 inline-flex w-full items-center justify-center gap-2 border border-white bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-[var(--acid)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Mail aria-hidden="true" size={16} strokeWidth={1.8} />
            Email Klajdi
          </a>
        </div>
      </div>
    </>
  );
}
