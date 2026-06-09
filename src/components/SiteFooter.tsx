import { Link } from "@tanstack/react-router";
import { Phone, MapPin, MessageCircle, Pill, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[color:var(--surface)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[image:var(--gradient-accent)] text-primary-foreground">
              <Pill className="h-5 w-5" />
            </span>
            <div>
              <div className="font-display text-xl font-semibold">Sarthak Pharma</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Wholesale · Distribution</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Carrying forward the 40-year legacy of Suswa Pharma. A trusted partner in pharmaceutical
            distribution across Maharashtra — serving exporters, distributors, retailers, hospitals
            and healthcare institutions.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About us</Link></li>
            <li><Link to="/products" className="hover:text-foreground">Product categories</Link></li>
            <li><Link to="/companies" className="hover:text-foreground">Partner companies</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Reach us</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2.5"><MapPin className="mt-0.5 h-4 w-4 flex-none text-primary-glow" /><span>Shop 16, 2nd Floor, 2/22 Earth House, Babu Genu Road, Princess Street, Mumbai 400002</span></li>
            <li className="flex gap-2.5"><Phone className="h-4 w-4 flex-none text-primary-glow" /><a href="tel:+919769245242" className="hover:text-foreground">+91 97692 45242</a></li>
            <li className="flex gap-2.5"><MessageCircle className="h-4 w-4 flex-none text-primary-glow" /><a href="https://wa.me/919167240584" className="hover:text-foreground">+91 91672 40584</a></li>
            <li className="flex gap-2.5"><Mail className="h-4 w-4 flex-none text-primary-glow" /><a href="mailto:sarthakpharmaexim@gmail.com" className="hover:text-foreground break-all">sarthakpharmaexim@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Sarthak Pharma. All rights reserved.</p>
          <p>Built on a legacy of trust — since 1985.</p>
        </div>
      </div>
    </footer>
  );
}
