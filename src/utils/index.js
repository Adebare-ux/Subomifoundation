import { useRef, useEffect } from "react";

// ── Scroll reveal hook ───────────────────────────────────────
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check immediately in case element is already in view on mount
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);

    // Fallback: show everything after 800ms regardless
    const fallback = setTimeout(() => {
      el.classList.add("visible");
    }, 800);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);
  return ref;
}

// ── Clipboard helper ─────────────────────────────────────────
export function copyToClipboard(text, onSuccess) {
  navigator.clipboard.writeText(text).then(onSuccess);
}