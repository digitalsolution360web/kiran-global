"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const industries = [
  {
    name: "Soap & Detergents",
    description: "High-performance sodium silicate used as a builder and filler in soaps, detergents, and cleaning formulations.",
    image: "/Soap-Detergents.webp",
  },
  {
    name: "Water Treatment",
    description: "Advanced silicate compounds for corrosion inhibition and pH control in industrial and municipal water treatment plants.",
    image: "/Water-Treatment.webp",
  },
  {
    name: "Construction & Concrete",
    description: "Sodium silicate solutions used as concrete hardeners, waterproofing agents, and soil stabilizers in infrastructure projects.",
    image: "/APPLICATIONS.webp",
  },
  {
    name: "Agriculture",
    description: "Silicon-based solutions that enhance crop strength, drought resistance, and nutrient uptake for improved agricultural yields.",
    image: "/Agriculture.webp",
  },
  {
    name: "Ceramics & Refractories",
    description: "Silicate binders providing high-temperature resistance for ceramic tiles, refractory linings, and kiln furniture.",
    image: "/Ceramics-Refractories.webp",
  },
  {
    name: "Petroleum & Oil Drilling",
    description: "Specialized silicate fluids used as shale inhibitors and wellbore stabilizers in oil & gas drilling operations.",
    image: "/Petroleum-Oil-Drilling.webp",
  },
  {
    name: "Foundries",
    description: "Sodium silicate-based binders providing superior mold strength and dimensional accuracy in metal casting operations.",
    image: "/Foundries.webp",
  },
  {
    name: "Mining & Mineral Processing",
    description: "Chemical technologies supporting efficient mineral flotation, ore processing, and waste water management in mining.",
    image: "/Mining-Mineral-Processing.webp",
  },
  {
    name: "Adhesives & Coatings",
    description: "High-performance silicate adhesives and functional coatings providing bonding, sealing, and protective properties.",
    image: "/Adhesives-Coatings.webp",
  },
];

const CARDS_PER_VIEW = 3;

const IndustriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const maxIndex = industries.length - CARDS_PER_VIEW;

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((i) => (i === 0 ? maxIndex : i - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((i) => (i === maxIndex ? 0 : i + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      next();
    }, 2000); // Auto-slide every 6 seconds
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const visible = industries.slice(currentIndex, currentIndex + CARDS_PER_VIEW);

  return (
    <section
      className="py-14 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] relative overflow-hidden"
      id="industries"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12">

        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 mb-2 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-blue-700 inline-block" />
              Industries We Serve
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Our Industrial <span className="italic text-blue-800">Reach</span>
            </h2>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            href="#contact"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-primary text-white font-semibold text-sm px-7 py-3 rounded-full transition-all duration-300 group shadow-sm"
          >
            Contact Experts
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Cards Area */}
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: direction * 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -80 }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white font-medium text-sm">Explore Solutions →</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1 bg-white">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-4 flex-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-blue-700 hover:text-blue-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 bg-white shadow-sm"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                className={`rounded-full transition-all duration-300 ${i === currentIndex
                  ? "w-6 h-2.5 bg-blue-700"
                  : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-400"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={currentIndex === maxIndex}
            className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-blue-700 hover:text-blue-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 bg-white shadow-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;
