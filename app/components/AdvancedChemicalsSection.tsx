"use client";
import React from "react";
import { motion } from "framer-motion";
import { Beaker, Sparkles, Leaf } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

const AdvancedChemicalsSection = () => {
  const { t } = useLanguage();
  const solutions = [
    {
      title: t.advancedChemicals.potassium.title,
      description: t.advancedChemicals.potassium.desc,
      icon: Beaker,
    },
    {
      title: t.advancedChemicals.labsa.title,
      description: t.advancedChemicals.labsa.desc,
      icon: Sparkles,
    },
    {
      title: t.advancedChemicals.geopolymers.title,
      description: t.advancedChemicals.geopolymers.desc,
      icon: Leaf,
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafc] relative overflow-hidden" id="advanced-solutions">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Title with Green Bar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-1.5 h-10 bg-[#0a4da2] rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] tracking-tight uppercase">
            {t.advancedChemicals.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="mb-8 overflow-hidden inline-block">
                  <Icon 
                    size={52} 
                    className="text-[#0a4da2] transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1e293b] uppercase tracking-wider group-hover:text-[#0a4da2] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-gray-100 group-hover:w-20 group-hover:bg-[#0a4da2] transition-all duration-500" />
                  <p className="text-gray-600 text-lg leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0a4da2]/5 rounded-full -mr-48 -mt-48 blur-3xl" />
    </section>
  );
};

export default AdvancedChemicalsSection;
