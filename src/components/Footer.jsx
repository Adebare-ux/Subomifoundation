import React from "react";
// ============================================================
//  components/Footer.jsx
// ============================================================
import { FOOTER_COLS, SITE } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          {/* Brand */}
          <div>
            <div className="footer__brand-logo">
              <div className="footer__emblem">AS</div>
              <div>
                <div className="footer__site-name">{SITE.name}</div>
                <div className="footer__tagline">{SITE.motto}</div>
              </div>
            </div>
            <p className="footer__desc">
              Serving the children and families of Iseyin City with dignity and
              commitment since {SITE.founded}.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="footer__col-title">{col.title}</h4>
              <ul className="footer__links">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © 2023 {SITE.name} · {SITE.location}
          </p>
          <div className="footer__socials">
            {["𝕏", "f", "IN", "T"].map((s) => (
              <a key={s} href="#" className="footer__social-icon">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
