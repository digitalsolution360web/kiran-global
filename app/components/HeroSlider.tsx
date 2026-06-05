"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowUpRight } from "lucide-react";

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
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-black">
      {/* Huge Background Text */}
      {/* <div className="absolute top-1/4 left-0 w-full text-center z-0 pointer-events-none opacity-[0.03] select-none flex flex-col uppercase font-black text-[20vw] leading-[0.8] text-white">
        <span>KIRAN</span>
        <span>GLOBAL</span>
      </div> */}

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 z-10" />
          <Image
            src={slides[current].image}
            alt={slides[current].subtitle}
            fill
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full w-full flex flex-col justify-center translate-y-[-5%]">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12 w-full mt-24 lg:mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

            {/* Main Content */}
            <div className="lg:col-span-8 mb-12 lg:mb-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${current}`}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h1 className="text-white text-2xl md:text-5xl lg:text-4xl font-black mb-6 leading-[1.05] tracking-tighter max-w-4xl ">
                    {slides[current].title}
                  </h1>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-[2px] bg-secondary" />
                    <p className="text-blue-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.3em]">
                      {slides[current].subtitle}
                    </p>
                  </div>
                  <p className="text-gray-300 text-sm md:text-lg max-w-xl font-medium leading-relaxed mb-10 opacity-80">
                    {slides[current].content}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-primary hover:bg-blue-700 text-white rounded-2xl px-10 py-5 font-black text-[11px] tracking-[0.2em] transition-all flex items-center gap-3 group shadow-2xl shadow-primary/20">
                      Explore Solutions <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                    <button className="bg-white/5 backdrop-blur-2xl border border-white/10 text-white hover:bg-white hover:text-black rounded-2xl px-10 py-5 font-bold text-[15px]  transition-all">
                      Consult Team
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Glassmorphism Control Panel */}
            <div className="lg:col-span-4 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 hidden md:flex flex-col justify-between min-h-[340px] shadow-2xl">
              <div>
                <span className="text-white/30 text-[10px] font-black tracking-[0.2em] block mb-6">Industrial Precision</span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`high-${current}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="text-white text-2xl lg:text-3xl font-black tracking-tighter leading-tight"
                  >
                    {slides[current].highlight}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex flex-col gap-10">
                <div className="flex gap-2">
                  {slides.map((_, idx) => (
                    <div
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className="flex-1 h-1 bg-white/10 rounded-full cursor-pointer overflow-hidden relative"
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
                <div className="flex items-center justify-between">
                  <span className="text-white/30 font-black text-xs tracking-widest">0{current + 1} &mdash; 0{slides.length}</span>
                  <div className="flex gap-3">
                    <button onClick={() => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))} className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                      <ArrowUpRight className="rotate-[-135deg]" size={20} />
                    </button>
                    <button onClick={() => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))} className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all bg-white/5">
                      <ArrowUpRight className="rotate-45" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
