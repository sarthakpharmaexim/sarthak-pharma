import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "/logo.png?url";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/companies", label: "Companies" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Sarthak Pharma logo" className="h-11 w-11 object-contain" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-tight text-foreground">Sarthak Pharma</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Wholesale · Distribution</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => {
            const active = path === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:bg-secondary"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <a
          href="tel:+919167240584"
          className="hidden rounded-full bg-[image:var(--gradient-accent)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-95 md:inline-flex"
        >
          Call +91 91672 40584
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground/85"
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:+919167240584" className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground">
              Call +91 91672 40584
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
