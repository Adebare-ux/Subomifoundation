import React from "react";
// ============================================================
//  components/UI.jsx
//  Shared atoms: SectionLabel, Btn
// ============================================================

export function SectionLabel({ children }) {
  return <div className="section-label">{children}</div>;
}

export function Btn({ href, variant, children }) {
  return (
    <a href={href} className={`btn btn--${variant}`}>
      {children}
    </a>
  );
}
