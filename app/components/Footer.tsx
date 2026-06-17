"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 pb-10 border-t border-white/5">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 bg-white p-2 rounded-lg shadow-xl">
                <Image
                  src="/logo.webp"
                  alt="Kiran Italia Chemicals"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none tracking-tighter uppercase">Kiran Italia</span>
                <span className="text-[10px] tracking-[0.3em] text-[#f9b115] font-bold uppercase">Chemicals S.r.l.</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed opacity-90 font-medium">
              {t.footer.companyDesc}
            </p>
            <div className="flex space-x-3">
              {[
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, href: "#" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>, href: "#" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>, href: "#" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0a4da2] hover:scale-110 transition-all duration-300 border border-white/5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-10">
            <h4 className="text-sm font-bold mb-8 text-white  tracking-widest relative inline-block">
              {t.footer.quickLinksTitle}
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#f9b115]"></span>
            </h4>
            <ul className="space-y-4">
              {t.footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#f9b115] transition-colors text-xs font-bold  tracking-wider flex items-center gap-2 group">
                    <span className="w-1.5 h-[1px] bg-gray-600 group-hover:w-3 group-hover:bg-[#f9b115] transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-sm font-bold  mb-8 text-white  tracking-widest relative inline-block">
              {t.footer.productsTitle}
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#f9b115]"></span>
            </h4>
            <ul className="space-y-4">
              {t.footer.products.map((item) => (
                <li key={item}>
                  <Link href="/products" className="text-gray-400  hover:text-[#f9b115] transition-colors text-xs font-bold  tracking-wider flex items-center gap-2 group">
                    <span className="w-1.5 h-[1px] block bg-gray-600 group-hover:w-3 group-hover:bg-[#f9b115] transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold mb-8 text-white tracking-widest relative inline-block uppercase">
              {t.footer.reachUsTitle}
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#f9b115]"></span>
            </h4>
            <div className="space-y-3">
              <div className="space-y-6">
                <div className="text-xs">
                  <span className="block font-bold text-white mb-2 tracking-tight text-sm uppercase">Kiran Italia Chemicals S.r.l.</span>
                  <div className="flex items-start gap-1 text-gray-400 group">
                    <MapPin size={14} className="text-[#f9b115] mt-0.5 -ml-0.5 flex-shrink-0" />
                    <span className="leading-relaxed block text-[11px]">{t.footer.address}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-[11px]">
                  <span className="block font-bold text-white mb-1">Ettore Schillirò Rubino</span>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+393391192817" className="text-gray-400 hover:text-[#f9b115] transition-colors flex items-center gap-2">
                      <Phone size={12} className="text-[#f9b115]" /> +39 3391192817
                    </a>
                    <a href="mailto:ettore@kiranitalia.it" className="text-gray-400 hover:text-[#f9b115] transition-colors flex items-center gap-2">
                      <Mail size={12} className="text-[#f9b115]" /> ettore@kiranitalia.it
                    </a>
                  </div>
                </div>

                <div className="text-[11px]">
                  <span className="block font-bold text-white mb-1">Edoardo Maria Crimaldi</span>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+393792420293" className="text-gray-400 hover:text-[#f9b115] transition-colors flex items-center gap-2">
                      <Phone size={12} className="text-[#f9b115]" /> +39 3792420293
                    </a>
                    <a href="mailto:edoardo@kiranitalia.it" className="text-gray-400 hover:text-[#f9b115] transition-colors flex items-center gap-2">
                      <Mail size={12} className="text-[#f9b115]" /> edoardo@kiranitalia.it
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a href="https://www.kiranitalia.it" target="_blank" rel="noopener noreferrer" className="text-[#0a4da2] hover:text-[#f9b115] text-xs font-bold underline transition-colors">
                  www.kiranitalia.it
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-[12px] font-bold text-center md:text-left">
            {t.footer.copyright} | {t.footer.rights}
          </p>
          <div className="flex gap-10 text-[10px] text-gray-500  font-black tracking-widest">
            <Link href="/privacy" className="hover:text-white transition-colors">{t.footer.privacyPolicy}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{t.footer.termsOfService}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
