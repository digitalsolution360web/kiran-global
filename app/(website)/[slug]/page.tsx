'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { motion } from 'framer-motion';
import './blog.css';
import { Clock, ArrowLeft, ArrowRight, Share2, Globe, Link2, Mail, MessageCircle, ChevronRight, Bookmark } from 'lucide-react';
import Link from 'next/link';

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

export default function BlogDetailPage() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [allBlogs, setAllBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    if (slug) {
      fetchBlogDetail();
      fetchAllBlogs();
    }
  }, [slug]);

  const fetchBlogDetail = async () => {
    setLoading(true);
    setError(false);

    try {
      const res = await fetch(`/api/frontend/blogs/${slug}`);
      
      if (!res.ok) {
        throw new Error('Failed to fetch blog');
      }

      const result = await res.json();
      setBlog(result.data);
      
    } catch (err) {
      console.error('Error fetching blog:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllBlogs = async () => {
    try {
      const res = await fetch('/api/frontend/blogs?page=1&limit=8');
      const result = await res.json();
      setAllBlogs(Array.isArray(result.data) ? result.data : []);
    } catch (err) {
      console.error('Error fetching all blogs:', err);
    }
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fcfcfd]">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
          <p className="mt-4 text-gray-500">Loading article...</p>
        </div>
      </div>
    );
  }

  // Error or not found
  if (error || !blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fcfcfd]">
        <div className="text-center px-6">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
            <h1 className="text-4xl font-bold text-[#06101f] tracking-tight">{t.blogDetail?.articleNotFound || 'Article Not Found'}</h1>
            <p className="text-gray-500 max-w-md mx-auto">{t.blogDetail?.moveOrArchived || 'The article you are looking for has been moved or archived.'}</p>
            <Link href="/blog" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-primary/20">
              <ArrowLeft size={16} />
              {t.blogDetail?.returnToInsights || 'Return to Insights'}
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  // Parse description for content sections
  const descriptionHtml = blog.description || '';
  const excerptText = blog.excerpt || '';

  return (
    <main className="bg-[#fcfcfd] min-h-screen">
      {/* ── PROFESSIONAL ARTICLE HEADER ── */}
      <section className="pt-40 pb-6 bg-white">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <nav className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-gray-400 mb-5">
                <Link href="/" className="hover:text-primary transition-colors">{t.common?.home || 'Home'}</Link>
                <span className="text-gray-300">/</span>
                <Link href="/blog" className="hover:text-primary transition-colors">{t.navbar?.blog || 'Blog'}</Link>
                <span className="text-gray-300">/</span>
                <span className="text-gray-400 truncate max-w-[200px]">{blog.slug}</span>
              </nav>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#06101f] leading-snug tracking-tight">
                {blog.h1}
              </h1>
              
              {/* <div className="flex items-center gap-4 mt-4">
                <span className="text-sm text-gray-500">{formatDate(blog.created_at)}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="text-sm text-gray-500">{blog.minRead || '5 Min Read'}</span>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <section className="py-12 bg-white relative">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="lg:grid lg:grid-cols-12 gap-20">

            {/* Primary Content Column */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative aspect-video rounded-lg overflow-hidden border border-gray-100 shadow-sm mb-12"
              >
                <img
                  src={blog.image || '/placeholder.png'}
                  alt={blog.h1 || 'Blog'}
                  className="object-cover"
                />
              </motion.div>

              <article className="prose prose-base max-w-none prose-slate">
                {excerptText && (
                  <p className="text-lg md:text-xl text-[#06101f] font-medium leading-relaxed mb-10 border-l-2 border-secondary/20 pl-6 py-1">
                    {excerptText}
                  </p>
                )}

                <div className="text-gray-600 text-base md:text-lg font-normal leading-relaxed space-y-6">
                  {descriptionHtml ? (
                    <div className="description-content" dangerouslySetInnerHTML={{ __html: blog.description }} />
                  ) : (
                    <>
                      <p>
                        The global demand for high-performance chemical solutions continues to evolve as industrial processes become
                        increasingly complex and environmentally conscious. Our latest research indicates a significant shift towards
                        integrated manufacturing systems that prioritize both technical purity and sustainable resource management.
                      </p>

                      <h2 className="text-xl md:text-2xl font-semibold text-[#06101f] pt-8 tracking-tight">
                        Strategic Developments
                      </h2>
                      <p>
                        As we navigate the second decade of the 21st century, the silicate industry stands at a critical crossroads.
                        thought impossible, opening new frontiers in electronics, healthcare, and infrastructure.
                      </p>

                      <blockquote className="bg-[#f8fafc] p-8 rounded-lg border border-gray-100 my-10">
                        <p className="text-lg font-medium text-[#06101f] italic leading-relaxed mb-4">
                          &quot;Innovation is not just about vertical growth; it's about expanding the horizontal reach of our technical
                          expertise to solve the world's most complex humanitarian and industrial challenges.&quot;
                        </p>
                        <cite className="text-xs font-semibold text-secondary uppercase tracking-widest not-italic">— M S Jain, Chairman</cite>
                      </blockquote>

                      <h2 className="text-xl md:text-2xl font-semibold text-[#06101f] pt-8 tracking-tight">
                        Technical Breakthroughs
                      </h2>
                      <ul className="space-y-4 list-none p-0">
                        {[
                          'Enhanced molecular stability in high-temperature environments.',
                          'Revolutionary carbon-neutral manufacturing protocols.',
                          'Strategic expansion of distribution networks across the Asia-Pacific.',
                          'Integration of AI-driven quality control systems.'
                        ].map((item, i) => (
                          <li key={i} className="flex gap-4 items-start bg-gray-50/80 p-4 rounded-lg border border-gray-100">
                            <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-[10px]">{i + 1}</div>
                            <span className="text-base font-normal text-gray-700 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="pt-10">
                        Kiran Italia Chemicals S.r.l remains at the forefront of this industrial revolution. By combining our
                        decades of experience with forward-thinking research, we are not just responding to the market—we are shaping its future.
                      </p>
                    </>
                  )}
                </div>
              </article>
            </div>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4 space-y-12">
              <div className="bg-[#fcfcfd] p-8 rounded-2xl border border-gray-100 shadow-sm sticky top-32">
                <div>
                  <h4 className="text-xs font-bold text-[#06101f] uppercase tracking-widest mb-6">{t.blogDetail?.relatedInsights || 'Related Insights'}</h4>
                  <div className="space-y-6">
                    {allBlogs
                      .filter((item: Blog) => item.slug !== slug)
                      .slice(0, 4)
                      .map((item: Blog, idx: number) => (
                        <Link key={idx} href={`/blog/${item.slug}`} className="group flex gap-5 items-center">
                          <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                            <img src={item.image || '/placeholder.png'} alt={item.h1 || 'Blog'} className="object-cover group-hover:scale-110 transition-transform duration-700" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[8px] text-secondary font-black uppercase tracking-widest mb-1">Blog</span>
                            <h5 className="text-xs font-bold text-[#06101f] leading-snug group-hover:text-primary transition-colors line-clamp-2">
                              {item.h1}
                            </h5>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}