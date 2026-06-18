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
  'metals': {
    title: "METALS",
    heroHeading: "Silicate Compounds for Metal Repair & Finishing",
    description: "Sodium silicate is used, along with magnesium silicate, in muffler repair and fitting paste. When dissolved in water, both sodium silicate and magnesium silicate form a thick paste that is easy to apply.",
    subHeading: "",
    contextText: "The silicate compounds that are left over have glass-like properties, making a temporary, brittle repair.",
    benefits: [],
    images: ["/49.jpg", "/50.jpg"]
  },
  'ceramics-refractory': {
    title: "CERAMICS & REFRACTORY",
    heroHeading: "Key Ingredients for Industrial & Decorative Ceramics",
    description: "Kiran Italia Chemicals S.r.l supplies sodium silicate and potassium silicate as a key ingredient for manufacturing ceramics, both for industrial purpose and decorative use. The top quality sand used by us for manufacturing the silicates and blending with high quality chemicals enables us to provide assured quality to our clients.",
    subHeading: "Sodium silicate and potassium silicate manufacture by our company is used by clients in the following manner:",
    contextText: "",
    benefits: [
      "As a Binding Agent in Refractory plastic cements for hard coating",
      "As a Deflocculator in ceramic casting",
      "As a Deflocculator to make thinner paste and for water Reduction",
      "As a Deflocculator in refined clay to improve Fluidity",
      "As an economic Binding Agent in Acid-resistant cements",
      "Forming a fire-proof protective layer in slip castings",
      "As thermal insulation-proof Layer",
      "Providing protective coat for Antique and for antique Finish",
      "As a clay slip deflocculant in small dosage to reduce shrinkage",
      "Vermiculite and perlite are completely non-flammable, when bonded using silicates"
    ],
    images: ["/51.jpg", "/52.jpg", "/53.jpg"]
  },
  'mining-mineral-processing': {
    title: "MINING AND MINERAL PROCESSING",
    heroHeading: "Beneficiation Agents for High-Yield Mineral Recovery",
    description: "At Kiran Italia Chemicals S.r.l, we offer Sodium Silicate and Potassium Silicate for beneficiation of minerals and metals. Silicates perform two primary functions in mineral beneficiation process:",
    subHeading: "",
    contextText: "",
    benefits: [
      "Is used in froth flotation to disperse slimes.",
      "Acts as a depressant for siliceous gangue minerals and non-metallic beneficiation processes including copper, tin, tungsten, fluorspar and phosphate, utilize silicate in this way",
      "As an brightening washing agent in Titanium di oxide manufacture",
      "**Their benefit in mineral beneficiation is:**",
      "It is used for froth flotation to disperse slimes",
      "It acts as a depressant for siliceous gangue minerals and non-metallic beneficiation processes for copper, tin, tungsten, fluorspar and phosphate",
      "It is used as a brightening washing agent in Titanium dioxide manufacturing process"
    ],
    images: ["/54.jpg", "/55.jpg", "/56.jpg"]
  },
  'cosmetics': {
    title: "COSMETICS",
    heroHeading: "Chemical Agents for Cosmetics",
    description: "Kiran Italia Chemicals S.r.l supplies industrial chemicals for cosmetics manufacturing businesses. Our chemicals are blended with care to ensure that the cosmetics that are used sensitively do not cause any adverse damages or complications.",
    subHeading: "Sodium Silicate & Potassium Silicate",
    contextText: "Applications include:",
    benefits: [
      "Skin Care and Hair Coloring formulas, Shaving Creams, Eye Make-up and Oral Hygiene products",
      "**Precipitated silica**",
      "Toothpaste and tooth powder"
    ],
    images: ["/16.jpg", "/17.jpg", "/18.jpg"]
  },
  'agriculture': {
    title: "AGRICULTURE",
    heroHeading: "Chemical Fertilizers and Nutrients",
    description: "For the agriculture industry, we supply high grade chemical fertilizers that have measured effect on agricultural products, so that they absorb the strengthening properties without any adverse effects to the nutrients.",
    subHeading: "The chemicals that we supply for fertilizer production are:",
    contextText: "Sodium Silicate, Potassium Silicate, and Precipitated silica",
    benefits: [
      "**The Chemicals are Used For:**",
      "As a medium during spraying of bio pesticides",
      "Enrichment of potassium in soil",
      "Animal feed component",
      "Diluents for agricultural chemicals",
      "*Our chemicals integrate themselves with the fertilizers and spread the nutrients throughout the plant, without adversely affecting the soil quality or compromising the agricultural produce grade.*"
    ],
    images: ["/19.jpg", "/20.jpg", "/21.jpg"]
  },
  'timber-treatment': {
    title: "TIMBER TREATMENT",
    heroHeading: "Sodium Silicate for Timber Treatment",
    description: "Kiran Italia Chemicals S.r.l supplies sodium silicate for timber treatment for clients in various industries. Our chemical solution is offered in liquid and lump form as per the grade of chemical intensity required and the packaging needs of our clients.",
    subHeading: "Our customers generally use sodium silicate in timber treatment for:",
    contextText: "",
    benefits: [
      "Preserving wood from insects",
      "In timber seasoning to instil flame-retardant properties",
      "For non-toxic treatment as the chemical is derived from renewable sources"
    ],
    images: ["/22.jpg", "/23.jpg", "/24.jpg"]
  },
  'adhesives': {
    title: "ADHESIVES",
    heroHeading: "High Binding Propensity Adhesives",
    description: "The adhesives that are manufactured using chemical agents manufactured by us are known for their high binding propensity. The chemicals that we manufacture and supply for manufacturing adhesives are:",
    subHeading: "Sodium and potassium silicate",
    contextText: "Industrial applications and benefits:",
    benefits: [
      "In the ammunitions industry, it is used to seal combustible nitrated paper to form a conical paper cartridge for holding black powder. It is used to seal lead ball or conical bullet with the open end of the paper cartridge",
      "It is the only inorganic adhesive that offer high strength at an economic price and sets rapidly",
      "It is used in making paper tubes, multi-layer boards and fibre drums",
      "It is used as an exhaust system joint and crack sealer for muffler, tailpipes and resonators repair",
      "It is used as a high temperature adhesive in critical joint",
      "**Precipitate silica**",
      "It is used to enhance bond strength and as a thickening agent",
      "Its dispersed silica particles harden fast within liquid adhesives on contact with solid surface",
      "It prevents heat resistance of hot metals",
      "It improves adhesion in rubber in fabric and wire coat compounds, facilitating easy and rapid processing"
    ],
    images: ["/25.jpg", "/26.jpg", "/27.jpg"]
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

  const formatBenefit = (text: string) => {
    if (text.startsWith('**') && text.endsWith('**')) {
      return { isHeading: true, content: text.slice(2, -2) };
    }
    if (text.startsWith('*') && text.endsWith('*')) {
      return { isItalic: true, content: text.slice(1, -1) };
    }
    return { isHeading: false, isItalic: false, content: text };
  };

  return (
    <main className="bg-[#f8f9fb] min-h-screen pt-40 pb-24">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-8 xl:px-12">

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-10">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-gray-300">»</span>
          <Link href="/industries-we-serve" className="hover:text-primary transition-colors">Industries</Link>
          <span className="text-gray-300">»</span>
          <span className="text-gray-500">{data.title}</span>
        </nav>

        {/* Page Title Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="w-1.5 h-12 bg-secondary rounded-full" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#06101f] tracking-tight uppercase">
              {data.title}
            </h1>
          </div>
          <div className="ml-6 w-24 h-1 bg-secondary/40 rounded-full" />
        </motion.div>

        {/* Hero Section — First Image LEFT, Content RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid lg:grid-cols-2 gap-10 mb-16 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
        >
          {/* Left: First Image */}
          {data.images.length > 0 && (
            <div className="relative min-h-[320px] lg:min-h-[440px]">
              <Image
                src={data.images[0]}
                alt={`${data.title} 1`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>
          )}

          {/* Right: Hero Content */}
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#06101f] leading-snug mb-5">
              {data.heroHeading}
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              {data.description}
            </p>
          </div>
        </motion.div>

        {/* Sub-content Section — Content LEFT, Remaining Images RIGHT */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* Left: Sub-heading + benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-8 bg-white rounded-2xl shadow-md border border-gray-100 p-8 lg:p-10"
          >
            {data.subHeading && (
              <h3 className="text-xl font-semibold text-[#06101f] mb-3 pb-3 border-b-2 border-secondary/30">
                {data.subHeading}
              </h3>
            )}
            {data.contextText && (
              <p className="text-gray-500 italic mb-6 text-sm leading-relaxed">
                {data.contextText}
              </p>
            )}

            {data.benefits.length > 0 && (
              <ul className="space-y-3 mt-4">
                {data.benefits.map((benefit: string, idx: number) => {
                  const fmt = formatBenefit(benefit);
                  if (fmt.isHeading) {
                    return (
                      <li key={idx} className="pt-4 pb-1">
                        <span className="font-bold text-[#06101f] text-base uppercase tracking-wide border-l-4 border-secondary pl-3">
                          {fmt.content}
                        </span>
                      </li>
                    );
                  }
                  if (fmt.isItalic) {
                    return (
                      <li key={idx} className="pt-4 border-t border-gray-100">
                        <span className="text-gray-500 italic text-sm leading-relaxed">
                          {fmt.content}
                        </span>
                      </li>
                    );
                  }
                  return (
                    <li key={idx} className="flex gap-3 items-start group">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-gray-600 text-base leading-relaxed">
                        {fmt.content}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </motion.div>

          {/* Right: Remaining Images stacked */}
          <div className="lg:col-span-4 space-y-6">
            {data.images.slice(1).map((img: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                <Image
                  src={img}
                  alt={`${data.title} ${idx + 2}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}

