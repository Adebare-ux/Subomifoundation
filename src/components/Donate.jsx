import React, { useState } from "react";
import { useReveal, copyToClipboard } from "../utils";
import { SectionLabel } from "./UI";
import { IMPACT_ITEMS, BANK_ACCOUNTS } from "../data";

export default function Donate() {
  const ref = useReveal();
  const [copied, setCopied] = useState(null);

  function handleCopy(account, index) {
    copyToClipboard(account, () => {
      setCopied(index);
      setTimeout(() => setCopied(null), 2000);
    });
  }

  return (
    <section id="donate" className="donate">
      <div className="donate__grid reveal" ref={ref}>
        {/* Left: Impact */}
        <div className="donate__intro">
          <SectionLabel>Support the Mission</SectionLabel>
          <h2 className="section-title">Your Gift Changes a Child's Life</h2>
          <p>
            Every donation goes directly to our programs on the ground in
            Iseyin.
          </p>
          <div className="impact-list">
            {IMPACT_ITEMS.map((item) => (
              <div key={item.amount} className="impact-item">
                <div className="impact-item__amount">{item.amount}</div>
                <div className="impact-item__desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Bank details only */}
        <div className="donate__cards">
          <div className="donate-card">
            <h3 className="donate-card__title">Bank Transfer</h3>
            <p className="donate-card__subtitle">
              Donate directly via bank transfer to any account below.
            </p>
            <div className="bank-list">
              {BANK_ACCOUNTS.map((b, i) => (
                <div key={i} className="bank-item">
                  <div className="bank-item__name">{b.bank}</div>
                  <div className="bank-item__row">
                    <div>
                      <div className="bank-item__account">{b.account}</div>
                      <div className="bank-item__holder">{b.name}</div>
                    </div>
                    <button
                      onClick={() => handleCopy(b.account, i)}
                      className={`copy-btn${copied === i ? " copy-btn--copied" : ""}`}
                    >
                      {copied === i ? "✓ Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
