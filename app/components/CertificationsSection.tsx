"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Leaf, ShieldAlert } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const CertificationsSection = () => {
  const { t } = useLanguage();
  const icons = [<Award className="text-primary" size={24} />, <Leaf className="text-primary" size={24} />, <ShieldAlert className="text-primary" size={24} />];
  return (
    <section className="py-12 bg-green-50 text-gray-900 overflow-hidden" id="quality">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 rounded bg-green-100 text-green-800 font-bold text-[10px] mb-4 uppercase tracking-widest border border-green-200">
              {t.certifications.label}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight tracking-tight">
              {t.certifications.title}<br />
              <span className="text-primary italic">{t.certifications.titleHighlight}</span>
            </h2>
            <p className="text-black text-base font-bold mb-8 leading-relaxed max-w-xl opacity-80">
              {t.certifications.description}
            </p>

            <div className="space-y-4">
              {t.certifications.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 p-4 rounded-lg bg-white border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="bg-blue-50 p-3 rounded-lg h-fit">
                    {icons[idx]}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900 mb-1 tracking-tight">{item.title}</h4>
                    <p className="text-black font-bold text-xs">{item.desc}</p>
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
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <Image src="/Founder-Visionary.webp" alt="Standards" fill className="object-cover" />
              <div className="absolute inset-0 bg-dark/20 mix-blend-overlay" />
            </div>
            {/* Quality Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-xl shadow-xl hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">100%</span>
                </div>
                <div>
                   <span className="block text-lg text-white font-bold">100%</span>
                  <span className="text-[10px] text-lg uppercase text-white font-bold tracking-widest opacity-70">{t.certifications.guaranteed}</span>
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
