"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % t.testimonials.items.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + t.testimonials.items.length) % t.testimonials.items.length);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="testimonials"
      className="py-14 relative overflow-hidden bg-[#0a0f1d]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-cyan-600/20 blur-[120px] rounded-full" />
      </div>

      {/* Industrial Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:gap-24">

          {/* Left Side: Branding & Controls */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1 mb-4  bg-white/5 px-4 py-2 rounded-full border border-white/10"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">{t.testimonials.label}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold text-white leading-[1.2] mb-4"
            >
              {t.testimonials.title}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-cyan-400">{t.testimonials.titleHighlight}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 text-base leading-relaxed mb-5 max-w-md mx-auto lg:mx-0"
            >
              {t.testimonials.description}
            </motion.p>

            {/* Navigation Buttons */}
            <div className="hidden lg:flex items-center gap-4 ">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-500 group"
              >
                <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={next}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-500 group"
              >
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="ml-6 flex items-center gap-3">
                <span className="text-2xl font-bold text-white">{String(currentIndex + 1).padStart(2, '0')}</span>
                <div className="w-12 h-[2px] bg-white/10 relative">
                  <motion.div
                    className="absolute inset-0 bg-cyan-500"
                    initial={false}
                    animate={{ width: `${((currentIndex + 1) / t.testimonials.items.length) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-gray-600">{String(t.testimonials.items.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>

          {/* Right Side: Animated Testimonial Card */}
          <div className="w-full lg:w-2/3 relative h-[500px] lg:h-[600px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {t.testimonials.items.map((t_item, i) => {
                const isSelected = i === currentIndex;
                if (!isSelected && !isMobile) return null; // Logic for desktop slider
                if (!isSelected && isMobile) return null;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 1.05, x: -50 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="w-full max-w-xl bg-gradient-to-br from-[#1a233a] to-[#121828] p-8 lg:p-12 rounded-[2rem] border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] relative overflow-hidden pointer-events-auto">

                      {/* Decorative Quote Mark */}
                      <Quote className="absolute -top-6 -right-6 w-32 h-32 text-cyan-500/10 rotate-12" />

                      <div className="relative z-10">
                        {/* Rating */}
                        <div className="flex gap-1 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                          ))}
                        </div>

                        {/* Text */}
                        <blockquote className="text-lg lg:text-xl font-medium text-white italic leading-relaxed mb-10">
                          "{t_item.text}"
                        </blockquote>

                        {/* Author Info */}
                        <div className="flex items-center gap-5 border-t border-white/10 pt-8">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                            {t_item.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="text-white text-lg font-bold tracking-tight leading-none">{t_item.name}</h4>
                            <p className="text-cyan-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">{t_item.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Mobile Controls */}
            <div className="absolute bottom-0 flex lg:hidden items-center gap-6">
              <button onClick={prev} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {t.testimonials.items.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-8 bg-cyan-500' : 'w-2 bg-white/10'}`}
                  />
                ))}
              </div>
              <button onClick={next} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
