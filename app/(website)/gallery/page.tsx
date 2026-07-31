"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, X, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";


const GALLERY_IMAGES = [
  { src: "/home-slider.webp", title: "Manufacturing Plant", category: "Infrastructure" },
  { src: "/70.webp", title: "Heavy Crushing Systems", category: "Machinery" },
  { src: "/71.webp", title: "Welding Workshop", category: "Infrastructure" },
  { src: "/72.webp", title: "Logistics Operations", category: "Operations" },
  { src: "/73.webp", title: "Global Operations", category: "Operations" },
  { src: "/home-ab2.webp", title: "Production Facility", category: "Infrastructure" },
  { src: "/sodium-silicate-liquid.webp", title: "Sodium Silicate Liquid", category: "Products" },
  { src: "/sodium-silicate-lumps.webp", title: "Sodium Silicate Lumps", category: "Products" },
  { src: "/premium-potassium-silicate-liquid.webp", title: "Potassium Silicate Liquid", category: "Products" },
  { src: "/potassium-silicate-lumps.webp", title: "Potassium Silicate Lumps", category: "Products" },
  { src: "/SUSTAINABILITY.webp", title: "Sustainability Practices", category: "Operations" },
  { src: "/banner2.jpg", title: "Corporate Office", category: "Infrastructure" },
];

const CATEGORIES = ["All", "Infrastructure", "Products", "Machinery", "Operations"];

export default function GalleryPage() {
   
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null
    );

  return (
     <main className="min-h-screen bg-white">
    
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                    <Image src="/73.webp" alt="Kiran Italia Chemicals History" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/60" />
                    <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-12 text-center lg:text-left w-full">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-xs font-black tracking-[0.3em] mb-6">
                                Our Gallery
                            </span>
                            <h1 className="text-2xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
                                Gallery
                            </h1>
                            <div className="w-32 h-2 bg-secondary mb-8 hidden lg:block" />
                            <p className="text-xl md:text-2xl text-white/90 max-w-3xl font-medium leading-relaxed italic">
                                Explore our facilities, products, and global operations through our photo gallery.
                            </p>
                        </motion.div>
                    </div>
                </section>

    
        {/* ── GALLERY GRID ────────────────────────────────────────────── */}
        <section className="py-16 sm:py-20">
          <div className="max-w-[1700px] mx-auto px-6 sm:px-8">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {GALLERY_IMAGES.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  onClick={() => openLightbox(index)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={{ aspectRatio: "3/2.2" }}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002244]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#f5c800] mb-1 block">
                      {image.category}
                    </span>
                    <p className="text-white text-sm font-bold">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    

      {/* ── LIGHTBOX ──────────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
             onClick={closeLightbox}>
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 cursor-pointer z-10"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 sm:left-8 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm cursor-pointer z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 sm:right-8 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm cursor-pointer z-10"
          >
            <ChevronRightIcon size={24} />
          </button>

          <div
            className="relative w-full max-w-4xl h-[70vh] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].title}
              fill
              className="object-contain"
            />
          </div>
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white font-bold text-sm">{GALLERY_IMAGES[lightboxIndex].title}</p>
            <p className="text-white/50 text-xs mt-1">
              {lightboxIndex + 1} / {GALLERY_IMAGES.length}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
