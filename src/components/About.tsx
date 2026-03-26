"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 bg-surface-container-low/30" id="about">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 bg-surface-container rounded-xl overflow-hidden border border-outline-variant/10">
              <img alt="Close up of high-tech server racks" className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwnaOZ2axLmO9zMn4Difb4rjrE0AkJi9r2DoB2aQYeO_sb_9AJgcbuWtBR65LYZBAZ9JO9YDpzz8UjItCFTReYoHzWY-cMZ2Ur7PXvi_EOGSrBNKypQb3ATItfTP_CGjmrV4VlCDMdmCUjEbOqj85xaenlr2d-2v7WINNvPzzSk5rEaZq4uH2_5tmVTqWBqumap_aCk-PDP6gfbvS1Vx5suvl905Dn6m6_4E23k2HJf4y4nuo-ALAXM1RYNfA2qKh0d3e7Q8mc7YBF"/>
            </div>
            <div className="h-64 mt-12 bg-surface-container rounded-xl overflow-hidden border border-outline-variant/10">
              <img alt="Abstract macro shot of a circuit board" className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqThibWuLp0a552d24OE2xlVSBaVxWdEONDd_xIPpKd1nmPibOEevt4KQKHve4AHm34ASF-hReyShucaxTW3bTE7x5-kbAE7gnatvGfifoDS9_QrN4Rq404Q4aga-hrWRM0ff1YK5u6_qjXNJI0do5zokv7MFK1X-MXEO_i1hSFfJ_YSr91ipA3xoKuVJi0yDWwJT-amJN2HH4lzpDAhtkEAdNKwmsooiX5lKGj8NV9OYrE7mr5IkxqmaUfTZxJse7mvsbxU-oFQ0S"/>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 space-y-6"
        >
          <h2 className="text-xs font-black tracking-[0.4em] text-primary uppercase">Consultant Profile</h2>
          <h3 className="text-4xl font-bold leading-tight">Architecting the Backbone of Modern Business</h3>
          <p className="text-on-surface-variant leading-relaxed">
            With over a decade of experience in high-stakes environments, I specialize in bridging the gap between business objectives and technological infrastructure. My approach as an IT Consultant is rooted in reliability, security, and forward-thinking scalability.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div>
              <p className="text-3xl font-black text-primary">150+</p>
              <p className="text-sm text-on-surface-variant/70 uppercase tracking-tighter">Enterprises Scaled</p>
            </div>
            <div>
              <p className="text-3xl font-black text-primary">99.9%</p>
              <p className="text-sm text-on-surface-variant/70 uppercase tracking-tighter">Uptime Architected</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
