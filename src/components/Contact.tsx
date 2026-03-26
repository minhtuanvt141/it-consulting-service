"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-32 relative overflow-hidden" id="contact">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(230,213,188,0.03)_0%,transparent_70%)]"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
            <h2 className="text-xs font-black tracking-[0.4em] text-primary uppercase mb-6">Inquiry</h2>
            <h3 className="text-5xl md:text-6xl font-extrabold mb-8">Ready to evolve your digital stack?</h3>
            <p className="text-xl text-on-surface-variant mb-12 leading-relaxed">
                Consultations are available for organizations looking for strategic technical guidance and infrastructure excellence.
            </p>
            <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-primary text-on-primary px-10 py-5 rounded-md font-black text-lg tracking-tight hover:shadow-[0_0_40px_rgba(230,213,188,0.3)] transition-all cursor-pointer" 
                href="mailto:minhtuanvt141@gmail.com"
            >
                minhtuanvt141@gmail.com
            </motion.a>
        </motion.div>
        
        <div className="mt-20 flex flex-wrap justify-center gap-12 text-on-surface-variant/40 font-bold tracking-widest text-xs uppercase">
          <span className="hover:text-primary transition-colors cursor-pointer">LinkedIn</span>
          <span className="hover:text-primary transition-colors cursor-pointer">GitHub</span>
          <span className="hover:text-primary transition-colors cursor-pointer">Clutch Reviews</span>
        </div>
      </div>
    </section>
  );
}
