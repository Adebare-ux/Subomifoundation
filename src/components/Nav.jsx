import React, { useState, useEffect } from "react";
import { NAV_LINKS, SITE } from "../data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
        <a href="#hero" className="nav__logo">
          <div className="nav__emblem">AS</div>
          <div>
            <div className="nav__site-name">{SITE.name}</div>
            <div className="nav__tagline">{SITE.motto}</div>
          </div>
        </a>
        <ul className="nav__links">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}>{l}</a>
            </li>
          ))}
        </ul>
        <a href="#donate" className="nav__cta">
          Donate Now
        </a>
        <button
          className="nav__hamburger"
          aria-label="Toggle menu"
          onClick={() => setDrawerOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`nav__drawer${drawerOpen ? " open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={() => setDrawerOpen(false)}
          >
            {l}
          </a>
        ))}
        <a
          href="#donate"
          className="nav__cta"
          onClick={() => setDrawerOpen(false)}
        >
          Donate Now
        </a>
      </div>
    </>
  );
}
