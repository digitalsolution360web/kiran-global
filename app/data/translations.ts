export interface TranslationData {
  navbar: {
    home: string; about: string; products: string; sodium: string; potassium: string;
    custom: string; quality: string; careers: string; contact: string; getEstimate: string;
    callUs: string; email: string; workingHours: string; language: string;
    history: string; award: string; vision: string; chairmans: string; management: string;
    sodiumLumps: string; sodiumLiquid: string; potassiumLumps: string; potassiumLiquid: string;
  };
  chairmansMessage: {
    label: string;
    title: string;
    quote1: string;
    text1: string;
    gitaQuote: string;
    gitaVerse: string;
    name: string;
    role: string;
  };
  hero: { title: string; subtitle?: string; content: string; explore: string; contact: string };
  about: {
    label: string; titleStart: string; titleHighlight?: string; description: string;
    quote: string; points: string[]; estYear: string;
  };
  common: { exploreMore: string; viewDetails: string; learnMore: string; readMore: string; readFullArticle: string };
  products: {
    label: string; title: string;
    items: {
      sodiumLumps: { name: string; fullName: string; desc: string; features: string[] };
      sodiumLiquid: { name: string; fullName: string; desc: string; features: string[] };
      potassiumLumps: { name: string; fullName: string; desc: string; features: string[] };
      potassiumLiquid: { name: string; fullName: string; desc: string; features: string[] };
    };
  };
  whyChooseUs: {
    label: string; title: string; description: string; products: string[];
    trustPoints: {
      legacy: { title: string; desc: string };
      certified: { title: string; desc: string };
      quality: { title: string; desc: string };
    };
    isoLabel: string; yearsLabel: string; excellenceLabel: string;
  };
  industries: {
    label: string; title: string; contactExperts: string; exploreSolutions: string;
    items: {
      soap: { name: string; desc: string }; water: { name: string; desc: string };
      construction: { name: string; desc: string }; agriculture: { name: string; desc: string };
      ceramics: { name: string; desc: string }; petroleum: { name: string; desc: string };
      foundries: { name: string; desc: string }; mining: { name: string; desc: string };
      adhesives: { name: string; desc: string };
    };
  };
  visionMission: {
    label: string;
    visionTitle: string; visionText: string; visionHighlight: string;
    missionTitle: string; missions: string[];
    strengthTitle: string; strengthText1: string; strengthText2: string;
  };
  globalNetwork: { label: string; title: string; description: string };
  solidLiquid: {
    title: string; solidTitle: string; solidContent: string; liquidTitle: string; liquidContent: string;
  };
  advancedChemicals: {
    title: string;
    potassium: { title: string; desc: string };
    labsa: { title: string; desc: string };
    geopolymers: { title: string; desc: string };
  };
  sustainability: {
    label: string; title: string; titleHighlight: string; description: string;
    card1Title: string; card1Desc: string; card2Title: string; card2Desc: string;
  };
  leadership: {
    label: string; title: string;
    leaders: { name: string; role: string; description: string }[];
  };
  testimonials: {
    label: string; title: string; titleHighlight?: string; description: string;
    items: { name: string; company: string; text: string; image: string }[];
  };
  blogs: {
    label: string; title: string; knowledgeHub: string; updatedWeekly: string; readFullArticle: string;
    items: { title: string; date: string; category: string; author: string }[];
  };
  faq: {
    label: string; titleStart: string; titleHighlight: string; titleEnd: string; description: string;
    supportTitle: string; supportDesc: string; supportBtn: string;
    items: { question: string; answer: string }[];
  };
  footer: {
    companyDesc: string; quickLinksTitle: string;
    quickLinks: { name: string; href: string }[];
    productsTitle: string; products: string[]; reachUsTitle: string;
    copyright: string; privacyPolicy: string; termsOfService: string;
    rights: string; designedBy: string;
    address: string;
  };
  certifications: {
    label: string; title: string; titleHighlight: string; description: string;
    items: { title: string; desc: string }[];
    guaranteed: string;
  };
  productDetails: {
    sodiumLumps: {
      title: string; desc: string; industryTitle: string; industries: string[];
      propertiesTitle: string; properties: { label: string; value: string }[];
      salesSpecTitle: string; salesSpecHeaders: string[];
      salesSpecRows: string[][];
      appsTitle: string; apps: string[];
      packagingTitle: string; packaging: string[];
      certs: { un: string; cas: string; reach: string; reachIssuer: string; iso: string };
    };
    sodiumLiquid: {
      title: string; desc1: string; desc2: string; propertiesTitle: string;
      properties: { label: string; value: string }[];
      salesSpecTitle: string; salesSpecHeaders: string[];
      salesSpecRows: string[][];
      appsTitle: string; apps: string[];
      packagingTitle: string; packaging: string[];
      certs: { un: string; cas: string; reach: string; reachIssuer: string; iso: string };
    };
    potassiumLumps: {
      title: string; desc: string; appsTitle: string; apps: string[];
      propertiesTitle: string; properties: { label: string; value: string }[];
      salesSpecTitle: string; salesSpecHeaders: string[];
      salesSpecRows: string[][];
      appsTitle2: string; apps2: string[];
      packagingTitle: string; packaging: string;
      certs: { un: string; cas: string };
      precautionsTitle: string; precautionsText: string;
      molarRatioLabel: string;
    };
    potassiumLiquid: {
      title: string; desc: string; propertiesTitle: string;
      properties: { label: string; value: string }[];
      salesSpecTitle: string; salesSpecHeaders: string[];
      salesSpecRows: string[][];
      appsTitle: string; apps: string[];
      packagingTitle: string; packaging: string;
      certs: { un: string; cas: string; reach: string; reachIssuer: string; iso: string };
      molarRatioLabel: string;
    };
  };
}

