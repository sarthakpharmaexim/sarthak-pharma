import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Sparkles, History } from "lucide-react";
import teamImg from "@/assets/team-sarthak.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sarthak Pharma" },
      { name: "description", content: "Carrying forward Suswa Pharma's 40-year legacy. Learn about Sarthak Pharma's purpose, mission, vision and trusted distribution network." },
      { property: "og:title", content: "About Sarthak Pharma" },
      { property: "og:description", content: "40-year legacy of trust in pharmaceutical distribution across Maharashtra." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.25em] text-primary-glow">About us</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
            A legacy of trust in pharmaceutical distribution.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Sarthak Pharma is a trusted pharmaceutical distribution company committed to delivering
            high-quality, affordable generic medicines with reliability and care — bridging
            manufacturers and healthcare providers.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
        <img src={teamImg} alt="The Sarthak Pharma leadership team" width={1400} height={1000} loading="lazy" className="w-full rounded-3xl object-cover shadow-elegant ring-1 ring-border" />
        <div>
          <h2 className="font-display text-4xl font-semibold">Our Legacy</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Sarthak Pharma proudly carries forward the distinguished 40-year legacy of Suswa Pharma,
            continuing its tradition of excellence for the past 5 years. This legacy is built on a
            strong foundation of trust, quality and reliability in pharmaceutical distribution.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            By combining decades of industry experience with a modern and efficient approach, we have
            strengthened our presence across Maharashtra as a dependable wholesaler and distributor.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[{n:"40+",l:"Years of legacy"},{n:"5+",l:"Years as Sarthak"},{n:"100%",l:"Genuine supply"}].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-card p-5">
                <div className="font-display text-3xl font-semibold text-primary">{s.n}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Sparkles, title: "Our Purpose", body: "Ensure seamless access to essential medicines for distributors, retailers, hospitals and healthcare institutions." },
            { icon: Target, title: "Our Mission", body: "Provide genuine, high-quality products at competitive prices with seamless supply-chain management and timely delivery." },
            { icon: Eye, title: "Our Vision", body: "Become the most trusted name in pharmaceutical distribution through transparency, reliability and excellence." },
            { icon: History, title: "Our Commitment", body: "Ensure essential medicines are available when and where they are needed the most." },
          ].map((c) => (
            <article key={c.title} className="rounded-2xl border border-border bg-card p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent"><c.icon className="h-5 w-5" /></span>
              <h3 className="mt-5 font-display text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl bg-[image:var(--gradient-hero)] p-10 text-primary-foreground md:p-14">
          <p className="text-xs uppercase tracking-[0.25em] text-white/70">The people behind Sarthak</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">Our Team & Reputation</h2>
          <p className="mt-5 max-w-3xl text-white/85">
            Led by a family with decades of pharmaceutical distribution experience, our team
            brings deep industry knowledge across procurement, inventory, logistics and
            customer support. Over the years, Sarthak Pharma has earned a strong reputation
            for dependable service, ethical practices and lasting partnerships.
          </p>
        </div>
      </section>
    </>
  );
}
