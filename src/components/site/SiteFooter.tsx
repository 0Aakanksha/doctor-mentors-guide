import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";

import { LogoLockup } from "./Logo";
import { NAV_LINKS } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-band-wash">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <LogoLockup />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            From the doctors to the future doctors — a decade of medical admission
            expertise guiding NEET aspirants through every counselling round.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand">
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-muted-foreground transition-colors hover:text-rose"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand">
            Talk to us
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href="tel:+919479876000"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-rose"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> 94798 76000
              </a>
            </li>
            <li>
              <a
                href="mailto:neetika.info@gmail.com"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-rose"
              >
                <Mail className="h-4 w-4" aria-hidden="true" /> neetika.info@gmail.com
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            MBBS · BDS · BHMS · BAMS · AYUSH counselling support
          </p>
        </div>
      </div>

      <div className="border-t border-border/50 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} NEETika. The masterstroke to empower your future.
      </div>
    </footer>
  );
}
