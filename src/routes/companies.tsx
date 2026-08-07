import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { catalogueLinks } from "@/lib/catalogue-links";
import { getPageMeta } from "@/lib/seo";
export const Route = createFileRoute("/companies")({
  head: () => ({ meta: getPageMeta("companies") }),
  component: CompaniesPage,
});
const groups = [
  {
    title: "Branded Generics",
    brands: [
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
      "Cadilla List",
      "Wockhardt List",
    ],
  },
  { title: "Generics", brands: ["UTL", "ULS", "Lordcent & Torrcent", "Hab"] },
  { title: "Our Own", brands: ["Indkus", "Zota Lifestyle Products"] },
  { title: "Injectables", brands: ["American Remedies", "Lordcent & Torrcent"] },
];

function BrandCard({ name }: { name: string }) {
  const link = catalogueLinks[name];
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        title={"View " + name + " catalogue"}
        className="group relative flex h-24 items-center justify-center rounded-2xl border border-border bg-card p-4 text-center transition hover:-translate-y-0.5 hover:border-primary-glow hover:shadow-soft"
      >
        <span className="font-display text-lg font-semibold text-foreground/85 group-hover:text-primary">
          {name}
        </span>
        <span className="absolute bottom-2 right-2.5 flex items-center gap-1 text-[10px] font-medium text-primary-glow opacity-70 group-hover:opacity-100">
          <FileText className="h-3 w-3" /> PDF
        </span>
      </a>
    );
  }
  return (
    <div className="flex h-24 items-center justify-center rounded-2xl border border-border bg-card p-4 text-center">
      <span className="font-display text-lg font-semibold text-foreground/85">{name}</span>
    </div>
  );
}
function CompaniesPage() {
  return (
    <>
      <section className="border-b border-border bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-primary-glow">Companies</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
            Backed by India's most trusted pharmaceutical brands.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Our supply network spans leading manufacturers - enabling consistent availability and
            quality across every order. Click any brand to view their product catalogue.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="space-y-12">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="font-display text-2xl font-semibold text-foreground">{g.title}</h2>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {g.brands.map((b) => (
                  <BrandCard key={b} name={b} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 flex items-center gap-1.5 text-xs text-muted-foreground">
          <FileText className="h-3.5 w-3.5 text-primary-glow" />
          Cards marked PDF open the brand's product catalogue directly.
        </p>
      </section>
    </>
  );
}