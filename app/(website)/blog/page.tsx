"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Newspaper, Clock, Hash, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface Blog {
  id: number;
  h1: string;
  slug: string;
  description: string;
  excerpt: string;
  image: string;
  meta_title: string;
  meta_description: string;
  status: string;
  created_at: string;
  updated_at: string;
  minRead?: string;
}

const BlogPage = () => {
  const { t } = useLanguage();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    setError(false);

    try {
      const res = await fetch('/api/frontend/blogs?page=1&limit=100');
      
      if (!res.ok) {
        throw new Error('Failed to fetch blogs');
      }

      const result = await res.json();
      setBlogs(Array.isArray(result.data) ? result.data : []);
      
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError(true);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

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
              {t.blogs.heroTitle?.split("&")[0] || "Latest"} <span className="text-secondary">{t.blogs.heroTitle?.split("&")[1] || "Insights"}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/50 max-w-2xl font-medium leading-relaxed"
            >
              {t.blogs.heroDesc || "Explore our latest articles and insights"}
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
              <h2 className="text-sm font-black text-gray-400 uppercase tracking-[0.3em]">{t.blogs.title || "Our Blogs"}</h2>
              <div className="w-12 h-1 bg-secondary" />
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14">
              {[...Array(3)].map((_, idx) => (
                <div key={idx} className="animate-pulse">
                  <div className="bg-gray-200 h-72 rounded-[2rem]"></div>
                  <div className="p-10">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Failed to load blogs. Please try again later.</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No blogs found.</p>
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
                  <Link href={`/${blog.slug}`} className="group flex flex-col h-full bg-white rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden">
                    {/* Image Container */}
                    <div className="relative h-72 lg:h-80 overflow-hidden">
                      <img
                        src={blog.image || '/placeholder.png'}
                        alt={blog.h1 || 'Blog'}
                        className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                      />

                      {/* Category Overlay - Using first word from title as category */}
                      {/* <div className="absolute top-6 left-6 z-10">
                        <div className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-sm text-[9px] font-black text-primary uppercase tracking-[0.2em] border border-gray-100">
                          {blog.h1?.split(' ').slice(0, 2).join(' ') || 'Blog'}
                        </div>
                      </div> */}

                      {/* Date Badge */}
                      <div className="absolute bottom-6 right-6 z-10">
                        <div className="px-4 py-2 rounded-2xl bg-[#06101f]/80 backdrop-blur-md text-white text-[10px] font-bold tracking-widest border border-white/10">
                          {formatDate(blog.created_at)}
                        </div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-10 flex flex-col flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-2 text-[#06101f] text-[9px] font-black uppercase tracking-widest">
                          <Clock size={12} className="text-secondary" />
                          {blog.minRead || '5 Min Read'}
                        </div>
                        <div className="w-1 h-1 rounded-full bg-gray-200" />
                        <div className="text-gray-400 text-[9px] font-bold uppercase tracking-widest">
                          ADMIN
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {blog.h1}
                      </h3>

                      <p className="text-gray-500 text-sm leading-relaxed mb-auto line-clamp-3">
                        {blog.excerpt ? blog.excerpt.replace(/<[^>]*>/g, '').slice(0, 150) + '...' : 'Read more about this topic...'}
                      </p>

                      <div className="pt-8 mt-8 border-t border-gray-50 flex items-center justify-between group/btn">
                        <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.2em]">
                          {t.blogs.continueReading || 'Read More'}
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
          )}

          {/* Bottom Call to Action or Pagination Placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 pt-16 border-t border-gray-100 text-center"
          >
            <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">{t.blogs.upToDate || 'Stay Updated'}</p>
            <div className="w-1.5 h-1.5 bg-secondary rounded-full mx-auto" />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;