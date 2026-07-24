"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import LocationsGlobe from "../components/LocationsGlobe";
import { useLanguage } from "../context/LanguageContext";

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function ContactPage() {
  const { t } = useLanguage();
  const cp = t.contactPage;

  interface ContactInfoItem {
    title: string;
    value: string;
    link: string;
    icon: React.ReactNode;
    color: string;
    extra: { value: string; link: string } | null;
  }

  const contactInfo: ContactInfoItem[] = [
    { title: cp.callTitle, value: "+39 3391192817", link: "tel:+393391192817", icon: <Phone size={20} />, color: "bg-blue-50 text-blue-600", extra: null },
    { title: cp.emailTitle, value: "info@kiranitalia.it", link: "mailto:info@kiranitalia.it", icon: <Mail size={20} />, color: "bg-amber-50 text-amber-600", extra: null },
    { title: cp.officeTitle, value: cp.officeAddress, link: "https://maps.google.com/?q=SP12ii,+12,+95040+Motta+Sant'Anastasia+CT,+Italy", icon: <MapPin size={20} />, color: "bg-emerald-50 text-emerald-600", extra: null },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry_type: cp.inquiryOptions?.[0] || "General Inquiry",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);
      setSuccess("");
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
       
      if (!response.ok) {
         setSuccess("Something went wrong.");
      }
      setSuccess("Your message has been sent successfully.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        inquiry_type: cp.inquiryOptions?.[0] || "General Inquiry",
        message: "",
      });
    } catch (error) {
      console.error(error);
      // alert("Failed to submit form");
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="min-h-screen bg-white selection:bg-primary/10">

      {/* Hero Section */}
      <section className="pt-38 pb-16 bg-blue-100 relative overflow-hidden flex items-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10 w-full text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-primary font-bold text-[10px] tracking-widest mb-6 shadow-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {cp.heroLabel}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark leading-[1.1] mb-6 tracking-tighter ">
              {cp.heroTitle1} <span className="text-primary">{cp.heroTitle2}</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl">{cp.heroDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* Split Content Section */}
      <section className="pb-24 pt-12">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* Left: Contact Details & Visual */}
            <div className="lg:w-2/5 space-y-12">
              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center gap-6 p-6 rounded-3xl border border-gray-100 hover:border-primary/20 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all group bg-slate-50/50"
                  >
                    <div className={`w-14 h-14 ${info.color} rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-500`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-400 font-bold tracking-widest text-[9px] mb-1">{info.title}</h4>
                      <a href={info.link} className="text-base font-bold text-dark hover:text-primary transition-colors leading-tight block">
                        {info.value}
                      </a>
                      {info.extra && (
                        <a href={info.extra.link} className="text-base font-bold text-dark hover:text-primary transition-colors leading-tight block mt-1">
                          {info.extra.value}
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Support Card */}
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-dark rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <h4 className="text-secondary font-black uppercase tracking-widest text-[10px] mb-6 flex items-center gap-2">
                  <Clock size={14} />
                  {cp.availabilityLabel}
                </h4>
                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
                    <span className="text-gray-400 text-xs font-medium">{cp.monFri}</span>
                    <span className="font-bold text-xs uppercase tracking-wider">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
                    <span className="text-gray-400 text-xs font-medium">{cp.saturday}</span>
                    <span className="font-bold text-xs uppercase tracking-wider">09:00 - 14:00</span>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  {[FacebookIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-dark transition-all duration-300">
                      <Icon />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Modern Form */}
            <div className="lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-[3rem] p-8 lg:p-14 border border-gray-100 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)] relative"
              >
                <div className="mb-10">
                  <h2 className="text-2xl md:text-3xl font-black text-dark mb-3 tracking-tighter leading-none">
                    {cp.formTitle1} <span className="text-primary">{cp.formTitle2}</span>
                  </h2>
                  <p className="text-gray-400 text-sm">{cp.formRequired}</p>
                </div>

                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">{cp.fieldName}</label>
                      <input type="text"   
                        name="name"                      
                        value={formData.name}
                        onChange={handleChange}
                        required className="w-full px-6 py-4 bg-slate-50 border-transparent focus:border-primary focus:bg-white rounded-2xl outline-none transition-all font-semibold text-gray-700 border" placeholder={cp.namePlaceholder} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">{cp.fieldEmail}</label>
                      <input type="email" 
                        name="email"                        
                        value={formData.email}
                        onChange={handleChange}
                        required className="w-full px-6 py-4 bg-slate-50 border-transparent focus:border-primary focus:bg-white rounded-2xl outline-none transition-all font-semibold text-gray-700 border" placeholder={cp.emailPlaceholder} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">{cp.fieldPhone}</label>
                      <input type="tel"   
                        name="phone"                      
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-slate-50 border-transparent focus:border-primary focus:bg-white rounded-2xl outline-none transition-all font-semibold text-gray-700 border" placeholder={cp.phonePlaceholder} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">{cp.fieldInquiry}</label>
                      <select className="w-full px-6 py-4 bg-slate-50 border-transparent focus:border-primary focus:bg-white rounded-2xl outline-none transition-all font-bold text-gray-700 border appearance-none" name="inquiry_type" value={formData.inquiry_type}
                        onChange={handleChange}>
                        {cp.inquiryOptions.map((opt, i) => <option key={i}>{opt}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">{cp.fieldMessage}</label>
                    <textarea rows={5} 
                        name="message"                        
                        value={formData.message}
                        onChange={handleChange}
                        required className="w-full px-6 py-4 bg-slate-50 border-transparent focus:border-primary focus:bg-white rounded-2xl outline-none transition-all font-semibold text-gray-700 border resize-none" placeholder={cp.messagePlaceholder}/>
                  </div>
                  <button className="w-full py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest hover:bg-dark transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group text-xs overflow-hidden relative" type="submit" disabled={loading}>
                    <motion.div className="absolute inset-0 bg-secondary translate-x-[-100%]" whileHover={{ x: 0 }} transition={{ duration: 0.4 }} />
                    <span className="relative z-10 flex items-center gap-2">
                      
                      {loading ? "Submitting..." : cp.submitBtn}
                    
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  {success && (
                      <div className={`mt-4 p-4 rounded-2xl flex items-center gap-3 ${
                        success.startsWith("✅") 
                          ? "bg-green-50 border border-green-200 text-green-700" 
                          : "bg-red-50 border border-red-200 text-red-700"
                      }`}>
                        <span className="text-xl">{success.startsWith("✅") ? "✅" : "❌"}</span>
                        <p className="text-sm font-medium">{success}</p>
                      </div>
                    )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>

      </section>

      <LocationsGlobe />



      {/* Map Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-dark mb-4 tracking-tighter leading-none">
              {cp.mapTitle1} <span className="text-primary">{cp.mapTitle2}</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-lg">{cp.mapDesc}</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="h-[500px] rounded-[1rem] overflow-hidden border-2 border-white  shadow-2xl relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.1708496451233!2d14.9907794!3d37.5038884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13115835d1eb327b%3A0x7727c3433377200a!2sSP12ii%2C%2012%2C%2095040%20Motta%20Sant&#39;Anastasia%20CT%2C%20Italy!5e0!3m2!1sen!2sin!4v1781776188600!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" className="rounded-[1rem]"
            ></iframe>
          </motion.div>
        </div>
      </section>

    </main >
  );
}
