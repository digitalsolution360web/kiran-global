'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

// We can expand this data object as we add more industries
const industryData: Record<string, any> = {
  'soap-detergents': {
    title: "SOAP & DETERGENTS",
    heroHeading: "Chemical solutions for highest efficacy",
    description: "At Kiran Global Chems Ltd. we produce a host of industrial chemicals that have diverse application in the soap and detergent manufacturing companies. Our chemical products have been developed after extensive research to deliver highest efficacy, complementing the finished good for greatest effectiveness and quality.",
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
    description: "Kiran Global Chem Ltd. supplies industrial chemicals to automotive industries for application for vehicles of all types and sizes. Sodium and potassium silicate are largely used for their powerful properties in repair work.",
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
    description: "At Kiran Global Chem Ltd. we offer chemicals that follow international guidelines for food safety. We have approval from CIR and are FDA approved as a food additive with the GRAS rating.",
    subHeading: "Applications of Sodium Metasilicate & Silica:",
    contextText: "Our chemicals ensure preservation and quality across various food categories:",
    benefits: [
      "Egg Preservation: Preserves eggs without electricity for up to 6 months",
      "Desiccant Packaging: Primary ingredient for protecting degradable items against moisture",
      "Beverage Clarification: Acts as a flocculent for wines and beers for smoother drinking",
      "Anti-caking: Precipitated silica prevents clumping in salt, onion, and garlic powders",
      "Processing Efficiency: Increases smoother blending and automated dosing of extracts"
    ],
    images: ["/31.jpg", "/32.jpg", "/33.jpg"]
  },
  'water-treatment': {
    title: "WATER TREATMENT",
    heroHeading: "Proven Efficacy for Potable & Industrial Water",
    description: "At Kiran Global Chems Ltd., we manufacture Sodium Silicate and Potassium Silicate which are proven to have highest efficacy for treatng potable and industrial water.",
    subHeading: "Treatment Factors & Benefits:",
    contextText: "Our silicates are essential for purification and infrastructure protection:",
    benefits: [
      "Flocculent: Increases size and binding of heavier molecules in waste water treatment",
      "Corrosion Inhibition: Forms a protective film to prevent metal corrosion in water lines",
      "Toxicity Control: Reduces and controls toxicity levels of lead and copper",
      "Taste Improvement: Stabilizes iron and magnesium in bore hole water before aeration",
      "Coagulation Aide: Acts efficiently when used with aluminium sulphate in purification",
      "Porosity Reduction: Used as a binder to reduce setting time in solidification"
    ],
    images: ["/34.jpg", "/35.jpg", "/36.jpg"]
  },
  'foundries': {
    title: "FOUNDRIES",
    heroHeading: "Advanced Chemical Agents for Metal Treatment",
    description: "Kiran Global Chems Ltd. manufactures and supplies primary chemical agents for foundries globally. Our chemicals are used for a wide range of applications in metal treatment and moulding.",
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
    description: "At Kiran Global Chem Ltd., we offer sodium silicate and potassium silicate for cost-efficient application in oil fields and drilling fluids, facilitating enhanced results in remediation and cementing.",
    subHeading: "Drilling & Conformance Utilities:",
    contextText: "Our chemicals facilitate better control and results in harsh drilling environments:",
    benefits: [
      "Control of colloids in various geological formations",
      "Optimizing drilling mud operations for better fluid management",
      "Effective corrosion prevention agent for expensive drilling equipment",
      "Reliable breakdown emulsifier in complex drilling operations",
      "Facilitates enhanced results in cementing and remediation processes"
    ],
    images: ["/40.jpg", "/41.png", "/42.jpg"]
  },
  'concrete-general': {
    title: "CONCRETE AND GENERAL",
    heroHeading: "Highly Effective Masonry & Concrete Treatment",
    description: "Kiran Global Chem Ltd. offers highly effective and efficient chemical treatments for concrete and general masonry, used at various stages of manufacturing and application.",
    subHeading: "Curing, Hardening & Sealing:",
    contextText: "Comprehensive treatment for longevity and durability of masonry:",
    benefits: [
      "Curing agent: Applied to fresh concrete layers to extend durability",
      "Set Acceleration: Added to dry cement admixtures for faster setting times",
      "Geopolymer Activator: Used as an alkali activator in geopolymer cement and concrete",
      "Dust Proofing: Chemical sealing against grease and dust for cleaner surfaces",
      "Water Repellent: Significantly reduces porosity in masonry products making them wearable"
    ],
    images: ["/43.jpg", "/44.jpg", "/45.jpg"]
  },
  'chemical-injection': {
    title: "CHEMICAL INJECTION",
    heroHeading: "Precision Application for Soil & Structural Sealing",
    description: "Kiran Global Chem Ltd. supplies chemical injections where direct application to a deep area is required with minimum to zero contact in other areas.",
    subHeading: "Direct Solidification & Sealing:",
    contextText: "Our silicates are preferred for their rapid solidification properties in engineering:",
    benefits: [
      "Chemical injection or solidification of subsoil for structural support",
      "Sealing of low-resistance pores in foundation work",
      "Joosten Process: Formation of insoluble gels for area stabilization",
      "Waterproofing: Prevents flooding in mines, wells, and tunnels by sealing pores",
      "Infrastructure protection: Coats sewerage pipes to reduce inner wall deposition"
    ],
    images: ["/46.jpg", "/47.jpg", "/48.jpg"]
  },
  'metals': {
    title: "METALS",
    heroHeading: "Silicate Compounds for Metal Repair & Finishing",
    description: "Sodium silicate is used, along with magnesium silicate, in muffler repair and fitting paste for a variety of metal components.",
    subHeading: "Metal Repair Properties:",
    contextText: "Our silicate blends offer unique temporary and permanent repair features:",
    benefits: [
      "High-viscosity paste: Forms a thick, easily applicable paste when dissolved in water",
      "Glass-like properties: Provides a stable, brittle repair that fills gaps effectively",
      "Muffler Repair: Optimized for internal combustion engine sound reduction",
      "Economic inorganic solution for quick metal surface stabilization"
    ],
    images: ["/49.jpg", "/50.jpg"]
  },
  'ceramics-refractory': {
    title: "CERAMICS & REFRACTORY",
    heroHeading: "Key Ingredients for Industrial & Decorative Ceramics",
    description: "Kiran Global Chems Ltd. supplies sodium silicate and potassium silicate as a key ingredient for manufacturing ceramics, from refractory cements to decorative finishes.",
    subHeading: "Deflocculation & Binding:",
    contextText: "Essential agents for clay processing and heat-resistant coatings:",
    benefits: [
      "Refractory Binding: Key agent in plastic cements for hard coating",
      "Deflocculator: Makes thinner pastes for water reduction in ceramic casting",
      "Fire-proofing: Forms a protective non-flammable layer in slip castings",
      "Antique Finish: Provides a protective coat used for specialized antique finishes",
      "Reduced Shrinkage: Acts as a clay slip deflocculant to minimize manufacturing loss"
    ],
    images: ["/51.jpg", "/52.jpg", "/53.jpg"]
  },
  'mining-mineral-processing': {
    title: "MINING AND MINERAL PROCESSING",
    heroHeading: "Beneficiation Agents for High-Yield Mineral Recovery",
    description: "At Kiran Global Chem Ltd., we offer Sodium Silicate and Potassium Silicate for the beneficiation of minerals and metals, performing dual primary functions.",
    subHeading: "Froth Flotation & Dispersion:",
    contextText: "Our chemicals facilitate high-purity extraction of copper, tin, and rare earth minerals:",
    benefits: [
      "Disperses slimes effectively during the froth flotation process",
      "Depressant: Acts against siliceous gangue minerals for higher purity yield",
      "Brightening Agent: Used in the manufacturing process of Titanium Dioxide",
      "Utilized globally for copper, tin, tungsten, fluorspar, and phosphate processing",
      "Provides better separation control in non-metallic beneficiation"
    ],
    images: ["/54.jpg", "/55.jpg", "/56.jpg"]
  }
};

