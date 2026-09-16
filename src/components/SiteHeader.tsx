"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="brand" href="/" aria-label="TechSonix home">
          <img src="/images/TechSonix.Icon.png" width="37" height="37" alt="" />
          <span>
            TechSonix<span className="brand-dot">.</span>
          </span>
        </a>
        <button
          className="menu-button"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}{" "}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="main-nav"
          className={open ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          {[
            ["/services/", "What we do"],
            ["/epixnet/", "EpixNet"],
            ["/about/", "Company"],
            ["/support/", "Support"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              aria-current={
                path === href.slice(0, -1) || path === href ? "page" : undefined
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="button button-small"
            href="/support/#contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
