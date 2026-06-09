import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Truck, Boxes, Users, Clock, HeartPulse, Syringe, Pill, FlaskConical, Stethoscope, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import heroImg from "@/assets/hero-pharma.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarthak Pharma — Trusted Pharmaceutical Distribution, Mumbai" },
      { name: "description", content: "Wholesale pharmaceutical distribution across Maharashtra. Genuine generics, injectables, surgicals & specialty care. Built on 40+ years of legacy." },
    ],
  }),
  component: HomePage,
});

const trust = [
  { icon: ShieldCheck, label: "100% Genuine Medicines" },
  { icon: Truck, label: "Fast & Safe Delivery" },
  { icon: Boxes, label: "Wide Product Range" },
  { icon: Users, label: "Strong Supplier Network" },
  { icon: Clock, label: "24/7 Support" },
];

const offerings = [
  { icon: HeartPulse, title: "Critical Care", desc: "Life-saving medicines for ICUs and emergency settings." },
  { icon: Stethoscope, title: "Cardiac & Diabetic", desc: "A complete range for chronic care management." },
  { icon: Pill, title: "Antibiotics", desc: "Broad-spectrum & specialty antibiotic formulations." },
  { icon: Syringe, title: "Injectables", desc: "Hospital-grade injectables and IV fluids." },
  { icon: FlaskConical, title: "Oncology", desc: "Sensitive handling of oncology product range." },
  { icon: Boxes, title: "Tablets, Capsules & Syrups", desc: "Everyday essentials, ointments & nutraceuticals." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]" />
        <div className="absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
          <div className="text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> 40+ years of legacy · Mumbai
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
              Genuine medicines, <span className="italic text-accent">delivered with care.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              Sarthak Pharma is a trusted wholesale distributor partnering with hospitals,
              retailers, exporters and healthcare institutions across Maharashtra — bridging
              manufacturers and care with reliability and speed.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-elegant transition hover:translate-y-[-1px]">
                Browse our catalogue <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
  <Phone className="h-4 w-4" /> Talk to us
</Link>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/20 pt-8">
              <div><dt className="text-xs uppercase tracking-wider text-white/60">Years legacy</dt><dd className="mt-1 font-display text-3xl font-semibold">40+</dd></div>
              <div><dt className="text-xs uppercase tracking-wider text-white/60">Brand partners</dt><dd className="mt-1 font-display text-3xl font-semibold">20+</dd></div>
              <div><dt className="text-xs uppercase tracking-wider text-white/60">SKUs covered</dt><dd className="mt-1 font-display text-3xl font-semibold">5k+</dd></div>
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-white/10 blur-2xl" />
            <img
              src={heroImg}
              alt="Pharmaceutical warehouse with organized medicine shelves"
              width={1600}
              height={1100}
              className="relative w-full rounded-3xl shadow-elegant ring-1 ring-white/20"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-5 shadow-elegant ring-1 ring-border md:block">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent"><ShieldCheck className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Verified supply</div>
                  <div className="font-display text-lg font-semibold text-foreground">Authentic. Always.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-[color:var(--surface)]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-6">
          {trust.map((t) => (
            <div key={t.label} className="flex items-center gap-2.5 text-sm font-medium text-foreground/80">
              <t.icon className="h-4 w-4 text-primary-glow" /> {t.label}
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE / PHILOSOPHY */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Our philosophy</p>
        <blockquote className="mt-6 font-display text-3xl font-medium leading-[1.25] text-foreground md:text-5xl">
          “Business is a team sport, not a solo game. The world doesn't want perfection —
          <span className="italic text-primary-glow"> it needs connection.”</span>
        </blockquote>
      </section>

      {/* OFFERINGS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary-glow">What we offer</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">An extensive portfolio for every need</h2>
          </div>
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-glow">
            See all categories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o) => (
            <article key={o.title} className="group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-elegant">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-accent)] text-primary-foreground shadow-soft">
                <o.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* WHY US + TESTIMONIAL */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-10 rounded-3xl bg-primary p-10 text-primary-foreground md:grid-cols-2 md:p-14">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent">Why choose us</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
              A partner you can build a business on.
            </h2>
            <ul className="mt-8 space-y-3.5 text-white/85">
              {["Decades of supply-chain expertise across Maharashtra","Direct relationships with leading Indian pharma brands","Cold-chain & specialty handling for sensitive products","Transparent pricing and ethical practices"].map((p) => (
                <li key={p} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-accent" /> {p}</li>
              ))}
            </ul>
          </div>
          <figure className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/15 backdrop-blur">
            <p className="font-display text-2xl leading-relaxed md:text-3xl">
              “Sarthak Pharma has consistently delivered quality products with professionalism and reliability.
              Their commitment to timely service and competitive pricing makes them a valued business partner.”
            </p>
            <figcaption className="mt-6 text-sm text-white/70">— A long-standing healthcare partner</figcaption>
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-14">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold md:text-4xl">Need a reliable distributor?</h2>
              <p className="mt-3 max-w-xl text-muted-foreground">Get product availability, pricing and shipping details from our team — usually within the same business day.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft">Request a quote</Link>
              <a href="https://wa.me/919167240584" className="rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary">WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
