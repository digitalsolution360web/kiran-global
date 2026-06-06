"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

const industries = [
  { name: "Soap & Detergents", description: "Chemical solutions for cleaning and detergent manufacturing.", image: "/new11.webp" },
  { name: "Water Treatment", description: "Advanced compounds for industrial and municipal water treatment.", image: "/new13.webp" },
  { name: "Construction & Concrete", description: "High-performance materials for modern infrastructure projects.", image: "/new14.webp" },
  { name: "Agriculture", description: "Innovative solutions supporting agricultural productivity.", image: "/new5.webp" },
  { name: "Ceramics & Refractories", description: "Specialized chemicals for ceramic manufacturing processes.", image: "/new16.webp" },
  { name: "Petroleum & Oil Drilling", description: "Reliable products for energy sector applications.", image: "/new15.webp" },
  { name: "Foundries", description: "Industrial-grade solutions for metal casting operations.", image: "/new29.webp" },
  { name: "Mining & Mineral Processing", description: "Chemical technologies supporting efficient mineral extraction.", image: "/new28.webp" },
  { name: "Adhesives & Coatings", description: "Performance-enhancing ingredients for industrial formulations.", image: "/new19.webp" },
];

const IndustriesSection = () => {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden" id="industries">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
         <Image src="/new1.webp" alt="Background" fill className="object-cover mix-blend-overlay" />
      </div>

      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm text-blue-400 font-bold text-xs mb-6 uppercase tracking-widest border border-white/10"
            >
              <Globe2 size={14} />
              <span>Industries We Serve</span>
            </motion.div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-[1.2]">
              Serving Diverse Industrial Sectors
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative h-96 rounded-[2rem] overflow-hidden border border-white/10 shadow-lg cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-blue-400 font-bold text-xs mb-3 uppercase tracking-widest bg-blue-500/10 inline-block px-3 py-1 rounded-full backdrop-blur-sm border border-blue-500/20 w-max">
                    Sector 0{idx + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                    {item.name}
                  </h3>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 overflow-hidden pt-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
