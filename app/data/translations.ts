export interface TranslationData {
  navbar: {
    home: string; about: string; industries: string; products: string; sodium: string; potassium: string;
    custom: string; careers: string; contact: string; blog: string; getEstimate: string;
    callUs: string; email: string; workingHours: string; language: string;
    history: string; award: string; vision: string; chairmans: string; management: string;
    sodiumLumps: string; sodiumLiquid: string; potassiumLumps: string; potassiumLiquid: string;
    indDropdown: {
      soap: string; cosmetics: string; agriculture: string; timber: string; adhesives: string;
      auto: string; food: string; water: string; foundries: string; petroleum: string;
      concrete: string; chemical: string; metals: string; ceramics: string; mining: string;
    }
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
    quote: string; points: string[]; estYear: string; globalLabel: string;
  };
  common: {
    exploreMore: string; viewDetails: string; learnMore: string; readMore: string; readFullArticle: string;
    home: string; industriesWeServe: string; products: string;
  };
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
    label: string; title: string; reachLabel: string; contactExperts: string; exploreSolutions: string;
    items: {
      soap: { name: string; desc: string }; water: { name: string; desc: string };
      construction: { name: string; desc: string }; agriculture: { name: string; desc: string };
      ceramics: { name: string; desc: string }; petroleum: { name: string; desc: string };
      foundries: { name: string; desc: string }; mining: { name: string; desc: string };
      adhesives: { name: string; desc: string };
      cosmetics: { name: string; desc: string };
      timber: { name: string; desc: string };
    };
  };
  visionMission: {
    label: string;
    visionTitle: string; visionText: string; visionHighlight: string;
    missionTitle: string; missions: string[];
    strengthTitle: string; strengthText1: string; strengthText2: string;
  };
  globalNetwork: { label: string; title: string; description: string };
  strategicHubs: { 
    label: string; title: string; description: string;
    egypt: string; india: string; southAfrica: string; uae: string;
    northAfrica: string; southAsia: string; southernAfrica: string; middleEast: string;
  };

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
    latest: string; insights: string; industryNews: string; viewAll: string;
    minRead: string; by: string; exploreArticle: string; continueReading: string;
    leaveComment: string; upToDate: string; heroTitle: string; heroDesc: string;
    items: {
      title: string;
      date: string;
      category: string;
      author: string;
      image: string;
      summary: string;
      slug: string;
      content?: {
        type: 'text' | 'image' | 'list' | 'quote' | 'link';
        title?: string;
        text?: string;
        src?: string;
        alt?: string;
        items?: string[];
        url?: string;
      }[];
      tags?: string[];
    }[];
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
  aboutPage: {
    heroTitle: string; heroSubtitle: string;
    journeyLabel: string; journeyTitle: string; journeyText1: string; journeyText2: string;
    founderName: string; founderRole: string;
    stat1Label: string; stat1Value: string; stat1Unit: string;
    stat2Label: string; stat2Value: string; stat2Unit: string;
    stat3Label: string; stat3Value: string; stat3Unit: string;
    stat4Label: string; stat4Value: string; stat4Unit: string;
    supplyTitle: string; supplyQuote: string;
    productRangeTitle: string; productRangeDesc: string;
    productCategories: string[];
    techTitle: string; techDesc: string;
    workforceTitle: string; workforceDesc: string;
    workforceQuote: string; rdLabel: string; rdSubLabel: string;
    coreValuesTitle: string;
    coreValues: string[];
  };
  historyPage: {
    heroLabel: string; heroTitle: string; heroQuote: string;
    beginningLabel: string; foundingTitle: string; foundingText: string;
    growthText: string;
    companyTitle: string; companyText1: string; companyText2: string;
    sustainLabel: string; sustainTitle: string;
    stat1: string; stat2: string;
    founderName: string; founderRole: string;
  };
  awardPage: {
    heroTitle: string; heroSubtitle: string;
    milestoneLabel: string; projectTitle: string; projectHeadline: string;
    projectDesc: string; techExcTitle: string; techExcDesc: string;
    standardsTitle: string;
    awards: { title: string; desc: string }[];
    qualityTitle: string; qualityGuarantee: string; qualityInspected: string;
  };
  managementPage: {
    heroLabel: string; heroTitle: string; heroDesc: string;
    leadershipLabel: string; managementTitle: string; executiveLabel: string;
    leaders: { name: string; role: string; badge: string; bio: string; stat1Label: string; stat1Value: string; stat2Label: string; stat2Value: string }[];
    values: { title: string; desc: string }[];
  };
  careersPage: {
    heroLabel: string; heroTitle1: string; heroTitle2: string; heroDesc: string;
    exploreBtn: string; satisfactionRate: string; satisfactionLabel: string;
    cultureTitle1: string; cultureTitle2: string; cultureDesc: string;
    ctaTitle: string; ctaDesc: string; ctaBtn: string;
    benefits: { title: string; desc: string }[];
  };
  contactPage: {
    heroLabel: string; heroTitle1: string; heroTitle2: string; heroDesc: string;
    callTitle: string; emailTitle: string; officeTitle: string; officeAddress: string;
    availabilityLabel: string; monFri: string; saturday: string;
    formTitle1: string; formTitle2: string; formRequired: string;
    fieldName: string; fieldEmail: string; fieldPhone: string; fieldInquiry: string; fieldMessage: string;
    inquiryOptions: string[];
    submitBtn: string; namePlaceholder: string; emailPlaceholder: string;
    phonePlaceholder: string; messagePlaceholder: string;
    mapTitle1: string; mapTitle2: string; mapDesc: string;
    visitOfficeLabel: string;
  };
  chairmanPage: {
    heroSubtitle: string;
    value1Title: string; value1Desc: string;
    value2Title: string; value2Desc: string;
    value3Title: string; value3Desc: string;
    marketLeaderBadge: string; marketLeaderSub: string;
  };
  industryDetail: {
    backToIndustries: string; comingSoon: string; browseIndustries: string;
    items: Record<string, {
      title: string; heroHeading: string; description: string; subHeading: string;
      contextText: string; benefits: string[]; images: string[];
    }>;
  };
  blogDetail: {
    articleNotFound: string; moveOrArchived: string; returnToInsights: string;
    relatedInsights: string; shareArticle: string;
  };
  whatsapp: {
    chatWithUs: string;
    message: string;
  };
}

