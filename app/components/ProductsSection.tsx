"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Box } from "lucide-react";

const products = [
  {
    image: "/home15.png",
    name: "Sodium Silicate Lumps",
    code: "SERIES-S",
    description: "High-purity glass lumps for versatile industrial applications like detergents and specialized manufacturing."
  },
  {
    image: "/home17.png",
    name: "Potassium Silicate Lumps",
    code: "SERIES-P",
    description: "Specialized lumps engineered for welding electrodes, construction chemicals, and advanced electronics."
  },
  {
    image: "/home16.png",
    name: "Sodium Silicate Liquid",
    code: "LIQ-VIS-14",
    description: "Precisely optimized liquid solutions for the detergents, paper, and textile industries with stable viscosity."
  },
  {
    image: "/home18.png",
    name: "Potassium Silicate Liquid",
    code: "LIQ-SPEC-20",
    description: "Superior liquid formulas for high-end agriculture, specialty coatings, and anti-corrosive treatments."
  },
];

const ProductsSection = () => {
  return (
    <section className="py-20 bg-[#fdfdfd] relative overflow-hidden" id="products">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(#0a4da2 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
      </div>

      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary font-black text-[10px] mb-4 uppercase tracking-[0.3em] border border-primary/10"
            >
              <Box size={12} />
              <span>Full Product Range</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-dark tracking-tighter leading-[1.1]">
              Silicate Products Engineered <br/>for Global Industrial Operations
            </h2>
          </div>
          <div className="flex flex-col items-end text-right">
             <div className="w-20 h-1 bg-secondary mb-4" />
             <p className="text-gray-400 font-bold uppercase tracking-[0.4em] text-[10px]">Specifications Verified</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_100px_rgba(10,77,162,0.12)] transition-all duration-700 border border-gray-100 group"
            >
              <div className="relative h-72 w-full overflow-hidden p-4">
                <div className="relative h-full w-full rounded-[2rem] overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-xl text-[9px] font-black text-primary uppercase shadow-lg border border-gray-100 z-10 transition-transform group-hover:-translate-y-1">
                  {product.code}
                </div>
              </div>
              
              <div className="p-10 pt-4 text-center lg:text-left">
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors tracking-tight">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 h-20 line-clamp-4 font-medium opacity-80">
                  {product.description}
                </p>
                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                    <button className="flex items-center gap-3 text-primary font-black text-[11px] uppercase tracking-widest group/btn">
                        Technical Specs
                        <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all">
                             <ArrowUpRight size={14} />
                        </div>
                    </button>
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
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
