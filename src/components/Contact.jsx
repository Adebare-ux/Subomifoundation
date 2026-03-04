import React from "react";
// ============================================================
//  components/Contact.jsx
// ============================================================
import { useReveal } from "../utils";
import { SectionLabel, Btn } from "./UI";
import { CONTACT_INFO, SOCIAL_LINKS, SITE } from "../data";

export default function Contact() {
  const ref = useReveal();
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <div ref={ref} className="reveal">
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className="section-title section-title--light">Contact Us</h2>
        </div>

        <div className="contact__grid">
          {/* Info */}
          <div className="contact__info">
            <p className="contact__intro">
              We'd love to hear from you — whether you're interested in
              partnering, volunteering, or simply want to know more about our
              work in Iseyin.
            </p>
            {CONTACT_INFO.map((item) => (
              <div key={item.title} className="contact__item">
                <div className="contact__icon">{item.icon}</div>
                <div>
                  <div className="contact__item-label">{item.title}</div>
                  <div className="contact__item-val">{item.val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Socials panel */}
          <div className="contact__social-panel">
            <h3 className="contact__social-title">Follow Our Work</h3>
            <p className="contact__social-desc">
              Stay updated on programs, events, and impact stories from Iseyin
              City.
            </p>
            <div className="contact__social-links">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <a key={label} href={href} className="social-link">
                  {label}
                </a>
              ))}
            </div>
            <div className="contact__cta">
              <p className="contact__cta-label">
                Want to volunteer or partner with us?
              </p>
              <Btn href={`mailto:${SITE.email}`} variant="gold">
                Reach Out →
              </Btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
