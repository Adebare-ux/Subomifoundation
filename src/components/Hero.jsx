import React from "react";
// ============================================================
//  components/Hero.jsx
// ============================================================
import { Btn } from "./UI";
import { STATS, SITE } from "../data";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" />
      <div className="hero__inner">
        {/* Left copy */}
        <div>
          <div className="hero__badge anim-fadeup">
            <span className="hero__badge-dot" />
            Serving {SITE.location}
          </div>
          <h1 className="hero__title anim-fadeup">
            Transforming Lives Through <em>Education & Hope</em>
          </h1>
          <p className="hero__motto anim-fadeup">"{SITE.motto}"</p>
          <p className="hero__desc anim-fadeup">
            The {SITE.name} is dedicated to uplifting children and families in
            Iseyin City — building futures through quality education, community
            development, and compassionate service.
          </p>
          <div className="hero__btns anim-fadeup">
            <Btn href="#programs" variant="gold">
              Our Programs
            </Btn>
            <Btn href="#donate" variant="outline">
              Support a Child
            </Btn>
          </div>
        </div>

        {/* Right stats */}
        <div className="hero__stats anim-fadeup">
          {STATS.map((s) => (
            <div key={s.label} className="hero__stat-card">
              <div className="hero__stat-num">{s.num}</div>
              <div className="hero__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
