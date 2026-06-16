"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Lightbulb, Zap, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const benefitIcons = [
  <TrendingUp className="text-secondary" size={24} />,
  <Lightbulb className="text-secondary" size={24} />,
  <Zap className="text-secondary" size={24} />,
  <Users className="text-secondary" size={24} />,
  <ShieldCheck className="text-secondary" size={24} />,
];

export default function CareersPage() {
  const { t } = useLanguage();
  const c = t.careersPage;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] py-20 flex items-center overflow-hidden bg-dark">
        <Image src="/new30.webp" alt="Careers at Kiran Global" fill className="object-cover opacity-60" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent" />

        <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3"
          >
            <div className="flex items-center gap-3 mb-6 pt-20">
              <div className="w-12 h-[2px] bg-secondary" />
              <span className="text-secondary font-bold uppercase tracking-[0.2em] text-[10px]">{c.heroLabel}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-8 tracking-tighter uppercase">
              {c.heroTitle1} <br />
              {c.heroTitle1 !== c.heroTitle2 ? (
                <>{c.heroTitle2.split(" ").slice(0, 1).join(" ")} <span className="text-secondary">{c.heroTitle2.split(" ").slice(1).join(" ")}</span></>
              ) : (
                c.heroTitle2
              )}
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">{c.heroDesc}</p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-primary/20 flex items-center gap-3 group text-[10px]">
                {c.exploreBtn}
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-light overflow-hidden">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-dark/10">
                <Image src="/new35.webp" alt="Team Collaboration" width={800} height={600} className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden lg:block max-w-[280px]">
                <p className="text-2xl font-black text-primary mb-2">{c.satisfactionRate}</p>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{c.satisfactionLabel}</p>
              </div>
            </motion.div>

            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-dark leading-none mb-8 tracking-tighter uppercase">
                  {c.cultureTitle1} <span className="text-primary">{c.cultureTitle2}</span>
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-12">{c.cultureDesc}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {c.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group">
                      <div className="w-12 h-12 bg-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/10 transition-colors">
                        {benefitIcons[idx]}
                      </div>
                      <div>
                        <h4 className="font-bold text-dark text-[13px] mb-1 group-hover:text-primary transition-colors tracking-tight">{benefit.title}</h4>
                        <p className="text-[11px] text-gray-500 leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="bg-primary rounded-[3rem] p-12 lg:px-24 py-20 relative overflow-hidden text-center text-white">
            <div className="absolute inset-0 bg-[url('/grid-white.svg')] opacity-10" />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-8 tracking-tighter uppercase leading-tight">
                {c.ctaTitle}
              </h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-12">{c.ctaDesc}</p>
              <button className="px-10 py-5 bg-white text-primary rounded-2xl font-black uppercase tracking-widest hover:bg-secondary hover:text-dark transition-all shadow-2xl flex items-center gap-3 mx-auto group text-[10px]">
                {c.ctaBtn}
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
