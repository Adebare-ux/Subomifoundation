import React from "react";
// ============================================================
//  components/About.jsx
// ============================================================
import { useReveal } from "../utils";
import { SectionLabel } from "./UI";
import { VALUES, SITE } from "../data";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="about">
      <div ref={ref} className="about__grid reveal">
        {/* Visual panel */}
        <div className="about__visual">
          <div className="about__frame">
            <div className="about__frame-texture" />
            <div className="about__frame-content">
              <div className="about__frame-icon">🕌</div>
              <p className="about__quote">
                "Every child in Iseyin deserves a future filled with
                possibility."
              </p>
            </div>
          </div>
          <div className="about__badge">
            <div className="about__badge-year">{SITE.founded}</div>
            <div className="about__badge-label">Est. Year</div>
          </div>
        </div>

        {/* Text */}
        <div className="about__text">
          <SectionLabel>About Us</SectionLabel>
          <h2 className="section-title">Built on Faith, Driven by Purpose</h2>
          <p>
            The {SITE.name} was established to serve the people of Iseyin — one
            of Oyo State's historic cities — with a clear mission: to ensure no
            child is left behind in their pursuit of education and a better
            life.
          </p>
          <p>
            We believe that compassion without excellence is incomplete. Every
            initiative we undertake is guided by integrity, care, and commitment
            to long-term community transformation.
          </p>
          <div className="about__values">
            {VALUES.map((v) => (
              <div key={v.title} className="about__value">
                <div className="about__value-dot" />
                <div>
                  <div className="about__value-title">{v.title}</div>
                  <div className="about__value-desc">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
