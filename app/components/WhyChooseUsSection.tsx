"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Cog, Globe, Leaf, Users } from "lucide-react";

const features = [
  { title: "Industry Leadership", icon: ShieldCheck, desc: "One of India's largest manufacturers.", colSpan: "md:col-span-2", bg: "bg-blue-600", text: "text-white" },
  { title: "Advanced Manufacturing", icon: Cog, desc: "State-of-the-art facilities.", colSpan: "md:col-span-1", bg: "bg-gray-100", text: "text-gray-900" },
  { title: "Quality Assurance", icon: Zap, desc: "Strict quality control procedures.", colSpan: "md:col-span-1", bg: "bg-gray-900", text: "text-white" },
  { title: "Global Supply Chain", icon: Globe, desc: "Efficient logistics network.", colSpan: "md:col-span-2", bg: "bg-blue-50", text: "text-gray-900" },
  { title: "Sustainable Practices", icon: Leaf, desc: "Eco-friendly operations.", colSpan: "md:col-span-1", bg: "bg-emerald-500", text: "text-white" },
  { title: "Technical Expertise", icon: Users, desc: "Dedicated chemical engineers.", colSpan: "md:col-span-2", bg: "bg-gray-100", text: "text-gray-900" }
];

const stats = [
  { value: "1979", label: "Year Est." },
  { value: "32+", label: "Plants" },
  { value: "7+", label: "Intl. Ports" },
  { value: "1000+", label: "Employees" },
  { value: "300K+", label: "Capacity" },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="why-choose-us">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-xs mb-6 uppercase tracking-widest border border-blue-100"
            >
                <ShieldCheck size={14} />
                <span>Why Choose Us</span>
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight leading-[1.2]"
            >
                Excellence Through Innovation
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Bento Features Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
               {features.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                        className={`${item.colSpan} ${item.bg} ${item.text} p-8 rounded-[2rem] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 shadow-sm`}
                    >
                        <div className="mb-8">
                            <Icon size={32} opacity={0.8} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-2 leading-tight">{item.title}</h4>
                            <p className="opacity-80 text-sm font-medium">{item.desc}</p>
                        </div>
                    </motion.div>
                  )
               })}
            </div>

            {/* Huge Image & Stats Bento Piece */}
            <div className="lg:col-span-5 flex flex-col gap-6">
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 rounded-[2rem] overflow-hidden relative group min-h-[400px]"
                >
                    <Image src="/new6.webp" alt="Why Choose Us" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent flex flex-col justify-end p-10">
                        <h3 className="text-white text-3xl font-black leading-tight">Global Footprint, <br/><span className="text-blue-400">Local Precision.</span></h3>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-gray-900 rounded-[2rem] p-8"
                >
                    <div className="flex flex-wrap justify-between gap-6">
                        {stats.map((stat, idx) => (
                           <div key={idx} className="flex-1 min-w-[100px]">
                              <span className="block text-3xl font-black text-white mb-1">{stat.value}</span>
                              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest block">
                                {stat.label}
                              </span>
                           </div>
                        ))}
                    </div>
                </motion.div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
