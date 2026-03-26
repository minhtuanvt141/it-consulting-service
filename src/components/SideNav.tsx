export default function SideNav() {
  return (
    <div className="fixed inset-y-0 right-0 w-64 z-[60] bg-[#101210]/95 backdrop-blur-2xl shadow-2xl shadow-primary/5 translate-x-full md:hidden transition-transform duration-500" id="sideNav">
      <div className="flex flex-col h-full p-8 font-plus-jakarta text-lg">
        <div className="mb-12">
          <div className="text-2xl font-black text-[#e4e2de] tracking-tighter mb-2 uppercase">IT Consulting</div>
          <div className="text-xs text-primary tracking-widest uppercase">Digital Nocturne</div>
        </div>
        <nav className="flex flex-col gap-6 flex-1">
          <a className="bg-primary/10 text-primary rounded-lg px-4 py-2" href="#home">Home</a>
          <a className="text-[#e4e2de]/50 px-4 py-2 hover:bg-white/5" href="#about">About</a>
          <a className="text-[#e4e2de]/50 px-4 py-2 hover:bg-white/5" href="#services">Services</a>
          <a className="text-[#e4e2de]/50 px-4 py-2 hover:bg-white/5" href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  );
}
