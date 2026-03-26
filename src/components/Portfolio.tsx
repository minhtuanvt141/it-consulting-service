"use client";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section className="py-32 bg-surface-container-lowest" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-xs font-black tracking-[0.4em] text-primary uppercase mb-4">Case Studies</h2>
            <h3 className="text-4xl font-bold">Recent Consulting Engagements</h3>
          </div>
          <div className="flex gap-4">
            <div className="px-4 py-2 bg-surface-container rounded-lg border border-outline-variant/20 text-sm font-semibold">Infrastructure</div>
            <div className="px-4 py-2 bg-surface-container rounded-lg border border-outline-variant/20 text-sm font-semibold">Security</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Project 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group cursor-pointer"
          >
            <div className="aspect-video bg-surface-container rounded-2xl overflow-hidden mb-6 relative border border-outline-variant/10">
              <img alt="Digital globe visualization" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzuZZWt83aFkCtgv5wvLlEhFLZsMNs5-hYLjxTR0JRyx1rGrOUcYmVHiqtCPOD0SpNnlSzrWI8f3ezh3FDQWI4wmFesoEMFicBRmTiHojkKWgPb7rPD6yrmj5Nmmd3gdW2SXzNeUHIdqy5WM50kuDEZlSzr2Z7cJfriOxH5zrpNSdiTVnRGyzX-jKJX5oaaRGUkmFpqjdFlMz-XYGDb9YcdH1BeJ9X1KYFTlMUwLoq-vPV1Xl1_bMTqihgfJEsNnMZd0FyKVpwewP6"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent opacity-60"></div>
            </div>
            <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">Enterprise Infrastructure Migration</h4>
            <p className="text-on-surface-variant mt-2">Migrating a legacy banking system to a secure, multi-cloud environment with zero downtime.</p>
          </motion.div>
          {/* Project 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group cursor-pointer"
          >
            <div className="aspect-video bg-surface-container rounded-2xl overflow-hidden mb-6 relative border border-outline-variant/10">
              <img alt="Modern server room aisle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP2Fy85XKBxgh1NYpAIxkYD6Z1ner8TjN93TTci6cXm6EFTlb53VVQ2rIyKYJTFE63FCcMFh1YmcSr12OIHlDj3eNutkrcKl0TRnqTHwkJ6uuEfF4K_X_BROErVeIlyZfMaDF8HK5w0_4omrmnRm0JhrZ2mGKnuVhW6GxXZgjX-wTPrpeoPJoYJR5M2CimS3fteOKXH83wTmjkpXMMPStLxd56LivkchB0KpUz78k2tXR-Oc5XhcQ0wYjD2IgDcOhIs_LMJU79BasZ"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent opacity-60"></div>
            </div>
            <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">Global Network Security Overhaul</h4>
            <p className="text-on-surface-variant mt-2">Implementing zero-trust protocols for a multinational logistics firm with 50+ regional offices.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
