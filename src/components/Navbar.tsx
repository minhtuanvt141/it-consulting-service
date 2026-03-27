"use client";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Case Studies" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-900/60 dark:bg-[#101210]/60 backdrop-blur-20px shadow-[0_0_40px_rgba(230,213,188,0.05)]">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-black text-primary tracking-tighter uppercase">
          IT CONSULTING
        </div>
        <div className="hidden md:flex items-center gap-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setActive(link.href);
                document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`font-plus-jakarta font-bold tracking-tight transition-colors pb-1 ${
                active === link.href
                  ? "text-primary border-b-2 border-primary"
                  : "text-neutral-400 dark:text-[#e4e2de]/60 hover:text-primary border-b-2 border-transparent"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="w-24 md:block hidden"></div>
      </div>
    </nav>
  );
}
