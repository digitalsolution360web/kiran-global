"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Box } from "lucide-react";

const products = [
  {
    image: "/new26.webp",
    name: "Sodium Silicate Lumps",
    description: "Premium-quality sodium silicate manufactured using advanced production processes for superior industrial performance."
  },
  {
    image: "/new31.webp",
    name: "Sodium Silicate Liquid",
    description: "Specialized liquid silicate solutions designed for construction, detergents, paper, and water treatment industries."
  },
  {
    image: "/new35.webp",
    name: "Potassium Silicate Lumps",
    description: "High-purity potassium silicate offering exceptional stability and performance across industrial applications."
  },
  {
    image: "/new36.webp",
    name: "Potassium Silicate Liquid",
    description: "Advanced liquid formulations engineered for agriculture, coatings, and specialty chemical manufacturing."
  },
];

const ProductsSection = () => {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden" id="products">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 text-gray-300 font-bold text-xs mb-6 uppercase tracking-widest border border-white/10"
            >
              <Box size={14} className="text-white" />
              <span>Our Portfolio</span>
            </motion.div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-[1.2]">
              High-Performance Chemical Solutions
            </h2>
          </div>
          <div>
             <button className="group flex items-center gap-4 text-white hover:text-blue-400 font-bold text-sm uppercase tracking-widest transition-all">
                <span>View All Products</span>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-400/10 transition-all">
                   <ArrowRight size={18} />
                </div>
             </button>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-[120px] md:h-[180px] w-full rounded-[2rem] overflow-hidden flex items-center justify-between px-8 md:px-16 cursor-pointer border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-500"
            >
                {/* Background Image Reveal */}
                <div className="absolute inset-0 z-0 scale-100 opacity-0 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 pointer-events-none">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                </div>

                <div className="relative z-10 flex items-center gap-8 md:gap-16 w-full">
                    <span className="text-blue-500 font-bold text-2xl md:text-3xl opacity-50 font-mono tracking-tighter">0{idx + 1}</span>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white tracking-tight group-hover:translate-x-4 transition-transform duration-500 w-1/3 min-w-[200px]">
                        {product.name}
                    </h3>
                    <p className="text-gray-400 max-w-xl font-light hidden lg:block opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                        {product.description}
                    </p>
                </div>
                
                <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-xl">
                        <ArrowRight />
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
