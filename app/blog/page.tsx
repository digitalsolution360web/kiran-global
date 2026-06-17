"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Newspaper, Clock, Hash, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const BlogPage = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#fcfcfd]">
      {/* ── PREMIUM IMMERSIVE HEADER ── */}
      <section className="relative pt-44 pb-24 overflow-hidden bg-[#06101f]">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-[10%] -left-[5%] w-[350px] h-[350px] bg-secondary/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-[1700px] mt-20 mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-8"
            >
              Industry <span className="text-secondary">Insights</span> & <br className="hidden md:block" /> Strategic Updates
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/50 max-w-2xl font-medium leading-relaxed"
            >
              Exploring the evolution of global chemistry through technical excellence,
              market analysis, and sustainable innovation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── BLOGS GRID SECTION ── */}
      <section className="py-24 relative">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          {/* Section Breadcrumb/Utility */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-2">
              <h2 className="text-sm font-black text-gray-400 uppercase tracking-[0.3em]">{t.blogs.title}</h2>
              <div className="w-12 h-1 bg-secondary" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14">
            {t.blogs.items.map((blog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <Link href={`/blog/${blog.slug}`} className="group flex flex-col h-full bg-white rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden">
                  {/* Image Container */}
                  <div className="relative h-72 lg:h-80 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />

                    {/* Category Overlay */}
                    <div className="absolute top-6 left-6 z-10">
                      <div className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-sm text-[9px] font-black text-primary uppercase tracking-[0.2em] border border-gray-100">
                        {blog.category}
                      </div>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute bottom-6 right-6 z-10">
                      <div className="px-4 py-2 rounded-2xl bg-[#06101f]/80 backdrop-blur-md text-white text-[10px] font-bold tracking-widest border border-white/10">
                        {blog.date}
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-10 flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-[#06101f] text-[9px] font-black uppercase tracking-widest">
                        <Clock size={12} className="text-secondary" />
                        5 Min Read
                      </div>
                      <div className="w-1 h-1 rounded-full bg-gray-200" />
                      <div className="text-gray-400 text-[9px] font-bold uppercase tracking-widest">
                        {blog.author}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {blog.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-[9px] font-black text-secondary uppercase tracking-[0.2em]">By {blog.author}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-100" />
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Leave a Comment</span>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed mb-auto line-clamp-3">
                      {blog.summary}
                    </p>

                    <div className="pt-8 mt-8 border-t border-gray-50 flex items-center justify-between group/btn">
                      <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.2em]">
                        Continue Reading
                        <div className="w-6 h-6 rounded-full bg-primary/5 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all duration-300">
                          <ChevronRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom Call to Action or Pagination Placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 pt-16 border-t border-gray-100 text-center"
          >
            <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">You're up to date</p>
            <div className="w-1.5 h-1.5 bg-secondary rounded-full mx-auto" />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
