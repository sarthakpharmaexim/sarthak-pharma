import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Syringe,
  Bandage,
  Pill,
  FlaskConical,
  HeartPulse,
  Box,
  ArrowRight,
  FileText,
} from "lucide-react";
import { catalogueLinks } from "@/lib/catalogue-links";
import { getPageMeta } from "@/lib/seo";
export const Route = createFileRoute("/products")({
  head: () => ({ meta: getPageMeta("products") }),
  component: ProductsPage,
});

const categories = [
  {
    icon: Pill,
    title: "Branded Generics",
    items: [
      "Cipla",
      "Alkem",
      "Abbott",
      "Intas",
      "Laborate",
      "Dr. Morepen",
      "Biochem",
      "Elder Neutraceutical",
      "Roussell",
      "Macleods",
      "Troikaa",
      "Emcure",
      "Helios",
      "Cadilla List ",
      "Wockhardt List ",
    ],
  },
  { icon: Box, title: "Generics", items: ["UTL", "ULS", "Lordcent & Torrcent", "Hab"] },
  { icon: HeartPulse, title: "Our Own", items: ["Indkus", "Zota Lifestyle Products"] },
  {
    icon: Syringe,
    title: "Injectables",
    items: ["American Remedies", "Lordcent & Torrcent"],
  },
  {
    icon: Syringe,
    title: "Injections for Hospitals",
    items: ["Full injectable list available on request"],
  },
  {
    icon: Bandage,
    title: "Surgical & Instruments",
    items: ["Belts & Braces", "Vissco Products", "General Dressing"],
  },
  {
    icon: FlaskConical,
    title: "Specialty Healthcare",
    items: ["Oncology", "IV Fluids", "Nutraceuticals", "Ointments"],
  },
];

function CatalogueItem({ item }: { item: string }) {
  const link = catalogueLinks[item];
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        title={"View " + item + " catalogue"}
        className="inline-flex items-center gap-1 rounded-full border border-primary-glow/40 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary transition hover:bg-primary/10"
      >
        <FileText className="h-3 w-3" />
        {item}
      </a>
    );
  }
  return (
    <li className="list-none rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-foreground/80">
      {item}
    </li>
  );
}

function ProductsPage() {
  return (
    <>
      <section className="border-b border-border bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-primary-glow">Products</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
            Our portfolio, organized for you.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            From branded generics and injectables to surgical supplies , a comprehensive range
            sourced from India's most trusted pharmaceutical companies.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <article
              key={c.title}
              className="group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-accent)] text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-semibold">{c.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.items.map((item) => (
                  <CatalogueItem key={item} item={item} />
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-card p-10 text-center md:p-14">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Looking for the full catalogue?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Get our complete product list including SKUs, packaging and current availability.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft"
          >
            Request catalogue <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

