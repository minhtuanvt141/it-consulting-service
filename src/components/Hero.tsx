"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
      {/* Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary-container/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 space-y-8"
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
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-5 relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-[60px]"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-primary/10 bg-surface-container-low">
              <img alt="Technology illustration representing modern systems and digital architecture" className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 hover:grayscale-0 hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBm8q_XFfZ5T4dD5UCbQjoUCf6iE1_iyK6xm4pXSRjD15v6hEWmm2nP5_Kf9U66SqNxyazjvUitb8TpVZz8jX6jTxAOEImOpFpJDv5uvYYyiCiLZzWWJ4LHOXxAmdvoClbrfbMx7BW8dgtOv6ZsAsWS0UiOHcQ-Kt2KcIjNg7e_qlwTyIKDrcUZm15v8G6rETf1FrsvNlXvCtIqNqQjoRYq8ijFywWEWye7g6R30swBIQ3lV2tങ്ങളlV2tNb7Qgcg84Hl5cmEblRo0my0n6024"/>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
