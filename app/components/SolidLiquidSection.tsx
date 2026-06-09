"use client";
import React from "react";
import { motion } from "framer-motion";
import { Gem, Droplet } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

const SolidLiquidSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-white overflow-hidden" id="solid-liquid">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
        {/* Title with Green Bar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-1.5 h-10 bg-[#0a4da2] rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] tracking-tight uppercase">
            {t.solidLiquid.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* SOLID STATE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <Gem size={48} className="text-[#0a4da2] fill-[#0a4da2]/10" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1e293b] uppercase tracking-wide">
                {t.solidLiquid.solidTitle}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                {t.solidLiquid.solidContent}
              </p>
            </div>
          </motion.div>

          {/* LIQUID STATE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <Droplet size={48} className="text-[#0a4da2] fill-[#0a4da2]/10" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1e293b] uppercase tracking-wide">
                {t.solidLiquid.liquidTitle}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                {t.solidLiquid.liquidContent}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolidLiquidSection;
