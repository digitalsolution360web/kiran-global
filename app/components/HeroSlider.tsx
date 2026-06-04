"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    image: "/home15.png",
    title: "World-Leading Manufacturer of",
    subtitle: "Sodium Silicate & Potassium Silicate",
    content: "From detergents to construction, our silicates drive performance, durability, and sustainability across sectors.",
  },
  {
    image: "/home16.png",
    title: "Global Export & Logistics",
    subtitle: "Crafted in Egypt. Trusted Worldwide.",
    content: "Our seamless logistics network ensures timely delivery of high-purity silicates to every corner of the globe.",
  },
  {
    image: "/home.png",
    title: "Advanced Production Lines",
    subtitle: "Efficiency Meeting Purity",
    content: "Fully automated furnace-based production ensuring consistent quality and scalable output for global industries.",
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

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-black mt-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={slides[current].image}
            alt={slides[current].subtitle}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex items-center max-w-[1700px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={`content-${current}`}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-secondary font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 border-l-2 border-secondary pl-3">
              {slides[current].title}
            </h2>
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              {slides[current].subtitle}
            </h1>
            <p className="text-gray-100 text-base md:text-lg mb-8 max-w-xl leading-relaxed opacity-90">
              {slides[current].content}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-blue-700 text-white px-8 py-3.5 rounded-md font-bold text-xs uppercase tracking-widest transition-all shadow-lg">
                Explore Products
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-primary px-8 py-3.5 rounded-md font-bold text-xs uppercase tracking-widest transition-all">
                Request a Quote
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-10 z-30 flex items-center gap-4">
        <div className="flex gap-2">
            <button onClick={prevSlide} className="p-2.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all backdrop-blur-sm">
                <ChevronLeft size={18} />
            </button>
            <button onClick={nextSlide} className="p-2.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all backdrop-blur-sm">
                <ChevronRight size={18} />
            </button>
        </div>
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === idx ? "w-8 bg-secondary" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
