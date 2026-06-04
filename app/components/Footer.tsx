"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
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
                  alt="Egypt Global Silicates"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none uppercase tracking-tighter">EGYPT GLOBAL</span>
                <span className="text-[10px] tracking-[0.3em] text-[#f9b115] uppercase font-bold">SILICATES</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed opacity-90 font-medium">
              Egypt Global Silicates is one of the world’s largest and most advanced producers of Sodium Silicate and Potassium Silicate, in both liquid and glass/lump forms. Our fully automated furnace-based production ensures consistent quality, high purity, and scalable output.
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
            <h4 className="text-sm font-bold mb-8 text-white uppercase tracking-widest relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#f9b115]"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Products", href: "/products" },
                { name: "Brochure", href: "/brochure" },
                { name: "Quality\u00A0\u00A0&\u00A0\u00A0Safety", href: "/quality" },
                { name: "Careers", href: "/careers" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#f9b115] transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-2 group">
                    <span className="w-1.5 h-[1px] bg-gray-600 group-hover:w-3 group-hover:bg-[#f9b115] transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-sm font-bold mb-8 text-white uppercase tracking-widest relative inline-block">
              Our Products
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#f9b115]"></span>
            </h4>
            <ul className="space-y-4">
              {[
                "Sodium Silicate Lumps",
                "Potassium Silicate Lumps",
                "Sodium Silicate Liquid",
                "Potassium Silicate Liquid"
              ].map((item) => (
                <li key={item}>
                  <Link href="/products" className="text-gray-400 hover:text-[#f9b115] transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-2 group">
                    <span className="w-1.5 h-[1px] bg-gray-600 group-hover:w-3 group-hover:bg-[#f9b115] transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold mb-8 text-white uppercase tracking-widest relative inline-block">
              Reach Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#f9b115]"></span>
            </h4>
            <div className="space-y-6">
                <div className="flex gap-4 group">
                    <div className="bg-white/5 p-3 rounded-lg h-fit border border-white/5 group-hover:bg-[#0a4da2] group-hover:border-[#0a4da2] transition-all duration-300">
                        <MapPin className="text-[#f9b115] group-hover:text-white" size={20} />
                    </div>
                    <div className="text-xs">
                        <span className="block font-bold text-white mb-1 uppercase tracking-tight">Factory Address</span>
                        <span className="text-gray-400 leading-relaxed block">Plot no.311-312, Attaka Industrial Area, SUEZ-43221, Egypt</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 group">
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5 group-hover:bg-[#0a4da2] group-hover:border-[#0a4da2] transition-all duration-300">
                        <Mail className="text-[#f9b115] group-hover:text-white" size={20} />
                    </div>
                    <a href="mailto:samy@globalsilicates.com" className="text-gray-400 hover:text-[#f9b115] transition-colors text-xs font-bold uppercase tracking-widest">samy@globalsilicates.com</a>
                </div>
                <div className="flex items-center gap-4 group">
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5 group-hover:bg-[#0a4da2] group-hover:border-[#0a4da2] transition-all duration-300">
                        <Phone className="text-[#f9b115] group-hover:text-white" size={20} />
                    </div>
                    <a href="tel:+201110015595" className="text-gray-400 hover:text-[#f9b115] transition-colors text-xs font-bold uppercase tracking-widest">+20 11100 15595</a>
                </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em] text-center md:text-left">
            ©2025 | Egypt Global Silicates | All rights Reserved | Designed by iStudio Technologies
          </p>
          <div className="flex gap-10 text-[10px] text-gray-500 uppercase font-black tracking-widest">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
