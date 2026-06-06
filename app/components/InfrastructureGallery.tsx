"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Layout } from "lucide-react";

const galleryImages = [
  {
    src: "/work-area.jpg.jpeg",
    title: "Work Area",
    category: "Facility"
  },
  {
    src: "/tube-filling-section.webp",
    title: "Tube Filling Section",
    category: "Production"
  },
  {
    src: "/tube-filling-section2.webp",
    title: "Precision Tube Filling",
    category: "Production"
  },
  {
    src: "/secondary-packaging-area.webp",
    title: "Secondary Packaging",
    category: "Packaging"
  },
  {
    src: "/secondary-packaging-area2.webp",
    title: "Packaging Logistics",
    category: "Packaging"
  }
];

const InfrastructureGallery = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="infrastructure">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-xs mb-6 uppercase tracking-widest border border-blue-100"
          >
            <Layout size={14} />
            <span>Infrastructure</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
            Our <span className="text-primary italic">Facilities</span>
          </h2>
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg border border-gray-100"
              onClick={() => setSelectedImg(image.src)}
            >
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={800}
                  height={600}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div>
                    <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                      {image.category}
                    </span>
                    <h3 className="text-white text-xl font-bold">{image.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                    <Maximize2 size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button
              className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-[16/10] sm:aspect-[16/9] lg:aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImg}
                alt="Selected infrastructure"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InfrastructureGallery;
