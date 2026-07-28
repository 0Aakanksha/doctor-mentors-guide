import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";

import { LogoLockup } from "./Logo";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/motive", label: "Our Motive" },
  { to: "/history", label: "History" },
  { to: "/team", label: "Our Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" onClick={() => setOpen(false)} aria-label="NEETika home">
          <LogoLockup />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-mint/50 hover:text-brand"
              activeProps={{ className: "bg-mint/70 text-brand" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+919479876000"
            className="hidden items-center gap-2 rounded-full bg-rose px-4 py-2 text-sm font-semibold text-rose-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            94798 76000
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-brand md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border/60 bg-background px-4 pb-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-mint/50 hover:text-brand"
                  activeProps={{ className: "bg-mint/70 text-brand" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="tel:+919479876000"
                className="mt-2 block rounded-xl bg-rose px-4 py-3 text-center text-sm font-semibold text-rose-foreground"
              >
                Call 94798 76000
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
