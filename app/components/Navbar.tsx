"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, ArrowRight, Clock, Globe, Search, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { 
      name: "Products", 
      href: "/products",
      submenu: [
        { name: "Sodium Silicates", href: "/products#sodium" },
        { name: "Potassium Silicates", href: "/products#potassium" },
        { name: "Custom Formulas", href: "/products#custom" }
      ]
    },
    { name: "Quality\u00A0\u00A0&\u00A0\u00A0Safety", href: "/quality" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed w-full z-[100] transition-all duration-1000 ease-in-out">
      {/* Top Bar - Premium Glossy Look */}
      <div className={`bg-dark/95 border-b border-white/5 transition-all duration-700 ease-in-out overflow-hidden hidden lg:block ${scrolled ? 'h-0 opacity-0' : 'h-11 opacity-100'}`}>
        <div className="max-w-[1700px] mx-auto px-12 h-full flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <Clock size={12} className="text-secondary" />
              <span>EST: Sat - Thu (08:00 - 17:00)</span>
            </div>
            <div className="w-[1px] h-3 bg-white/10" />
            <div className="flex items-center gap-6">
              <a href="tel:+201110015595" className="text-[10px] font-bold text-white/80 hover:text-secondary transition-all flex items-center gap-2 uppercase tracking-widest">
                <Phone size={12} className="text-secondary" />
                +20 11100 15595
              </a>
              <a href="mailto:samy@globalsilicates.com" className="text-[10px] font-bold text-white/80 hover:text-secondary transition-all flex items-center gap-2 uppercase tracking-widest">
                <Mail size={12} className="text-secondary" />
                samy@globalsilicates.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-white/10 pr-6 text-white/40">
              <a href="#" className="hover:text-white transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
            <button className="flex items-center gap-2 text-[10px] font-black text-white hover:text-secondary transition-all uppercase tracking-[0.2em]">
              <Globe size={12} className="text-secondary" />
              English
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar - Ultra Smooth cinematic transition */}
      <nav
        className={`w-full transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) ${
          scrolled 
            ? "bg-white/95 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-3 border-b border-gray-100" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12 flex justify-between items-center h-16 transition-all duration-1000">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-4 group">
              <div className={`relative transition-all duration-1000 ease-in-out bg-white p-2 rounded-2xl shadow-2xl border border-gray-100 group-hover:rotate-[5deg] ${scrolled ? 'h-14 w-14' : 'h-16 w-16 lg:h-20 lg:w-20'}`}>
                <Image
                  src="/logo.webp"
                  alt="Egypt Global Silicates"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className={`text-xl lg:text-2xl font-black leading-none tracking-tighter uppercase transition-colors duration-1000 ${scrolled ? "text-primary" : "text-white"}`}>
                  EGYPT GLOBAL
                </span>
                <span className={`text-[10px] font-black tracking-[0.4em] uppercase mt-1 transition-colors duration-1000 ${scrolled ? "text-gray-400" : "text-white/60"}`}>
                  SILICATES
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative px-5 py-2 group/nav"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`text-[13px] font-black uppercase tracking-[0.1em] transition-all duration-500 flex items-center gap-1.5 ${
                    scrolled ? "text-dark" : "text-white"
                  } hover:text-secondary`}
                >
                  {link.name}
                  {link.submenu && <ChevronDown size={10} className="group-hover/nav:rotate-180 transition-transform duration-500" />}
                </Link>

                {/* Enhanced Dropdown Menu */}
                {link.submenu && (
                  <div className="absolute top-full left-0 pt-6 opacity-0 translate-y-4 invisible group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:visible transition-all duration-500 min-w-[240px]">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-4">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-5 py-3.5 text-[11px] font-bold text-gray-500 hover:text-primary hover:bg-gray-50 rounded-xl transition-all uppercase tracking-widest border-b border-gray-50 last:border-0"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="flex items-center gap-8 ml-6 pl-6 border-l border-gray-200/20">
              <button className={`hover:text-secondary transition-colors duration-500 ${scrolled ? 'text-dark' : 'text-white'}`}>
                <Search size={22} />
              </button>
              <Link
                href="/contact"
                className="relative px-10 py-4 bg-primary text-white rounded-xl text-[11px] font-black uppercase tracking-[0.2em] overflow-hidden group/btn shadow-[0_15px_30px_rgba(10,77,162,0.3)] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-secondary translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Estimate
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Nav Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button className={`p-3 rounded-2xl transition-all duration-700 ${scrolled ? 'text-dark bg-gray-100' : 'text-white bg-white/10'}`}>
              <Search size={22} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-2xl transition-all duration-700 ${scrolled ? "text-primary bg-primary/5" : "text-white bg-white/10"
                }`}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Overlay */}
        <div className={`fixed inset-0 bg-dark z-[90] lg:hidden transition-all duration-700 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <div className="flex flex-col h-full p-12 pt-40">
            <div className="absolute top-12 left-12 flex items-center gap-4 opacity-50">
              <Globe size={14} className="text-secondary" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Global Partner</span>
            </div>
            <div className="space-y-10 flex-1">
              {navLinks.map((link, idx) => (
                <div key={link.name} className="overflow-hidden">
                  <Link
                    href={link.href}
                    className="block text-4xl font-black text-white hover:text-secondary transition-all tracking-tighter"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-[12px] opacity-10 mr-4 font-mono">0{idx + 1}.</span>
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
            <div className="pt-10 border-t border-white/5 grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 text-[9px] font-black uppercase tracking-widest">Call our team</span>
                <a href="tel:+201110015595" className="text-white font-bold text-sm">+20 11100 15595</a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 text-[9px] font-black uppercase tracking-widest">Email office</span>
                <a href="mailto:samy@globalsilicates.com" className="text-white font-bold text-[10px] break-all">samy@globalsilicates.com</a>
              </div>
              <Link
                href="/contact"
                className="col-span-2 block w-full text-center bg-primary text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-2xl mt-4"
                onClick={() => setIsOpen(false)}
              >
                Inquiry Center
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
