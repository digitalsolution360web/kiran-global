"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Heart, BadgeCheck, Star } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

const WhyChooseUsSection = () => {
  const { t } = useLanguage();

  const trustPoints = [
    {
      icon: Heart,
      title: t.whyChooseUs.trustPoints.legacy.title,
      desc: t.whyChooseUs.trustPoints.legacy.desc,
      bg: "bg-white",
      iconBg: "bg-blue-900",
      textColor: "text-gray-700",
    },
    {
      icon: BadgeCheck,
      title: t.whyChooseUs.trustPoints.certified.title,
      desc: t.whyChooseUs.trustPoints.certified.desc,
      bg: "bg-white",
      iconBg: "bg-blue-900",
      textColor: "text-gray-700",
    },
    {
      icon: Star,
      title: t.whyChooseUs.trustPoints.quality.title,
      desc: t.whyChooseUs.trustPoints.quality.desc,
      bg: "bg-blue-950",
      iconBg: "bg-white/10",
      textColor: "text-gray-200",
    },
  ];

  return (
    <section className="py-0 bg-white relative overflow-hidden" id="why-choose-us">
      <div className="max-w-[1700px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">

          {/* ── LEFT PANEL ── */}
          <div className="py-12 px-8 lg:px-16 flex flex-col justify-center">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-900">
                {t.whyChooseUs.label}
              </span>
              <span className="w-10 h-[2px] bg-blue-900 inline-block" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight"
            >
              {t.whyChooseUs.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-gray-700 text-base md:text-lg leading-relaxed mb-10 max-w-lg font-medium opacity-100"
            >
              {t.whyChooseUs.description}
            </motion.p>

            {/* Products Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10"
            >
              {t.whyChooseUs.products.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} className="text-cyan-600" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{p}</span>
                </div>
              ))}
            </motion.div>

            {/* Trust Points */}
            <div className="flex flex-col gap-4">
              {trustPoints.map((tp, i) => {
                const Icon = tp.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.1 }}
                    className={`${tp.bg} flex items-center gap-5 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300`}
                  >
                    <div className={`${tp.iconBg} w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Icon size={24} className={i === 2 ? "text-white" : "text-white"} />
                    </div>
                    <div>
                      <h4 className={`font-bold text-sm mb-1 uppercase tracking-wider ${i === 2 ? "text-white" : "text-gray-900"}`}>
                        {tp.title}
                      </h4>
                      <p className={`text-xs leading-relaxed font-medium ${tp.textColor}`}>
                        {tp.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="relative min-h-[500px] lg:min-h-full overflow-hidden flex">
            {/* Main Image */}
            <div className="relative flex-1">
              <Image
                src="/Why-Choose-Us.webp"
                alt="Kiran Italia Chemicals Products"
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent" />
            </div>

            {/* Vertical Branding Banner - Exact Match to Screenshot */}
            <div className="w-16 bg-[#1e293b] flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-md">
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-1 h-24 bg-cyan-400" />
              <div className="absolute bottom-0 right-0 w-1 h-24 bg-cyan-400" />

              <span
                className="text-white font-bold text-[13px] tracking-[0.5em] uppercase whitespace-nowrap opacity-90"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                Kiran Italia Chemicals S.r.l.
              </span>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-6 py-4 border border-white/60"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center">
                  <BadgeCheck size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{t.whyChooseUs.isoLabel}</p>
                  <p className="text-lg font-bold text-gray-900">{t.whyChooseUs.yearsLabel}</p>
                  <p className="text-xs text-gray-500">{t.whyChooseUs.excellenceLabel}</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
