"use client";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="relative z-60">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-background/10 backdrop-blur-md z-50 flex flex-col items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <nav
            className="flex flex-col items-center space-y-8"
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg text-center font-mono uppercase font-semibold hover:text-secondary/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
