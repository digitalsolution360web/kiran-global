"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Newspaper, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const BlogsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="blogs">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 transform origin-top pointer-events-none" />

      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-6"
            >
              <Newspaper size={14} className="text-secondary" />
              <span>{t.blogs.label}</span>
            </motion.div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#06101f] tracking-tighter leading-tight">
              {t.blogs.latest} <span className="text-primary">{t.blogs.insights}</span> & <br className="hidden lg:block" /> {t.blogs.industryNews}
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-8"
          >
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[11px] font-black tracking-[0.2em] text-primary uppercase">{t.blogs.knowledgeHub}</span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none mt-1">{t.blogs.updatedWeekly}</span>
            </div>
            <Link href="/blog" className="px-8 py-4 bg-[#06101f] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-gray-200 flex items-center gap-3 group">
              {t.blogs.viewAll}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-secondary" />
            </Link>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14">
          {t.blogs.items.slice(0, 3).map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <Link href={`/blog/${blog.slug}`} className="group flex flex-col h-full bg-white rounded-[1rem] border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.06)] transition-all duration-700 overflow-hidden">
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-6 left-6 z-10">
                    <div className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-sm text-[9px] font-black text-primary uppercase tracking-[0.2em] border border-gray-100">
                      {blog.category}
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6 z-10">
                    <div className="px-4 py-2 rounded-2xl bg-[#06101f]/80 backdrop-blur-md text-white text-[10px] font-bold tracking-widest border border-white/10">
                      {blog.date}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-2 text-[#06101f] text-[9px] font-black uppercase tracking-widest">
                      <Clock size={12} className="text-secondary" />
                      5 {t.blogs.minRead}
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-200" />
                    <div className="text-gray-400 text-[9px] font-bold uppercase tracking-widest">
                      {blog.author}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                    {blog.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[9px] font-black text-secondary uppercase tracking-[0.2em]">{t.blogs.by} {blog.author}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-100" />
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{t.blogs.knowledgeHub}</span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3 font-medium">
                    {blog.summary}
                  </p>

                  <div className="mt-auto border-t border-gray-50 flex items-center justify-between group/btn">
                    <div className="flex items-center gap-2 text-primary font-black text-[12px] tracking-[0.2em]">
                      {t.blogs.exploreArticle}
                      <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all duration-500 shadow-sm">
                        <ChevronRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
