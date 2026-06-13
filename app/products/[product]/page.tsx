'use client';

import { useParams } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Package, ShieldCheck, Factory, Beaker, Globe, ScrollText, Table as TableIcon, AlertCircle, Truck } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ProductPage() {
  const { product } = useParams();
  const { language } = useLanguage();
  const t = translations[language];

  // Map product slug to data keys
  const productKeyMap: Record<string, keyof typeof t.productDetails> = {
    'sodium-lumps': 'sodiumLumps',
    'sodium-liquid': 'sodiumLiquid',
    'potassium-lumps': 'potassiumLumps',
    'potassium-liquid': 'potassiumLiquid',
  };

  const dataKey = productKeyMap[product as string];
  const productData = dataKey ? t.productDetails[dataKey] : null;

  if (!productData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary text-white">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  // Image mapping
  const imageMap: Record<string, string> = {
    'sodiumLumps': '/sodium-silicate-solidd.webp',
    'sodiumLiquid': '/sodium-silicate-liquidd.webp',
    'potassiumLumps': '/Potassium-Silicate-Lumps.webp',
    'potassiumLiquid': '/potas-sili-liqq.webp',
  };

  const productImage = imageMap[dataKey as string] || '/image.webp';

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* ── CLEAN HERO SECTION ── */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden pt-20">
        <Image
          src="/about-us-1.webp" 
          alt="Product Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8 space-y-6"
            >
              <div className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-[10px] font-black tracking-[0.3em] uppercase">
                {productData.title.split(' ')[0]} SOLUTIONS
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none">
                {productData.title.split(' ').slice(0, -1).join(' ')} <span className="text-secondary italic">{productData.title.split(' ').pop()}</span>
              </h1>
              
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl font-medium">
                {'desc' in productData ? productData.desc : productData.desc1}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white shadow-sm backdrop-blur-sm">
                  <ShieldCheck className="text-secondary" size={18} />
                  <span className="text-sm font-bold">ISO Certified</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white shadow-sm backdrop-blur-sm">
                  <Globe className="text-secondary" size={18} />
                  <span className="text-sm font-bold">Global Supply</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT VISUAL OVERVIEW ── */}
      <section className="py-12 bg-white">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="bg-gray-50 rounded-[2.5rem] p-8 lg:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-[80px]" />
            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3 text-secondary font-bold text-xs uppercase tracking-widest">
                  <Beaker size={18} />
                  Product Showcase
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
                  Premium Grade <span className="text-secondary">{productData.title}</span>
                </h2>
                <p className="text-gray-600 text-lg font-medium leading-relaxed max-w-3xl">
                  Our products are characterized by their exceptional purity and consistent quality. 
                  Below you will find the comprehensive technical data and industrial applications 
                  for this specific grade.
                </p>
                <div className="flex gap-12 pt-4">
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-primary">100%</span>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Industrial Purity</span>
                  </div>
                  <div className="w-[1px] h-12 bg-gray-200" />
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-primary">Global</span>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Supply Standard</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                  <Image 
                    src={productImage}
                    alt={productData.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES & APPLICATIONS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {'industryTitle' in productData && (
              <div className="space-y-8 bg-gray-50 p-8 lg:p-12 rounded-3xl border border-gray-100">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-primary font-bold text-xs uppercase tracking-widest">
                    <div className="w-8 h-[2px] bg-secondary" />
                    Our Reach
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                    {productData.industryTitle}
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {productData.industries.map((industry, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-50 shadow-sm">
                      <CheckCircle2 size={16} className="text-primary" />
                      <span className="text-gray-700 text-sm font-bold leading-tight">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={`space-y-8 p-8 lg:p-12 rounded-3xl border border-gray-100 ${!('industryTitle' in productData) ? 'lg:col-span-2' : ''}`}>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-primary font-bold text-xs uppercase tracking-widest">
                  <div className="w-8 h-[2px] bg-secondary" />
                  Key Applications
                </div>
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                  {productData.appsTitle}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {productData.apps.map((app, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="mt-1 flex-shrink-0 text-secondary">
                      <ChevronRight size={16} />
                    </div>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">
                      {app}
                    </p>
                  </div>
                ))}
              </div>
              
              {'appsTitle2' in productData && productData.appsTitle2 && (
                <div className="pt-6 border-t border-gray-50 mt-6 space-y-6">
                   <h3 className="text-xl font-bold text-primary tracking-tight">
                    {productData.appsTitle2}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {productData.apps2.map((app, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <ChevronRight size={16} className="text-primary mt-1" />
                        <p className="text-gray-700 text-sm font-bold leading-tight">{app}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL DATA ── */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Specifications & <span className="text-secondary italic">Properties</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden self-start">
              <div className="bg-primary text-white px-8 py-5 flex items-center gap-4">
                <Factory size={22} className="text-secondary" />
                <h3 className="text-lg font-bold">{productData.propertiesTitle}</h3>
              </div>
              <table className="w-full text-left">
                <tbody className="divide-y divide-gray-50">
                  {productData.properties.map((prop, index) => (
                    <tr key={index} className="hover:bg-gray-50/30 transition-colors">
                      <td className="py-4 px-8 font-bold text-gray-400 text-[10px] uppercase tracking-widest w-1/3">{prop.label}</td>
                      <td className="py-4 px-8 font-semibold text-gray-800 text-sm whitespace-pre-wrap">{prop.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden self-start">
              <div className="bg-primary text-white px-8 py-5 flex items-center gap-4">
                <TableIcon size={22} className="text-secondary" />
                <h3 className="text-lg font-bold">{productData.salesSpecTitle}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[500px]">
                  <thead className="bg-[#f8fafc] border-b border-gray-100">
                    <tr>
                      {productData.salesSpecHeaders.map((header, index) => (
                        <th key={index} className="py-4 px-6 font-bold uppercase text-[10px] tracking-widest text-gray-400">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {productData.salesSpecRows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="hover:bg-gray-50/30 transition-colors">
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="py-4 px-6 text-[11px] font-bold text-gray-800">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKAGING & QUALITY ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 flex flex-col space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px]">
                  <Package size={14} />
                  Logistics & Packaging
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                  Tailored <span className="text-secondary italic">Packaging</span> Solutions
                </h2>
                <p className="text-gray-500 text-sm font-medium">
                  {productData.packagingTitle}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {Array.isArray(productData.packaging) ? (
                  productData.packaging.map((item, index) => (
                    <div key={index} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between hover:bg-white hover:shadow-lg transition-all duration-300">
                      <span className="font-bold text-gray-800 text-sm">{item}</span>
                      <ChevronRight size={16} className="text-secondary" />
                    </div>
                  ))
                ) : (
                  <div className="col-span-full p-10 rounded-3xl bg-[#06101f] text-white shadow-2xl relative overflow-hidden group border border-white/10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]" />
                    <div className="flex items-start gap-6 relative z-10">
                       <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                          <Truck size={32} />
                       </div>
                       <div className="flex-1 space-y-4">
                          <p className="text-xl font-bold leading-relaxed">{productData.packaging}</p>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-[2px] bg-secondary" />
                            <span className="text-secondary text-[10px] font-black uppercase tracking-widest">Verified Logistics</span>
                          </div>
                       </div>
                    </div>
                  </div>
                )}
              </div>

              {'precautionsTitle' in productData && (
                <div className="p-8 rounded-2xl bg-red-50 border-l-4 border-l-red-600 border-y border-r border-red-100 flex gap-5">
                  <AlertCircle size={24} className="text-red-600 flex-shrink-0" />
                  <div className="space-y-2">
                    <h4 className="font-bold text-red-900 text-sm">{productData.precautionsTitle}</h4>
                    <p className="text-red-800/70 text-xs font-medium leading-relaxed">
                      {productData.precautionsText}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-5 bg-[#06101f] rounded-3xl p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-[80px]" />
               
               <div className="relative z-10 space-y-10">
                <div className="space-y-2">
                  <div className="w-12 h-1 bg-secondary" />
                  <h3 className="text-2xl font-bold uppercase tracking-tight">Quality <span className="text-secondary">Certifications</span></h3>
                </div>
                
                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
                    <span className="text-secondary text-[10px] font-bold uppercase tracking-widest opacity-60">UN Classification</span>
                    <span className="text-xl font-bold">{productData.certs.un}</span>
                  </div>
                  
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
                    <span className="text-secondary text-[10px] font-bold uppercase tracking-widest opacity-60">CAS Registry</span>
                    <span className="text-xl font-bold">{productData.certs.cas}</span>
                  </div>

                  {'reach' in productData.certs && (
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
                      <span className="text-secondary text-[10px] font-bold uppercase tracking-widest opacity-60">REACH Compliance</span>
                      <p className="text-[15px] font-semibold italic text-white/90">{productData.certs.reach}</p>
                    </div>
                  )}

                  {'iso' in productData.certs && (
                    <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center gap-5">
                      <ScrollText className="text-secondary" size={28} />
                      <div className="flex flex-col">
                        <span className="text-secondary text-[10px] font-bold uppercase tracking-widest opacity-60">ISO Standards</span>
                        <span className="text-xl font-black">{productData.certs.iso}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-white/5 flex flex-col items-center gap-4 text-center">
                   <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-[0_0_20px_rgba(242,193,46,0.3)]">
                     <CheckCircle2 size={24} className="text-primary" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
