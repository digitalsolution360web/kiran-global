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
    image: "/Sodium Silicate Lumps.webp",
    name: "Potassium Silicate Lumps",
    description: "High-purity potassium silicate offering exceptional stability and performance across industrial applications."
  },
  {
    image: "/potassium-silicate-liquid.webp",
    name: "Potassium Silicate Liquid",
    description: "Advanced liquid formulations engineered for agriculture, coatings, and specialty chemical manufacturing."
  },
];

const ProductsSection = () => {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden" id="products">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

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
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
              High-Performance <span className="text-primary italic">Chemical</span> Solutions
            </h2>
          </div>
          <div>
            <button className="group flex items-center gap-4 text-white hover:text-primary font-bold text-sm uppercase tracking-widest transition-all">
              <span>View All Products</span>
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all">
                <ArrowRight size={20} />
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col bg-[#111] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-2xl hover:shadow-primary/5"
            >
              {/* Product Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/20 to-transparent" />
                
                {/* Float Tag */}
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">
                  Industrial Grade
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-primary font-black text-2xl font-mono opacity-50">0{idx + 1}</span>
                  <div className="h-[1px] flex-1 bg-white/10" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                  {product.name}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                  {product.description}
                </p>

                <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5 group-hover:border-primary/20 transition-all">
                  <div className="flex items-center gap-2 text-white/60 font-bold text-[10px] uppercase tracking-widest group-hover:text-white transition-colors">
                    <span>Learn More</span>
                    <ArrowRight size={14} className="text-primary translate-x-0 group-hover:translate-x-2 transition-transform" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover:bg-primary group-hover:text-white transition-all">
                    <ArrowRight size={18} />
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

export default ProductsSection;
