"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const GlobalNetwork = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="global-network">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-xs mb-6 uppercase tracking-widest border border-blue-100"
          >
            <Globe size={14} />
            <span>{t.globalNetwork.label}</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]">
            {language === 'en' ? (
              <>Our <span className="text-primary italic">Global</span> Network</>
            ) : (
              <>La Nostra Rete <span className="text-primary italic">Globale</span></>
            )}
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl text-lg">
            {t.globalNetwork.description}
          </p>
        </div>
      </div>

      {/* Global Map Image - Full Width */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full"
      >
        <div className="relative w-full aspect-[21/9] md:aspect-[24/9] min-h-[400px] lg:min-h-[700px]">
          <Image
            src="/global.webp"
            alt="Kiran Italia Chemicals Network Map"
            fill
            className="object-cover lg:object-contain"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
};

export default GlobalNetwork;
