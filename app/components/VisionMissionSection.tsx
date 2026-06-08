"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Compass, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const missions = [
  "Deliver consistent quality and reliability",
  "Create value-driven solutions for customers",
  "Invest in employee growth and development",
  "Build modern infrastructure and logistics networks",
  "Embrace innovation and continuous improvement",
  "Maintain ethical and transparent business practices",
];

const VisionMissionSection = () => {
  return (
    <section className="py-14 bg-gray-50 relative overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Vision */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-[3rem] p-12 lg:p-16 shadow-xl border border-gray-100 relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700" />
                <div className="w-20 h-20 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-10 shadow-lg">
                    <Compass size={40} />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Our Vision</h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                    <span className="text-gray-900 font-semibold">To become a globally recognized organization</span> delivering innovative products, exceptional customer service, and sustainable value for all stakeholders.
                </p>
            </motion.div>

            {/* Mission */}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-blue-900 rounded-[3rem] p-12 lg:p-16 relative overflow-hidden group shadow-2xl"
            >
                <Image src="/new1.webp" alt="Texture" fill className="object-cover opacity-10 mix-blend-overlay" />
                <div className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-10 backdrop-blur-md border border-white/20">
                        <Target size={40} />
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-10 tracking-tight">Our Mission</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {missions.map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                                <CheckCircle2 className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                                <p className="text-gray-200 text-lg font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
