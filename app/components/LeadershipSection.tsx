"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Leaf, ShieldAlert } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const LeadershipSection = () => {
  const { t } = useLanguage();
  const leadersImages = ["/chairman-pic.webp", "/atul.webp", "/rufus.webp"];
  return (
    <section className="py-14 bg-white relative overflow-hidden" id="leadership">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center md:text-left mb-16 max-w-2xl">
          <h2 className="text-blue-700 font-bold uppercase tracking-[0.2em] text-sm mb-4">
            {t.leadership.label}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            {t.leadership.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {t.leadership.leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="relative h-[450px] w-full rounded-[2rem] overflow-hidden mb-6 shadow-lg">
                {/* Using some nice abstract chemical/glass imagery for leaders if portraits not available */}
                <Image src={leadersImages[idx]} alt={leader.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h4 className="text-3xl font-bold mb-1">{leader.name}</h4>
                  <p className="text-blue-300 font-medium tracking-wide">{leader.role}</p>
                </div>
              </div>
              <div className="px-4">
                <p className="text-gray-500 text-lg leading-relaxed">{leader.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
