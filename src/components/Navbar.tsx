"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-900/60 dark:bg-[#101210]/60 backdrop-blur-20px shadow-[0_0_40px_rgba(230,213,188,0.05)]">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-black text-primary tracking-tighter uppercase">
          IT CONSULTING
        </div>
        <div className="hidden md:flex items-center gap-x-8">
          <a className="font-plus-jakarta font-bold tracking-tight text-primary border-b-2 border-primary pb-1" href="#home">Home</a>
          <a className="font-plus-jakarta font-bold tracking-tight text-neutral-400 dark:text-[#e4e2de]/60 hover:text-primary transition-colors" href="#about">About</a>
          <a className="font-plus-jakarta font-bold tracking-tight text-neutral-400 dark:text-[#e4e2de]/60 hover:text-primary transition-colors" href="#services">Services</a>
          <a className="font-plus-jakarta font-bold tracking-tight text-neutral-400 dark:text-[#e4e2de]/60 hover:text-primary transition-colors" href="#portfolio">Case Studies</a>
          <a className="font-plus-jakarta font-bold tracking-tight text-neutral-400 dark:text-[#e4e2de]/60 hover:text-primary transition-colors" href="#contact">Contact</a>
        </div>
        <div className="w-24 md:block hidden"></div>
      </div>
    </nav>
  );
}
