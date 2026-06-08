"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const GlobalNetwork = () => {
  return (
    <section className="py-14 bg-[#f8fafc] relative overflow-hidden" id="global-network">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-xs mb-6 uppercase tracking-widest border border-blue-100"
          >
            <Globe size={14} />
            <span>Global Presence</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]">
            Our <span className="text-primary italic">Global</span> Network
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl text-lg">
            Serving clients across continents with our world-class chemical solutions. Our reach expands through a robust distribution and manufacturing network.
          </p>
        </div>
      </div>

      {/* Global Map Image - Full Width */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full"
      >
        <div className="relative w-full aspect-[21/9] md:aspect-[24/9] min-h-[400px] lg:min-h-[600px]">
          <Image
            src="/global-netword.webp"
            alt="Kiran Global Network Map"
            fill
            className="object-cover lg:object-contain"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
};

export default GlobalNetwork;
