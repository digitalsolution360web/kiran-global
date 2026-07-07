"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Award, Target } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const leaderImages = ["/chairman-pic.webp", "/atul.webp", "/rufus.webp"];
const valueIcons = [Target, Users, Award];

export default function ManagementPage() {
  const { t } = useLanguage();
  const m = t.managementPage;

  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO BANNER ── */}
      <section className="relative h-[50vh] min-h-[420px] flex items-center justify-center overflow-hidden pt-20">
        <Image src="/about-us-1.webp" alt="Management Banner" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-[#06101f]" />
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-5">
            <span className="inline-block px-5 py-2 bg-secondary/15 border border-secondary/30 text-secondary rounded-full text-[10px] font-black tracking-[0.4em] uppercase">
              {m.heroLabel}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              {m.heroTitle.split(" ")[0]} <span className="text-secondary italic">{m.heroTitle.split(" ").slice(1).join(" ")}</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto" />
            <p className="text-white/60 text-base font-medium max-w-xl mx-auto">{m.heroDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#06101f] py-8 border-b border-white/5">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12" />
      </section>

      {/* ── MANAGEMENT SECTION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1.5 h-10 bg-secondary rounded-full" />
              <div>
                <p className="text-secondary text-[10px] font-black uppercase tracking-[0.4em]">{m.leadershipLabel}</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">{m.managementTitle}</h2>
              </div>
            </div>
            <div className="ml-9">
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">
                {m.executiveLabel.split(" ")[0]} <span className="text-gray-300">{m.executiveLabel.split(" ").slice(1).join(" ")}</span>
              </p>
            </div>
          </motion.div>

          {/* Leaders Grid */}
          <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
            {m.leaders.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group"
              >
                {/* Photo Card */}
                <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-100 mb-6 aspect-[3/4] bg-gray-50">
                  <Image src={leaderImages[i]} alt={leader.name} fill className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Badge on hover */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="px-3 py-1.5 bg-secondary text-primary text-[9px] font-black tracking-widest uppercase rounded-full shadow-lg">{leader.badge}</span>
                  </div>
                  {/* Stats overlay on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="flex gap-4">
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2">
                        <p className="text-white font-black text-base leading-none">{leader.stat1Value}</p>
                        <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest mt-0.5">{leader.stat1Label}</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2">
                        <p className="text-white font-black text-base leading-none">{leader.stat2Value}</p>
                        <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest mt-0.5">{leader.stat2Label}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Leader Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-[2px] bg-secondary" />
                    <p className="text-secondary text-[10px] font-black uppercase tracking-widest">{leader.role}</p>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">{leader.name}</h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES SECTION ── */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {m.values.map((val, i) => {
              const IconComp = valueIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white mb-5 group-hover:bg-secondary group-hover:text-primary transition-colors duration-300">
                    <IconComp size={22} />
                  </div>
                  <h4 className="text-lg font-black text-gray-900 mb-3">{val.title}</h4>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
