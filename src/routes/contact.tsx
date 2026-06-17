import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MessageCircle, MapPin, Mail, Send } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { getPageMeta } from "@/lib/seo";
export const Route = createFileRoute("/contact")({
  head: () => ({ meta: getPageMeta("contact") }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="border-b border-border bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-primary-glow">Contact</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
            Let's build a long-term partnership.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Reach our team for quotes, product availability or distribution enquiries. We
            typically respond within the same business day.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <a href="tel:+919769245242" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition hover:shadow-soft">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-accent)] text-primary-foreground"><Phone className="h-5 w-5" /></span>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Call us</div>
              <div className="mt-1 font-display text-xl font-semibold">+91 97692 45242</div>
              <div className="text-sm text-muted-foreground">Mon–Sat · 9:30 AM – 8:00 PM</div>
            </div>
          </a>
          <a href="https://wa.me/919167240584" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition hover:shadow-soft">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent"><MessageCircle className="h-5 w-5" /></span>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
              <div className="mt-1 font-display text-xl font-semibold">+91 91672 40584</div>
              <div className="text-sm text-muted-foreground">Quick replies for product enquiries</div>
            </div>
          </a>
          <a href="mailto:sarthakpharmaexim@gmail.com" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition hover:shadow-soft">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary"><Mail className="h-5 w-5" /></span>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Email us</div>
              <div className="mt-1 font-display text-xl font-semibold break-all">sarthakpharmaexim@gmail.com</div>
              <div className="text-sm text-muted-foreground">For quotes, orders & partnerships</div>
            </div>
          </a>
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></span>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Visit our office</div>
              <div className="mt-1 font-display text-lg font-semibold leading-snug">Shop No. 16, 2nd Floor<br/>2/22 Earth House, Babu Genu Road<br/>Princess Street, Mumbai 400002</div>
            </div>
          </div>
        </div>

        <form
         onSubmit={async (e) => {
  e.preventDefault();
  const f = e.currentTarget as HTMLFormElement;
  const fd = new FormData(f);
  const name = String(fd.get("name") || "").trim().slice(0, 100);
  const company = String(fd.get("company") || "").trim().slice(0, 100);
  const phone = String(fd.get("phone") || "").trim().slice(0, 20);
  const email = String(fd.get("email") || "").trim().slice(0, 120);
  const message = String(fd.get("message") || "").trim().slice(0, 1500);

  // Save to Supabase
  await supabase.from("enquiries").insert({
    name,
    company: company || null,
    phone,
    email: email || null,
    message,
  });

  // Open WhatsApp (existing behaviour unchanged)
  const text =
    `*New enquiry - Sarthak Pharma*\n\n` +
    `Name: ${name}\n` +
    (company ? `Company: ${company}\n` : "") +
    `Phone: ${phone}\n` +
    (email ? `Email: ${email}\n` : "") +
    `\nEnquiry:\n${message}`;
  const url = `https://wa.me/919167240584?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  setSent(true);
}}
          className="rounded-3xl border border-border bg-card p-8 md:p-10"
        >
          <h2 className="font-display text-3xl font-semibold">Send an enquiry</h2>
          <p className="mt-2 text-sm text-muted-foreground">Submitting opens WhatsApp with your enquiry pre-filled — just tap send and it reaches our team on +91 91672 40584.</p>

          {sent ? (
            <div className="mt-8 rounded-2xl bg-accent/15 p-6 text-foreground">
              <div className="font-display text-xl font-semibold text-primary">Thank you!</div>
              <p className="mt-1 text-sm text-muted-foreground">Your WhatsApp should have opened with the enquiry ready to send. If it didn't, please call us at +91 91672 40584.</p>
              <button type="button" onClick={() => setSent(false)} className="mt-4 text-sm font-medium text-primary underline-offset-4 hover:underline">Send another enquiry</button>
            </div>
          ) : (
            <div className="mt-7 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</span>
                  <input name="name" required maxLength={100} type="text" className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-ring focus:ring-2" />
                </label>
                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Company</span>
                  <input name="company" maxLength={100} type="text" className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-ring focus:ring-2" />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Phone</span>
                  <input name="phone" required maxLength={20} type="tel" className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-ring focus:ring-2" />
                </label>
                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</span>
                  <input name="email" maxLength={120} type="email" className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-ring focus:ring-2" />
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Your enquiry</span>
                <textarea name="message" required maxLength={1500} rows={5} placeholder="Products, quantities, delivery location…" className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-ring focus:ring-2" />
              </label>
              <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-95">
                <Send className="h-4 w-4" /> Send enquiry on WhatsApp
              </button>
              <p className="text-xs text-muted-foreground"><Mail className="mr-1 inline h-3 w-3" /> Your enquiry is delivered straight to our WhatsApp — no data is stored on this website.</p>
            </div>
          )}
        </form>
      </section>
    </>
  );
}
