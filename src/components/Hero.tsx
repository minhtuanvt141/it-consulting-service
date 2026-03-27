"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
      {/* Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary-container/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 flex flex-col items-center"
        >
          <div className="inline-flex items-center px-3 py-1 bg-surface-container-highest/50 border border-outline-variant/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">Available for Strategic Consulting</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-on-surface">
            Modern IT Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Digital Evolution</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
            Architecture, infrastructure, and security designed for the next generation of enterprise performance. Transforming complexity into competitive advantage.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
