"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const ClientTestimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-light relative overflow-hidden" id="testimonials">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-6 border border-primary/20"
          >
            {t.testimonials.label}
          </motion.div>
          <h2 className="text-2xl md:text-4xl font-bold text-dark tracking-tighter uppercase leading-[1.1]">
            {t.testimonials.title} <span className="text-primary">{t.testimonials.titleHighlight}</span>
          </h2>
          <div className="w-24 h-1.5 bg-secondary mt-8 relative">
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-secondary"></div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {t.testimonials.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="flex flex-col items-center group"
            >
              {/* Speech Bubble Card */}
              <div className="bg-white/80 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] transition-all duration-500 relative mb-14 min-h-[280px] flex flex-col items-center text-center group-hover:-translate-y-2">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-blue-700 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-all duration-500">
                  <Quote size={20} className="text-white" />
                </div>

                <div className="flex gap-1 mb-6 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-secondary fill-secondary" />
                  ))}
                </div>

                <p className="text-gray-500 text-[16px] leading-relaxed font-medium italic">
                  "{item.text}"
                </p>

                {/* Bubble Tail Design */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-t-[25px] border-t-white z-10 drop-shadow-lg"></div>
              </div>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 rounded-3xl overflow-hidden border-4 border-white shadow-2xl mb-5 group-hover:scale-110 transition-transform duration-500 bg-gray-50 p-1">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <h4 className="text-dark font-black text-xl mb-1 tracking-tight">{item.name}</h4>
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] bg-primary/5 px-4 py-1.5 rounded-full">{item.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
