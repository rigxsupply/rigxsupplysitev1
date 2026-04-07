"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const MEMBER_PASSWORD = "levelup";

type View = "home" | "gate" | "unlocking" | "member" | "contact" | "test";


export default function Home() {
  const [view, setView] = useState<View>("home");
  const [pdfOpen, setPdfOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("sc_auth") === "1") {
      setView("member");
    }
  }, []);
  const [dosageOpen, setDosageOpen] = useState(false);

  const pdfUrl =
    "https://bodk0yq9zjh9vdxs.public.blob.vercel-storage.com/Superclear-Menu.pdf";

  const supportUrl =
    "https://bodk0yq9zjh9vdxs.public.blob.vercel-storage.com/Superclear%20-%20Post%20Purchase%20Support.pdf";

  const [supportOpen, setSupportOpen] = useState(false);

  const openPdf = () => {
    if (window.innerWidth < 600) {
      window.open(pdfUrl, "_blank");
    } else {
      setPdfOpen(true);
    }
  };

  const openSupport = () => {
    if (window.innerWidth < 600) {
      window.open(supportUrl, "_blank");
    } else {
      setSupportOpen(true);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === MEMBER_PASSWORD) {
      sessionStorage.setItem("sc_auth", "1");
      setPasswordError(false);
      setPasswordInput("");
      setView("unlocking");
      setTimeout(() => setView("member"), 2200);
    } else {
      setPasswordError(true);
      setPasswordInput("");
    }
  };


  const goHome = () => {
    sessionStorage.removeItem("sc_auth");
    setView("home");
    setPasswordInput("");
    setPasswordError(false);
  };

  return (
    <>
      <div className="site-wrapper">
        {/* ── Video Background ── */}
        <div className="video-bg">
          <video autoPlay muted loop playsInline className="video-el">
            <source src="/lakebackground.mp4" type="video/mp4" />
          </video>
          <div className="color-overlay" />
          <div className="noise" />
          <div className="vignette" />
        </div>

        {/* ── Centered Content ── */}
        <main className="main">
          <Image
            src="/logo4site.png"
            alt="RIGxsupply"
            width={600}
            height={80}
            className="logo"
            priority
          />

          <div className="content-area">

          {view === "home" && (
            <>
              <div className="buttons">
                <button className="btn-pill" onClick={openPdf}>
                  Menu &amp; Info
                </button>
                <button
                  className="btn-pill btn-outline btn-enter"
                  onClick={() => setView("gate")}
                >
                  <svg className="enter-icon" viewBox="0 0 63.19 71.34" xmlns="http://www.w3.org/2000/svg" fill="white">
                    <path d="M28.7,20.91c3.11-2.69,6.73-7.1,8.97-10.59,1.69-2.64,3.33-6.72,5.15-9.01,1.51-1.91,5.1-1.81,5.36.91.13,1.43-5.08,9.29-6.04,11.37-8.63,18.69,7.13,13.98,19.36,14.66,2.6,1,2.11,5.02-.68,5.45-4.29.66-10.52-.27-15.11,0-19.17,1.16-27.82,22.56-36.35,36.61-2.2,2.17-5.82.7-4.81-2.42,3.26-7.51,14.76-21.32,13.67-29.48-.88-6.64-10.98-4.15-15.47-4.69-3.68-.44-3.37-5.02-.7-5.51,2.84-.52,7.43.24,10.56,0,5.5-.44,11.97-3.71,16.11-7.29Z"/>
                  </svg>
                  Member Access
                </button>

                <button
                  className="btn-pill btn-outline"
                  onClick={() => setView("contact")}
                >
                  Contact
                </button>
                <button
                  className="btn-pill btn-outline"
                  onClick={() => setView("test")}
                >
                  Test
                </button>
              </div>
              <p className="subheader">Research for human optimization.</p>
              <p className="legal-text">
                For research use only. Products are not approved by the FDA and
                are not intended to diagnose, treat, cure, or prevent any
                disease.
              </p>
            </>
          )}

{view === "contact" && (
            <div className="buttons">
              <a
                href="https://wa.me/+19736386692"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-enter"
              >
                <svg className="enter-icon" viewBox="0 0 63.19 71.34" xmlns="http://www.w3.org/2000/svg" fill="white">
                  <path d="M28.7,20.91c3.11-2.69,6.73-7.1,8.97-10.59,1.69-2.64,3.33-6.72,5.15-9.01,1.51-1.91,5.1-1.81,5.36.91.13,1.43-5.08,9.29-6.04,11.37-8.63,18.69,7.13,13.98,19.36,14.66,2.6,1,2.11,5.02-.68,5.45-4.29.66-10.52-.27-15.11,0-19.17,1.16-27.82,22.56-36.35,36.61-2.2,2.17-5.82.7-4.81-2.42,3.26-7.51,14.76-21.32,13.67-29.48-.88-6.64-10.98-4.15-15.47-4.69-3.68-.44-3.37-5.02-.7-5.51,2.84-.52,7.43.24,10.56,0,5.5-.44,11.97-3.71,16.11-7.29Z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="https://discord.gg/AGDWSH2tB9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-outline btn-enter"
              >
                <svg className="enter-icon" viewBox="0 0 63.19 71.34" xmlns="http://www.w3.org/2000/svg" fill="white">
                  <path d="M28.7,20.91c3.11-2.69,6.73-7.1,8.97-10.59,1.69-2.64,3.33-6.72,5.15-9.01,1.51-1.91,5.1-1.81,5.36.91.13,1.43-5.08,9.29-6.04,11.37-8.63,18.69,7.13,13.98,19.36,14.66,2.6,1,2.11,5.02-.68,5.45-4.29.66-10.52-.27-15.11,0-19.17,1.16-27.82,22.56-36.35,36.61-2.2,2.17-5.82.7-4.81-2.42,3.26-7.51,14.76-21.32,13.67-29.48-.88-6.64-10.98-4.15-15.47-4.69-3.68-.44-3.37-5.02-.7-5.51,2.84-.52,7.43.24,10.56,0,5.5-.44,11.97-3.71,16.11-7.29Z"/>
                </svg>
                Discord
              </a>
              <a
                href="mailto:rigxsupply@proton.me"
                className="btn-pill btn-outline btn-enter"
              >
                <svg className="enter-icon" viewBox="0 0 63.19 71.34" xmlns="http://www.w3.org/2000/svg" fill="white">
                  <path d="M28.7,20.91c3.11-2.69,6.73-7.1,8.97-10.59,1.69-2.64,3.33-6.72,5.15-9.01,1.51-1.91,5.1-1.81,5.36.91.13,1.43-5.08,9.29-6.04,11.37-8.63,18.69,7.13,13.98,19.36,14.66,2.6,1,2.11,5.02-.68,5.45-4.29.66-10.52-.27-15.11,0-19.17,1.16-27.82,22.56-36.35,36.61-2.2,2.17-5.82.7-4.81-2.42,3.26-7.51,14.76-21.32,13.67-29.48-.88-6.64-10.98-4.15-15.47-4.69-3.68-.44-3.37-5.02-.7-5.51,2.84-.52,7.43.24,10.56,0,5.5-.44,11.97-3.71,16.11-7.29Z"/>
                </svg>
                Email
              </a>
              <button className="btn-pill btn-ghost" onClick={() => setView("home")}>
                Go Back
              </button>
            </div>
          )}

          {view === "test" && (
            <div className="test-page">
              <div className="test-page-4">
                <h1 className="test-heading">Potential Benefits of Peptide Therapy</h1>
                <p className="test-subtitle">Different peptides influence different biological systems, which is why they are often grouped by their primary benefits or use cases.</p>
                <div className="test-col-left" style={{gridRow: 2}}>
                  Weight Management &nbsp;GLP-1 provides appetite suppression, increased satiety, improved insulin sensitivity and blood sugar control. Examples include Semaglutide, Tirzepatide and Retatrutide.<br/><br/>
                  Healing &amp; Injury Repair &nbsp;BPC-157 (Body Protection Compound 157) accelerates tendon, ligament, and muscle repair by creating new blood vessels. It is also highly effective for gut health, sealing the intestinal lining and reducing GI inflammation. It is frequently used by athletes and active individuals to recover from strenuous training or injuries.<br/><br/>
                  TB-500 (Thymosin Beta-4) is all about mobility and systemic recovery. It helps cells travel to injured areas to lower inflammation and prevent the formation of stiff, painful scar tissue. It&apos;s great for improving flexibility and joint health.<br/><br/>
                  Skin Health &amp; Anti-Aging &nbsp;GHK-CU is the ultimate anti-aging copper peptide for your appearance. It tells your skin to produce more collagen and elastin, which leads to firmer skin, fewer wrinkles, faster healing and supports hair growth.<br/><br/>
                  Melanotan I (MT-1) stimulates melanin production in the skin, helping promote a darker natural tan and potentially increasing resistance to UV exposure.<br/><br/>
                  Melanotan II (MT-2) is more potent at lower doses than MT-1, producing faster and deeper tanning. MT-2 has more potential side effects such as nausea, facial flushing and increased libido.<br/><br/>
                  Epitalon (or Epithalon) is known for its potential anti-aging and longevity-promoting effects. It primarily works by stimulating telomerase production to increase telomere length, which protects chromosomes and slows cellular aging.
                </div>
                <div className="test-col-right" style={{gridRow: 2}}>
                  Muscle Growth and Recovery &nbsp;Tesamorelin is a powerful tool for body composition. It signals the body to release growth hormone, which is highly effective at burning deep belly fat. It also helps with muscle tone, skin quality, and mental sharpness.<br/><br/>
                  Semorelin stimulates the pituitary gland to produce and release natural human growth hormone (hGH), treating growth hormone deficiency and promoting anti-aging effects.<br/><br/>
                  Ipamorelin + CJC-1295 this duo works together to trigger a natural, sustained release of growth hormone. It&apos;s perfect for better sleep, faster muscle recovery, and fat loss.<br/><br/>
                  Energy, Endurance &amp; Metabolic Health &nbsp;MOTS-C acts as a systemic metabolic regulator. Mimics the metabolic effects of exercise by increasing insulin sensitivity, reversing metabolic decline, and improving athletic performance.<br/><br/>
                  SS-31 (Elamipretide) acts as a reset button for your mitochondria. By reducing stress inside the cells, it restores your natural energy levels, clears brain fog, and supports the health of vital organs like your heart and kidneys.<br/><br/>
                  AOD-9604 is a synthetic fragment of human growth hormone designed to stimulate fat breakdown and inhibit fat storage without causing the side effects of full-length growth hormone.<br/><br/>
                  SLU-PP-332 is an experimental &quot;exercise mimetic&quot; drug that boosts metabolism, reduces fat, and increases mitochondrial function without physical activity.
                </div>
                <div className="test-divider" />
              </div>
              <div className="test-back">
                <button className="btn-pill btn-ghost" onClick={() => setView("home")}>
                  Go Back
                </button>
              </div>
            </div>
          )}

          {view === "gate" && (
            <form className="member-gate" onSubmit={handlePasswordSubmit}>
              <div className="input-wrapper">
                <input
                  className={`member-input${passwordError ? " member-input--error" : ""}`}
                  type="password"
                  placeholder="Enter password"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setPasswordError(false);
                  }}
                  autoFocus
                />
              </div>
              {passwordError && (
                <p className="member-error">Incorrect password</p>
              )}
              <button type="submit" className="btn-pill btn-enter">
                <svg className="enter-icon" viewBox="0 0 63.19 71.34" xmlns="http://www.w3.org/2000/svg" fill="white">
                  <path d="M28.7,20.91c3.11-2.69,6.73-7.1,8.97-10.59,1.69-2.64,3.33-6.72,5.15-9.01,1.51-1.91,5.1-1.81,5.36.91.13,1.43-5.08,9.29-6.04,11.37-8.63,18.69,7.13,13.98,19.36,14.66,2.6,1,2.11,5.02-.68,5.45-4.29.66-10.52-.27-15.11,0-19.17,1.16-27.82,22.56-36.35,36.61-2.2,2.17-5.82.7-4.81-2.42,3.26-7.51,14.76-21.32,13.67-29.48-.88-6.64-10.98-4.15-15.47-4.69-3.68-.44-3.37-5.02-.7-5.51,2.84-.52,7.43.24,10.56,0,5.5-.44,11.97-3.71,16.11-7.29Z"/>
                </svg>
                Enter
              </button>
              <button
                type="button"
                className="btn-pill btn-ghost"
                onClick={goHome}
              >
                Go Back
              </button>
            </form>
          )}

          {view === "unlocking" && (
            <div className="unlock-reveal">
              <svg className="unlock-icon" viewBox="0 0 63.19 71.34" xmlns="http://www.w3.org/2000/svg" fill="white">
                <path d="M28.7,20.91c3.11-2.69,6.73-7.1,8.97-10.59,1.69-2.64,3.33-6.72,5.15-9.01,1.51-1.91,5.1-1.81,5.36.91.13,1.43-5.08,9.29-6.04,11.37-8.63,18.69,7.13,13.98,19.36,14.66,2.6,1,2.11,5.02-.68,5.45-4.29.66-10.52-.27-15.11,0-19.17,1.16-27.82,22.56-36.35,36.61-2.2,2.17-5.82.7-4.81-2.42,3.26-7.51,14.76-21.32,13.67-29.48-.88-6.64-10.98-4.15-15.47-4.69-3.68-.44-3.37-5.02-.7-5.51,2.84-.52,7.43.24,10.56,0,5.5-.44,11.97-3.71,16.11-7.29Z"/>
              </svg>
            </div>
          )}

          {view === "member" && !dosageOpen && (
            <div className="buttons">
              <a
                href="https://square.link/u/Bxnpw1ws"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-enter"
              >
                <svg className="enter-icon" viewBox="0 0 63.19 71.34" xmlns="http://www.w3.org/2000/svg" fill="white">
                  <path d="M28.7,20.91c3.11-2.69,6.73-7.1,8.97-10.59,1.69-2.64,3.33-6.72,5.15-9.01,1.51-1.91,5.1-1.81,5.36.91.13,1.43-5.08,9.29-6.04,11.37-8.63,18.69,7.13,13.98,19.36,14.66,2.6,1,2.11,5.02-.68,5.45-4.29.66-10.52-.27-15.11,0-19.17,1.16-27.82,22.56-36.35,36.61-2.2,2.17-5.82.7-4.81-2.42,3.26-7.51,14.76-21.32,13.67-29.48-.88-6.64-10.98-4.15-15.47-4.69-3.68-.44-3.37-5.02-.7-5.51,2.84-.52,7.43.24,10.56,0,5.5-.44,11.97-3.71,16.11-7.29Z"/>
                </svg>
                Payment via Square
              </a>
              <button
                className="btn-pill btn-outline btn-enter"
                onClick={openSupport}
              >
                <svg className="enter-icon" viewBox="0 0 63.19 71.34" xmlns="http://www.w3.org/2000/svg" fill="white">
                  <path d="M28.7,20.91c3.11-2.69,6.73-7.1,8.97-10.59,1.69-2.64,3.33-6.72,5.15-9.01,1.51-1.91,5.1-1.81,5.36.91.13,1.43-5.08,9.29-6.04,11.37-8.63,18.69,7.13,13.98,19.36,14.66,2.6,1,2.11,5.02-.68,5.45-4.29.66-10.52-.27-15.11,0-19.17,1.16-27.82,22.56-36.35,36.61-2.2,2.17-5.82.7-4.81-2.42,3.26-7.51,14.76-21.32,13.67-29.48-.88-6.64-10.98-4.15-15.47-4.69-3.68-.44-3.37-5.02-.7-5.51,2.84-.52,7.43.24,10.56,0,5.5-.44,11.97-3.71,16.11-7.29Z"/>
                </svg>
                Post-Purchase Support
              </button>
              <button
                className="btn-pill btn-outline btn-enter"
                onClick={() => setDosageOpen(true)}
              >
                <svg className="enter-icon" viewBox="0 0 63.19 71.34" xmlns="http://www.w3.org/2000/svg" fill="white">
                  <path d="M28.7,20.91c3.11-2.69,6.73-7.1,8.97-10.59,1.69-2.64,3.33-6.72,5.15-9.01,1.51-1.91,5.1-1.81,5.36.91.13,1.43-5.08,9.29-6.04,11.37-8.63,18.69,7.13,13.98,19.36,14.66,2.6,1,2.11,5.02-.68,5.45-4.29.66-10.52-.27-15.11,0-19.17,1.16-27.82,22.56-36.35,36.61-2.2,2.17-5.82.7-4.81-2.42,3.26-7.51,14.76-21.32,13.67-29.48-.88-6.64-10.98-4.15-15.47-4.69-3.68-.44-3.37-5.02-.7-5.51,2.84-.52,7.43.24,10.56,0,5.5-.44,11.97-3.71,16.11-7.29Z"/>
                </svg>
                Dosage: Common Protocols
              </button>
              <button
                className="btn-pill btn-ghost"
                onClick={goHome}
              >
                Go Back
              </button>
            </div>
          )}

          {view === "member" && dosageOpen && (
            <div className="coming-card">
              <p className="coming-soon">Coming Soon</p>
              <p className="coming-sub">
                Protocols are being compiled and will be accessible soon.
              </p>
              <button className="coming-close" onClick={() => setDosageOpen(false)}>
                Close
              </button>
            </div>
          )}

          </div>
        </main>
      </div>

      {/* ── PDF Modal ── */}
      {pdfOpen && (
        <div className="modal-backdrop" onClick={() => setPdfOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-title">Menu &amp; Info</span>
              <button className="modal-close" onClick={() => setPdfOpen(false)}>
                ✕
              </button>
            </div>
            <iframe
              src={pdfUrl}
              className="modal-iframe"
              title="For Research Use Only"
            />
          </div>
        </div>
      )}

      {/* ── WhatsApp Float Button ── */}

{/* ── Post-Purchase Support Modal ── */}
      {supportOpen && (
        <div className="modal-backdrop" onClick={() => setSupportOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-title">Post-Purchase Support</span>
              <button className="modal-close" onClick={() => setSupportOpen(false)}>
                ✕
              </button>
            </div>
            <iframe
              src={supportUrl}
              className="modal-iframe"
              title="Post-Purchase Support"
            />
          </div>
        </div>
      )}
    </>
  );
}
