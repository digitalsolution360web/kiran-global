"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Recycle, Wind } from "lucide-react";

const SustainabilitySection = () => {
  return (
    <section className="py-14 bg-[#05110a] relative overflow-hidden" id="sustainability">
      <div className="absolute inset-0 bg-emerald-900/10" />
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-900/40 text-emerald-400 font-bold text-xs mb-6 uppercase tracking-widest border border-emerald-500/20"
            >
                <Leaf size={14} />
                <span>Sustainability & Responsibility</span>
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6"
            >
                Building a Sustainable Future — <span className="text-emerald-400">Our Commitment</span>
            </motion.h2>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="space-y-4 text-gray-300 text-base leading-relaxed max-w-xl"
            >
                <p>
                    We are committed to environmentally responsible manufacturing practices that reduce environmental impact while maximizing efficiency. Our focus on sustainable innovation helps industries achieve better performance with lower environmental costs.
                </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
                    <Recycle className="text-emerald-400 mb-4" size={32} />
                    <h4 className="text-white font-bold text-lg mb-2">Resource Efficiency</h4>
                    <span className="text-gray-400 text-sm">Optimized operations</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
                    <Wind className="text-emerald-400 mb-4" size={32} />
                    <h4 className="text-white font-bold text-lg mb-2">Lower Emissions</h4>
                    <span className="text-gray-400 text-sm">Clean manufacturing</span>
                </div>
            </div>
        </div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 w-full relative h-[600px] lg:h-[800px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
        >
            <Image src="/new18.webp" alt="Sustainable Future" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-emerald-900/20 mix-blend-multiply" />
        </motion.div>
        
      </div>
    </section>
  );
};

export default SustainabilitySection;
