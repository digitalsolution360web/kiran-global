"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const slides = [
  {
    image: "/banner.webp",
    title: "India's Leading Sodium & Potassium Silicate Manufacturer",
    subtitle: "Trusted Since 1979 | 32+ Manufacturing Units | Global Presence",
    content: "Delivering innovative, sustainable, and high-performance chemical solutions for industries worldwide.",
    highlight: "Explore Products",
  },
  {
    image: "/new24.webp",
    title: "India's Leading Sodium & Potassium Silicate Manufacturer",
    subtitle: "Trusted Since 1979 | 32+ Manufacturing Units | Global Presence",
    content: "Delivering innovative, sustainable, and high-performance chemical solutions for industries worldwide.",
    highlight: "Explore Products",
  },
  {
    image: "/new25.webp",
    title: "India's Leading Sodium & Potassium Silicate Manufacturer",
    subtitle: "Trusted Since 1979 | 32+ Manufacturing Units | Global Presence",
    content: "Delivering innovative, sustainable, and high-performance chemical solutions for industries worldwide.",
    highlight: "Explore Products",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[calc(90vh-100px)] min-h-[700px] w-full overflow-hidden bg-black mt-[130px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40 z-10" />
          <Image
            src={slides[current].image}
            alt={slides[current].subtitle}
            fill
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full w-full flex flex-col justify-center">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12 w-full">
          <div className="flex flex-col">
            {/* Main Content */}
            <div className="max-w-4xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${current}`}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h1 className="text-white text-3xl md:text-5xl lg:text-[50px] font-black mb-8 leading-[1.05] tracking-tight [text-shadow:_0_4px_24px_rgba(0,0,0,0.8)]">
                    {slides[current].title}
                  </h1>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-[2px] bg-secondary" />
                    <p className="text-blue-400 font-black text-xs md:text-sm uppercase tracking-[0.4em] [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
                      {slides[current].subtitle}
                    </p>
                  </div>
                  <p className="text-gray-100 text-base md:text-xl max-w-2xl font-medium leading-relaxed mb-12 [text-shadow:_0_2px_15px_rgba(0,0,0,0.8)] opacity-90">
                    {slides[current].content}
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <button className="bg-primary hover:bg-blue-700 text-white rounded-2xl px-12 py-5 font-black text-[12px] tracking-[0.2em] transition-all flex items-center gap-3 group shadow-2xl shadow-primary/30">
                      Explore Solutions <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black rounded-2xl px-12 py-5 font-bold text-[16px] transition-all shadow-xl">
                      Consult Team
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicators at the bottom */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4 w-[220px] md:w-[300px] px-4">
        {slides.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className="flex-1 h-[5px] bg-white/20 rounded-full cursor-pointer overflow-hidden relative backdrop-blur-md transition-all hover:bg-white/40 shadow-2xl"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: current === idx ? "100%" : "0%" }}
              transition={{ duration: current === idx ? 6 : 0, ease: "linear" }}
              className="absolute top-0 left-0 h-full bg-secondary"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
