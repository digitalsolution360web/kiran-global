"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ArrowRight, Clock, Globe, Search, ChevronDown, ChevronRight } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [langDropdown, setLangDropdown] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const mobileLangDropdownRef = useRef<HTMLDivElement>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        (langDropdownRef.current && !langDropdownRef.current.contains(target)) &&
        (mobileLangDropdownRef.current && !mobileLangDropdownRef.current.contains(target))
      ) {
        setLangDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when menu is open
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
    { name: t.navbar.home, href: "/" },
    {
      name: t.navbar.about,
      href: "/about",
      submenu: [
        { name: t.navbar.history, href: "/about/history" },
        { name: t.navbar.vision, href: "/about/vision-mission" },
        { name: t.navbar.chairmans, href: "/about/chairman-message" },
        { name: t.navbar.management, href: "/about/management" },
        { name: t.navbar.award, href: "/about/award" },
      ],
    },
    {
      name: t.navbar.products,
      href: "/products",
      submenu: [
        { name: t.navbar.sodiumLumps, href: "/products/sodium-lumps" },
        { name: t.navbar.sodiumLiquid, href: "/products/sodium-liquid" },
        { name: t.navbar.potassiumLumps, href: "/products/potassium-lumps" },
        { name: t.navbar.potassiumLiquid, href: "/products/potassium-liquid" },
      ],
    },
    {
      name: t.navbar.industries,
      href: "/industries-we-serve",
      submenu: [
        { name: t.navbar.indDropdown.soap, href: "/industries/soap-detergents" },
        { name: t.navbar.indDropdown.cosmetics, href: "/industries/cosmetics" },
        { name: t.navbar.indDropdown.agriculture, href: "/industries/agriculture" },
        { name: t.navbar.indDropdown.timber, href: "/industries/timber-treatment" },
        { name: t.navbar.indDropdown.adhesives, href: "/industries/adhesives" },
        { name: t.navbar.indDropdown.auto, href: "/industries/automotive-repair" },
        { name: t.navbar.indDropdown.food, href: "/industries/food-industry" },
        { name: t.navbar.indDropdown.water, href: "/industries/water-treatment" },
        { name: t.navbar.indDropdown.foundries, href: "/industries/foundries" },
        { name: t.navbar.indDropdown.petroleum, href: "/industries/petroleum-oil-drilling" },
        { name: t.navbar.indDropdown.concrete, href: "/industries/concrete-general" },
        { name: t.navbar.indDropdown.chemical, href: "/industries/chemical-injection" },
        { name: t.navbar.indDropdown.metals, href: "/industries/metals" },
        { name: t.navbar.indDropdown.ceramics, href: "/industries/ceramics-refractory" },
        { name: t.navbar.indDropdown.mining, href: "/industries/mining-mineral-processing" },
      ]
    },
    // { name: t.navbar.careers, href: "/careers" },
    { name: t.navbar.blog, href: "/blog" },
    { name: t.navbar.contact, href: "/contact" },
  ];

  return (
    <>
      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-in-out">
        {/* Top Bar – lg screens only */}
        <div
          className={`border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden hidden lg:block ${scrolled ? "h-0 opacity-0" : "h-12 opacity-100 bg-primary"
            }`}
        >
          <div className="max-w-[1700px] mx-auto px-6 lg:px-10 xl:px-12 h-full flex justify-between items-center">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-white/80 tracking-widest">
                <Clock size={14} className="text-secondary" />
                <span>Lun-ven (08:00-17:00)</span>
              </div>
              <div className="w-[1px] h-4 bg-white/20" />
              <div className="flex items-center gap-6">
                <a
                  href="tel:+393391192817"
                  className="text-xs font-bold text-white hover:text-secondary transition-all flex items-center gap-2 tracking-wider"
                >
                  <Phone size={14} className="text-secondary" />
                  +39 3391192817
                </a>

                <a
                  href="mailto:info@kiranitalia.it"
                  className="text-xs font-bold text-white hover:text-secondary transition-all flex items-center gap-2 tracking-wider"
                >
                  <Mail size={14} className="text-secondary" />
                  info@kiranitalia.it
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 text-white">
                <a href="#" className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-all duration-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-all duration-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav
          className={`w-full transition-all duration-500 ${scrolled
            ? "bg-white/95 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] py-3 border-b border-gray-100"
            : "bg-white py-4 shadow-xl border-b border-gray-200/50"
            }`}
        >
          <div className="max-w-[1700px] mx-auto px-6 lg:px-8 xl:px-12 flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" scroll={true} className="flex items-center gap-3 group">
                <div
                  className={`relative transition-all duration-300 ease-in-out bg-white p-2 rounded-2xl ${scrolled ? "h-12 w-12" : "h-14 w-14"
                    }`}
                >
                  <Image
                    src="/KGCL-Logo.webp"
                    alt="Kiran Italia Chemicals"
                    fill
                    className="object-contain p-1"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-base lg:text-lg xl:text-xl font-bold leading-none tracking-tighter text-primary uppercase">
                    Kiran Italia
                  </span>
                  <span className="text-[8px] font-bold tracking-[0.4em] mt-1 text-gray-500 uppercase">
                    Chemicals S.r.l.
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Links – lg and above only */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative px-2 xl:px-4 py-2 group/nav"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    scroll={true}
                    className="text-sm font-bold tracking-[0.04em] transition-all duration-300 flex items-center gap-1.5 text-gray-800 hover:text-primary whitespace-nowrap"
                  >
                    {link.name}
                    {link.submenu && (
                      <ChevronDown size={13} className="group-hover/nav:rotate-180 transition-transform duration-300" />
                    )}
                  </Link>
                  {link.submenu && (
                    <div className="absolute top-full left-0 pt-6 opacity-0 translate-y-4 invisible group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:visible transition-all duration-300 min-w-max z-[150]">
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-3">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-all tracking-wide border-b border-gray-50 last:border-0 whitespace-nowrap"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-200/50">
                {/* <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50 text-gray-800 hover:text-primary transition-all duration-300">
                  <Search size={20} />
                </button> */}

                <Link
                  href="/contact"
                  className="relative px-4 xl:px-7 py-3 bg-primary text-white rounded-xl text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.1em] xl:tracking-[0.15em] overflow-hidden group/btn shadow-[0_10px_25px_rgba(10,77,162,0.2)] transition-all duration-500 whitespace-nowrap"
                >
                  <div className="absolute inset-0 bg-secondary translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-700" />
                  <span className="relative z-10 flex items-center gap-2">
                    {t.navbar.getEstimate}
                    {/* <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /> */}
                  </span>
                </Link>

                {/* Professional Compact Flag-Only Switcher */}
                <div className="relative ml-2 xl:ml-4" ref={langDropdownRef}>
                  <button
                    onClick={() => setLangDropdown(!langDropdown)}
                    className={`group flex items-center gap-1.5 p-1.5  duration-500 cursor-pointer pr-3 rounded-full border transition-all duration-300 ${langDropdown
                      ? "bg-white border-primary shadow-md"
                      : "bg-primary hover:bg-white border-gray-200 hover:border-primary/40"
                      }`}
                  >
                    <div className="w-7 h-7 flex items-center justify-center rounded-full overflow-hidden shadow-sm bg-primary border-gray-100 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg text-white">
                        {language === "en" ? "EN" : "🇮🇹"}
                      </span>
                    </div>
                    <ChevronDown
                      size={14}
                      className={`text-gray-400 transition-transform duration-500 ${langDropdown ? "rotate-180 text-primary" : "group-hover:text-primary"}`}
                    />
                  </button>

                  <AnimatePresence>
                    {langDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full  right-0 mt-2 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden min-w-[130px] z-[110] backdrop-blur-xl"
                      >
                        <div className="px-3 py-1.5 border-b border-gray-200 bg-gray-20/50">
                          {/* <span className="text-[7px] font-black text-gray-400 tracking-[0.1em]">{t.navbar.language}</span> */}
                        </div>

                        <div className="p-0.5  flex flex-col">
                          <button
                            onClick={() => { setLanguage("en"); setLangDropdown(false); }}
                            className={`flex items-center cursor-pointer gap-2 px-2.5 py-3 rounded-lg text-[15px] font-bold  transition-all group/lang ${language === "en" ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                              }`}
                          >
                            {/* <span className="text-xs">🇺🇸</span> */}
                            <span className="flex-grow">English</span>
                            {language === "en" && <div className="w-1 h-1 rounded-full bg-white" />}
                          </button>

                          <button
                            onClick={() => { setLanguage("it"); setLangDropdown(false); }}
                            className={`flex items-center gap-2 px-2.5 py-3 rounded-lg text-[15px] font-bold transition-all group/lang ${language === "it" ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                              }`}
                          >
                            {/* <span className="text-xs">🇮🇹</span> */}
                            <span className="flex-grow">Italian</span>
                            {language === "it" && <div className="w-1 h-1 rounded-full bg-white" />}
                          </button>
                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Tablet / Mobile Hamburger Button – below lg */}
            <div className="lg:hidden flex items-center gap-2 relative z-[110]">
              {/* Quick Contact – tablet only */}
              <a
                href="tel:+393391192817"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-xl text-primary text-sm font-bold hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Phone size={16} />
                <span className="hidden sm:inline">{t.navbar.callUs}</span>
              </a>
              {/* Mobile Language Switcher */}
              <div className="relative mr-1" ref={mobileLangDropdownRef}>
                <button
                  onClick={() => setLangDropdown(!langDropdown)}
                  className={`flex items-center gap-1 p-1 rounded-full border transition-all duration-300 ${langDropdown
                    ? "bg-white border-primary shadow-sm"
                    : "bg-gray-50 border-gray-200"
                    }`}
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-full overflow-hidden bg-primary text-white text-[10px] font-bold shadow-sm">
                    {language === "en" ? "EN" : "IT"}
                  </div>
                  <ChevronDown size={12} className={`transition-transform duration-300 ${langDropdown ? "rotate-180 text-primary" : "text-gray-400"}`} />
                </button>

                <AnimatePresence>
                  {langDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden min-w-[130px] z-[120]"
                    >
                      <div className="p-1.5 flex flex-col gap-1">
                        <button
                          onClick={() => { setLanguage("en"); setLangDropdown(false); }}
                          className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-bold transition-all ${language === "en" ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-50"
                            }`}
                        >
                          <span>English</span>
                          {language === "en" && <div className="w-1 h-1 rounded-full bg-white" />}
                        </button>
                        <button
                          onClick={() => { setLanguage("it"); setLangDropdown(false); }}
                          className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-bold transition-all ${language === "it" ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-50"
                            }`}
                        >
                          <span>Italiano</span>
                          {language === "it" && <div className="w-1 h-1 rounded-full bg-white" />}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className={`p-2.5 rounded-xl transition-all duration-300 active:scale-95 border-2 ${isOpen
                  ? "bg-primary text-white border-primary"
                  : "text-gray-800 bg-gray-50 border-gray-200 hover:border-primary hover:text-primary"
                  }`}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ── TABLET / MOBILE SLIDE-IN SIDEBAR MENU ── */}
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[115] lg:hidden transition-all duration-400 ${isOpen
          ? "opacity-100 pointer-events-auto bg-black/60 backdrop-blur-sm"
          : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full z-[120] lg:hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col
          // w-full sm:w-[400px] md:w-[420px]
          bg-gradient-to-b from-[#0a1628] via-[#0f1f3d] to-[#0a1628]
          shadow-[-20px_0_60px_rgba(0,0,0,0.4)]
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-6 h-[88px] border-b border-white/10 flex-shrink-0">
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <div className="relative h-11 w-11 bg-white p-1.5 rounded-xl shadow-lg flex-shrink-0">
              <Image src="/logo.webp" alt="Logo" fill className="object-contain p-1" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white uppercase leading-none tracking-tighter">Kiran Italia</span>
              <span className="text-[8px] font-bold text-secondary tracking-[0.25em] uppercase mt-1">Chemicals S.r.l.</span>
            </div>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all border border-white/10 flex items-center justify-center active:scale-95"
          >
            <X size={20} />
          </button>
        </div>

        {/* Quick Info Bar */}
        <div className="px-6 py-3 bg-primary/20 border-b border-white/5 flex items-center gap-4 flex-shrink-0">
          <div className="flex items-center gap-2 text-white/70 text-xs">
            <Clock size={12} className="text-secondary" />
            <span>Lun-ven (08:00-17:00)</span>
          </div>
          <div className="w-px h-4 bg-white/20" />
          <a href="tel:+393391192817" className="flex items-center gap-2 text-white/70 text-xs hover:text-secondary transition-colors">
            <Phone size={12} className="text-secondary" />
            +39 3391192817
          </a>
        </div>

        {/* Nav Links */}
        <div className="flex-1 overflow-y-auto py-6 px-6">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <div key={link.name} className="flex flex-col">
                <div
                  className="flex items-center justify-between rounded-xl group cursor-pointer"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <Link
                    href={link.href}
                    onClick={() => !link.submenu && setIsOpen(false)}
                    className="flex items-center flex-1 gap-3 px-4 py-3.5 rounded-xl hover:bg-white/5 transition-all duration-200 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                    <span className="text-sm font-bold uppercase text-white/90 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 tracking-widest">
                      {link.name}
                    </span>
                  </Link>
                  {link.submenu && (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className="p-3 text-white/40 hover:text-secondary transition-colors rounded-xl hover:bg-white/5 mr-1"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180 text-secondary" : ""}`}
                      />
                    </button>
                  )}
                </div>
                {/* Submenu */}
                {link.submenu && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === link.name ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="ml-8 flex flex-col gap-1 border-l-2 border-secondary/30 pl-4 py-2 mb-1">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2 px-3 py-2.5 text-white/50 hover:text-white text-xs font-semibold uppercase tracking-widest transition-all duration-200 rounded-lg hover:bg-white/5 group"
                        >
                          <ChevronRight size={12} className="text-secondary/50 group-hover:text-secondary group-hover:translate-x-0.5 transition-all" />
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Divider */}
          <div className="my-6 h-px bg-white/5" />

          {/* Language Switcher – Mobile Sidebar */}
          <div className="mb-5">
            <p className="text-white/30 text-[9px] font-black uppercase tracking-[0.25em] mb-3 flex items-center gap-2">
              <Globe size={10} className="text-secondary" />
              {t.navbar.language}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => { setLanguage("en"); setIsOpen(false); }}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 border-2 ${language === "en"
                  ? "bg-primary border-primary text-white shadow-[0_4px_15px_rgba(10,77,162,0.4)]"
                  : "border-white/10 text-white/50 hover:border-white/30 hover:text-white/80"
                  }`}
              >
                <span className="text-sm">🇺🇸</span>
                EN
              </button>
              <button
                onClick={() => { setLanguage("it"); setIsOpen(false); }}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 border-2 ${language === "it"
                  ? "bg-primary border-primary text-white shadow-[0_4px_15px_rgba(10,77,162,0.4)]"
                  : "border-white/10 text-white/50 hover:border-white/30 hover:text-white/80"
                  }`}
              >
                <span className="text-sm">🇮🇹</span>
                IT
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-blue-700 text-white py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-xs shadow-[0_8px_30px_rgba(10,77,162,0.4)] transition-all active:scale-95 group"
          >
            <Mail size={16} className="group-hover:scale-110 transition-transform" />
            {t.navbar.getEstimate}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bottom Contact Info */}
        <div className="px-6 py-5 border-t border-white/5 bg-white/[0.02] flex-shrink-0">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1.5">{t.navbar.callUs}</p>
              <a href="tel:+393391192817" className="text-white font-bold text-sm hover:text-secondary transition-colors">
                +39 3391192817
              </a>
            </div>
            <div>
              <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1.5">{t.navbar.email}</p>
              <a href="mailto:ettore@kiranitalia.it" className="text-white font-bold text-[11px] hover:text-secondary transition-colors break-all text-xs">
                ettore@kiranitalia.it
              </a>
              <a href="mailto:info@kiranitalia.it" className="text-white font-bold text-[11px] hover:text-secondary transition-colors break-all text-xs mt-1 block">
                info@kiranitalia.it
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
