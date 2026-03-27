"use client";
import { useState } from "react";

export default function SideNav() {
  const [active, setActive] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="fixed inset-y-0 right-0 w-64 z-[60] bg-[#101210]/95 backdrop-blur-2xl shadow-2xl shadow-primary/5 translate-x-full md:hidden transition-transform duration-500" id="sideNav">
      <div className="flex flex-col h-full p-8 font-plus-jakarta text-lg">
        <div className="mb-12">
          <div className="text-2xl font-black text-[#e4e2de] tracking-tighter mb-2 uppercase">IT Consulting</div>
          <div className="text-xs text-primary tracking-widest uppercase">Digital Nocturne</div>
        </div>
        <nav className="flex flex-col gap-6 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setActive(link.href);
                document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`px-4 py-2 rounded-lg transition-colors ${
                active === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-[#e4e2de]/50 hover:bg-white/5"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
