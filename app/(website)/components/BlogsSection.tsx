"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Newspaper, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

interface Blog {
  id: number;
  h1: string;
  slug: string;
  description: string;
  excerpt: string;
  image: string;
}

const BlogsSection = () => {
  const { t } = useLanguage();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/frontend/blogs/home");
        const data = await res.json();
        setBlogs(data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

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
              <span>{t.blogs?.label || "Blog"}</span>
            </motion.div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#06101f] tracking-tighter leading-tight">
              {t.blogs?.latest || "Latest"} <span className="text-primary">{t.blogs?.insights || "Insights"}</span> & <br className="hidden lg:block" /> {t.blogs?.industryNews || "Industry News"}
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-8"
          >
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[11px] font-black tracking-[0.2em] text-primary uppercase">{t.blogs?.knowledgeHub || "Knowledge Hub"}</span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none mt-1">{t.blogs?.updatedWeekly || "UPDATED WEEKLY"}</span>
            </div>
            <Link href="/blog" className="px-8 py-4 bg-[#06101f] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-gray-200 flex items-center gap-3 group">
              {t.blogs?.viewAll || "View All"}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-secondary" />
            </Link>
          </motion.div>
        </div>

        {/* Blog Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="animate-pulse">
                <div className="bg-gray-200 h-72 rounded-[1rem]"></div>
                <div className="p-10">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14">
            {blogs.map((blog, idx) => (
              <motion.div
                key={blog.id || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <Link href={`/blog/${blog.slug}`} className="group flex flex-col h-full bg-white rounded-[1rem] border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.06)] transition-all duration-700 overflow-hidden">
                  {/* Image Section */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={blog.image || "/placeholder.png"}
                      alt={blog.h1 || "Blog"}
                      className="object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-10 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-2 text-[#06101f] text-[9px] font-black uppercase tracking-widest">
                        <Clock size={12} className="text-secondary" />
                        5 Min Read
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                      {blog.h1}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3 font-medium">
                      {blog.excerpt}
                    </p>

                    <div className="mt-auto border-t border-gray-50 flex items-center justify-between group/btn">
                      <div className="flex items-center gap-2 text-primary font-black text-[12px] tracking-[0.2em]">
                        {t.blogs?.exploreArticle || "Explore Article"}
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
        )}
      </div>
    </section>
  );
};

export default BlogsSection;