export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 mt-20 tonal-shift border-t border-white/5 bg-[#101210]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-lg font-bold text-[#e4e2de] uppercase">
          IT Consulting <span className="text-primary">Solutions</span>
        </div>
        <p className="font-plus-jakarta text-sm leading-relaxed text-[#e4e2de]/40">
          © 2024 IT Consulting. minhtuanvt141@gmail.com
        </p>
        <div className="flex gap-6">
          <a className="text-[#e4e2de]/40 hover:text-[#e4e2de] transition-colors hover:underline decoration-primary underline-offset-4" href="#">LinkedIn</a>
          <a className="text-[#e4e2de]/40 hover:text-[#e4e2de] transition-colors hover:underline decoration-primary underline-offset-4" href="#">Dribbble</a>
          <a className="text-[#e4e2de]/40 hover:text-[#e4e2de] transition-colors hover:underline decoration-primary underline-offset-4" href="#">GitHub</a>
          <a className="text-[#e4e2de]/40 hover:text-[#e4e2de] transition-colors hover:underline decoration-primary underline-offset-4" href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