export const translations: Record<string, TranslationData> = {
  en: {
    navbar: {
      home: "Home", about: "About Us", industries: "Industries We Serve", products: "Products",
      sodium: "Sodium Silicates", potassium: "Potassium Silicates", custom: "Custom Formulas",
      careers: "Careers", contact: "Contact", blog: "Blog",
      getEstimate: "Get Estimate", callUs: "Call Us", email: "Email",
      workingHours: "Sat - Thu (08:00 - 17:00)", language: "Language",
      history: "History", award: "Awards", vision: "Vision & Mission",
      chairmans: "Chairman's Message",
      indDropdown: {
        soap: "Soap & Detergents",
        cosmetics: "Cosmetics",
        agriculture: "Agriculture",
        timber: "Timber Treatment",
        adhesives: "Adhesives",
        auto: "Automotive Repair",
        food: "Food Industry",
        water: "Water Treatment",
        foundries: "Foundries",
        petroleum: "Petroleum & Oil Drilling",
        concrete: "Concrete and General",
        chemical: "Chemical Injection",
        metals: "Metals",
        ceramics: "Ceramics & Refractory",
        mining: "Mining and Mineral Processing"
      },
      sodiumLumps: "SODIUM SILICATE LUMPS",
      sodiumLiquid: "SODIUM SILICATE LIQUID",
      potassiumLumps: "POTASSIUM SILICATE LUMPS",
      potassiumLiquid: "POTASSIUM SILICATE LIQUID",
      management: "Management",
    },
    chairmansMessage: {
      label: "CHAIRMAN'S MESSAGE",
      title: "Vision from the Leadership",
      quote1: "My ambition is to establish Kiran Italia Chemicals S.r.l as a market leader in the global chemical industry and to achieve this goal through innovative technologies, industry best practices and economic soundness. My greatest joy lies in enabling people achieve their ambitions and moulding fresh talent into successful individuals. Every opportunity I get to guide an individual in attaining their goals I embrace as an opportunity to learn something new and grow personally.",
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
      description: "For more than 40 years, Kiran Italia Chemicals has been a leading manufacturer of sodium silicate and potassium silicate solutions. The company has grown into a globally recognized chemical company serving customers on multiple continents.",
      quote: "Our commitment to quality, innovation, and sustainability enables us to deliver reliable chemical solutions for diverse industrial applications.",
      points: ["India’s leading silicate manufacturer ", "Among the Top 5 globally ", "32 manufacturing facilities ", "300K+ tons annual capacity", "Presence across 45+ countries"],
      estYear: "Est. Year", globalLabel: "GLOBAL",
    },
    common: {
      exploreMore: "Explore More", viewDetails: "View Details", learnMore: "Learn More",
      readMore: "Read More", readFullArticle: "Read Full Article",
      home: "Home", industriesWeServe: "Industries we serve", products: "Products",
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
      label: "Global Industries", title: "Industrial Reach", reachLabel: "Reach", contactExperts: "Contact Our Experts", exploreSolutions: "Explore Solutions",
      items: {
        soap: { name: "Soap & Detergents", desc: "High-performance sodium silicate used as a builder and filler in soaps, detergents, and cleaning formulations." },
        cosmetics: { name: "Cosmetics", desc: "High-purity silicate stabilizers and functional additives for high-end skin, hair, and oral care products." },
        agriculture: { name: "Agriculture", desc: "Silicon-based solutions that enhance crop strength, drought resistance, and nutrient uptake for improved agricultural yields." },
        timber: { name: "Timber Treatment", desc: "Mineral-based preservation and fireproofing treatments that extend the life and safety of industrial timber products." },
        adhesives: { name: "Adhesives & Coatings", desc: "High-performance silicate adhesives and functional coatings providing bonding, sealing, and protective properties." },
        water: { name: "Water Treatment", desc: "Advanced silicate compounds for corrosion inhibition and pH control in industrial and municipal water treatment plants." },
        construction: { name: "Construction & Concrete", desc: "Sodium silicate solutions used as concrete hardeners, waterproofing agents, and soil stabilizers in infrastructure projects." },
        ceramics: { name: "Ceramics & Refractories", desc: "Silicate binders providing high-temperature resistance for ceramic tiles, refractory linings, and kiln furniture." },
        petroleum: { name: "Petroleum & Oil Drilling", desc: "Specialized silicate fluids used as shale inhibitors and wellbore stabilizers in oil & gas drilling operations." },
        foundries: { name: "Foundries", desc: "Sodium silicate-based binders providing superior mold strength and dimensional accuracy in metal casting operations." },
        mining: { name: "Mining & Mineral Processing", desc: "Chemical technologies supporting efficient mineral flotation, ore processing, and waste water management in mining." },
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
    strategicHubs: {
      label: "Global Reach",
      title: "Our Primary Strategic Hubs",
      description: "Connecting vital markets in Egypt, India, South Africa, and the UAE through our advanced chemical infrastructure and logistics network.",
      egypt: "Egypt", india: "India", southAfrica: "South Africa", uae: "UAE",
      northAfrica: "North Africa", southAsia: "South Asia", southernAfrica: "Southern Africa", middleEast: "Middle East"
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
        { name: "Kirshnaraj", company: "Pallvi Powertech", text: "Just wanted to say thank you for the service that Kiran Italia Chemicals do for us. The trust that we have in our vendors is crucial for us especially when there is the chance of our customers name coming into play.”", image: "/Krishnaraj1.webp" },
        { name: "Moosa", company: "METL", text: "We have been doing business with Kiran Italia Chemicals since 2011. During this time, Kiran Italia Chemicals has provided us with excellent customer service, timely and reliable information and quality products.”", image: "/Moosa1.webp" },
        { name: "Keyur", company: "TTSPL", text: "Kiran Italia Chemicals provides outstanding quality, customer service and is an extremely reliable supplier.I just wanted to take this time to say thanks for the continued great service ”", image: "/keyur.webp" },
      ],
    },
    blogs: {
      label: "Media Center", title: "Latest Insights & Industry Innovations",
      knowledgeHub: "Knowledge Hub", updatedWeekly: "Updated Weekly", readFullArticle: "Read Full Article",
      latest: "Latest", insights: "Insights", industryNews: "Industry News", viewAll: "View All Posts",
      minRead: "Min Read", by: "By", exploreArticle: "Explore Article", continueReading: "Continue Reading",
      leaveComment: "Leave a Comment", upToDate: "You're up to date",
      heroTitle: "Industry Insights & Strategic Updates",
      heroDesc: "Exploring the evolution of global chemistry through technical excellence, market analysis, and sustainable innovation.",
      items: [
        {
          title: "Global Sodium Silicate Industry 2016 Market Research Report",
          date: "May 15, 2016",
          category: "RESEARCH",
          author: "admin",
          image: "/Industrial-pic.webp",
          summary: "Summary: The Global Sodium Silicate Industry 2016 Market Research Report is a professional and in-depth study on the current state of the Sodium Silicate Industry. Firstly, the report provides a basic overview of the industry including",
          slug: "global-sodium-silicate-industry-2016",
          content: [
            {
              type: "text",
              title: "Summary",
              text: "The Global Sodium Silicate Industry 2016 Market Research Report is a professional and in-depth study on the current state of the Sodium Silicate Industry. Firstly, the report provides a basic overview of the industry including definitions, classifications, applications and industry chain structure. The Sodium Silicate Industry market analysis is provided for the international market including development history, competitive landscape analysis, and major regions development status. Secondly, development policies and plans are discussed as well as manufacturing processes and cost structures."
            },
            {
              type: "text",
              text: "This report also states import/export, supply and Industry figures as well as cost, price, revenue and gross margin by regions (United States, EU, China and Japan), and other regions can be added. Then, the report focuses on global major leading industry players with information such as company profiles, product picture and specification, capacity, production, price, cost, revenue and contact information. Upstream raw materials, equipment and downstream consumers analysis is also carried out."
            },
            {
              type: "image",
              src: "/1-first.webp",
              alt: "Sodium Silicate Industry Analysis"
            },
            {
              type: "text",
              text: "What’s more, the Sodium Silicate Industry development trends and marketing channels are analyzed. Finally, the feasibility of new investment projects is assessed, and overall research conclusions are offered. In a word, the report provides major statistics on the state of the industry and is a valuable source of guidance and direction for companies and individuals interested in the market.sodium_silicate_kiran_italia_chemicals"
            },
            {
              type: "link",
              title: "Request Sample Report",
              url: "http://www.reportbazzar.com/request-sample/?pid=476546&ptitle=Global+Sodium+Silicate+Industry+2016+Market+Research+Report&req=Sample"
            }
          ]
        },
        {
          title: "Sodium Silicate Market for Detergents Industry from 2015 to 2023",
          date: "August 12, 2015",
          category: "MARKET ANALYSIS",
          author: "admin",
          image: "/second.webp",
          summary: "Sodium Silicate Market for Detergents, Catalysts, Pulp & Paper, Elastomers, Food & Healthcare and Other Applications – Global Industry Analysis, Size, Share, Growth, Trends and Forecast 2015 – 2023",
          slug: "sodium-silicate-market-detergents",
          content: [
            {
              type: "text",
              text: "This report gives a detailed description of the sodium silicate market in terms of volume share (kilo tons) and revenue (US$ Mn) from 2015 to 2023. The report highlights factors contributing towards growth of the market and restraints affecting the market. Detailed forecast of the sodium silicate market has been provided from 2015 to 2023 for better understanding of the individual market scenario. The sodium silicate market is described with respect to its various segments along with expected opportunities in the next eight years."
            },

          ]
        },
        {
          title: "Ultimate Green Geopolymer Concrete – Geocement",
          date: "January 20, 2024",
          category: "INNOVATION",
          author: "admin",
          image: "/third.webp",
          summary: "Geocement is a promise to reduce global warming by reducing carbon dioxide emission using a proprietory liquid Geobinder with various industrial bye products viz. Flyash, Blast furnace slag etc.",
          slug: "ultimate-green-geopolymer-concrete",
          content: [
            {
              type: "text",
              title: "ABOUT GEOCEMENT",
              text: "Geocement is a promise to reduce global warming by reducing carbon dioxide emission using a proprietory liquid Geobinder with various industrial bye products viz. Flyash, Blast furnace slag etc. Geopowder, thus making it an environment friendly Green Product. The environment must be protected by preventing dumping of waste by-product materials in uncontrolled manners and by stopping Carbon dioxide (CO2) emission."
            },
            {
              type: "text",
              text: "KIRAN GREEN Geobinder, Geocement and Geocrete are developed in-house through continuous Research and development for over 3 years. The R & D centre is a recognized by the Department of Science and Technology, Government of India as an approved in-house facility."
            },
            {
              type: "text",
              text: "GEOCEMENT comes in a 2 part packing 35 Kg + 15 Kg (Geocement powder & Geobinder liquid) which can be mixed at site like normal cement with aggregates."
            },
            {
              type: "text",
              text: "Prof. J. Davidovits, an eminent scientist invented this technology in which Silicon (Si) and aluminum (Al)ions in the by-product materials is made to react and the chemical reaction that takes place in this case is a polymerization process and hence product is called Geocement. Kiran Italia Chemicals has entered into an exclusive agreement with Geopolymer institute, France for developing a range of new-age Geocement for advance applications."
            },
            {
              type: "image",
              src: "/1458203895logo.webp",
              alt: "Geocement Logo"
            }
          ],
          tags: ["GEOCEMENT", "GEOPOLYMER", "GREEN CONCRETE"]
        },
        {
          title: "Global Services",
          date: "February 10, 2024",
          category: "SERVICES",
          author: "admin",
          image: "/fourth.webp",
          summary: "MS Jain Group started its journey in the chemical manufacturers industry as a small scale manufacturing unit with the vision to leave its mark as a visionary innovator.",
          slug: "global-services",
          content: [
            {
              type: "image",
              src: "/fourth.webp",
              alt: "Global Services"
            },
            {
              type: "text",
              text: "MS Jain Group started its journey in the chemical manufacturers industry as a small scale manufacturing unit with the vision to leave its mark as a visionary innovator. From 1979 to this date, the company has grown under the able leadership of founder and Chariman Mr. MS Jain as a leading conglomerate with international presence. We have over 30 manufacturing units in India and more than five units across the world."
            },
            {
              type: "text",
              text: "We are renowned for our seamless supply chain and quick and efficient response to customers. We are the largest manufacturers of sodium silicate in India with annual turnover of 3, 00,000 tonnes. Our manufacturing units are largely setup all over India"
            },
            {
              type: "text",
              text: "Our product range includes chemical intermediaries that have versatile application across several industries including construction, ceramics, textiles, paper, foundries, ceramics, and candles among others. We are fully equipped to meet large scale customer demands with plants and machineries of latest technologies and highly qualified engineers, trained personnel ad domain experts. The organization operates with over 600 direct employees and 300 indirect employees globally. Our state of the art laboratories often work in collaboration with leading research institutes to develop innovative solutions."
            },
            {
              type: "text",
              text: "The companies aim is to deliver market-driven products that enhance process at minimum environment cost"
            }
          ]
        }
      ],
    },
    faq: {
      label: "Knowledge Base", titleStart: "Got ", titleHighlight: "Questions?", titleEnd: "We Have Answers.",
      description: "Everything you need to know about our high-performance silicate solutions and industrial manufacturing processes.",
      supportTitle: "Technical Support", supportDesc: "Dedicated expert assistance for all your complex chemical formulation needs.", supportBtn: "Get Expert Help",
      items: [
        { question: "What is Kiran Italia Chemicals' primary area of expertise?", answer: "Kiran Italia Chemicals specializes in the manufacturing and distribution of high-quality industrial silicates, including Sodium and Potassium Silicates, catering to various industries such as detergents, construction, and water treatment." },
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
        // { name: "Brochure", href: "/brochure" }, { name: "Quality & Safety", href: "/quality" },
        { name: "Careers", href: "/careers" }, { name: "Blog", href: "/blog" }, { name: "Contact Us", href: "/contact" },
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
        desc: "At Kiran Italia Chemicals S.r.l we produce sodium silicate lumps that are manufactured using top grade raw materials and have superior properties, both physical and chemical. We are the market leader in India and our brand is recognized globally for its high performance. Our prominent clients belong to the following industries:",
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
        desc1: "At Kiran Italia Chemicals S.r.l we offer sodium silicate in liquid form for specific industrial application where the liquid property of the chemical is highly effective. We manufacture high quality silicates that are produced to match our customer's expectations. For special requirements, we customize the liquid so that it can be integrated with highest efficacy with the products of our clients.",
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
        desc: "At Kiran Italia Chemicals S.r.l we manufacture potassium silicate lumps of the highest quality. Our product is recognised industry-wide for its high performance and seamless integration.",
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
        desc: "Kiran Italia Chemicals S.r.l is a leading brand name in India in the manufacture and supply of potassium silicate liquid. Our industry-grade potassium silicate liquid is available in a range of ratios and concentrations based on the specific business requirements of our clients.",
        propertiesTitle: "The physical and chemical properties of Kiran Italia Potassium silicate liquid are:",
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
    },
    aboutPage: {
      heroTitle: "About Us", heroSubtitle: "Kiran Italia Chemicals S.r.l India's leading and world largest manufacturer and supplier of sodium silicate & Potassium Silicate",
      journeyLabel: "Our Journey", journeyTitle: "Legacy of Visionary Innovation",
      journeyText1: "MS Jain Group started its journey in the chemical manufacturers industry as a small scale manufacturing unit with the vision to leave its mark as a visionary innovator.",
      journeyText2: "From 1979 to this date, the company has grown under the able leadership of founder and Chairman Mr. MS Jain as a leading conglomerate with international presence. We have manufacturing units in more than five countries and our chemicals import-export business spans the five continents.",
      founderName: "Mr. MS Jain", founderRole: "Founder & Chairman",
      stat1Label: "Annual Turnover", stat1Value: "3,00,000", stat1Unit: "Tonnes",
      stat2Label: "Manufacturing Units", stat2Value: "5+", stat2Unit: "Countries",
      stat3Label: "Direct Employees", stat3Value: "600+", stat3Unit: "Global",
      stat4Label: "Journey Started", stat4Value: "1979", stat4Unit: "India",
      supplyTitle: "Supply Chain Excellence",
      supplyQuote: "We are renowned for our seamless supply chain and quick and efficient response to customers. We are the largest manufacturers of sodium silicate in India with annual turnover of 3,00,000 tonnes. Our manufacturing units are largely setup in South India with Offices in the North India.",
      productRangeTitle: "Product Range & Applications",
      productRangeDesc: "Our product range includes chemical intermediaries that have versatile application across several industries including construction, ceramics, textiles, paper, foundries, ceramics, and candles among others.",
      productCategories: ["Construction", "Ceramics", "Textiles", "Paper", "Foundries", "Candles"],
      techTitle: "LATEST TECHNOLOGIES",
      techDesc: "Fully equipped to meet large scale customer demands with plants and machineries of latest technologies and highly qualified engineers, trained personnel and domain experts.",
      workforceTitle: "Global Workforce & Innovation Hub",
      workforceDesc: "The organization operates with over 600 direct employees and 300 indirect employees globally. Our state of the art laboratories often work in collaboration with leading research institutes to develop innovative solutions.",
      workforceQuote: "The companies aim is to deliver market-driven products that enhance process at minimum environment cost.",
      rdLabel: "R&D Collaboration", rdSubLabel: "State-of-the-Art Labs",
      coreValuesTitle: "We Followed The Core Values",
      coreValues: ["Safety and Health Inspection", "Environmental Engineering", "Environmental Consulting", "Reliability and Safety Assessment", "Leadership with Integrity", "Innovative Engineering", "Focus On Our Clients", "High Quality Professionals"],
    },
    historyPage: {
      heroLabel: "Est. 1979", heroTitle: "M S Jain Group",
      heroQuote: "A legacy of visionary innovation and industrial excellence.",
      beginningLabel: "The Beginning", foundingTitle: "Our Founding Story",
      foundingText: "MS Jain Group was started in the year 1979 with a single small scale manufacturing unit for preparing sodium silicate to detergent manufacturers. It was established by Mr. MS Jain who had a long standing vision of expanding his company to attain global acclaim as a market leader and trend setter.",
      growthText: "Over the years, the company has steadily expanded its product range and today we supply chemical raw materials to companies across various industries, worldwide. Our multi-product, large scale commercial operation functions with 32 manufacturing units, contributing to over 50% of the group's turnover.",
      companyTitle: "MS Jain Group Today",
      companyText1: "Today, MS Jain Group stands as a symbol of trust and innovation in the chemical industry.",
      companyText2: "With Kiran Italia Chemicals, we continue our mission to provide sustainable, high-quality chemical solutions to the world.",
      sustainLabel: "Sustainable Future",
      sustainTitle: "Building a Greener Chemistry for the Next Generation",
      stat1: "Manufacturing Units",
      stat2: "Capacity (TPA/KL)",
      founderName: "Mr. MS Jain",
      founderRole: "Founder & Visionary Leader",
    },
    awardPage: {
      heroTitle: "Awards & Achievements", heroSubtitle: "Recognizing our milestones in technical excellence and global industrial contributions.",
      milestoneLabel: "Major Project Milestone", projectTitle: "LUCKNOW METRO RAIL PROJECT",
      projectHeadline: "KIRAN ITALIA CHEMICALS S.r.l HAS COMMENCED SUPPLIES OF KIRANSIL-SODIUM SILICATE BASED GROUTING SOLUTIONS TO LUCKNOW METRO RAIL PROJECT",
      projectDesc: "Providing specialized chemical solutions for India's infrastructure development. Our technical expertise in silicate-based grouting solutions ensures structural integrity and safety for high-stakes urban transportation projects.",
      techExcTitle: "Technical Excellence", techExcDesc: "Supplying advanced KIRANSIL-SODIUM SILICATE solutions.",
      standardsTitle: "Our Standards of Recognition",
      awards: [
        { title: "ISO 9001:2015", desc: "For excellence in quality management systems." },
        { title: "Sigma 4 Rating", desc: "High honor for operational efficiency & service quality." },
        { title: "Industry Leader", desc: "India's largest manufacturer of Sodium & Potassium Silicate." },
        { title: "Eco Innovator", desc: "Recognition for environment-friendly chemical production." },
      ],
      qualityTitle: "Delivering market-driven products with certified quality standards to our global partners.",
      qualityGuarantee: "100% Quality Guaranteed", qualityInspected: "Inspected & Verified Batches",
    },
    managementPage: {
      heroLabel: "ABOUT US", heroTitle: "Executive Leadership",
      heroDesc: "The visionary team steering Kiran Italia Chemicals S.r.l towards global excellence.",
      leadershipLabel: "LEADERSHIP TEAM", managementTitle: "Management", executiveLabel: "EXECUTIVE LEADERSHIP",
      leaders: [
        { name: "M S Jain", role: "Chairman", badge: "FOUNDER & CHAIRMAN", bio: "Founder and visionary leader of Kiran Italia Chemicals S.r.l. With decades of expertise in the chemical industry, he has guided the company to become the #1 sodium silicate manufacturer in India with a strong global presence.", stat1Label: "Experience", stat1Value: "45+ Yrs", stat2Label: "Position", stat2Value: "#1 India" },
        { name: "Atul Jain", role: "Vice Chairman", badge: "VICE CHAIRMAN", bio: "Leading strategic growth initiatives and business expansion for Kiran Italia Chemicals. His leadership drives the company's global outreach, innovation pipeline, and long-term vision for sustainable industrial excellence.", stat1Label: "Focus", stat1Value: "Strategy", stat2Label: "Reach", stat2Value: "45+ Nations" },
        { name: "N C Rufus", role: "CEO", badge: "CHIEF EXECUTIVE OFFICER", bio: "Overseeing day-to-day operations, customer success, and technology innovation across all 32 manufacturing facilities. Committed to maintaining the highest standards of quality and operational efficiency.", stat1Label: "Facilities", stat1Value: "32 Units", stat2Label: "Capacity", stat2Value: "300K+ Tons" },
      ],
      values: [
        { title: "Vision-Driven", desc: "Every strategic decision is anchored in the company's long-term vision of global chemical leadership and sustainable manufacturing." },
        { title: "People First", desc: "Our leadership believes that a company's greatest asset is its people — fostering talent, dedication, and innovation at every level." },
        { title: "Quality Obsessed", desc: "From raw material sourcing to final dispatch, the management ensures uncompromising adherence to global quality and safety standards." },
      ],
    },
    careersPage: {
      heroLabel: "Join Our Mission", heroTitle1: "Build Your Future", heroTitle2: "At Kiran Italia Chemicals",
      heroDesc: "Our people are our greatest strength. We foster a culture of innovation, transparency, collaboration, and continuous learning.",
      exploreBtn: "Explore Open Roles", satisfactionRate: "95%", satisfactionLabel: "Employee Satisfaction Rate",
      cultureTitle1: "Why Work", cultureTitle2: "With Us?",
      cultureDesc: "At Kiran Italia Chemicals, we believe in empowering our employees to take ownership and lead with innovation. We offer a collaborative environment where every voice is heard and every contribution counts towards our global goal.",
      ctaTitle: "Ready to Join Our Team?", ctaDesc: "Discover your next career move and help us shape the future of industrial silicates worldwide.",
      ctaBtn: "Apply Now",
      benefits: [
        { title: "Professional Growth Opportunities", desc: "We provide clear career paths and opportunities to climb the leadership ladder." },
        { title: "Innovative Work Environment", desc: "Work with cutting-edge technology and processes in the industrial silicate industry." },
        { title: "Industry-Leading Projects", desc: "Technical challenges that push boundaries and define industry benchmarks." },
        { title: "Employee Development", desc: "Continuous learning programs, workshops, and skill-upgrading sessions." },
        { title: "Competitive Benefits", desc: "Comprehensive health, wellness, and financial benefits for you and your family." },
      ],
    },
    contactPage: {
      heroLabel: "Get In Touch", heroTitle1: "How Can We", heroTitle2: "Help You?",
      heroDesc: "We're here to assist you with product inquiries, technical support, or partnership opportunities. Let's build something great together.",
      callTitle: "Call Us", emailTitle: "Email Us", officeTitle: "Head Office",
      officeAddress: "SP12ii, 12, 95040 Motta Sant'Anastasia CT, Italy",
      availabilityLabel: "Availability", monFri: "Mon - Fri", saturday: "Saturday",
      formTitle1: "Send Us a", formTitle2: "Message", formRequired: "Required fields are marked with *",
      fieldName: "Full Name*", fieldEmail: "Email Address*", fieldPhone: "Phone Number",
      fieldInquiry: "Inquiry Type", fieldMessage: "Message*",
      inquiryOptions: ["General Inquiry", "Product Quote", "Technical Support", "Partnership"],
      submitBtn: "Submit Request", namePlaceholder: "John Doe", emailPlaceholder: "john@company.com",
      phonePlaceholder: "+39 000 000 0000", messagePlaceholder: "Tell us about your requirements...",
      mapTitle1: "Visit Our", mapTitle2: "Office", mapDesc: "Located in Motta Sant'Anastasia, Italy, our office is the heart of our European operations.",
      visitOfficeLabel: "Visit Our Office",
    },
    chairmanPage: {
      heroSubtitle: "A Legacy of Excellence",
      value1Title: "Innovation", value1Desc: "Cutting-edge technologies and methods.",
      value2Title: "Market Leader", value2Desc: "Number one position in India.",
      value3Title: "People-Centric", value3Desc: "Nurturing fresh talent and personal growth.",
      marketLeaderBadge: "Market Leader", marketLeaderSub: "India #1 Spot",
    },
    whatsapp: {
      chatWithUs: "Chat with us!",
      message: "Hi! I am interested in your services.",
    },
    blogDetail: {
      articleNotFound: "Article Not Found",
      moveOrArchived: "The insight you're looking for might have been moved or archived.",
      returnToInsights: "Return to Insights",
      relatedInsights: "Related Insights",
      shareArticle: "Share Article",
    },
    industryDetail: {
      backToIndustries: "Back to Industries",
      comingSoon: "Industry details coming soon...",
      browseIndustries: "Browse Industries",
      items: {
        'soap-detergents': {
          title: "SOAP & DETERGENTS",
          heroHeading: "Chemical solutions for highest efficacy",
          description: "At Kiran Italia Chemicals S.r.l we produce a host of industrial chemicals that have diverse application in the soap and detergent manufacturing companies. Our chemical products have been developed after extensive research to deliver highest efficacy, complementing the finished good for greatest effectiveness and quality.",
          subHeading: "The chemical solutions for soap and detergent manufacturing industry are:",
          contextText: "Adding silicates to synthetic detergents is beneficial because it softens water and is easily rinsed away. Due to the great suspending and anti-re-deposition qualities, they do not leave deposits on the fibers. Their benefits include",
          benefits: [
            "It is a building agent used in household cleaning solutions cleaning",
            "Improves washing property of the detergent",
            "Prevents mineral deposits by removing water hardness",
            "Helps maintain suspension of the small dirt or greasy particles in washing liquid",
            "Acts as a surfactant that pulls dirt from the material for segregating the soils to come out of suspension; dispersion of deflocculating of soil",
            "Helps control the viscosity in production of detergent powder of a desired density",
            "An ingredient in the drying process in manufacture of detergent powder",
            "Acts as a binder to give appropriate degree of \"hardness\" to the spherical particles of detergent",
            "Its alkalinity enables them to neutralize acidic stains, promote emulsification of fats and oils and disperse or solubilize proteins",
            "Stabilizes pH to the desired level",
            "Used for Metal cleaning, textile processing, washing dishes, dairy equipment, bottles, floors, and locomotives",
            "Prevents phosphate reversion in liquid detergents",
            "Gives best result for liquid and paste soaps",
            "Enhances detergency of soap type detergent"
          ],
          images: ["/13.webp", "/14.webp", "/15.webp"]
        },
        'automotive-repair': {
          title: "AUTOMOTIVE REPAIR",
          heroHeading: "Powerful Sealing Solutions for Vehicles",
          description: "Kiran Italia Chemicals S.r.l supplies industrial chemicals to automotive industries for application for vehicles of all types and sizes. Sodium and potassium silicate are largely used for their powerful properties in repair work.",
          subHeading: "Applications in Automotive Maintenance:",
          contextText: "Considered a 'green' solution due to renewable sources, our silicates provide critical repair capabilities:",
          benefits: [
            "Seals leaks in head gaskets: Acts as a powerful sealant at 93°C (won't re-melt below 815°C)",
            "Protects gaskets: Poured into radiators to circulate and utilize heat-resisting properties",
            "Fast acting: Application stops steam from radiator water in exhaust within minutes",
            "Engine disablement aid: Acts as a powerful substitute to engine oil in specific disablement processes",
            "Environmentally conscious: Minimum environment cost compared to synthetic sealants"
          ],
          images: ["/28.jpg", "/29.jpg", "/30.jpg"]
        },
        'food-industry': {
          title: "FOOD INDUSTRY",
          heroHeading: "Food-Safe Chemicals Following International Guidelines",
          description: "At Kiran Italia Chemicals S.r.l we offer chemicals that follow international guidelines for food safety. The main chemicals that we offer for the food industry is precipitated silica and sodium metasilicate. We have approval from CIR with concentration limits and FDA approved as a food additive with the GRAS (Generally Recognized as Safe) rating.",
          subHeading: "Sodium metasilicate is used in following applications:",
          contextText: "",
          benefits: [
            "It preserves eggs without electricity for up to 6 months by keeping out harmful bacteria",
            "It is a primary ingredient in desiccant packaging of foods and other degradable items for protection against moisture",
            "It protects certain foods from being permeable by absorbing the moisture in the air",
            "It acts as a flocculent for certain wines and beers, making them smoother to drink through clarification",
            "It is a precipitation aid for colloidal particles in beverages, facilitating easy removal of particles",
            "**Precipitated silica is used in following applications:**",
            "It is used as an anti-caking agent for edible salt, onion, garlic powder and other permissible food products in hoppers, conveyors, spray dryers, and other allied machinery",
            "It increases processing efficiency through smoother blending of ingredients",
            "It enhances product consistency and enables automated dosing of fruit and vegetable extracts, nutrients, spices and preservatives",
            "It facilitates more shipping options with varied temperatures and environment conditions"
          ],
          images: ["/31.jpg", "/32.jpg", "/33.jpg"]
        },
        'water-treatment': {
          title: "WATER TREATMENT",
          heroHeading: "Proven Efficacy for Potable & Industrial Water",
          description: "At Kiran Italia Chemicals S.r.l, we manufacture Sodium Silicate and Potassium Silicate which are proven to have highest efficacy for a host of factors in treating potable and industrial water. Prominent among these are:",
          subHeading: "",
          contextText: "",
          benefits: [
            "As a flocculent for raw and waste water treatment to increase the size and binding of heavier molecules",
            "To form a film that prevents metal corrosion in water lines",
            "To reduce and control toxicity of lead and copper in their treatment",
            "To improve taste and stabilize presence of iron and magnesium in bore hole water prior to aeration",
            "As a binder to reduce porosity and setting time in the solidification and stabilization",
            "As an efficient coagulation aide when used with aluminium sulphate in normal purification process"
          ],
          images: ["/34.jpg", "/35.jpg", "/36.jpg"]
        },
        'foundries': {
          title: "FOUNDRIES",
          heroHeading: "Advanced Chemical Agents for Metal Treatment",
          description: "Kiran Italia Chemicals S.r.l manufactures and supplies primary chemical agents for foundries globally. Our chemicals are used for a wide range of applications in metal treatment and moulding.",
          subHeading: "Liquid and Lumps Applications:",
          contextText: "Specialized silicates for core binding and surface finishing:",
          benefits: [
            "Cost-effective core sand binder for moulding steel and non-ferrous castings",
            "Muffler repair: Used with magnesium silicate to reduce sound in internal combustion engines",
            "Fitting Paste: Dissolves with magnesium silicate to form a thick, effective paste",
            "Surface Finishing: Precipitated silica acts as a matting and thickening agent",
            "Satin Sheen: Gives a professional finish and reduces gloss on metal furniture"
          ],
          images: ["/37.jpg", "/38.jpg", "/39.jpg"]
        },
        'petroleum-oil-drilling': {
          title: "PETROLEUM & OIL DRILLING",
          heroHeading: "Environmentally Friendly Oil Field Applications",
          description: "At Kiran Italia Chemicals S.r.l, we offer sodium silicate and potassium silicate for cost efficient application for various applications on oil field and drilling fluids. We offer chemicals that are environment friendly and facilitate enhanced results in conformance, remediation and cementing. The application of sodium and potassium silicates is largely includes",
          subHeading: "",
          contextText: "",
          benefits: [
            "Control of colloids in geological formation",
            "In drilling mud operations",
            "As effective chemical agent to prevent corrosion",
            "As breakdown emulsifier in drilling operations"
          ],
          images: ["/40.jpg", "/41.png", "/42.jpg"]
        },
        'concrete-general': {
          title: "CONCRETE AND GENERAL",
          heroHeading: "Highly Effective Masonry & Concrete Treatment",
          description: "Kiran Italia Chemicals S.r.l offers highly effective and efficient chemical treatments for concrete and general masonry treatment. Our products are used extensively at various stage of manufacturing and application of concrete and in general masonry work",
          subHeading: "The chemical products that we supply for concrete and general masonry treatment are:",
          contextText: "",
          benefits: [
            "**Sodium Metasilicate**",
            "Manufacturing speciality cement for drilling industry",
            "For adding into dry cement admixtures to accelerate the set",
            "**Sodium Silicate and Potassium Silicate**",
            "As a curing agent, it is applied to the surface of fresh layer of concrete to extend its durability",
            "To treat the concrete after it is completely dry or hardened for better water resistance and longevity",
            "Chemical sealing of Concrete hardening against Grease and Dust Proofing",
            "For Acid Resistance",
            "Significantly reduces porosity in most masonry products making them far more wearable and water repellent",
            "Used as an alkali activator in geopolymer cement and concrete",
            "Apply a thin coat to unpainted plaster or concrete surface as a water repellent",
            "To treat old concrete surfaces to provide a harder surface",
            "Acts as a penetrate into concrete and reacts with residual free lime to reduce porosity"
          ],
          images: ["/43.jpg", "/44.jpg", "/45.jpg"]
        },
        'chemical-injection': {
          title: "CHEMICAL INJECTION",
          heroHeading: "Precision Application for Soil & Structural Sealing",
          description: "Kiran Italia Chemicals S.r.l supplies chemical injections where direct application to a deep area is required with minimum to zero contact in other areas. We supply the chemicals in appropriate packages, in liquid or lump form, based on the application and composition.",
          subHeading: "We mainly provide Sodium Silicate and Potassium Silicate for chemical injections, and they are popularly used by clients for following applications:",
          contextText: "",
          benefits: [
            "For chemical injection or solidification of subsoil",
            "For sealing of pores with low resistance",
            "In the \"Joosten Process\" to form an insoluble gel",
            "Where subsurface formations need to be strong enough to withstand the load, such as low walls or foundations",
            "Where water-permeable subsurface pores allow the flooding of mines, wells and tunnels",
            "To prevent water loss in dams",
            "To seal pores in the concrete or brick work that can be found in drains or underground construction",
            "To coat sewerage pipes to reduce deposition on the inner walls"
          ],
          images: ["/46.jpg", "/47.jpg", "/48.jpg"]
        },
      },
    },
  },

  it: {
    navbar: {
      home: "Pagina Iniziale", about: "Chi Siamo", industries: "Industrie Servite", products: "Prodotti",
      sodium: "Silicati di Sodio", potassium: "Silicati di Potassio", custom: "Formule Personalizzate",
      careers: "Carriera", contact: "Contatti", blog: "Blog",
      getEstimate: "Ottieni Preventivo", callUs: "Chiamaci", email: "E-mail",
      workingHours: "Sab - Gio (08:00 - 17:00)", language: "Lingua",
      history: "Storia", award: "Premi", vision: "Visione e Missione",
      chairmans: "Messaggio del Presidente",
      indDropdown: {
        soap: "Sapone e Detergenti",
        cosmetics: "Cosmetici",
        agriculture: "Agricoltura",
        timber: "Trattamento del Legname",
        adhesives: "Adesivi",
        auto: "Riparazione Automobilistica",
        food: "Industria Alimentare",
        water: "Trattamento dell'Acqua",
        foundries: "Fonderie",
        petroleum: "Perforazione Petrolifera e di Gas",
        concrete: "Calcestruzzo e Generale",
        chemical: "Iniezione Chimica",
        metals: "Metalli",
        ceramics: "Ceramica e Refrattari",
        mining: "Estrazione e Lavorazione Minerale"
      },
      sodiumLumps: "LUMPS DI SILICATO DI SODIO",
      sodiumLiquid: "SILICATO DI SODIO LIQUIDO",
      potassiumLumps: "LUMPS DI SILICATO DI POTASSIO",
      potassiumLiquid: "SILICATO DI POTASSIO LIQUIDO",
      management: "Management",
    },
    chairmansMessage: {
      label: "MESSAGGIO DEL PRESIDENTE",
      title: "Visione della Leadership",
      quote1: "La mia ambizione è stabilire Kiran Italia Chemicals S.r.l come leader di mercato nell'industria chimica globale e raggiungere questo obiettivo attraverso tecnologie innovative, migliori pratiche del settore e solidità economica. La mia gioia più grande risiede nel permettere alle persone di realizzare le proprie ambizioni e nel plasmare nuovi talenti in individui di successo. Ogni opportunità che ho di guidare un individuo nel raggiungere i propri obiettivi la abbraccio come un'opportunità per imparare qualcosa di nuovo e crescere personalmente.",
      text1: "A mio avviso, una buona organizzazione è quella che non devia dalla sua curva di crescita nonostante le battute d'arresto temporanee. Sono orgoglioso dei risultati della nostra azienda nel raggiungimento della posizione numero uno in India e fiducioso che continueremo a mantenere questo posto per molto tempo.",
      gitaQuote: "Coloro che compiono il loro lavoro offrendo a me tutti i risultati, che mantengono i loro cuori e le loro menti costanti in me in qualunque cosa facciano, che adorano il loro lavoro, a loro offro la piattaforma. Non dubitare che raggiungeranno inesorabilmente la vetta.",
      gitaVerse: "BHAGWAT GITA 12.6/12.8",
      name: "M S Jain",
      role: "Presidente",
    },
    hero: {
      title: "Eccellenza Globale nei Silicati",
      content: "Presenza Strategica in Italia. Dall'Industria Globale ai Mercati Locali.",
      explore: "Esplora i Prodotti", contact: "Contattaci",
    },
    about: {
      label: "Chi Siamo",
      titleStart: "Leadership Industriale ",
      description: "Da oltre 40 anni, Kiran Italia Chemicals è un produttore leader di soluzioni di silicato di sodio e silicato di potassio. L'azienda è cresciuta fino a diventare un'azienda chimica riconosciuta a livello globale che serve clienti in più continenti.",
      quote: "Il nostro impegno per la qualità, l'innovazione e la sostenibilità ci consente di fornire soluzioni chimiche affidabili per diverse applicazioni industriali.",
      points: ["Produttore leader di silicati in India ", "Tra i primi 5 a livello globale ", "32 impianti di produzione ", "Capacità annua di oltre 300.000 tonnellate", "Presenza in oltre 45 paesi"],
      estYear: "Anno di fondazione", globalLabel: "GLOBALE",
    },
    common: {
      exploreMore: "Esplora di più", viewDetails: "Visualizza dettagli", learnMore: "Saperne di più",
      readMore: "Leggi di più", readFullArticle: "Leggi l'articolo completo",
      home: "Home", industriesWeServe: "Industrie che serviamo", products: "Prodotti",
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
      label: "Settori Globali", title: "Portata Industriale", reachLabel: "Portata", contactExperts: "Contatta i nostri esperti", exploreSolutions: "Esplora le soluzioni",
      items: {
        soap: { name: "Sapone e Detergenti", desc: "Silicato di sodio ad alte prestazioni utilizzato come builder e filler in saponi, detergenti e formulazioni per la pulizia." },
        cosmetics: { name: "Cosmetici", desc: "Stabilizzatori ai silicati ad elevata purezza e additivi funzionali per prodotti di fascia alta per la cura della pelle, dei capelli e dell'igiene orale." },
        agriculture: { name: "Agricoltura", desc: "Soluzioni a base di silicio che migliorano la forza delle colture, la resistenza alla siccità e l'assorbimento dei nutrienti per una migliore resa agricola." },
        timber: { name: "Trattamento del Legname", desc: "Trattamenti di conservazione e ignifugazione a base minerale che prolungano la vita e la sicurezza dei prodotti industriali in legno." },
        adhesives: { name: "Adesivi e Rivestimenti", desc: "Adesivi ai silicati ad alte prestazioni e rivestimenti funzionali che forniscono proprietà di incollaggio, sigillatura e protezione." },
        water: { name: "Trattamento delle Acque", desc: "Composti di silicato avanzati per l'inibizione della corrosione e il controllo del pH negli impianti di trattamento delle acque industriali e municipali." },
        construction: { name: "Costruzione e Cemento", desc: "Soluzioni di silicato di sodio utilizzate come indurenti per calcestruzzo, agenti impermeabilizzanti e stabilizzatori del suolo in progetti infrastrutturali." },
        ceramics: { name: "Ceramica e Refrattari", desc: "Leganti di silicato che forniscono resistenza alle alte temperature per piastrelle in ceramica, rivestimenti refrattari e arredamento per forni." },
        petroleum: { name: "Petrolio e Trivellazione", desc: "Fluidi di silicato specializzati utilizzati come inibitori di scisto e stabilizzatori di pozzi nelle operazioni di trivellazione di petrolio e gas." },
        foundries: { name: "Fonderie", desc: "Leganti a base di silicato di sodio che forniscono una resistenza superiore dello stampo e accuratezza dimensionale nelle operazioni di colata di metalli." },
        mining: { name: "Minerario e Lavorazione", desc: "Tecnologie chimiche che supportano la flottazione efficiente dei minerali, la lavorazione del minerale e la gestione delle acque reflue nell'attività mineraria." },
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
    strategicHubs: {
      label: "Portata Globale",
      title: "I Nostri Principali Hub Strategici",
      description: "Collegamento di mercati vitali in Egitto, India, Sud Africa ed Emirati Arabi Uniti attraverso la nostra infrastruttura chimica avanzata e la rete logistica.",
      egypt: "Egitto", india: "India", southAfrica: "Sud Africa", uae: "EAU",
      northAfrica: "Nord Africa", southAsia: "Asia Meridionale", southernAfrica: "Africa Meridionale", middleEast: "Medio Oriente"
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
        { name: "Kirshnaraj", company: "Pallvi Powertech", text: "Volevo solo ringraziarvi per il servizio che Kiran Italia Chemicals ci offre. La fiducia che abbiamo nei nostri fornitori è fondamentale per noi, specialmente quando c'è la possibilità che il nome dei nostri clienti entri in gioco.”", image: "/Krishnaraj1.webp" },
        { name: "Moosa", company: "METL", text: "Collaboriamo con Kiran Italia Chemicals dal 2011. Durante questo periodo, Kiran Italia Chemicals ci ha fornito un eccellente servizio clienti, informazioni tempestive e affidabili e prodotti di qualità.”", image: "/Moosa1.webp" },
        { name: "Keyur", company: "TTSPL", text: "Kiran Italia Chemicals offre una qualità eccezionale, un servizio clienti ed è un fornitore estremamente affidabile. Volevo solo prendermi questo tempo per ringraziarvi per il continuo ottimo servizio.”", image: "/keyur.webp" },
      ],
    },
    blogs: {
      label: "Centro Media", title: "Ultime Novità e Innovazioni del Settore",
      knowledgeHub: "Centro di Conoscenza", updatedWeekly: "Aggiornato Settimanalmente", readFullArticle: "Leggi l'articolo completo",
      latest: "Ultime", insights: "Approfondimenti", industryNews: "Novità del Settore", viewAll: "Visualizza tutti i post",
      minRead: "minuti di lettura", by: "Di", exploreArticle: "Esplora l'articolo", continueReading: "Continua a leggere",
      leaveComment: "Lascia un commento", upToDate: "Sei aggiornato",
      heroTitle: "Approfondimenti del Settore & Aggiornamenti Strategici",
      heroDesc: "Esplorando l'evoluzione della chimica globale attraverso l'eccellenza tecnica, l'analisi di mercato e l'innovazione sostenibile.",
      items: [
        {
          title: "Rapporto di Ricerca di Mercato dell'Industria Globale del Silicato di Sodio 2016",
          date: "15 Maggio 2016",
          category: "RICERCA",
          author: "admin",
          image: "/Industrial-pic.webp",
          summary: "Sommario: Il Rapporto di Ricerca di Mercato dell'Industria Globale del Silicato di Sodio 2016 è uno studio professionale e approfondito sullo stato attuale dell'industria del silicato di sodio. In primo luogo, il rapporto fornisce una panoramica di base del settore, inclusi",
          slug: "global-sodium-silicate-industry-2016",
          content: [
            {
              type: "text",
              title: "Sommario",
              text: "Il Rapporto di Ricerca di Mercato dell'Industria Globale del Silicato di Sodio 2016 è uno studio professionale e approfondito sullo stato attuale dell'industria del silicato di sodio. In primo luogo, il rapporto fornisce una panoramica di base del settore, tra cui definizioni, classificazioni, applicazioni e struttura della catena industriale. L'analisi di mercato del settore del silicato di sodio è fornita per il mercato internazionale, inclusa la storia dello sviluppo, l'analisi del panorama competitivo e lo stato di sviluppo delle principali regioni. In secondo luogo, vengono discusse le politiche e i piani di sviluppo, nonché i processi di produzione e le strutture dei costi."
            },
            {
              type: "text",
              text: "Questo rapporto indica anche cifre relative a importazione/esportazione, fornitura e industria, nonché costi, prezzi, ricavi e margini lordi per regioni (Stati Uniti, UE, Cina e Giappone), e possono essere aggiunte altre regioni. Quindi, il rapporto si concentra sui principali operatori del settore a livello globale con informazioni quali profili aziendali, immagini e specifiche del prodotto, capacità, produzione, prezzo, costo, ricavi e informazioni di contatto. Viene inoltre effettuata l'analisi delle materie prime a monte, delle attrezzature e dei consumatori a valle."
            },
            {
              type: "image",
              src: "/1-first.webp",
              alt: "Analisi dell'industria del silicato di sodio"
            },
            {
              type: "text",
              text: "Inoltre, vengono analizzate le tendenze di sviluppo del settore del silicato di sodio e i canali di marketing. Infine, viene valutata la fattibilità di nuovi progetti di investimento e vengono offerte conclusioni generali della ricerca. In una parola, il rapporto fornisce statistiche principali sullo stato del settore ed è una preziosa fonte di guida e direzione per le aziende e gli individui interessati al mercato.sodium_silicate_kiran_global_chems"
            },
            {
              type: "link",
              title: "Richiedi un rapporto di esempio",
              url: "http://www.reportbazzar.com/request-sample/?pid=476546&ptitle=Global+Sodium+Silicate+Industry+2016+Market+Research+Report&req=Sample"
            }
          ]
        },
        {
          title: "Mercato del silicato di sodio per l'industria dei detergenti dal 2015 al 2023",
          date: "12 Agosto 2015",
          category: "ANALISI DI MERCATO",
          author: "admin",
          image: "/second.webp",
          summary: "Mercato del silicato di sodio per detergenti, catalizzatori, pasta di legno e carta, elastomeri, alimenti e sanità e altre applicazioni – Analisi dell'industria globale, dimensioni, quota, crescita, tendenze e previsioni 2015 – 2023",
          slug: "sodium-silicate-market-detergents",
          content: [
            {
              type: "text",
              text: "Questo rapporto fornisce una descrizione dettagliata del mercato del silicato di sodio in termini di quota di volume (chilo tonnellate) e ricavi (milioni di dollari USA) dal 2015 al 2023. Il rapporto evidenzia i fattori che contribuiscono alla crescita del mercato e i vincoli che influenzano il mercato. Sono state fornite previsioni dettagliate del mercato del silicato di sodio dal 2015 al 2023 per una migliore comprensione del singolo scenario di mercato. Il mercato del silicato di sodio è descritto rispetto ai suoi vari segmenti insieme alle opportunità previste nei prossimi otto anni."
            },
            {
              type: "image",
              src: "/second.webp",
              alt: "Mercato del silicato di sodio per detergenti"
            }
          ]
        },
        {
          title: "Calcestruzzo Geopolimerico Green - Geocement",
          date: "20 Gennaio 2024",
          category: "INNOVAZIONE",
          author: "admin",
          image: "/third.webp",
          summary: "Geocement è una promessa per ridurre il riscaldamento globale riducendo le emissioni di anidride carbonica utilizzando un Geobinder liquido proprietario con vari sottoprodotti industriali.",
          slug: "ultimate-green-geopolymer-concrete",
          content: [
            {
              type: "text",
              title: "INFORMAZIONI SU GEOCEMENT",
              text: "Geocement è una promessa per ridurre il riscaldamento globale riducendo le emissioni di anidride carbonica utilizzando un Geobinder liquido proprietario con vari sottoprodotti industriali come ceneri volanti, scorie di altoforno ecc. Geopowder, rendendolo così un prodotto ecologico. L'ambiente deve essere protetto impedendo lo scarico di materiali di scarto in modo incontrollato e arrestando le emissioni di anidride carbonica (CO2)."
            },
            {
              type: "text",
              text: "KIRAN GREEN Geobinder, Geocement e Geocrete sono sviluppati internamente attraverso una ricerca e uno sviluppo continui per oltre 3 anni. Il centro di ricerca e sviluppo è riconosciuto dal Dipartimento di Scienza e Tecnologia del Governo dell'India come una struttura interna approvata."
            },
            {
              type: "text",
              text: "GEOCEMENT è disponibile in una confezione da 2 parti 35 Kg + 15 Kg (Geocement in polvere e Geobinder liquido) che può essere miscelata in cantiere come il normale cemento con gli aggregati."
            },
            {
              type: "text",
              text: "Il Prof. J. Davidovits, un eminente scienziato, ha inventato questa tecnologia in cui gli ioni di silicio (Si) e alluminio (Al) nei materiali di scarto vengono fatti reagire e la reazione chimica che avviene in questo caso è un processo di polimerizzazione e quindi il prodotto viene chiamato Geocement. Kiran Italia Chemicals ha stipulato un accordo esclusivo con l'istituto Geopolymer, Francia, per lo sviluppo di una gamma di Geocement di nuova generazione per applicazioni avanzate."
            },
            {
              type: "image",
              src: "/1458203895logo.webp",
              alt: "Geocement Logo"
            }
          ],
          tags: ["GEOCEMENT", "GEOPOLYMER", "GREEN CONCRETE"]
        },
        {
          title: "Servizi Globali",
          date: "10 Febbraio 2024",
          category: "SERVIZI",
          author: "admin",
          image: "/fourth.webp",
          summary: "Il Gruppo MS Jain ha iniziato il suo percorso nell'industria dei produttori chimici come una piccola unità produttiva con la visione di lasciare il segno come innovatore visionario.",
          slug: "global-services",
          content: [
            {
              type: "image",
              src: "/fourth.webp",
              alt: "Servizi Globali"
            },
            {
              type: "text",
              text: "Il Gruppo MS Jain ha iniziato il suo percorso nell'industria dei produttori chimici come una piccola unità produttiva con la visione di lasciare il segno come innovatore visionario. Dal 1979 ad oggi, l'azienda è cresciuta sotto la sapiente guida del fondatore e presidente Mr. MS Jain come un conglomerato leader con presenza internazionale. Abbiamo oltre 30 unità produttive in India e più di cinque unità in tutto il mondo."
            },
            {
              type: "text",
              text: "Siamo rinomati per la nostra catena di fornitura senza soluzione di continuità e per la risposta rapida ed efficiente ai clienti. Siamo i più grandi produttori di silicato di sodio in India con un fatturato annuo di 3.00.000 tonnellate. Le nostre unità produttive sono in gran parte stabilite in tutta l'India."
            },
            {
              type: "text",
              text: "La nostra gamma di prodotti comprende intermedi chimici che hanno applicazioni versatili in diversi settori, tra cui edilizia, ceramica, tessile, carta, fonderie e candele, tra gli altri. Siamo completamente attrezzati per soddisfare le richieste dei clienti su larga scala con impianti e macchinari di ultima generazione e ingegneri altamente qualificati, personale esperto e specialisti del settore. L'organizzazione opera con oltre 600 dipendenti diretti e 300 dipendenti indiretti a livello globale. I nostri laboratori innovativi lavorano spesso in collaborazione con i principali istituti di ricerca per sviluppare soluzioni all'avanguardia."
            },
            {
              type: "text",
              text: "L'obiettivo dell'azienda è fornire prodotti orientati al mercato che migliorino i processi con il minimo costo ambientale."
            }
          ]
        }
      ],
    },
    faq: {
      label: "Base di Conoscenza", titleStart: "Hai delle ", titleHighlight: "Domande?", titleEnd: "Abbiamo le Risposte.",
      description: "Tutto ciò che devi sapere sulle nostre soluzioni di silicato ad alte prestazioni e sui processi di produzione industriale.",
      supportTitle: "Supporto Tecnico", supportDesc: "Assistenza esperta dedicata per tutte le tue esigenze di formulazione chimica complessa.", supportBtn: "Ottieni Aiuto Esperto",
      items: [
        { question: "Qual è la principale area di competenza di Kiran Italia Chemicals?", answer: "Kiran Italia Chemicals è specializzata nella produzione e distribuzione di silicati industriali di alta qualità, inclusi Silicati di Sodio e di Potassio, per settori come detergenti, costruzioni e trattamento delle acque." },
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
        // { name: "Brochure", href: "/brochure" }, { name: "Qualità e Sicurezza", href: "/quality" },
        { name: "Carriera", href: "/careers" }, { name: "Blog", href: "/blog" }, { name: "Contattaci", href: "/contact" },
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
        desc: "Presso Kiran Italia Chemicals S.r.l produciamo lumps di silicato di sodio realizzati con materie prime di prima qualità e con proprietà superiori, sia fisiche che chimiche. Siamo leader di mercato in India e il nostro marchio è riconosciuto a livello globale per le sue elevate prestazioni. I nostri clienti principali appartengono ai seguenti settori:",
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
        desc1: "Presso Kiran Italia Chemicals S.r.l offriamo silicato di sodio in forma liquida per specifiche applicazioni industriali in cui la proprietà liquida del prodotto chimico è altamente efficace. Produciamo silicati di alta qualità realizzati per soddisfare le aspettative dei nostri clienti. Per esigenze speciali, personalizziamo il liquido in modo che possa essere integrato con la massima efficacia con i prodotti dei nostri clienti.",
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
        desc: "Presso Kiran Italia Chemicals S.r.l produciamo lumps di silicato di potassio della massima qualità. Il nostro prodotto è riconosciuto in tutto il settore per le sue elevate prestazioni e la perfetta integrazione.",
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
        desc: "Kiran Italia Chemicals S.r.l è un marchio leader in India nella produzione e fornitura di silicato di potassio liquido. Il nostro silicato di potassio di grado industriale è disponibile in una gamma di rapporti e concentrazioni basati sulle specifiche esigenze aziendali dei nostri clienti.",
        propertiesTitle: "Le proprietà fisiche e chimiche del silicato di potassio liquido Kiran Italia sono:",
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
    },
    aboutPage: {
      heroTitle: "Chi Siamo", heroSubtitle: "Kiran Italia Chemicals S.r.l — il principale produttore e fornitore mondiale di silicato di sodio e silicato di potassio, con sede in India.",
      journeyLabel: "Il Nostro Percorso", journeyTitle: "L'Eredità di un'Innovazione Visionaria",
      journeyText1: "Il Gruppo MS Jain ha iniziato il suo percorso nel settore della produzione chimica come una piccola unità produttiva con la visione di lasciare il segno come innovatore visionario.",
      journeyText2: "Dal 1979 ad oggi, l'azienda è cresciuta sotto la guida del fondatore e Presidente Mr. MS Jain, diventando un conglomerato leader con presenza internazionale. Abbiamo unità produttive in più di cinque paesi e il nostro business di import-export chimico abbraccia i cinque continenti.",
      founderName: "Mr. MS Jain", founderRole: "Fondatore e Presidente",
      stat1Label: "Fatturato Annuo", stat1Value: "3,00,000", stat1Unit: "Tonnellate",
      stat2Label: "Unità Produttive", stat2Value: "5+", stat2Unit: "Paesi",
      stat3Label: "Dipendenti Diretti", stat3Value: "600+", stat3Unit: "Globale",
      stat4Label: "Inizio del Percorso", stat4Value: "1979", stat4Unit: "India",
      supplyTitle: "Eccellenza della Catena di Fornitura",
      supplyQuote: "Siamo rinomati per la nostra catena di fornitura senza soluzione di continuità e per la risposta rapida ed efficiente ai clienti. Siamo i più grandi produttori di silicato di sodio in India con un fatturato annuo di 3.00.000 tonnellate. Le nostre unità produttive sono prevalentemente situate nell'India meridionale con uffici nell'India settentrionale.",
      productRangeTitle: "Gamma di Prodotti e Applicazioni",
      productRangeDesc: "La nostra gamma di prodotti comprende intermediari chimici con applicazioni versatili in diversi settori tra cui edilizia, ceramica, tessile, carta, fonderie, ceramica e candele tra gli altri.",
      productCategories: ["Edilizia", "Ceramica", "Tessile", "Carta", "Fonderie", "Candele"],
      techTitle: "TECNOLOGIE ALL'AVANGUARDIA",
      techDesc: "Completamente attrezzati per soddisfare le richieste dei clienti su larga scala con impianti e macchinari delle ultime tecnologie, ingegneri altamente qualificati, personale formato ed esperti di settore.",
      workforceTitle: "Forza Lavoro Globale e Hub dell'Innovazione",
      workforceDesc: "L'organizzazione opera con oltre 600 dipendenti diretti e 300 dipendenti indiretti a livello globale. I nostri laboratori all'avanguardia spesso collaborano con i principali istituti di ricerca per sviluppare soluzioni innovative.",
      workforceQuote: "L'obiettivo dell'azienda è fornire prodotti orientati al mercato che migliorino i processi al minimo costo ambientale.",
      rdLabel: "Collaborazione R&S", rdSubLabel: "Laboratori all'avanguardia",
      coreValuesTitle: "Abbiamo Seguito i Valori Fondamentali",
      coreValues: ["Ispezione di Sicurezza e Salute", "Ingegneria Ambientale", "Consulenza Ambientale", "Valutazione di Affidabilità e Sicurezza", "Leadership con Integrità", "Ingegneria Innovativa", "Attenzione ai Nostri Clienti", "Professionisti di Alta Qualità"],
    },
    historyPage: {
      heroLabel: "Fondata nel 1979", heroTitle: "Gruppo M S Jain",
      heroQuote: "Un'eredità di innovazione visionaria ed eccellenza industriale.",
      beginningLabel: "L'Inizio", foundingTitle: "La Nostra Storia Fondativa",
      foundingText: "Kiran Italia Chemicals S.r.l è stata fondata nel 1979 con una singola piccola unità produttiva per la preparazione di silicato di sodio per i produttori di detersivi. È stata fondata da Mr. MS Jain che aveva una visione a lungo termine di espandere la sua azienda per ottenere riconoscimento globale come leader di mercato e trend setter.",
      growthText: "Nel corso degli anni, l'azienda ha costantemente ampliato la sua gamma di prodotti e oggi forniamo materie prime chimiche ad aziende di vari settori in tutto il mondo. La nostra operazione commerciale multi-prodotto su larga scala funziona con 32 unità produttive, contribuendo a oltre il 50% del fatturato del gruppo.",
      companyTitle: "Il Gruppo MS Jain Oggi",
      companyText1: "Oggi, il Gruppo MS Jain rappresenta un simbolo di fiducia e innovazione nell'industria chimica.",
      companyText2: "Con Kiran Italia Chemicals, continuiamo la nostra missione di fornire soluzioni chimiche sostenibili e di alta qualità al mondo.",
      sustainLabel: "Futuro Sostenibile",
      sustainTitle: "Costruire una chimica più verde per la prossima generazione",
      stat1: "Unità produttive",
      stat2: "Capacità (TPA/KL)",
      founderName: "Mr. MS Jain",
      founderRole: "Fondatore e Leader Visionario",
    },
    awardPage: {
      heroTitle: "Premi e Riconoscimenti", heroSubtitle: "Riconoscendo i nostri traguardi nell'eccellenza tecnica e nei contributi industriali globali.",
      milestoneLabel: "Traguardo Progetto Principale", projectTitle: "PROGETTO METRO RAIL DI LUCKNOW",
      projectHeadline: "KIRAN ITALIA CHEMICALS S.r.l HA INIZIATO LE FORNITURE DI SOLUZIONI DI INIEZIONE A BASE DI SILICATO DI SODIO KIRANSIL AL PROGETTO METRO RAIL DI LUCKNOW",
      projectDesc: "Fornitura di soluzioni chimiche specializzate per lo sviluppo infrastrutturale dell'India. La nostra competenza tecnica nelle soluzioni di iniezione a base di silicato garantisce l'integrità strutturale e la sicurezza per i progetti di trasporto urbano ad alta posta in gioco.",
      techExcTitle: "Eccellenza Tecnica", techExcDesc: "Fornitura di soluzioni avanzate di SILICATO DI SODIO KIRANSIL.",
      standardsTitle: "I Nostri Standard di Riconoscimento",
      awards: [
        { title: "ISO 9001:2015", desc: "Per l'eccellenza nei sistemi di gestione della qualità." },
        { title: "Valutazione Sigma 4", desc: "Alta distinzione per l'efficienza operativa e la qualità del servizio." },
        { title: "Leader del Settore", desc: "Il più grande produttore indiano di Silicato di Sodio e Potassio." },
        { title: "Innovatore Eco", desc: "Riconoscimento per la produzione chimica rispettosa dell'ambiente." },
      ],
      qualityTitle: "Fornire prodotti orientati al mercato con standard di qualità certificati ai nostri partner globali.",
      qualityGuarantee: "Qualità 100% Garantita", qualityInspected: "Lotti Ispezionati e Verificati",
    },
    managementPage: {
      heroLabel: "CHI SIAMO", heroTitle: "Leadership Esecutiva",
      heroDesc: "Il team visionario che guida Kiran Italia Chemicals S.r.l verso l'eccellenza globale.",
      leadershipLabel: "TEAM DI LEADERSHIP", managementTitle: "Management", executiveLabel: "LEADERSHIP ESECUTIVA",
      leaders: [
        { name: "M S Jain", role: "Presidente", badge: "FONDATORE E PRESIDENTE", bio: "Fondatore e leader visionario di Kiran Italia Chemicals S.r.l. Con decenni di esperienza nel settore chimico, ha guidato l'azienda a diventare il produttore numero 1 di silicato di sodio in India con una forte presenza globale.", stat1Label: "Esperienza", stat1Value: "45+ Anni", stat2Label: "Posizione", stat2Value: "#1 India" },
        { name: "Atul Jain", role: "Vice Presidente", badge: "VICE PRESIDENTE", bio: "Guidando iniziative di crescita strategica ed espansione aziendale per Kiran Italia Chemicals. La sua leadership guida la portata globale dell'azienda, la pipeline di innovazione e la visione a lungo termine per l'eccellenza industriale sostenibile.", stat1Label: "Focus", stat1Value: "Strategia", stat2Label: "Portata", stat2Value: "45+ Nazioni" },
        { name: "N C Rufus", role: "Amministratore Delegato", badge: "AMMINISTRATORE DELEGATO", bio: "Supervisiona le operazioni quotidiane, il successo dei clienti e l'innovazione tecnologica in tutte le 32 strutture produttive. Impegnato nel mantenimento dei più alti standard di qualità ed efficienza operativa.", stat1Label: "Impianti", stat1Value: "32 Unità", stat2Label: "Capacità", stat2Value: "300K+ Tonn" },
      ],
      values: [
        { title: "Guidati dalla Visione", desc: "Ogni decisione strategica è ancorata alla visione a lungo termine dell'azienda di leadership chimica globale e produzione sostenibile." },
        { title: "Prima Le Persone", desc: "La nostra leadership crede che il più grande asset di un'azienda siano le sue persone — coltivando talento, dedizione e innovazione a tutti i livelli." },
        { title: "Ossessionati dalla Qualità", desc: "Dall'approvvigionamento delle materie prime alla spedizione finale, il management garantisce il rispetto intransigente degli standard globali di qualità e sicurezza." },
      ],
    },
    careersPage: {
      heroLabel: "Unisciti alla Nostra Missione", heroTitle1: "Costruisci il Tuo Futuro", heroTitle2: "Con Kiran Italia Chemicals",
      heroDesc: "Le nostre persone sono la nostra forza più grande. Promuoviamo una cultura di innovazione, trasparenza, collaborazione e apprendimento continuo.",
      exploreBtn: "Esplora le Posizioni Aperte", satisfactionRate: "95%", satisfactionLabel: "Tasso di Soddisfazione dei Dipendenti",
      cultureTitle1: "Perché Lavorare", cultureTitle2: "Con Noi?",
      cultureDesc: "In Kiran Italia Chemicals, crediamo nell'empowerment dei nostri dipendenti a prendere la titolarità e guidare con l'innovazione. Offriamo un ambiente collaborativo dove ogni voce viene ascoltata e ogni contributo conta verso il nostro obiettivo globale.",
      ctaTitle: "Pronto ad Unirti al Nostro Team?", ctaDesc: "Scopri la tua prossima mossa di carriera e aiutaci a plasmare il futuro dei silicati industriali in tutto il mondo.",
      ctaBtn: "Candidati Ora",
      benefits: [
        { title: "Opportunità di Crescita Professionale", desc: "Forniamo percorsi di carriera chiari e opportunità per scalare la scala della leadership." },
        { title: "Ambiente di Lavoro Innovativo", desc: "Lavorare con tecnologia e processi all'avanguardia nel settore dei silicati industriali." },
        { title: "Progetti Leader del Settore", desc: "Sfide tecniche che spingono i confini e definiscono i benchmark del settore." },
        { title: "Sviluppo dei Dipendenti", desc: "Programmi di apprendimento continuo, workshop e sessioni di aggiornamento delle competenze." },
        { title: "Benefit Competitivi", desc: "Benefici sanitari, di benessere e finanziari completi per te e la tua famiglia." },
      ],
    },
    contactPage: {
      heroLabel: "Mettiti in Contatto", heroTitle1: "Come Possiamo", heroTitle2: "Aiutarti?",
      heroDesc: "Siamo qui per assisterti con richieste di prodotti, supporto tecnico o opportunità di partnership. Costruiamo qualcosa di grande insieme.",
      callTitle: "Chiamaci", emailTitle: "Scrivici", officeTitle: "Sede Principale",
      officeAddress: "SP12ii, 12, 95040 Motta Sant'Anastasia CT, Italy",
      availabilityLabel: "Disponibilità", monFri: "Lun - Ven", saturday: "Sabato",
      formTitle1: "Inviaci un", formTitle2: "Messaggio", formRequired: "I campi obbligatori sono contrassegnati con *",
      fieldName: "Nome Completo*", fieldEmail: "Indirizzo Email*", fieldPhone: "Numero di Telefono",
      fieldInquiry: "Tipo di Richiesta", fieldMessage: "Messaggio*",
      inquiryOptions: ["Richiesta Generale", "Preventivo Prodotto", "Supporto Tecnico", "Partnership"],
      submitBtn: "Invia Richiesta", namePlaceholder: "Mario Rossi", emailPlaceholder: "mario@azienda.it",
      phonePlaceholder: "+39 000 000 0000", messagePlaceholder: "Raccontaci le tue esigenze...",
      mapTitle1: "Visita il Nostro", mapTitle2: "Ufficio", mapDesc: "Situato a Motta Sant'Anastasia, Italia, il nostro ufficio è il cuore delle nostre operazioni europee.",
      visitOfficeLabel: "Visita il Nostro Ufficio",
    },
    chairmanPage: {
      heroSubtitle: "Un'Eredità di Eccellenza",
      value1Title: "Innovazione", value1Desc: "Tecnologie e metodi all'avanguardia.",
      value2Title: "Leader di Mercato", value2Desc: "Prima posizione in India.",
      value3Title: "Orientato alle Persone", value3Desc: "Coltivare nuovi talenti e crescita personale.",
      marketLeaderBadge: "Leader di Mercato", marketLeaderSub: "Posizione #1 in India",
    },
    whatsapp: {
      chatWithUs: "Chatta con noi!",
      message: "Ciao! Sono interessato ai vostri servizi.",
    },
    blogDetail: {
      articleNotFound: "Articolo non trovato",
      moveOrArchived: "L'approfondimento che stai cercando potrebbe essere stato spostato o archiviato.",
      returnToInsights: "Torna agli Approfondimenti",
      relatedInsights: "Approfondimenti Correlati",
      shareArticle: "Condividi l'Articolo",
    },
    industryDetail: {
      backToIndustries: "Torna ai Settori",
      comingSoon: "Dettagli del settore in arrivo...",
      browseIndustries: "Sfoglia i Settori",
      items: {
        'soap-detergents': {
          title: "SAPONI E DETERGENTI",
          heroHeading: "Soluzioni chimiche per la massima efficacia",
          description: "Presso Kiran Italia Chemicals S.r.l produciamo una vasta gamma di prodotti chimici industriali che hanno diverse applicazioni nelle aziende produttrici di saponi e detergenti. I nostri prodotti chimici sono stati sviluppati dopo un'ampia ricerca per offrire la massima efficacia, completando il prodotto finito per la massima efficacia e qualità.",
          subHeading: "Le soluzioni chimiche per l'industria manifatturiera di saponi e detergenti sono:",
          contextText: "L'aggiunta di silicati ai detergenti sintetici è vantaggiosa perché addolcisce l'acqua e si risciacqua facilmente. Grazie alle grandi qualità di sospensione e anti-rideposizione, non lasciano depositi sulle fibre. I loro vantaggi includono",
          benefits: [
            "È un agente builder utilizzato nelle soluzioni di pulizia domestica",
            "Migliora le proprietà di lavaggio del detergente",
            "Previene i depositi minerali rimuovendo la durezza dell'acqua",
            "Aiuta a mantenere la sospensione delle piccole particelle di sporco o grasso nel liquido di lavaggio",
            "Agisce come un tensioattivo che estrae lo sporco dal materiale per segregare le impurità affinché escano dalla sospensione; dispersione della deflocculazione dello sporco",
            "Aiuta a controllare la viscosità nella produzione di polvere detergente della densità desiderata",
            "Un ingrediente nel processo di essiccazione nella produzione di polvere detergente",
            "Agisce come legante per dare il grado appropriato di \"durezza\" alle particelle sferiche di detergente",
            "La sua alcalinità consente loro di neutralizzare le macchie acide, favorire l'emulsionamento di grassi e oli e disperdere o solubilizzare le proteine",
            "Stabilizza il pH al livello desiderato",
            "Utilizzato per la pulizia dei metalli, la lavorazione dei tessuti, il lavaggio di piatti, attrezzature casearie, bottiglie, pavimenti e locomotive",
            "Previene la reversione dei fosfati nei detergenti liquidi",
            "Dà il miglior risultato per saponi liquidi e in pasta",
            "Migliora la detergenza del detergente di tipo sapone"
          ],
          images: ["/13.webp", "/14.webp", "/15.webp"]
        },
        'automotive-repair': {
          title: "RIPARAZIONE AUTOMOTIVE",
          heroHeading: "Potenti soluzioni di sigillatura per veicoli",
          description: "Kiran Italia Chemicals S.r.l fornisce prodotti chimici industriali alle industrie automobilistiche per l'applicazione su veicoli di ogni tipo e dimensione. Il silicato di sodio e potassio sono ampiamente utilizzati per le loro potenti proprietà nei lavori di riparazione.",
          subHeading: "Applicazioni nella manutenzione automobilistica:",
          contextText: "Considerata una soluzione 'verde' grazie alle fonti rinnovabili, i nostri silicati forniscono capacità di riparazione critiche:",
          benefits: [
            "Sigilla le perdite nelle guarnizioni della testata: agisce come un potente sigillante a 93°C (non si scioglie sotto gli 815°C)",
            "Protegge le guarnizioni: versato nei radiatori per circolare e utilizzare le proprietà di resistenza al calore",
            "Azione rapida: l'applicazione arresta il vapore dall'acqua del radiatore nello scarico in pochi minuti",
            "Aiuto per la disattivazione del motore: agisce come un potente sostituto dell'olio motore in specifici processi di disattivazione",
            "Rispettoso dell'ambiente: costo ambientale minimo rispetto ai sigillanti sintetici"
          ],
          images: ["/28.jpg", "/29.jpg", "/30.jpg"]
        },
        'food-industry': {
          title: "INDUSTRIA ALIMENTARE",
          heroHeading: "Prodotti chimici per uso alimentare secondo le linee guida internazionali",
          description: "Presso Kiran Italia Chemicals S.r.l offriamo prodotti chimici che seguono le linee guida internazionali per la sicurezza alimentare. I principali prodotti chimici che offriamo per l'industria alimentare sono la silice precipitata e il metasilicato di sodio. Abbiamo l'approvazione del CIR con limiti di concentrazione e l'approvazione della FDA come additivo alimentare con classificazione GRAS (Generally Recognized as Safe).",
          subHeading: "Il metasilicato di sodio viene utilizzato nelle seguenti applicazioni:",
          contextText: "",
          benefits: [
            "Conserva le uova senza elettricità fino a 6 mesi tenendo fuori i batteri nocivi",
            "È un ingrediente primario nel confezionamento essiccante di alimenti e altri articoli degradabili per la protezione dall'umidità",
            "Protegge certi alimenti dall'essere permeabili assorbendo l'umidità dell'aria",
            "Agisce come flocculante per certi vini e birre, rendendoli più piacevoli da bere attraverso la chiarificazione",
            "È un ausilio alla precipitazione per particelle colloidali nelle bevande, facilitando la rimozione delle particelle",
            "**La silice precipitata viene utilizzata nelle seguenti applicazioni:**",
            "Viene utilizzata come agente anti-agglomerante per sale commestibile, cipolla, aglio in polvere e altri prodotti alimentari consentiti in tramogge, trasportatori, essiccatori a spruzzo e altri macchinari affini",
            "Aumenta l'efficienza di lavorazione attraverso una miscelazione più fluida degli ingredienti",
            "Migliora la consistenza del prodotto e consente il dosaggio automatizzato di estratti di frutta e verdura, nutrienti, spezie e conservanti",
            "Facilita più opzioni di spedizione con varie temperature e condizioni ambientali"
          ],
          images: ["/31.jpg", "/32.jpg", "/33.jpg"]
        },
        'water-treatment': {
          title: "TRATTAMENTO ACQUE",
          heroHeading: "Efficacia provata per acque potabili e industriali",
          description: "Presso Kiran Italia Chemicals S.r.l protuciamo Silicato di Sodio e Silicato di Potassio che hanno dimostrato la massima efficacia per una serie di fattori nel trattamento delle acque potabili e industriali. Tra questi figurano:",
          subHeading: "",
          contextText: "",
          benefits: [
            "Come flocculante per il trattamento delle acque grezze e reflue per aumentare le dimensioni e il legame delle molecole più pesanti",
            "Per formare un film che previene la corrosione dei metalli nelle condutture idriche",
            "Per ridurre e controllare la tossicità di piombo e rame nel loro trattamento",
            "Per migliorare il gusto e stabilizzare la presenza di ferro e magnesio nell'acqua di pozzo prima dell'aerazione",
            "Come legante per ridurre la porosità e il tempo di presa nella solidificazione e stabilizzazione",
            "Come efficiente ausilio alla coagulazione se usato con solfato di alluminio nel normale processo di purificazione"
          ],
          images: ["/34.jpg", "/35.jpg", "/36.jpg"]
        },
        'foundries': {
          title: "FONDERIE",
          heroHeading: "Agenti chimici avanzati per il trattamento dei metalli",
          description: "Kiran Italia Chemicals S.r.l produce e fornisce agenti chimici primari per le fonderie a livello globale. I nostri prodotti chimici sono utilizzati per una vasta gamma di applicazioni nel trattamento dei metalli e nello stampaggio.",
          subHeading: "Applicazioni di liquidi e grumi:",
          contextText: "Silicati specializzati per il legame dell'anima e la finitura superficiale:",
          benefits: [
            "Legante di sabbia per anime economico per lo stampaggio di fusioni in acciaio e non ferrose",
            "Riparazione marmitte: utilizzato con silicato di magnesio per ridurre il suono nei motori a combustione interna",
            "Pasta per raccordi: si dissolve con silicato di magnesio per formare una pasta densa ed efficace",
            "Finitura superficiale: la silice precipitata agisce come agente opacizzante e addensante",
            "Satinatura: dona una finitura professionale e riduce la lucentezza sui mobili in metallo"
          ],
          images: ["/37.jpg", "/38.jpg", "/39.jpg"]
        },
        'petroleum-oil-drilling': {
          title: "PETROLIO E PERFORAZIONI",
          heroHeading: "Applicazioni nei campi petroliferi rispettose dell'ambiente",
          description: "Presso Kiran Italia Chemicals S.r.l offriamo silicato di sodio e silicato di potassio per applicazioni convenienti in vari campi petroliferi e fluidi di perforazione. Offriamo prodotti chimici ecologici che facilitano migliori risultati in termini di conformità, bonifica e cementazione. L'applicazione di silicati di sodio e potassio include ampiamente:",
          subHeading: "",
          contextText: "",
          benefits: [
            "Controllo dei colloidi nella formazione geologica",
            "Nelle operazioni di fango di perforazione",
            "Come efficace agente chimico per prevenire la corrosione",
            "Come emulsionante di abbattimento nelle operazioni di perforazione"
          ],
          images: ["/40.jpg", "/41.png", "/42.jpg"]
        },
        'concrete-general': {
          title: "CEMENTO E GENERALE",
          heroHeading: "Trattamento altamente efficace per muratura e cemento",
          description: "Kiran Italia Chemicals S.r.l offre trattamenti chimici altamente efficaci ed efficienti per il cemento e il trattamento generale della muratura. I nostri prodotti sono utilizzati ampiamente in varie fasi della produzione e applicazione del cemento e nei lavori di muratura generale.",
          subHeading: "I prodotti chimici che forniamo per il trattamento del cemento e della muratura generale sono:",
          contextText: "",
          benefits: [
            "**Metasilicato di Sodio**",
            "Produzione di cementi speciali per l'industria della perforazione",
            "Per l'aggiunta in miscele di cemento a secco per accelerare la presa",
            "**Silicato di Sodio e Silicato di Potassio**",
            "Come agente stagionante, viene applicato sulla superficie di uno strato fresco di cemento per estenderne la durata",
            "Per trattare il cemento dopo che è completamente asciutto o indurito per una migliore resistenza all'acqua e longevità",
            "Sigillatura chimica dell'indurimento del cemento contro grasso e polvere",
            "Per la resistenza agli acidi",
            "Riduce significativamente la porosità nella maggior parte dei prodotti in muratura rendendoli molto più resistenti all'usura e idrorepellenti",
            "Utilizzato come attivatore alcalino nel cemento e nel calcestruzzo geopolimerico",
            "Applicare un sottile strato sulla superficie dell'intonaco non verniciato o del cemento come idrorepellente",
            "Per trattare vecchie superfici in cemento per fornire una superficie più dura",
            "Agisce come penetrante nel cemento e reagisce con la calce libera residua per ridurre la porosità"
          ],
          images: ["/43.jpg", "/44.jpg", "/45.jpg"]
        },
        'chemical-injection': {
          title: "INIEZIONE CHIMICA",
          heroHeading: "Applicazione di precisione per la sigillatura del suolo e strutturale",
          description: "Kiran Italia Chemicals S.r.l fornisce iniezioni chimiche dove è richiesta l'applicazione diretta in un'area profonda con un contatto minimo o nullo in altre aree. Forniamo i prodotti chimici in confezioni appropriate, in forma liquida o in grumi, in base all'applicazione e alla composizione.",
          subHeading: "Forniamo principalmente Silicato di Sodio e Silicato di Potassio per iniezioni chimiche, e sono popolarmente utilizzati dai clienti per le seguenti applicazioni:",
          contextText: "",
          benefits: [
            "Per iniezione chimica o solidificazione del sottosuolo",
            "Per la sigillatura di pori con bassa resistenza",
            "Nel \"Processo Joosten\" per formare un gel insolubile",
            "Dove le formazioni sotterranee devono essere abbastanza forti da sopportare il carico, come muretti o fondamenta",
            "Dove i pori sotterranei permeabili all'acqua consentono l'allagamento di miniere, pozzi e tunnel",
            "Per prevenire la perdita d'acqua nelle dighe",
            "Per sigillare i pori nel lavoro di cemento o mattoni che si trovano in fogne o costruzioni sotterranee",
            "Per rivestire i tubi di fognatura per ridurre il deposito sulle pareti interne"
          ],
          images: ["/46.jpg", "/47.jpg", "/48.jpg"]
        },
        'metals': {
          title: "METALLI",
          heroHeading: "Composti di silicato per riparazione e finitura dei metalli",
          description: "Il silicato di sodio viene utilizzato, insieme al silicato di magnesio, nella riparazione delle marmitte e nella pasta per raccordi. Quando sciolti in acqua, sia il silicato di sodio che il silicato di magnesio formano una pasta densa e facile da applicare.",
          subHeading: "",
          contextText: "I composti di silicato che rimangono hanno proprietà simili al vetro, rendendo una riparazione temporanea e fragile.",
          benefits: [],
          images: ["/49.jpg", "/50.jpg"]
        },
        'ceramics-refractory': {
          title: "CERAMICA E REFRATTARI",
          heroHeading: "Ingredienti chiave per ceramiche industriali e decorative",
          description: "Kiran Italia Chemicals S.r.l fornisce silicato di sodio e silicato di potassio come ingredienti chiave per la produzione di ceramiche, sia per scopi industriali che per uso decorativo. La sabbia di alta qualità da noi utilizzata per la produzione dei silicati e la miscelazione con prodotti chimici di alta qualità ci consente di fornire qualità garantita ai nostri clienti.",
          subHeading: "Il silicato di sodio e il silicato di potassio prodotti dalla nostra azienda sono utilizzati dai clienti nel seguente modo:",
          contextText: "",
          benefits: [
            "Come agente legante nei cementi plastici refrattari per rivestimenti duri",
            "Come deflocculante nella fusione ceramica",
            "Come deflocculante per rendere la pasta più fluida e per la riduzione dell'acqua",
            "Come deflocculante nell'argilla raffinata per migliorare la fluidità",
            "Come agente legante economico nei cementi resistenti agli acidi",
            "Formazione di uno strato protettivo ignifugo nei colaggi in barbottina",
            "Come strato isolante termico",
            "Fornitura di un rivestimento protettivo per l'antico e per la finitura antica",
            "Come deflocculante per barbottina d'argilla in piccoli dosaggi per ridurre il ritiro",
            "La vermiculite e la perlite sono completamente ininfiammabili se legate con i silicati"
          ],
          images: ["/51.jpg", "/52.jpg", "/53.jpg"]
        },
        'mining-mineral-processing': {
          title: "MINIERE E LAVORAZIONE MINERALI",
          heroHeading: "Agenti di arricchimento per il recupero di minerali ad alto rendimento",
          description: "Presso Kiran Italia Chemicals S.r.l offriamo Silicato di Sodio e Silicato di Potassio per l'arricchimento di minerali e metalli. I silicati svolgono due funzioni primarie nel processo di arricchimento dei minerali:",
          subHeading: "",
          contextText: "",
          benefits: [
            "Viene utilizzato nella flottazione per schiuma per disperdere le fanghiglie.",
            "Agisce come depressore per i minerali della ganga silicea e nei processi di arricchimento non metallici tra cui rame, stagno, tungsteno, fluorite e fosfato",
            "Come agente di lavaggio schiarente nella produzione di biossido di titanio",
            "**Il loro vantaggio nell'arricchimento dei minerali è:**",
            "Viene utilizzato per la flottazione per schiuma per disperdere le fanghiglie",
            "Agisce come depressore per i minerali della ganga silicea e nei processi di arricchimento non metallici per rame, stagno, tungsteno, fluorite e fosfato",
            "Viene utilizzato come agente di lavaggio schiarente nel processo di produzione del biossido di titanio"
          ],
          images: ["/54.jpg", "/55.jpg", "/56.jpg"]
        },
        'cosmetics': {
          title: "COSMETICI",
          heroHeading: "Agenti chimici per cosmetici",
          description: "Kiran Italia Chemicals S.r.l fornisce prodotti chimici industriali per le aziende produttrici di cosmetici. I nostri prodotti chimici sono miscelati con cura per garantire che i cosmetici utilizzati in aree sensibili non causino danni o complicazioni avverse.",
          subHeading: "Silicato di Sodio e Silicato di Potassio",
          contextText: "Le applicazioni includono:",
          benefits: [
            "Formule per la cura della pelle e la colorazione dei capelli, creme da barba, trucco per gli occhi e prodotti per l'igiene orale",
            "**Silice precipitata**",
            "Dentifricio e polvere dentifricia"
          ],
          images: ["/16.jpg", "/17.jpg", "/18.jpg"]
        },
        'agriculture': {
          title: "AGRICOLTURA",
          heroHeading: "Fertilizzanti chimici e nutrienti",
          description: "Per l'industria agricola, forniamo fertilizzanti chimici di alta qualità che hanno un effetto misurato sui prodotti agricoli, in modo che assorbano le proprietà rinforzanti senza effetti avversi sui nutrienti.",
          subHeading: "I prodotti chimici che forniamo per la produzione di fertilizzanti sono:",
          contextText: "Silicato di Sodio, Silicato di Potassio e Silice precipitata",
          benefits: [
            "**I prodotti chimici sono utilizzati per:**",
            "Come veicolo durante l'irrorazione di biopesticidi",
            "Arricchimento di potassio nel suolo",
            "Componente per l'alimentazione animale",
            "Diluenti per prodotti chimici agricoli",
            "*I nostri prodotti chimici si integrano con i fertilizzanti e diffondono i nutrienti in tutta la pianta, senza influire negativamente sulla qualità del suolo o compromettere il grado del prodotto agricolo.*"
          ],
          images: ["/19.jpg", "/20.jpg", "/21.jpg"]
        },
        'timber-treatment': {
          title: "TRATTAMENTO LEGNAME",
          heroHeading: "Silicato di Sodio per il trattamento del legname",
          description: "Kiran Italia Chemicals S.r.l fornisce silicato di sodio per il trattamento del legname per clienti in vari settori. La nostra soluzione chimica è offerta in forma liquida e in grumi a seconda del grado di intensità chimica richiesto e delle esigenze di confezionamento dei nostri clienti.",
          subHeading: "I nostri clienti utilizzano generalmente il silicato di sodio nel trattamento del legname per:",
          contextText: "",
          benefits: [
            "Proteggere il legno dagli insetti",
            "Nella stagionatura del legname per conferire proprietà ritardanti di fiamma",
            "Per trattamenti non tossici in quanto il prodotto chimico deriva da fonti rinnovabili"
          ],
          images: ["/22.jpg", "/23.jpg", "/24.jpg"]
        },
        'adhesives': {
          title: "ADESIVI",
          heroHeading: "Adesivi ad alta propensione al legame",
          description: "Gli adesivi prodotti utilizzando agenti chimici prodotti da noi sono noti per la loro alta propensione al legame. I prodotti chimici che produciamo e forniamo per la produzione di adesivi sono:",
          subHeading: "Silicato di sodio e potassio",
          contextText: "Applicazioni industriali e vantaggi:",
          benefits: [
            "Nell'industria delle munizioni, viene utilizzato per sigillare la carta nitrata combustibile per formare una cartuccia di carta conica per contenere polvere nera. Viene utilizzato per sigillare la palla di piombo o il proiettile conico con l'estremità aperta della cartuccia di carta",
            "È l'unico adesivo inorganico che offre alta resistenza a un prezzo economico e fa presa rapidamente",
            "Viene utilizzato nella produzione di tubi di carta, pannelli multistrato e fusti in fibra",
            "Viene utilizzato come sigillante per giunti e crepe del sistema di scarico per la riparazione di marmitte, tubi di scappamento e risuonatori",
            "Viene utilizzato come adesivo per alte temperature in giunti critici",
            "**Silice precipitata**",
            "Viene utilizzata per migliorare la forza del legame e come agente addensante",
            "Le sue particelle di silice dispersa induriscono velocemente all'interno degli adesivi liquidi a contatto con una superficie solida",
            "Previene la resistenza al calore dei metalli caldi",
            "Migliora l'adesione della gomma nei composti per tessuti e rivestimenti per fili, facilitando una lavorazione facile e rapida"
          ],
          images: ["/25.jpg", "/26.jpg", "/27.jpg"]
        }
      },
    },
  },
};

