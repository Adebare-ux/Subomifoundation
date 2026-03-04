import React from "react";
import { useReveal } from "../utils";
import { SectionLabel } from "./UI";
import { GALLERY_ITEMS } from "../data";

export default function Gallery() {
  const ref = useReveal();
  return (
    <section id="gallery" className="gallery">
      <div className="gallery__inner">
        <div className="gallery__header reveal" ref={ref}>
          <SectionLabel>In The Field</SectionLabel>
          <h2 className="section-title section-title--light">Gallery</h2>
          <p className="gallery__subtitle">
            Glimpses of our work and the lives we touch across Iseyin City.
          </p>
        </div>
        <div className="gallery__grid">
          {GALLERY_ITEMS.map((item, i) => (
            <GalleryItem key={i} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ img, fallback, icon, label, index }) {
  const featured = index === 0;

  return (
    <div className={`gallery-item${featured ? " gallery-item--featured" : ""}`}>
      {img ? (
        /* Real photo */
        <img
          src={img}
          alt={label}
          className={`gallery-item__img gallery-item__img--${featured ? "featured" : "normal"}`}
        />
      ) : (
        /* Placeholder gradient + emoji until real photo is added */
        <div
          className={`gallery-item__bg gallery-item__bg--${featured ? "featured" : "normal"}`}
          style={{ background: fallback }}
        >
          {icon}
        </div>
      )}
      <div className="gallery-item__overlay">
        <span className="gallery-item__label">{label}</span>
      </div>
    </div>
  );
}
