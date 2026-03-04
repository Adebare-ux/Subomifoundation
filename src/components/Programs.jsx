import React from "react";
// ============================================================
//  components/Programs.jsx
// ============================================================
import { useReveal } from "../utils";
import { SectionLabel } from "./UI";
import { PROGRAMS } from "../data";

export default function Programs() {
  const ref = useReveal();
  return (
    <section id="programs" className="programs">
      <div className="programs__header reveal" ref={ref}>
        <SectionLabel>What We Do</SectionLabel>
        <h2 className="section-title">Our Programs</h2>
        <p className="section-subtitle">
          Carefully designed initiatives that create lasting impact across
          education, health, and community development.
        </p>
      </div>
      <div className="programs__grid">
        {PROGRAMS.map((p) => (
          <ProgramCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

function ProgramCard({ icon, title, desc, tag }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="program-card reveal">
      <div className="program-card__bar" />
      <div className="program-card__icon">{icon}</div>
      <h3 className="program-card__title">{title}</h3>
      <p className="program-card__desc">{desc}</p>
      <span className="program-card__tag">{tag}</span>
    </div>
  );
}
