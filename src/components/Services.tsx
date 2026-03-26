"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Services() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-6" id="services">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-xs font-black tracking-[0.4em] text-primary uppercase mb-4">Core Competencies</h2>
        <h3 className="text-4xl font-bold">Strategic IT Services</h3>
      </div>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Service 1 */}
        <motion.div variants={itemVariants} className="md:col-span-2 bg-surface-container p-10 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-8xl">cloud</span>
          </div>
          <span className="material-symbols-outlined text-primary text-4xl mb-6">cloud</span>
          <h4 className="text-2xl font-bold mb-4">Cloud Solutions &amp; Migration</h4>
          <p className="text-on-surface-variant max-w-md">Seamless transition to AWS, Azure, or GCP ecosystems with a focus on cost-optimization, serverless architecture, and high availability.</p>
        </motion.div>
        
        {/* Service 2 */}
        <motion.div variants={itemVariants} className="bg-surface-container-high p-10 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
          <span className="material-symbols-outlined text-primary text-4xl mb-6">security</span>
          <h4 className="text-2xl font-bold mb-4">Cybersecurity Audit</h4>
          <p className="text-on-surface-variant">Comprehensive vulnerability assessments and zero-trust framework implementation to protect your most valuable data assets.</p>
        </motion.div>
        
        {/* Service 3 */}
        <motion.div variants={itemVariants} className="bg-surface-container-high p-10 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
          <span className="material-symbols-outlined text-primary text-4xl mb-6">hub</span>
          <h4 className="text-2xl font-bold mb-4">System Architecture</h4>
          <p className="text-on-surface-variant">Designing robust, modular backends that scale horizontally and handle massive concurrent traffic with ease.</p>
        </motion.div>
        
        {/* Service 4 */}
        <motion.div variants={itemVariants} className="md:col-span-2 bg-surface-container p-10 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all group flex flex-col md:flex-row gap-8 items-center cursor-pointer">
          <div className="flex-1">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">analytics</span>
            <h4 className="text-2xl font-bold mb-4">IT Strategy Consulting</h4>
            <p className="text-on-surface-variant">Aligning tech stack decisions with long-term business roadmaps. Expert guidance on digital transformation and technical debt reduction.</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-full md:w-64 h-32 bg-primary/5 rounded-xl flex items-center justify-center border border-primary/10"
          >
            <span className="text-primary font-bold tracking-widest text-center px-4">DATA-DRIVEN DECISIONS</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
