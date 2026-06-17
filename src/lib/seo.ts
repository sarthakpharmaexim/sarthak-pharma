// src/lib/seo.ts
// Central SEO configuration for all pages

type MetaTag = {
  title?: string;
  name?: string;
  property?: string;
  content?: string;
};

export function getPageMeta(page: "home" | "about" | "products" | "companies" | "contact"): MetaTag[] {
  const base = {
    siteName: "Sarthak Pharma",
    location: "Mumbai",
    description: "Leading pharmaceutical distributor in Mumbai supplying medicines, injectables and surgical products to chemists, hospitals, clinics and retailers.",
  };

  const pages = {
    home: {
      title: `${base.siteName} - Pharmaceutical Distributor in Mumbai`,
      description: `${base.siteName} is a leading pharmaceutical distributor in ${base.location} supplying medicines, injectables, surgical products and nutraceuticals to chemists, hospitals, clinics and retailers at best prices.`,
      keywords: "pharmaceutical distributor Mumbai, medicine supplier Mumbai, pharma wholesale Mumbai, Cipla distributor, Alkem distributor, Abbott medicines Mumbai, chemist supplier Mumbai",
    },
    about: {
      title: `About Us - ${base.siteName} Pharmaceutical Distributor Mumbai`,
      description: `${base.siteName} is a trusted pharmaceutical distribution company in ${base.location} with our own brand Indkus. We supply medicines to chemists, hospitals, clinics and retailers across Mumbai at competitive prices.`,
      keywords: "Sarthak Pharma Mumbai, pharma distributor about, Indkus brand, pharmaceutical company Mumbai, medicine supplier about us",
    },
    products: {
      title: `Pharmaceutical Products - Branded Generics, Injectables, Surgical | ${base.siteName} Mumbai`,
      description: `Browse our pharmaceutical product catalogue - branded generics from Cipla, Alkem, Abbott, Intas, injectables, surgical instruments, belts, braces and specialty healthcare products in ${base.location}.`,
      keywords: "branded generic medicines Mumbai, injectable medicines supplier, surgical instruments Mumbai, Cipla products, Alkem medicines, pharma catalogue Mumbai, medicine wholesale",
    },
    companies: {
      title: `Partner Pharma Companies - Cipla, Alkem, Abbott, Intas | ${base.siteName} Mumbai`,
      description: `Authorized distributor for India's top pharmaceutical brands including Cipla, Alkem, Abbott, Intas, Macleods, Emcure, Troikaa and more in ${base.location}.`,
      keywords: "Cipla distributor Mumbai, Alkem distributor Mumbai, Abbott medicines distributor, Intas pharma Mumbai, Macleods distributor, authorized pharma distributor Mumbai",
    },
    contact: {
      title: `Contact ${base.siteName} - Pharmaceutical Distributor Mumbai`,
      description: `Contact ${base.siteName} for pharmaceutical supply enquiries in ${base.location}. We supply medicines, injectables and surgical products to chemists, hospitals, clinics and retailers.`,
      keywords: "contact pharma distributor Mumbai, medicine supplier contact, Sarthak Pharma contact, pharma enquiry Mumbai, order medicines Mumbai",
    },
  };

  const p = pages[page];

  return [
    { title: p.title },
    { name: "description", content: p.description },
    { name: "keywords", content: p.keywords },
    { property: "og:title", content: p.title },
    { property: "og:description", content: p.description },
    { property: "og:site_name", content: base.siteName },
    { property: "og:type", content: "website" },
  ];
}