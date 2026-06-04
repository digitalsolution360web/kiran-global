"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Factory } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="about">
      {/* Background Decorative Text */}
      <div className="absolute top-20 -left-10 text-[200px] font-black text-gray-50/50 select-none pointer-events-none uppercase leading-none hidden lg:block">
        EGS 01
      </div>

      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-50/80 backdrop-blur-sm text-primary font-bold text-[10px] mb-6 uppercase tracking-[0.2em] border border-blue-100 shadow-sm">
              <Factory size={16} className="text-secondary" />
              <span>Leading Silicate Manufacturer</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-dark mb-8 leading-[1.1] tracking-tighter">
              Crafted in Egypt. <br />
              <span className="text-primary relative inline-block">
                Trusted Worldwide.
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-secondary rounded-full"
                ></motion.span>
              </span>
            </h2>

            <div className="space-y-6 text-gray-500 text-xl leading-relaxed mb-10 max-w-xl">
              <p>
                Egypt Global Silicates stands at the forefront of silicate manufacturing, delivering high-performance Sodium and Potassium Silicates to industries across the globe. With one of the largest production facilities in the region, we specialize in both liquid and glass forms.
              </p>
              <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-primary">
                <p className="italic text-dark font-medium quote">
                  "Our fully automated furnace-based production lines ensure consistent purity, optimal viscosity, and scalable output—backed by 24/7 quality control."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                "100% Quality Assurance",
                "Tailored Industrial Formulas",
                "Eco-Conscious Engineering",
                "Global Export & Logistics",
              ].map((text, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <CheckCircle2 size={18} strokeWidth={2.5} />
                  </div>
                  <span className="font-bold text-dark text-[11px] uppercase tracking-widest">{text}</span>
                </motion.div>
              ))}
            </div>

            <button className="relative overflow-hidden group bg-primary text-white px-12 py-5 rounded-md font-bold text-[12px] uppercase tracking-[0.2em] shadow-2xl transition-all">
                <span className="relative z-10">Discover Our Process</span>
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Right: Refined Single Large Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative"
          >
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-gray-100 rounded-[2.5rem] -z-10" />
            
            <div className="relative h-[700px] w-full rounded-[2rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] border-[12px] border-white group">
              <Image 
                src="/home.png" 
                alt="Egypt Global Silicates Factory" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-60" />
              
              {/* Corner Accent */}
              <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-secondary/50 rounded-tr-2xl" />
            </div>

            {/* Premium Stat Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] hidden xl:block border border-gray-50">
                <div className="grid grid-cols-2 gap-12 divide-x divide-gray-100">
                    <div className="text-center pr-4">
                        <motion.span 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          className="block text-5xl font-black text-primary tracking-tighter"
                        >40+</motion.span>
                        <span className="text-[10px] uppercase font-black tracking-widest text-gray-400">Total Countries</span>
                    </div>
                    <div className="text-center pl-12">
                        <motion.span 
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           className="block text-5xl font-black text-secondary tracking-tighter"
                        >110</motion.span>
                        <span className="text-[10px] uppercase font-black tracking-widest text-gray-400">Production Lines</span>
                    </div>
                </div>
            </div>

            {/* Design detail */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-primary/10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