export default function IndustryDetailPage() {
  const { slug } = useParams();
  const { language } = useLanguage();
  
  const data = industryData[slug as string];

  if (!data) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="text-2xl font-bold">Industry details coming soon...</h1>
        <Link href="/industries-we-serve" className="text-primary hover:underline mt-4 inline-block">Back to Industries</Link>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen pt-40 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-gray-400 mb-12">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-gray-300">»</span>
          <Link href="/industries-we-serve" className="hover:text-primary transition-colors">Industrial</Link>
          <span className="text-gray-300">»</span>
          <span className="text-gray-500">{data.title}</span>
        </nav>

        {/* Title Section */}
        <div className="mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#06101f] leading-snug tracking-tight flex items-center gap-4">
            <div className="w-1.5 h-10 bg-secondary/40 rounded-full" />
            {data.title}
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Images Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {data.images.map((img: string, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-lg border border-gray-100 group"
              >
                <Image 
                  src={img} 
                  alt={`${data.title} ${idx + 1}`} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </motion.div>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-5xl font-light text-gray-700 tracking-tight leading-tight">
                {data.heroHeading}
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                {data.description}
              </p>

              <div className="pt-6">
                <h3 className="font-bold text-[#06101f] text-lg mb-4">
                  {data.subHeading}
                </h3>
                <p className="text-gray-600 mb-8 italic">
                  {data.contextText}
                </p>

                <ul className="space-y-4">
                  {data.benefits.map((benefit: string, idx: number) => (
                    <li key={idx} className="flex gap-4 items-start group">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0 group-hover:scale-150 transition-transform shadow-sm" />
                      <span className="text-gray-600 text-base leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-12 border-t border-gray-100 italic text-gray-400 text-sm">
                * Our experts collaborate globally to refine these formulations for specific client needs.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
