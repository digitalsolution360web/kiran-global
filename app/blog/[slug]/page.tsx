'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft, ArrowRight, Share2, Globe, Link2, Mail, MessageCircle, ChevronRight, Bookmark } from 'lucide-react';
import Link from 'next/link';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const { t } = useLanguage();

  const blog = t.blogs.items.find((item: any) => item.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fcfcfd]">
        <div className="text-center px-6">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
            <h1 className="text-4xl font-bold text-[#06101f] tracking-tight">Article Not Found</h1>
            <p className="text-gray-500 max-w-md mx-auto">The insight you're looking for might have been moved or archived.</p>
            <Link href="/blog" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-primary/20">
              <ArrowLeft size={16} />
              Return to Insights
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#fcfcfd] min-h-screen">
      {/* ── PROFESSIONAL ARTICLE HEADER ── */}
      <section className="pt-40 pb-6 bg-white">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            // className="space-y-4"
            >
              <nav className="flex  items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-gray-400 mb-5">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span className="text-gray-300 ">/</span>
                <Link href="/blog" className=" hover:text-primary transition-colors">Blog</Link>
                <span className="text-gray-300">/</span>
                <span className="text-gray-400 truncate max-w-[200px]">{blog.slug}</span>
              </nav>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#06101f] leading-snug tracking-tight">
                {blog.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ── ARTICLE BODY ── */}
      <section className="py-12 bg-white relative">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-20">

            {/* Primary Content Column */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative aspect-video rounded-lg overflow-hidden border border-gray-100 shadow-sm mb-12"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              <article className="prose prose-base max-w-none prose-slate">
                <p className="text-lg md:text-xl text-[#06101f] font-medium leading-relaxed mb-10 border-l-2 border-secondary/20 pl-6 py-1">
                  {blog.summary}
                </p>

                <div className="text-gray-600 text-base md:text-lg font-normal leading-relaxed space-y-6">
                  {blog.content ? (
                    blog.content.map((section: any, idx: number) => {
                      switch (section.type) {
                        case 'text':
                          return (
                            <div key={idx} className="space-y-4">
                              {section.title && (
                                <h2 className="text-2xl md:text-3xl font-bold text-[#06101f] pt-8 tracking-tight">
                                  {section.title}
                                </h2>
                              )}
                              <div className="text-gray-600 space-y-4">
                                {section.text.split('\n').map((p: string, i: number) => (
                                  <p key={i}>{p}</p>
                                ))}
                              </div>
                            </div>
                          );
                        case 'list':
                          return (
                            <div key={idx} className="space-y-4">
                              {section.title && (
                                <h2 className="text-2xl md:text-3xl font-bold text-[#06101f] pt-8 tracking-tight">
                                  {section.title}
                                </h2>
                              )}
                              <ul className="space-y-4 list-none p-0">
                                {section.items.map((item: string, i: number) => (
                                  <li key={i} className="flex gap-4 items-start bg-gray-50/80 p-5 rounded-xl border border-gray-100">
                                    <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-[10px]">{i + 1}</div>
                                    <span className="text-base font-medium text-gray-700 leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        case 'quote':
                          return (
                            <blockquote key={idx} className="bg-[#f8fafc] p-8 rounded-lg border border-gray-100 my-10">
                              <p className="text-lg font-medium text-[#06101f] italic leading-relaxed mb-4">
                                &quot;{section.text}&quot;
                              </p>
                              {section.author && <cite className="text-xs font-semibold text-secondary uppercase tracking-widest not-italic">— {section.author}</cite>}
                            </blockquote>
                          );
                        case 'image':
                          const isLogo = section.alt?.toLowerCase().includes('logo');
                          return (
                            <div key={idx} className={`relative rounded-lg overflow-hidden my-10 ${isLogo ? 'w-48 h-32' : ' w-full'}`}>
                              <Image
                                src={section.src}
                                alt={section.alt || ''}
                                fill
                                className={isLogo ? 'object-contain' : 'object-cover'}
                              />
                            </div>
                          );
                        case 'link':
                          return (
                            <div key={idx} className="bg-[#f8fafc] p-6 rounded-lg border border-gray-100 my-8 inline-block">
                              <h3 className="text-base font-bold text-[#06101f] mb-2">{section.title}</h3>
                              <Link
                                href={section.url}
                                target="_blank"
                                className="text-primary hover:text-blue-700 font-semibold break-all flex items-center gap-2"
                              >
                                <span className="underline text-xs">{section.url}</span>
                                <ChevronRight size={12} />
                              </Link>
                            </div>
                          );
                        default:
                          return null;
                      }
                    })
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
                        Technological breakthroughs in atomic-level manufacturing have allowed us to achieve purity levels previously
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

              {/* Tag Cloud */}
              {blog.tags && (
                <div className="mt-20 pt-10 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 bg-gray-50 border border-gray-100 text-gray-400 text-[9px] font-bold rounded-md uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4 space-y-12">
              <div className="bg-[#fcfcfd] p-8 rounded-2xl border border-gray-100 shadow-sm sticky top-32">
                <div className="">
                  <h4 className="text-xs font-bold text-[#06101f] uppercase tracking-widest mb-6">Related Insights</h4>
                  <div className="space-y-6">
                    {t.blogs.items.slice(0, 4).map((item: any, idx: number) => (
                      item.slug !== slug && (
                        <Link key={idx} href={`/blog/${item.slug}`} className="group flex gap-5 items-center">
                          <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                            <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[8px] text-secondary font-black uppercase tracking-widest mb-1">{item.category}</span>
                            <h5 className="text-xs font-bold text-[#06101f] leading-snug group-hover:text-primary transition-colors line-clamp-2">
                              {item.title}
                            </h5>
                          </div>
                        </Link>
                      )
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
