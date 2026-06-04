"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Leaf, ShieldAlert } from "lucide-react";

const CertificationsSection = () => {
  return (
    <section className="py-16 bg-dark text-white overflow-hidden" id="quality">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 rounded bg-white/10 text-white font-bold text-[10px] mb-4 uppercase tracking-widest border border-white/5">
              Certifications & Quality
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-tight">
              Built on Standards.<br/>
              <span className="text-primary italic">Driven by Trust.</span>
            </h2>
            <p className="text-gray-400 text-base mb-8 leading-relaxed max-w-xl opacity-80">
              We follow rigorous inspection and environmental protocols to ensure every batch meets the highest global standards for purity and performance.
            </p>
            
            <div className="space-y-4">
              {[
                { 
                  icon: <Award className="text-primary" size={24} />, 
                  title: "ISO-compliant production",
                  desc: "Strict adherence to international manufacturing standards."
                },
                { 
                  icon: <Leaf className="text-primary" size={24} />, 
                  title: "Eco-friendly processes",
                  desc: "Committed to sustainable manufacturing and minimal waste."
                },
                { 
                  icon: <ShieldAlert className="text-primary" size={24} />, 
                  title: "Global supply safety",
                  desc: "Safe handling and timely delivery across all continents."
                },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 p-4 rounded-lg bg-white/[0.03] border border-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="bg-white/5 p-3 rounded h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold mb-1 tracking-tight">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/5">
                <Image src="/home16.png" alt="Standards" fill className="object-cover" />
                <div className="absolute inset-0 bg-dark/20 mix-blend-overlay" />
            </div>
            {/* Quality Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-xl shadow-xl hidden lg:block">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center">
                        <span className="text-2xl font-bold">100%</span>
                    </div>
                    <div>
                        <span className="block text-lg font-bold">Quality</span>
                        <span className="text-[10px] uppercase tracking-widest opacity-70">Guaranteed</span>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
