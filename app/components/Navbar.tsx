"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, ArrowRight, Clock, Globe, Search, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Products",
      href: "/products",
      submenu: [
        { name: "Sodium Silicates", href: "/products#sodium" },
        { name: "Potassium Silicates", href: "/products#potassium" },
        { name: "Custom Formulas", href: "/products#custom" },
      ],
    },
    { name: "Quality & Safety", href: "/quality" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* ── HEADER ── */}
      <header className="fixed w-full z-[100] transition-all duration-300 ease-in-out">
        {/* Top Bar – desktop only */}
        <div
          className={`border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden hidden xl:block ${scrolled
            ? "h-0 opacity-0 bg-dark/95"
            : "h-11 opacity-100 bg-black/30 backdrop-blur-sm"
            }`}
        >
          <div className="max-w-[1700px] mx-auto px-12 h-full flex justify-between items-center">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <Clock size={12} className="text-secondary" />
                <span>EST: Sat - Thu (08:00 - 17:00)</span>
              </div>
              <div className="w-[1px] h-3 bg-white/10" />
              <div className="flex items-center gap-6">
                <a
                  href="tel:+917358600595"
                  className="text-[10px] font-bold text-white/80 hover:text-secondary transition-all flex items-center gap-2 uppercase tracking-widest"
                >
                  <Phone size={12} className="text-secondary" />
                  +91 73586 00595
                </a>
                <a
                  href="mailto:info@kiranglobal.com"
                  className="text-[10px] font-bold text-white/80 hover:text-secondary transition-all flex items-center gap-2 uppercase tracking-widest"
                >
                  <Mail size={12} className="text-secondary" />
                  info@kiranglobal.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 border-r border-white/10 pr-6 text-white/40">
                <a href="#" className="hover:text-white transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
              <button className="flex items-center gap-2 text-[10px] font-black text-white hover:text-secondary transition-all uppercase tracking-[0.2em]">
                <Globe size={12} className="text-secondary" />
                English
              </button>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav
          className={`w-full transition-all duration-300 ${scrolled
            ? "bg-white/95 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-3 border-b border-gray-100"
            : "bg-transparent py-5"
            }`}
        >
          <div className="max-w-[1700px] mx-auto px-6 lg:px-12 flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-4 group">
                <div
                  className={`relative transition-all duration-300 ease-in-out bg-white p-2 rounded-2xl shadow-2xl border border-gray-100 group-hover:rotate-[5deg] ${scrolled ? "h-14 w-14" : "h-16 w-16 lg:h-18 lg:w-18"
                    }`}
                >
                  <Image
                    src="/logo.webp"
                    alt="Kiran Global Chems"
                    fill
                    className="object-contain p-1"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span
                    className={`text-xl lg:text-xl font-black leading-none tracking-tighter uppercase transition-colors duration-300 ${scrolled ? "text-primary" : "text-white"
                      }`}
                  >
                    KIRAN GLOBAL
                  </span>
                  <span
                    className={`text-[9px] font-black tracking-[0.4em] uppercase mt-1 transition-colors duration-300 ${scrolled ? "text-gray-400" : "text-white/60"
                      }`}
                  >
                    CHEMS PVT LTD
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden xl:flex items-center space-x-2">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative px-5 py-2 group/nav"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`text-sm font-bold uppercase tracking-[0.05em] transition-all duration-300 flex items-center gap-1.5 ${scrolled ? "text-dark" : "text-white"
                      } hover:text-secondary`}
                  >
                    {link.name}
                    {link.submenu && (
                      <ChevronDown size={14} className="group-hover/nav:rotate-180 transition-transform duration-300" />
                    )}
                  </Link>
                  {link.submenu && (
                    <div className="absolute top-full left-0 pt-6 opacity-0 translate-y-4 invisible group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:visible transition-all duration-300 min-w-[240px]">
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-3">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-all tracking-wide border-b border-gray-50 last:border-0"
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
                <button className={`hover:text-secondary transition-colors duration-500 ${scrolled ? "text-dark" : "text-white"}`}>
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

            {/* Mobile Hamburger Button */}
            <div className="xl:hidden flex items-center gap-3 relative z-[110]">
              <button
                className={`p-2.5 rounded-xl transition-all duration-300 ${scrolled || isOpen ? "text-primary bg-primary/10" : "text-white bg-white/10"
                  }`}
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className={`p-2.5 rounded-xl transition-all duration-300 active:scale-95 ${scrolled && !isOpen ? 'text-primary bg-primary/10' : 'text-white'}`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ── MOBILE FULLSCREEN OVERLAY (Professional UI) ── */}
      <div
        className={`fixed inset-0 z-[120] xl:hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen
          ? "opacity-100 pointer-events-auto bg-black/80 backdrop-blur-md"
          : "opacity-0 pointer-events-none bg-black/0 backdrop-blur-none"
          }`}
      >
        <div 
          className={`flex flex-col h-full bg-gradient-to-b from-[#0f172a] to-slate-900 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "translate-y-0 scale-100 opacity-100" : "-translate-y-12 scale-95 opacity-0"
          }`}
        >

          {/* Top Bar inside Menu */}
          <div className="flex justify-between items-center px-6 h-20 border-b border-white/5">
            <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <div className="relative h-12 w-12 bg-white p-1.5 rounded-xl shadow-lg">
                <Image src="/logo.webp" alt="Logo" fill className="object-contain p-1" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black text-white uppercase leading-none tracking-tighter">Kiran Global</span>
                <span className="text-[9px] font-black text-secondary tracking-[0.2em] uppercase mt-1">Chems Pvt Ltd</span>
              </div>
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/5 flex items-center justify-center transform active:scale-95"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-8 py-8 flex flex-col justify-start mt-6">
            {/* Nav Links */}
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <div key={link.name} className="flex flex-col">
                  <div className="flex items-center justify-between group">
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center flex-1 gap-4 py-1"
                    >
                      <span className="text-[10px] text-secondary/50 font-mono font-bold tracking-widest"></span>
                      <span className="text-base font-bold uppercase text-white group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300 tracking-wide">
                        {link.name}
                      </span>
                    </Link>
                    {link.submenu && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveDropdown(activeDropdown === link.name ? null : link.name);
                        }}
                        className="p-2 text-white/50 hover:text-white transition-colors cursor-pointer z-10"
                      >
                        <ChevronDown
                          size={24}
                          className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180 text-secondary' : ''}`}
                        />
                      </button>
                    )}
                  </div>
                  {link.submenu && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === link.name ? 'max-h-[400px] opacity-100 mt-1 mb-1' : 'max-h-0 opacity-0 mt-0 mb-0'}`}
                    >
                      <div className="ml-10 flex flex-col gap-3 border-l-2 border-white/10 pl-5 py-2">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="text-white/50 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors block"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Bottom Contact Info */}
          <div className="p-8 border-t border-white/5 bg-white/[0.02]">
            <div className="grid grid-cols-2 gap-2 mb-6">
              <div>
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-2">Call us</p>
                <a href="tel:+917358600595" className="text-white font-bold text-sm hover:text-secondary transition-colors">+91 73586 00595</a>
              </div>
              <div>
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:info@kiranglobal.com" className="text-white font-bold text-[11px] hover:text-secondary transition-colors break-all">info@kiranglobal.com</a>
              </div>
            </div>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-blue-700 text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs shadow-xl transition-all active:scale-95"
            >
              <Mail size={16} />
              Inquiry Center
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