export const translations: Record<string, TranslationData> = {
  en: {
    navbar: {
      home: "Home", about: "About Us", products: "Products",
      sodium: "Sodium Silicates", potassium: "Potassium Silicates", custom: "Custom Formulas",
      quality: "Quality & Safety", careers: "Careers", contact: "Contact",
      getEstimate: "Get Estimate", callUs: "Call Us", email: "Email",
      workingHours: "Sat - Thu (08:00 - 17:00)", language: "Language",
      history: "History", award: "Awards", vision: "Vision & Mission",
      chairmans: "Chairman's Message",
      sodiumLumps: "SODIUM SILICATE LUMPS",
      sodiumLiquid: "SODIUM SILICATE LIQUID",
      potassiumLumps: "POTASSIUM SILICATE LUMPS",
      potassiumLiquid: "POTASSIUM SILICATE LIQUID",
      management: "Management",
    },
    chairmansMessage: {
      label: "CHAIRMAN'S MESSAGE",
      title: "Vision from the Leadership",
      quote1: "My ambition is to establish Kiran Global Chems Ltd. as a market leader in the global chemical industry and to achieve this goal through innovative technologies, industry best practices and economic soundness. My greatest joy lies in enabling people achieve their ambitions and moulding fresh talent into successful individuals. Every opportunity I get to guide an individual in attaining their goals I embrace as an opportunity to learn something new and grow personally.",
      text1: "In my view, a good organisation is one that does not deviate from its growth curve in spite of temporary setbacks. I am proud of our company’s achievement in attaining the number one position in India and confident that we shall continue to hold this spot for a long time.",
      gitaQuote: "They, who perform their work offering all results to me, Who hold their hearts and mind steadfast in me in whatever they do, who worship their work, to them I offer the platform. Doubt it not that they will inexorably reach the top.",
      gitaVerse: "BHAGWAT GITA 12.6/12.8",
      name: "M S Jain",
      role: "Chairman",
    },
    hero: {
      title: "Global Excellence in Silicates",
      content: "Strategic Presence in Italy. From Global Industry to Local Markets.",
      explore: "Explore Products", contact: "Contact Us",
    },
    about: {
      label: "About Us",
      titleStart: "Industrial Leadership ",
      description: "For more than 40 years, Kiran Global has is a leading manufacturer of sodium silicate and potassium silicate solutions. The company has grown into a globally recognized chemical company serving customers on multiple continents.",
      quote: "Our commitment to quality, innovation, and sustainability enables us to deliver reliable chemical solutions for diverse industrial applications.",
      points: ["India’s leading silicate manufacturer ", "Among the Top 5 globally ", "32 manufacturing facilities ", "300K+ tons annual capacity", "Presence across 45+ countries"],
      estYear: "Est. Year",
    },
    common: {
      exploreMore: "Explore More", viewDetails: "View Details", learnMore: "Learn More",
      readMore: "Read More", readFullArticle: "Read Full Article",
    },
    products: {
      label: "Our Product Portfolio", title: "Our Products",
      items: {
        sodiumLumps: {
          name: "Sodium Silicate Lumps", fullName: "Sodium Silicate Lumps - Industrial Grade",
          desc: "At Kiran Italia Chemicals S.r.l. we produce sodium silicate lumps that are manufactured using top grade raw materials and have superior properties, both physical and chemical. We are the market leader in India and our brand is recognized globally for its high performance.",
          features: ["High Purity Raw Materials", "Superior Chemical Properties", "Global Market Recognition"],
        },
        sodiumLiquid: {
          name: "Sodium Silicate Liquid", fullName: "Sodium Silicate Liquid for Industrial Applications",
          desc: "At Kiran Italia Chemicals S.r.l. we offer sodium silicate in liquid form for specific industrial application where the liquid property of the chemical is highly effective. We manufacture high quality silicates that are produced to match our customer's expectations.",
          features: ["Effective Liquid Properties", "Customized Industrial Grades", "High Quality Manufacturing"],
        },
        potassiumLumps: {
          name: "Potassium Silicate Lumps", fullName: "High Performance Potassium Silicate Lumps",
          desc: "At Kiran Italia Chemicals S.r.l. we manufacture potassium silicate lumps of the highest quality. Our product is recognized industry-wide for its high performance and seamless integration into various industrial processes.",
          features: ["Seamless Process Integration", "Industry-Wide Recognition", "High Batch Consistency"],
        },
        potassiumLiquid: {
          name: "Potassium Silicate Liquid", fullName: "Premium Potassium Silicate Liquid",
          desc: "Kiran Italia Chemicals S.r.l. is a leading brand name in India in the manufacture and supply of potassium silicate liquid. Our industry-grade potassium silicate liquid is available in a range of ratios and concentrations.",
          features: ["Versatile Ratios & Concentrations", "Leading Indian Brand Quality", "Optimized Chemical Solutions"],
        },
      },
    },
    whyChooseUs: {
      label: "WHY US", title: "Why Choose Us",
      description: "At Kiran Italia Chemicals, we combine decades of industry expertise with cutting-edge manufacturing technology to deliver superior quality silicate solutions tailored to a wide range of industrial applications. Here's why clients choose us.",
      products: ["Sodium Silicate Liquid", "Sodium Silicate Solid", "Potassium Silicate Liquid", "Potassium Silicate Solid", "Sodium Meta Silicate", "Colloidal Silica", "Silica Gel", "Alkaline Sodium Silicate"],
      trustPoints: {
        legacy: { title: "Legacy of Trust", desc: "With over 45 years of experience in the sodium & potassium silicate industry, we have built a strong foundation of trust and reliability across India and beyond." },
        certified: { title: "Certified", desc: "Our operations are ISO-certified, ensuring consistent quality, safety, and performance in every product we manufacture." },
        quality: { title: "Commitment to Quality", desc: "Every batch undergoes rigorous quality checks to ensure our customers receive only the best. Our dedication to quality drives long-term partnerships." },
      },
      isoLabel: "ISO Certified", yearsLabel: "45+ Years", excellenceLabel: "of Industry Excellence",
    },
    industries: {
      label: "Industries We Serve", title: "Our Industrial Reach",
      contactExperts: "Contact Experts", exploreSolutions: "Explore Solutions",
      items: {
        soap: { name: "Soap & Detergents", desc: "High-performance sodium silicate used as a builder and filler in soaps, detergents, and cleaning formulations." },
        water: { name: "Water Treatment", desc: "Advanced silicate compounds for corrosion inhibition and pH control in industrial and municipal water treatment plants." },
        construction: { name: "Construction & Concrete", desc: "Sodium silicate solutions used as concrete hardeners, waterproofing agents, and soil stabilizers in infrastructure projects." },
        agriculture: { name: "Agriculture", desc: "Silicon-based solutions that enhance crop strength, drought resistance, and nutrient uptake for improved agricultural yields." },
        ceramics: { name: "Ceramics & Refractories", desc: "Silicate binders providing high-temperature resistance for ceramic tiles, refractory linings, and kiln furniture." },
        petroleum: { name: "Petroleum & Oil Drilling", desc: "Specialized silicate fluids used as shale inhibitors and wellbore stabilizers in oil & gas drilling operations." },
        foundries: { name: "Foundries", desc: "Sodium silicate-based binders providing superior mold strength and dimensional accuracy in metal casting operations." },
        mining: { name: "Mining & Mineral Processing", desc: "Chemical technologies supporting efficient mineral flotation, ore processing, and waste water management in mining." },
        adhesives: { name: "Adhesives & Coatings", desc: "High-performance silicate adhesives and functional coatings providing bonding, sealing, and protective properties." },
      },
    },
    visionMission: {
      label: "VISION & MISSION",
      visionTitle: "Our Vision",
      visionHighlight: "The company’s united vision",
      visionText: "The company’s united vision is to become a globally-renowned organisation that delivers skilfully crafted products and services, earning highest returns for our stakeholders and delivering the best customer service.",
      missionTitle: "Our Mission",
      missions: [
        "Nurture commitment to quality and consistency as the key to sustainability",
        "To give highest value for money to all our customers",
        "To facilitate our employees with opportunities to achieve their highest potential",
        "To create modern infrastructure and seamless logistics to address our customer demands on time",
        "To innovate and adopt latest methods for highest ROI",
        "To be a Fair Trade Partner in business"
      ],
      strengthTitle: "Our Strength",
      strengthText1: "Our company’s strength lies in the established practices that are updated with the changing needs of the industry and our enduring product and service quality. With our vision for global growth we have established ourselves worldwide.",
      strengthText2: "We have consistently introduced new products to our range of offerings and multiplied the capacity to meet the increasing demand for our products. We are committed to maintain our leadership position in the industry and are working hard to penetrate unexplored regions worldwide, while maintaining our existing high service standards."
    },
    globalNetwork: {
      label: "Global Presence", title: "Our Global Network",
      description: "Serving clients across continents with our world-class chemical solutions. Our reach expands through a robust distribution and manufacturing network.",
    },
    solidLiquid: {
      title: "SOLID STATE VS LIQUID STATE", solidTitle: "SOLID STATE (LUMPS)",
      solidContent: "Soluble glass in flakes (Cullet). Molar ratios from 1.6 to 3.5 according to the customer's requirements. Ideal for export and local dissolution. Packaging in big bags and bulk, both by ship and in containers.",
      liquidTitle: "LIQUID STATE",
      liquidContent: "Filtered and unfiltered aqueous solutions, with molar ratios from 1.6 to 3.5. Density and viscosity calibrated for specific applications. Available in tankers, IBCs, or 27-ton flexibags.",
    },
    advancedChemicals: {
      title: "ADVANCED CHEMICAL SOLUTIONS",
      potassium: { title: "POTASSIUM SILICATE", desc: "Essential for welding electrodes and breathable mineral paints." },
      labsa: { title: "LABSA / SLES", desc: "Fundamental surfactants for the detergent industry." },
      geopolymers: { title: "GEOPOLYMERS", desc: "\"Green\" innovation for construction: 80% reduction in CO₂ emissions." },
    },
    sustainability: {
      label: "Sustainability & Responsibility",
      title: "Building a Sustainable Future — ", titleHighlight: "Our Commitment",
      description: "We are committed to environmentally responsible manufacturing practices that reduce environmental impact while maximizing efficiency. Our focus on sustainable innovation helps industries achieve better performance with lower environmental costs.",
      card1Title: "Resource Efficiency", card1Desc: "Optimized operations",
      card2Title: "Lower Emissions", card2Desc: "Clean manufacturing",
    },
    leadership: {
      label: "Guided by Experience", title: "Leadership Team",
      leaders: [
        { name: "M. S. Jain", role: "Founder & Visionary", description: "Founder and visionary leader driving the organization's long-term growth." },
        { name: "Atul Jain", role: "Strategic Initiatives", description: "Leading strategic initiatives and business expansion." },
        { name: "N. C. Rufus", role: "Operations & Innovation", description: "Overseeing operations, innovation, and customer success." },
      ],
    },
    testimonials: {
      label: "Client Feedback", title: "Our Testimonial ",
      description: "Experience the uncompromising excellence that has made us a trusted partner in industrial chemistry for over 45 years.",
      items: [
        { name: "Kirshnaraj", company: "Pallvi Powertech", text: "Just wanted to say thank you for the service that Kiran global do for us. The trust that we have in our vendors is crucial for us especially when there is the chance of our customers name coming into play.”", image: "/Krishnaraj1.webp" },
        { name: "Moosa", company: "METL", text: "We have been doing business with Kiran Global since 2011. During this time, Kiran Global has provided us with excellent customer service, timely and reliable information and quality products.”", image: "/Moosa1.webp" },
        { name: "Keyur", company: "TTSPL", text: "Kiran Global provides outstanding quality, customer service and is an extremely reliable supplier.I just wanted to take this time to say thanks for the continued great service ”", image: "/keyur.webp" },
      ],
    },
    blogs: {
      label: "Media Center", title: "Latest Insights & Industry Innovations",
      knowledgeHub: "Knowledge Hub", updatedWeekly: "Updated Weekly", readFullArticle: "Read Full Article",
      items: [
        { title: "Exporting Excellence: How Kiran Global Delivers Quality Worldwide", date: "August 23, 2025", category: "EXPORTS", author: "Eng. Samy" },
        { title: "Eco-Friendly Engineering: The Role of Silicates in Sustainable Manufacturing", date: "November 5, 2025", category: "SUSTAINABILITY", author: "Global Team" },
        { title: "Sodium Silicate in Action: How One Compound Powers Multiple Industries", date: "September 5, 2025", category: "APPLICATIONS", author: "Research Dept" },
      ],
    },
    faq: {
      label: "Knowledge Base", titleStart: "Got ", titleHighlight: "Questions?", titleEnd: "We Have Answers.",
      description: "Everything you need to know about our high-performance silicate solutions and industrial manufacturing processes.",
      supportTitle: "Technical Support", supportDesc: "Dedicated expert assistance for all your complex chemical formulation needs.", supportBtn: "Get Expert Help",
      items: [
        { question: "What is Kiran Global's primary area of expertise?", answer: "Kiran Global specializes in the manufacturing and distribution of high-quality industrial silicates, including Sodium and Potassium Silicates, catering to various industries such as detergents, construction, and water treatment." },
        { question: "How do I request a custom formulation?", answer: "You can request a custom formulation by contacting our technical team through the 'Request a Quote' form on our contact page or by emailing us directly with your specific requirements." },
        { question: "Are your products eco-friendly and sustainable?", answer: "Yes, sustainability is at our core. We implement advanced manufacturing processes that minimize environmental impact and focus on developing eco-friendly silicate solutions." },
        { question: "What is the typical lead time for large industrial orders?", answer: "Lead times vary based on the order volume and customization requirements, but typically range from 2 to 4 weeks. Our logistics team works closely with clients to ensure timely delivery." },
        { question: "Do you provide technical support for product application?", answer: "Absolutely. Our expert technical support team is available to assist you with product selection, application methods, and troubleshooting to ensure optimal results." },
      ],
    },
    footer: {
      companyDesc: "Kiran Italia Chemicals S.r.l. is a premier manufacturer of industrial silicates, dedicated to delivering high-purity Sodium and Potassium silicates. Our state-of-the-art facilities and commitment to innovation ensure top-tier solutions for global industries.",
      quickLinksTitle: "Quick Links",
      quickLinks: [
        { name: "Home", href: "/" }, { name: "About Us", href: "/about" },
        { name: "History", href: "/about/history" }, { name: "Awards", href: "/about/award" },
        { name: "Products", href: "/products" },
        { name: "Brochure", href: "/brochure" }, { name: "Quality & Safety", href: "/quality" },
        { name: "Careers", href: "/careers" }, { name: "Contact Us", href: "/contact" },
      ],
      productsTitle: "Our Products",
      products: ["Sodium Silicate Lumps", "Potassium Silicate Lumps", "Sodium Silicate Liquid", "Potassium Silicate Liquid"],
      reachUsTitle: "Reach Us",
      copyright: "©2025 | Kiran Italia Chemicals S.r.l.",
      rights: "All rights Reserved", designedBy: "Designed by iStudio Technologies",
      privacyPolicy: "Privacy Policy", termsOfService: "Terms of Service",
      address: "Motta Sant'Anastasia (CT) - Italia",
    },
    certifications: {
      label: "Certifications & Quality",
      title: "Built on Standards.",
      titleHighlight: "Driven by Trust.",
      description: "We follow rigorous inspection and environmental protocols to ensure every batch meets the highest global standards for purity and performance.",
      items: [
        { title: "ISO-compliant production", desc: "Strict adherence to international manufacturing standards." },
        { title: "Eco-friendly processes", desc: "Committed to sustainable manufacturing and minimal waste." },
        { title: "Global supply safety", desc: "Safe handling and timely delivery across all continents." }
      ],
      guaranteed: "Quality Guaranteed",
    },
    productDetails: {
      sodiumLumps: {
        title: "Sodium Silicate Lumps",
        desc: "At Kiran Global Chems Ltd. we produce sodium silicate lumps that are manufactured using top grade raw materials and have superior properties, both physical and chemical. We are the market leader in India and our brand is recognized globally for its high performance. Our prominent clients belong to the following industries:",
        industryTitle: "Prominent Client Industries",
        industries: ["Soil Grouting", "Silica & Allied Chemicals", "Catalysts", "Soaps and Detergents manufacturing", "Textile Processing", "Paper & Pulp", "Foundries", "Adhesives in Paper & Board industries", "Pigment manufacture", "Waterproofing", "Cement"],
        propertiesTitle: "Sodium Silicate Lump Physical & Chemical Properties",
        properties: [
          { label: "Chemical Formulae", value: "Na2O x SiO2" },
          { label: "Appearance", value: "Solid Lumps" },
          { label: "Colour", value: "Colourless to Light Blue Colour" },
          { label: "Molecular Weight", value: "184 – 254" }
        ],
        salesSpecTitle: "Sales Specification",
        salesSpecHeaders: ["Particular", "Na2O", "SiO2", "Total Solids", "Weight Ratio"],
        salesSpecRows: [
          ["1:2.00", "32.50 – 33.00%", "66.50 – 67.00%", "> 99.0%", "1:2.00 +/- 0.1"],
          ["1:2.20", "30.50 – 31.50%", "67.50 – 68.00%", "> 99.0%", "1:2.20 +/- 0.1"],
          ["1:3.20", "23.50 – 24.50%", "75.50 – 76.50%", "> 99.0%", "1:3.20 +/- 0.1"],
          ["1:3.40", "22.50 -23.0%", "76.50 – 77.0%", "> 99.0%", "1:3.40 +/- 0.1"]
        ],
        appsTitle: "Sodium Silicate lumps are used by our clients for following applications",
        apps: ["Detergent / Cleaning Compounds", "Paper Board", "Building Products / Construction", "Ceramics", "Petroleum Processing", "Metals"],
        packagingTitle: "We transport the product in following packaging options",
        packaging: ["285-300 Kg MS Drums", "Full Tanker Load", "Flexi Bags", "IBC Tanks", "Bulk Shipping"],
        certs: {
          un: "UN NO. 3253", cas: "CAS NO. 1344-09-8",
          reach: "REACH PRE REGISTRATION NO. 17-2119388445-28-0000",
          reachIssuer: "(Issued by ELC Group, Czech Republic)",
          iso: "ISO CERTIFICATION NO. IN-Q08506"
        }
      },
      sodiumLiquid: {
        title: "Sodium Silicate Liquid",
        desc1: "At Kiran Global Chem Ltd. we offer sodium silicate in liquid form for specific industrial application where the liquid property of the chemical is highly effective. We manufacture high quality silicates that are produced to match our customer's expectations. For special requirements, we customize the liquid so that it can be integrated with highest efficacy with the products of our clients.",
        desc2: "We manufacture liquid sodium silicates in different molar ratios, thus adjusting the alkaline level in the silicates. Our research team advises customers on selecting the most appropriate combination for their industrial application.",
        propertiesTitle: "Liquid sodium silicate physical and commercial properties.",
        properties: [
          { label: "Chemical Formulae", value: "Na2O x SiO2" },
          { label: "Appearance", value: "Liquid" },
          { label: "Colour", value: "Light Yellow liquid" },
          { label: "Molecular Weight", value: "184 – 254" }
        ],
        salesSpecTitle: "Sales Specification",
        salesSpecHeaders: ["Particular", "Specific Gravity", "Baume", "Na2O", "SiO2", "Weight Ratio"],
        salesSpecRows: [
          ["1:2.00", "1.56 – 1.66", "51 – 55", "15.50 – 16.50%", "31.0 – 33.50%", "2.0+ /-0.0.5"],
          ["1:2.60", "1.52 – 1.55", "47 – 49", "11.50 – 12.50%", "31.0 – 33.50%", "2.60+ /-0.5"],
          ["1:3.20", "1.38 – 1.41", "39 – 41", "8.50.95.0%", "28.0 – 30.0%", "3.20+ /-0.5"]
        ],
        appsTitle: "Our clients use the sodium silicate liquid for manufacturing following products",
        apps: ["Detergent / Cleaning Compounds", "Pulp and Paper", "Paper Board", "Building Products / Construction", "Textiles", "Ceramics", "Petroleum Processing", "Metals"],
        packagingTitle: "We offer the product for transportation in following packages",
        packaging: ["285-300 Kgs MS Drums", "Full Tanker Load, Flexi Bags", "IBC Tanks", "Bulk Shipping"],
        certs: {
          un: "UN NO. 3253", cas: "CAS NO. 1344-09-8",
          reach: "REACH PRE REGISTRATION NO. 17-2119388445-28-0000",
          reachIssuer: "(Issued by ELC Group, Czech Republic)",
          iso: "ISO CERTIFICATION NO. IN-Q08506"
        }
      },
      potassiumLumps: {
        title: "Potassium Silicate Lumps",
        desc: "At Kiran Global Chem Ltd. we manufacture potassium silicate lumps of the highest quality. Our product is recognised industry-wide for its high performance and seamless integration.",
        appsTitle: "The application of Potassium silicate lump manufactured by our company is largely used in:",
        apps: ["As a flux binder in welding electrode", "Acid proof lining", "Detergents and soaps", "Phosphor binder in T.V. tubes"],
        propertiesTitle: "The physical and chemical properties of potassium silicate lumps manufacture in our company are:",
        properties: [
          { label: "Chemical Formulae", value: "K2O x SiO2" },
          { label: "Appearance", value: "Transparent if it has not absorbed moisture\nTranslucent after absorption of moisture" },
          { label: "Colour", value: "Colourless" },
          { label: "Molecular Weight", value: "215 – 226" }
        ],
        salesSpecTitle: "Sales Specification",
        salesSpecHeaders: ["Property", "Value"],
        salesSpecRows: [
          ["SiO2 %", "67.30% to 68.30%"],
          ["K2O %", "31.00% to 32.00%"],
          ["Total Solids", "> 99%"],
          ["Weight Ratio", "2.05 to 2.20"],
          ["Molar Ratio", "3.20-3.45"]
        ],
        appsTitle2: "Application",
        apps2: ["As a flux binder in welding electrode", "Acid proof lining", "Detergents and soaps", "Phosphor binder in T.V. tubes"],
        packagingTitle: "We offer potassium silicate lumps in following packaging options",
        packaging: "Packing : In HDPE bogs and 1000 Kgs Jumbo bags",
        certs: { un: "UN NO. 3266", cas: "CAS NO. 1312-76-1" },
        precautionsTitle: "Precautions",
        precautionsText: "It irritates the skin and eye depending upon the concentration. Usage of rubber gloves, face shield, nose masks while handling is recommended.",
        molarRatioLabel: "*X = 2.05 – 2.20"
      },
      potassiumLiquid: {
        title: "Potassium Silicate Liquid",
        desc: "Kiran Global Chems Ltd. is a leading brand name in India in the manufacture and supply of potassium silicate liquid. Our industry-grade potassium silicate liquid is available in a range of ratios and concentrations based on the specific business requirements of our clients.",
        propertiesTitle: "The physical and chemical properties of Kiran Potassium silicate liquid are:",
        properties: [
          { label: "Chemical Formulae", value: "K2O x SiO2" },
          { label: "Appearance", value: "Liquid" },
          { label: "Colour", value: "Light Yellow Liquid" },
          { label: "Molecular Weight", value: "215 – 226" }
        ],
        salesSpecTitle: "Sales Specification",
        salesSpecHeaders: ["Particular", "Specific Gravity", "Baume", "K2O", "SiO2", "Weight Ratio"],
        salesSpecRows: [
          ["K66", "1.32 – 1.34", "35 – 37", "10.5 – 12 %", "23 – 26 %", "1:2.1 ± 0.1"],
          ["K76", "1.36 – 1.40", "38 – 42", "12 – 14 %", "26 – 28.5 %", "1:2.1 ± 0.1"]
        ],
        appsTitle: "Our product has industry-wide application in the following areas:",
        apps: ["As a flux binder in welding electrode", "Acid proof lining", "Detergents and soaps", "Phosphor binder in T.V. tubes", "Refractory binders and speciality coating", "Welding rods manufacture"],
        packagingTitle: "We transport the product in following packaging options:",
        packaging: "Packing : Available in 265 – 300 Kgs MS Dums, Full Tanker Load, Flexi Bags, IBC Tanks and also in Bulk Shipping.",
        certs: {
          un: "UN NO. 3266", cas: "CAS NO. 1312-76-1",
          reach: "Reach per registration No. 05-2118043714-45-0000",
          reachIssuer: "(Issued by ELC Group, Czech Republic)",
          iso: "ISO CERTIFICATION No. IN – Q08506"
        },
        molarRatioLabel: "*X = 2.00 – 2.20"
      }
    }
  },

  it: {
    navbar: {
      home: "Pagina Iniziale", about: "Chi Siamo", products: "Prodotti",
      sodium: "Silicati di Sodio", potassium: "Silicati di Potassio", custom: "Formule Personalizzate",
      quality: "Qualità e Sicurezza", careers: "Carriera", contact: "Contatti",
      getEstimate: "Ottieni Preventivo", callUs: "Chiamaci", email: "E-mail",
      workingHours: "Sab - Gio (08:00 - 17:00)", language: "Lingua",
      history: "Storia", award: "Premi", vision: "Visione e Missione",
      chairmans: "",
      sodiumLumps: "LUMPS DI SILICATO DI SODIO",
      sodiumLiquid: "SILICATO DI SODIO LIQUIDO",
      potassiumLumps: "LUMPS DI SILICATO DI POTASSIO",
      potassiumLiquid: "SILICATO DI POTASSIO LIQUIDO",
      management: "Management",
    },
    chairmansMessage: {
      label: "MESSAGGIO DEL PRESIDENTE",
      title: "Visione della Leadership",
      quote1: "La mia ambizione è stabilire Kiran Global Chems Ltd. come leader di mercato nell'industria chimica globale e raggiungere questo obiettivo attraverso tecnologie innovative, migliori pratiche del settore e solidità economica. La mia gioia più grande risiede nel permettere alle persone di realizzare le proprie ambizioni e nel plasmare nuovi talenti in individui di successo. Ogni opportunità che ho di guidare un individuo nel raggiungere i propri obiettivi la abbraccio come un'opportunità per imparare qualcosa di nuovo e crescere personalmente.",
      text1: "A mio avviso, una buona organizzazione è quella che non devia dalla sua curva di crescita nonostante le battute d'arresto temporanee. Sono orgoglioso dei risultati della nostra azienda nel raggiungimento della posizione numero uno in India e fiducioso che continueremo a mantenere questo posto per molto tempo.",
      gitaQuote: "Coloro che compiono il loro lavoro offrendo a me tutti i risultati, che mantengono i loro cuori e le loro menti costanti in me in qualunque cosa facciano, che adorano il loro lavoro, a loro offro la piattaforma. Non dubitare che raggiungeranno inesorabilmente la vetta.",
      gitaVerse: "BHAGWAT GITA 12.6/12.8",
      name: "M S Jain",
      role: "Presidente",
    },
    hero: {
      title: "Produttore Leader di Silicato di Sodio e Potassio in India",
      subtitle: "Affidabili dal 1979 | 32+ Unità di Produzione | Presenza Globale",
      content: "Forniamo soluzioni chimiche innovative, sostenibili e ad alte prestazioni per le industrie di tutto il mondo.",
      explore: "Esplora i Prodotti", contact: "Contattaci",
    },
    about: {
      label: "Chi Siamo",
      titleStart: "Uno dei maggiori produttori indiani di ",
      titleHighlight: "Silicato di Sodio e Potassio",
      description: "Kiran Italia Chemicals S.r.l. è uno dei principali produttori di soluzioni di Silicato di Sodio e Silicato di Potassio. L'azienda è cresciuta fino a diventare un'impresa chimica riconosciuta a livello globale che serve clienti in più continenti.",
      quote: "Il nostro impegno per la qualità, l'innovazione e la sostenibilità ci consente di fornire soluzioni chimiche affidabili per diverse applicazioni industriali.",
      points: ["Oltre 45 anni di esperienza nel settore", "Presenza produttiva globale", "Impianti di produzione avanzati", "Approccio incentrato sul cliente"],
      estYear: "Anno di fondazione",
    },
    common: {
      exploreMore: "Esplora di più", viewDetails: "Visualizza dettagli", learnMore: "Saperne di più",
      readMore: "Leggi di più", readFullArticle: "Leggi l'articolo completo",
    },
    products: {
      label: "Il Nostro Portfolio Prodotti", title: "I Nostri Prodotti",
      items: {
        sodiumLumps: {
          name: "Silicato di Sodio in Lumps", fullName: "Silicato di Sodio in Lumps - Grado Industriale",
          desc: "Presso Kiran Italia Chemicals S.r.l. produciamo lumps di silicato di sodio realizzati con materie prime di prima qualità, con proprietà superiori sia fisiche che chimiche. Siamo leader di mercato in India e il nostro marchio è riconosciuto a livello globale per le sue elevate prestazioni.",
          features: ["Materie Prime ad Elevata Purezza", "Proprietà Chimiche Superiori", "Riconoscimento sul Mercato Globale"],
        },
        sodiumLiquid: {
          name: "Silicato di Sodio Liquido", fullName: "Silicato di Sodio Liquido per Applicazioni Industriali",
          desc: "Kiran Italia Chemicals S.r.l. offre silicato di sodio in forma liquida per specifiche applicazioni industriali in cui le proprietà liquide del prodotto chimico sono altamente efficaci. Produciamo silicati di alta qualità realizzati per soddisfare le aspettative dei nostri clienti.",
          features: ["Efficaci Proprietà Liquide", "Gradi Industriali Personalizzati", "Produzione di Alta Qualità"],
        },
        potassiumLumps: {
          name: "Silicato di Potassio in Lumps", fullName: "Silicato di Potassio in Lumps ad Alte Prestazioni",
          desc: "Kiran Italia Chemicals S.r.l. produce lumps di silicato di potassio della massima qualità. Il nostro prodotto è riconosciuto in tutto il settore per le sue elevate prestazioni e la perfetta integrazione in vari processi industriali.",
          features: ["Integrazione di Processo Fluida", "Riconoscimento in Tutto il Settore", "Elevata Costanza dei Lotti"],
        },
        potassiumLiquid: {
          name: "Silicato di Potassio Liquido", fullName: "Silicato di Potassio Liquido Premium",
          desc: "Kiran Italia Chemicals S.r.l. è un marchio leader in India nella produzione e fornitura di silicato di potassio liquido. Il nostro silicato di potassio di grado industriale è disponibile in una gamma di rapporti e concentrazioni.",
          features: ["Rapporti e Concentrazioni Versatili", "Qualità del Marchio Leader Indiano", "Soluzioni Chimiche Ottimizzate"],
        },
      },
    },
    whyChooseUs: {
      label: "PERCHÉ NOI", title: "Perché Sceglierci",
      description: "Presso Kiran Italia Chemicals, combiniamo decenni di esperienza nel settore con una tecnologia di produzione all'avanguardia per fornire soluzioni di silicato di qualità superiore su misura per una vasta gamma di applicazioni industriali. Ecco perché i clienti ci scelgono.",
      products: ["Silicato di Sodio Liquido", "Silicato di Sodio Solido", "Silicato di Potassio Liquido", "Silicato di Potassio Solido", "Meta Silicato di Sodio", "Silice Colloidale", "Gel di Silice", "Silicato di Sodio Alcalino"],
      trustPoints: {
        legacy: { title: "Eredità di Fiducia", desc: "Con oltre 45 anni di esperienza nel settore dei silicati di sodio e potassio, abbiamo costruito una solida base di fiducia e affidabilità in tutta l'India e oltre." },
        certified: { title: "Certificato", desc: "Le nostre operazioni sono certificate ISO, garantendo qualità costante, sicurezza e prestazioni in ogni prodotto che produciamo." },
        quality: { title: "Impegno per la Qualità", desc: "Ogni lotto è sottoposto a rigorosi controlli di qualità per garantire che i nostri clienti ricevano solo il meglio. La nostra dedizione alla qualità promuove partnership a lungo termine." },
      },
      isoLabel: "Certificato ISO", yearsLabel: "45+ Anni", excellenceLabel: "di Eccellenza nel Settore",
    },
    industries: {
      label: "Industrie che Serviamo", title: "La Nostra Portata Industriale",
      contactExperts: "Contatta gli Esperti", exploreSolutions: "Esplora le Soluzioni",
      items: {
        soap: { name: "Sapone e Detergenti", desc: "Silicato di sodio ad alte prestazioni utilizzato come builder e filler in saponi, detergenti e formulazioni per la pulizia." },
        water: { name: "Trattamento delle Acque", desc: "Composti di silicato avanzati per l'inibizione della corrosione e il controllo del pH negli impianti di trattamento delle acque industriali e municipali." },
        construction: { name: "Costruzione e Cemento", desc: "Soluzioni di silicato di sodio utilizzate come indurenti per calcestruzzo, agenti impermeabilizzanti e stabilizzatori del suolo in progetti infrastrutturali." },
        agriculture: { name: "Agricoltura", desc: "Soluzioni a base di silicio che migliorano la forza delle colture, la resistenza alla siccità e l'assorbimento dei nutrienti per una migliore resa agricola." },
        ceramics: { name: "Ceramica e Refrattari", desc: "Leganti di silicato che forniscono resistenza alle alte temperature per piastrelle in ceramica, rivestimenti refrattari e arredamento per forni." },
        petroleum: { name: "Petrolio e Trivellazione", desc: "Fluidi di silicato specializzati utilizzati come inibitori di scisto e stabilizzatori di pozzi nelle operazioni di trivellazione di petrolio e gas." },
        foundries: { name: "Fonderie", desc: "Leganti a base di silicato di sodio che forniscono una resistenza superiore dello stampo e accuratezza dimensionale nelle operazioni di colata di metalli." },
        mining: { name: "Minerario e Lavorazione", desc: "Tecnologie chimiche che supportano la flottazione efficiente dei minerali, la lavorazione del minerale e la gestione delle acque reflue nell'attività mineraria." },
        adhesives: { name: "Adesivi e Rivestimenti", desc: "Adesivi ai silicati ad alte prestazioni e rivestimenti funzionali che forniscono proprietà di incollaggio, sigillatura e protezione." },
      },
    },
    visionMission: {
      label: "VISIONE E MISSIONE",
      visionTitle: "La Nostra Visione",
      visionHighlight: "La visione unitaria dell'azienda",
      visionText: "La visione unitaria dell'azienda è quella di diventare un'organizzazione di fama mondiale che offra prodotti e servizi sapientemente realizzati, ottenendo i massimi rendimenti per i nostri stakeholder e fornendo il miglior servizio clienti.",
      missionTitle: "La Nostra Missione",
      missions: [
        "Nutrire l'impegno per la qualità e la coerenza come chiave per la sostenibilità",
        "Dare il massimo valore per il denaro a tutti i nostri clienti",
        "Facilitare i nostri dipendenti con opportunità per raggiungere il loro massimo potenziale",
        "Creare infrastrutture moderne e logistica senza soluzione di continuità per soddisfare le richieste dei nostri clienti in tempo",
        "Innovare e adottare i metodi più recenti per il massimo ROI",
        "Essere un partner commerciale per il commercio equo e solidale"
      ],
      strengthTitle: "La Nostra Forza",
      strengthText1: "La forza della nostra azienda risiede nelle pratiche consolidate che vengono aggiornate con le mutevoli esigenze del settore e la nostra duratura qualità dei prodotti e dei servizi. Con la nostra visione di crescita globale, ci siamo affermati in tutto il mondo.",
      strengthText2: "Abbiamo costantemente introdotto nuovi prodotti nella nostra gamma di offerte e moltiplicato la capacità per soddisfare la crescente domanda dei nostri prodotti. Siamo impegnati a mantenere la nostra posizione di leadership nel settore e stiamo lavorando duramente per penetrare regioni inesplorate in tutto il mondo, mantenendo i nostri elevati standard di servizio esistenti."
    },
    globalNetwork: {
      label: "Presenza Globale", title: "La Nostra Rete Globale",
      description: "Serviamo clienti in tutti i continenti con le nostre soluzioni chimiche di livello mondiale. La nostra portata si espande attraverso una solida rete di distribuzione e produzione.",
    },
    solidLiquid: {
      title: "STATO SOLIDO VS LIQUIDO", solidTitle: "STATO SOLIDO (LUMPS)",
      solidContent: "Vetro solubile in scaglie (Cullet). Rapporti molari da 1.6 a 3.5 secondo le richieste del cliente. Ideale per l'esportazione e la dissoluzione locale. Imballaggio in big bags e sfuso, sia in nave che in contenitori.",
      liquidTitle: "STATO LIQUIDO",
      liquidContent: "Soluzioni acquose filtrate e non, con rapporti molari da 1.6 a 3.5. Densità e viscosità calibrate per applicazioni specifiche. Disponibile in cisterne, IBC o flexibag da 27 tonnellate.",
    },
    advancedChemicals: {
      title: "SOLUZIONI CHIMICHE AVANZATE",
      potassium: { title: "SILICATO DI POTASSIO", desc: "Indispensabile per elettrodi di saldatura e pitture minerali traspiranti." },
      labsa: { title: "LABSA / SLES", desc: "Tensioattivi fondamentali per l'industria della detergenza." },
      geopolymers: { title: "GEOPOLIMERI", desc: "Innovazione \"Green\" per l'edilizia: riduzione delle emissioni di CO₂ dell'80%." },
    },
    sustainability: {
      label: "Sostenibilità e Responsabilità",
      title: "Costruire un Futuro Sostenibile — ", titleHighlight: "Il Nostro Impegno",
      description: "Siamo impegnati in pratiche di produzione ambientalmente responsabili che riducono l'impatto ambientale massimizzando l'efficienza. La nostra attenzione all'innovazione sostenibile aiuta le industrie a ottenere prestazioni migliori con costi ambientali inferiori.",
      card1Title: "Efficienza delle Risorse", card1Desc: "Operazioni ottimizzate",
      card2Title: "Emissioni Ridotte", card2Desc: "Produzione pulita",
    },
    leadership: {
      label: "Guidati dall'Esperienza", title: "Team di Direzione",
      leaders: [
        { name: "M. S. Jain", role: "Fondatore e Visionario", description: "Fondatore e leader visionario che guida la crescita a lungo termine dell'organizzazione." },
        { name: "Atul Jain", role: "Iniziative Strategiche", description: "Guida le iniziative strategiche e l'espansione dell'attività." },
        { name: "N. C. Rufus", role: "Operazioni e Innovazione", description: "Supervisiona le operazioni, l'innovazione e il successo dei clienti." },
      ],
    },
    testimonials: {
      label: "Feedback dei Clienti", title: "Le ", titleHighlight: "Storie di Successo dei Nostri Clienti",
      description: "Scopri l'eccellenza senza compromessi che ci ha resi un partner di fiducia nella chimica industriale per oltre 45 anni.",
      items: [
        { name: "Kirshnaraj", company: "Pallvi Powertech", text: "Volevo solo ringraziarvi per il servizio che Kiran global ci offre. La fiducia che abbiamo nei nostri fornitori è fondamentale per noi, specialmente quando c'è la possibilità che il nome dei nostri clienti entri in gioco.”", image: "/Krishnaraj1.webp" },
        { name: "Moosa", company: "METL", text: "Collaboriamo con Kiran Global dal 2011. Durante questo periodo, Kiran Global ci ha fornito un eccellente servizio clienti, informazioni tempestive e affidabili e prodotti di qualità.”", image: "/Moosa1.webp" },
        { name: "Keyur", company: "TTSPL", text: "Kiran Global offre una qualità eccezionale, un servizio clienti ed è un fornitore estremamente affidabile. Volevo solo prendermi questo tempo per ringraziarvi per il continuo ottimo servizio.”", image: "/keyur.webp" },
      ],
    },
    blogs: {
      label: "Centro Media", title: "Ultime Novità e Innovazioni del Settore",
      knowledgeHub: "Centro di Conoscenza", updatedWeekly: "Aggiornato Settimanalmente", readFullArticle: "Leggi l'articolo completo",
      items: [
        { title: "Esportare l'Eccellenza: Come Kiran Global Consegna Qualità in Tutto il Mondo", date: "23 Agosto 2025", category: "ESPORTAZIONI", author: "Ing. Samy" },
        { title: "Ingegneria Eco-Friendly: Il Ruolo dei Silicati nella Produzione Sostenibile", date: "5 Novembre 2025", category: "SOSTENIBILITÀ", author: "Team Globale" },
        { title: "Il Silicato di Sodio in Azione: Come un Composto Alimenta Più Industrie", date: "5 Settembre 2025", category: "APPLICAZIONI", author: "Dip. Ricerca" },
      ],
    },
    faq: {
      label: "Base di Conoscenza", titleStart: "Hai delle ", titleHighlight: "Domande?", titleEnd: "Abbiamo le Risposte.",
      description: "Tutto ciò che devi sapere sulle nostre soluzioni di silicato ad alte prestazioni e sui processi di produzione industriale.",
      supportTitle: "Supporto Tecnico", supportDesc: "Assistenza esperta dedicata per tutte le tue esigenze di formulazione chimica complessa.", supportBtn: "Ottieni Aiuto Esperto",
      items: [
        { question: "Qual è la principale area di competenza di Kiran Global?", answer: "Kiran Global è specializzata nella produzione e distribuzione di silicati industriali di alta qualità, inclusi Silicati di Sodio e di Potassio, per settori come detergenti, costruzioni e trattamento delle acque." },
        { question: "Come posso richiedere una formulazione personalizzata?", answer: "Puoi richiedere una formulazione personalizzata contattando il nostro team tecnico tramite il modulo 'Richiedi un Preventivo' sulla nostra pagina dei contatti o inviandoci un'email con i tuoi requisiti specifici." },
        { question: "I vostri prodotti sono eco-compatibili e sostenibili?", answer: "Sì, la sostenibilità è al centro della nostra attività. Implementiamo processi produttivi avanzati che minimizzano l'impatto ambientale e ci concentriamo sullo sviluppo di soluzioni di silicato eco-compatibili." },
        { question: "Qual è il tempo di consegna tipico per grandi ordini industriali?", answer: "I tempi di consegna variano in base al volume dell'ordine e ai requisiti di personalizzazione, ma in genere vanno da 2 a 4 settimane. Il nostro team logistico collabora con i clienti per garantire la consegna puntuale." },
        { question: "Fornite supporto tecnico per l'applicazione del prodotto?", answer: "Assolutamente sì. Il nostro esperto team di supporto tecnico è disponibile per assisterti nella selezione del prodotto, nei metodi di applicazione e nella risoluzione dei problemi per garantire risultati ottimali." },
      ],
    },
    footer: {
      companyDesc: "Kiran Italia Chemicals S.r.l. è un produttore leader di silicati industriali, dedicato alla fornitura di silicati di Sodio e Potassio ad alta purezza. I nostri impianti all'avanguardia e l'impegno per l'innovazione garantiscono soluzioni di prim'ordine per le industrie globali.",
      quickLinksTitle: "Link Rapidi",
      quickLinks: [
        { name: "Home", href: "/" }, { name: "Chi Siamo", href: "/about" },
        { name: "Storia", href: "/about/history" }, { name: "Premi", href: "/about/award" },
        { name: "Prodotti", href: "/products" },
        { name: "Brochure", href: "/brochure" }, { name: "Qualità e Sicurezza", href: "/quality" },
        { name: "Carriera", href: "/careers" }, { name: "Contattaci", href: "/contact" },
      ],
      productsTitle: "I Nostri Prodotti",
      products: ["Silicato di Sodio in Lumps", "Silicato di Potassio in Lumps", "Silicato di Sodio Liquido", "Silicato di Potassio Liquido"],
      reachUsTitle: "Contattaci",
      copyright: "©2025 | Kiran Italia Chemicals S.r.l.",
      rights: "Tutti i diritti riservati", designedBy: "Progettato da iStudio Technologies",
      privacyPolicy: "Informativa sulla privacy", termsOfService: "Termini di servizio",
      address: "Motta Sant'Anastasia (CT) - Italia",
    },
    certifications: {
      label: "Certificazioni e Qualità",
      title: "Basato sugli Standard.",
      titleHighlight: "Guidato dalla Fiducia.",
      description: "Seguiamo rigorosi protocolli di ispezione e ambientali per garantire che ogni lotto soddisfi i più elevati standard globali per purezza e prestazioni.",
      items: [
        { title: "Produzione conforme ISO", desc: "Stretta aderenza agli standard di produzione internazionali." },
        { title: "Processi eco-compatibili", desc: "Impegnati nella produzione sostenibile e nel minimo spreco." },
        { title: "Sicurezza delle forniture globali", desc: "Gestione sicura e consegna tempestiva in tutti i continenti." }
      ],
      guaranteed: "Qualità Garantita",
    },
    productDetails: {
      sodiumLumps: {
        title: "Silicato di Sodio in Lumps",
        desc: "Presso Kiran Global Chems Ltd. produciamo lumps di silicato di sodio realizzati con materie prime di prima qualità e con proprietà superiori, sia fisiche che chimiche. Siamo leader di mercato in India e il nostro marchio è riconosciuto a livello globale per le sue elevate prestazioni. I nostri clienti principali appartengono ai seguenti settori:",
        industryTitle: "Settori Industriali dei Clienti",
        industries: ["Soil Grouting", "Silice e prodotti chimici affini", "Catalizzatori", "Produzione di saponi e detersivi", "Lavorazione tessile", "Carta e pasta di legno", "Fonderie", "Adesivi per l'industria della carta e del cartone", "Produzione di pigmenti", "Impermeabilizzazione", "Cemento"],
        propertiesTitle: "Proprietà Fisiche e Chimiche del Silicato di Sodio in Lumps",
        properties: [
          { label: "Formula Chimica", value: "Na2O x SiO2" },
          { label: "Aspetto", value: "Solido Lumps" },
          { label: "Colore", value: "Da incolore a azzurro chiaro" },
          { label: "Peso Molecolare", value: "184 – 254" }
        ],
        salesSpecTitle: "Specifiche di Vendita",
        salesSpecHeaders: ["Particolare", "Na2O", "SiO2", "Solidi Totali", "Rapporto Peso"],
        salesSpecRows: [
          ["1:2.00", "32.50 – 33.00%", "66.50 – 67.00%", "> 99.0%", "1:2.00 +/- 0.1"],
          ["1:2.20", "30.50 – 31.50%", "67.50 – 68.00%", "> 99.0%", "1:2.20 +/- 0.1"],
          ["1:3.20", "23.50 – 24.50%", "75.50 – 76.50%", "> 99.0%", "1:3.20 +/- 0.1"],
          ["1:3.40", "22.50 -23.0%", "76.50 – 77.0%", "> 99.0%", "1:3.40 +/- 0.1"]
        ],
        appsTitle: "I lumps di silicato di sodio sono utilizzati dai nostri clienti per le seguenti applicazioni",
        apps: ["Detersivi / Composti per la pulizia", "Cartone", "Prodotti per l'edilizia / Costruzione", "Ceramica", "Lavorazione del petrolio", "Metalli"],
        packagingTitle: "Trasportiamo il prodotto nelle seguenti opzioni di imballaggio",
        packaging: ["Fusti MS da 285-300 Kg", "Carico completo di autocisterna", "Flexi Bags", "Serbatoi IBC", "Spedizione sfusa"],
        certs: {
          un: "UN NO. 3253", cas: "CAS NO. 1344-09-8",
          reach: "REACH PRE-REGISTRATION NO. 17-2119388445-28-0000",
          reachIssuer: "(Rilasciato da ELC Group, Repubblica Ceca)",
          iso: "ISO CERTIFICATION NO. IN-Q08506"
        }
      },
      sodiumLiquid: {
        title: "Silicato di Sodio Liquido",
        desc1: "Presso Kiran Global Chem Ltd. offriamo silicato di sodio in forma liquida per specifiche applicazioni industriali in cui la proprietà liquida del prodotto chimico è altamente efficace. Produciamo silicati di alta qualità realizzati per soddisfare le aspettative dei nostri clienti. Per esigenze speciali, personalizziamo il liquido in modo che possa essere integrato con la massima efficacia con i prodotti dei nostri clienti.",
        desc2: "Produciamo silicati di sodio liquidi in diversi rapporti molari, regolando così il livello alcalino nei silicati. Il nostro team di ricerca consiglia i clienti sulla scelta della combinazione più appropriata per la loro applicazione industriale.",
        propertiesTitle: "Proprietà fisiche e commerciali del silicato di sodio liquido.",
        properties: [
          { label: "Formula Chimica", value: "Na2O x SiO2" },
          { label: "Aspetto", value: "Liquido" },
          { label: "Colore", value: "Liquido giallo chiaro" },
          { label: "Peso Molecolare", value: "184 – 254" }
        ],
        salesSpecTitle: "Specifiche di Vendita",
        salesSpecHeaders: ["Particolare", "Peso Specifico", "Baume", "Na2O", "SiO2", "Rapporto Peso"],
        salesSpecRows: [
          ["1:2.00", "1.56 – 1.66", "51 – 55", "15.50 – 16.50%", "31.0 – 33.50%", "2.0+ /-0.0.5"],
          ["1:2.60", "1.52 – 1.55", "47 – 49", "11.50 – 12.50%", "31.0 – 33.50%", "2.60+ /-0.5"],
          ["1:3.20", "1.38 – 1.41", "39 – 41", "8.50.95.0%", "28.0 – 30.0%", "3.20+ /-0.5"]
        ],
        appsTitle: "I nostri clienti utilizzano il silicato di sodio liquido per la produzione dei seguenti prodotti",
        apps: ["Detersivi / Composti per la pulizia", "Pasta di legno e carta", "Cartone", "Prodotti per l'edilizia / Costruzione", "Tessile", "Ceramica", "Lavorazione del petrolio", "Metalli"],
        packagingTitle: "Offriamo il prodotto per il trasporto nei seguenti imballaggi",
        packaging: ["Fusti MS da 285-300 Kg", "Carico completo di autocisterna, Flexi Bags", "Serbatoi IBC", "Spedizione sfusa"],
        certs: {
          un: "UN NO. 3253", cas: "CAS NO. 1344-09-8",
          reach: "REACH PRE-REGISTRATION NO. 17-2119388445-28-0000",
          reachIssuer: "(Rilasciato da ELC Group, Repubblica Ceca)",
          iso: "ISO CERTIFICATION NO. IN-Q08506"
        }
      },
      potassiumLumps: {
        title: "Silicato di Potassio in Lumps",
        desc: "Presso Kiran Global Chem Ltd. produciamo lumps di silicato di potassio della massima qualità. Il nostro prodotto è riconosciuto in tutto il settore per le sue elevate prestazioni e la perfetta integrazione.",
        appsTitle: "L'applicazione del silicato di potassio in lumps prodotto dalla nostra azienda è ampiamente utilizzata in:",
        apps: ["Come legante per flussi negli elettrodi di saldatura", "Rivestimento antiacido", "Detersivi e saponi", "Legante di fosfori nei tubi TV"],
        propertiesTitle: "Le proprietà fisiche e chimiche dei lumps di silicato di potassio prodotti nella nostra azienda sono:",
        properties: [
          { label: "Formula Chimica", value: "K2O x SiO2" },
          { label: "Aspetto", value: "Trasparente se non ha assorbito umidità\nTraslucido dopo l'assorbimento di umidità" },
          { label: "Colore", value: "Incolore" },
          { label: "Peso Molecolare", value: "215 – 226" }
        ],
        salesSpecTitle: "Specifiche di Vendita",
        salesSpecHeaders: ["Proprietà", "Valore"],
        salesSpecRows: [
          ["SiO2 %", "67.30% to 68.30%"],
          ["K2O %", "31.00% to 32.00%"],
          ["Solidi Totali", "> 99%"],
          ["Rapporto Peso", "2.05 to 2.20"],
          ["Rapporto Molare", "3.20-3.45"]
        ],
        appsTitle2: "Applicazione",
        apps2: ["Come legante per flussi negli elettrodi di saldatura", "Rivestimento antiacido", "Detersivi e saponi", "Legante di fosfori nei tubi TV"],
        packagingTitle: "Offriamo sacchi di silicato di potassio nelle seguenti opzioni di imballaggio",
        packaging: "Imballaggio: In sacchi di HDPE e sacchi Jumbo da 1000 Kg",
        certs: { un: "UN NO. 3266", cas: "CAS NO. 1312-76-1" },
        precautionsTitle: "Precauzioni",
        precautionsText: "Irrita la pelle e gli occhi a seconda della concentrazione. Si raccomanda l'uso di guanti di gomma, visiera protettiva e maschere nasali durante la manipolazione.",
        molarRatioLabel: "*X = 2.05 – 2.20"
      },
      potassiumLiquid: {
        title: "Silicato di Potassio Liquido",
        desc: "Kiran Global Chems Ltd. è un marchio leader in India nella produzione e fornitura di silicato di potassio liquido. Il nostro silicato di potassio di grado industriale è disponibile in una gamma di rapporti e concentrazioni basati sulle specifiche esigenze aziendali dei nostri clienti.",
        propertiesTitle: "Le proprietà fisiche e chimiche del silicato di potassio liquido Kiran sono:",
        properties: [
          { label: "Formula Chimica", value: "K2O x SiO2" },
          { label: "Aspetto", value: "Liquido" },
          { label: "Colore", value: "Liquido giallo chiaro" },
          { label: "Peso Molecolare", value: "215 – 226" }
        ],
        salesSpecTitle: "Specifiche di Vendita",
        salesSpecHeaders: ["Particolare", "Peso Specifico", "Baume", "K2O", "SiO2", "Rapporto Peso"],
        salesSpecRows: [
          ["K66", "1.32 – 1.34", "35 – 37", "10.5 – 12 %", "23 – 26 %", "1:2.1 ± 0.1"],
          ["K76", "1.36 – 1.40", "38 – 42", "12 – 14 %", "26 – 28.5 %", "1:2.1 ± 0.1"]
        ],
        appsTitle: "Il nostro prodotto trova applicazione a livello industriale nelle seguenti aree:",
        apps: ["Come legante per flussi negli elettrodi di saldatura", "Rivestimento antiacido", "Detersivi e saponi", "Legante di fosfori nei tubi TV", "Leganti refrattari e rivestimenti speciali", "Produzione di bacchette per saldatura"],
        packagingTitle: "Trasportiamo il prodotto nelle seguenti opzioni di imballaggio:",
        packaging: "Imballaggio: disponibile in fusti MS da 265 – 300 Kg, carico completo di autocisterna, Flexi Bags, serbatoi IBC e anche in spedizione sfusa.",
        certs: {
          un: "UN NO. 3266", cas: "CAS NO. 1312-76-1",
          reach: "Reach pre per registration No. 05-2118043714-45-0000",
          reachIssuer: "(Rilasciato da ELC Group, Repubblica Ceca)",
          iso: "ISO CERTIFICATION No. IN – Q08506"
        },
        molarRatioLabel: "*X = 2.00 – 2.20"
      }
    }
  },
};
