"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const MEMBER_PASSWORD = "levelup";

type View = "home" | "gate" | "unlocking" | "member" | "contact" | "prints" | "product" | "dosage-disclaimer" | "dosage";


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
  const [activeImg, setActiveImg] = useState(0);

  const [selectedProduct, setSelectedProduct] = useState(0);

  const products = [
    {
      name: "American Craftsman Bungalow Birdhouse",
      images: ["/birdhouse1.jpg", "/birdhouse2.jpg"],
      price: "$65",
      description: "Weather and UV protected\nAvailable in any color and size\nStandard size 13\" tall x 5.5\" wide x 7\" deep",
    },
    {
      name: "Ninja Creami Coozie",
      images: ["/coozie1.jpg", "/coozie2.jpg"],
      price: "$15",
      description: "Available in all Creami models/sizes and any color.",
    },
    {
      name: "Mini Travel Kit",
      images: ["/minitravel1.jpg", "/minitravel2.jpg", "/minitravel3.jpg"],
      price: "$15",
      description: "Holds up to 2 3ml vials\nHolds alcohol prep pads\nCan store several syringes",
    },
    {
      name: "Drippy Bucket Organizer",
      images: ["/drippybucket1.jpg", "/drippybucket2.jpg"],
      price: "$15",
      description: "Available in multiple sizes and colors.",
    },
    {
      name: "Travel Kit",
      images: ["/travelkit1.jpg", "/travelkit2.jpg", "/travelkit3.jpg"],
      price: "$20",
      description: "Holds 6 3ml vials\n1 30ml water\nAlcohol prep pads and syringes\nAvailable in any color.",
    },
    {
      name: "Brick Skeleton",
      images: ["/skeleton1.jpg", "/skeleton2.jpg"],
      price: "$60",
      description: "16\" tall, available in white and glow in the dark.\nCustom sizes available.",
    },
  ];

  const dosageCategories = ["View All", "Weight Management", "Healing & Injury Repair", "Skin Health & Anti-Aging", "Muscle Growth & Recovery", "Energy, Endurance & Metabolic Health"];
  const [dosageCategory, setDosageCategory] = useState("View All");
  const [dosageIndex, setDosageIndex] = useState(0);
  const [dosageNotice, setDosageNotice] = useState(false);

  const protocols = [
    {
      name: "Retatrutide",
      subtitle: "Triple agonist, most effective",
      tags: ["GLP-1", "WEEKLY"],
      category: "Weight Management",
      overview: "A triple agonist targeting GLP-1, GIP and glucagon (hormone produced by the pancreas) receptors. It\u2019s increasing in popularity due to it being the most effective out of the three in clinical trials. It is not FDA approved and remains an investigational medication in late-stage Phase 3 clinical trials. Studies are expected to conclude around May 2026.",
      benefits: "Provides increase calorie burning via thermogenesis and increase in metabolism which may help reduce side effects.",
      dosage: ".5mg - 6mg in some cases up to 12mg",
      frequency: "Once weekly",
      timeOfDay: "Any time of day",
      cycleLength: "12+ weeks",
      protocol: [
        { week: "Week 1", dose: "1mg" },
        { week: "Week 2", dose: "1mg" },
        { week: "Week 3", dose: "1mg" },
        { week: "Week 4", dose: "1.5mg" },
        { week: "Week 5", dose: "2mg" },
        { week: "Week 6", dose: "2mg" },
        { week: "Week 7", dose: "2.5mg" },
        { week: "Week 8", dose: "3mg" },
        { week: "Week 9", dose: "3mg" },
        { week: "Week 10", dose: "4mg" },
        { week: "Week 11", dose: "4mg" },
        { week: "Week 12", dose: "4mg" },
        { week: "Week 13+", dose: "Varies" },
      ],
      bestPractices: "Begin at 1mg and titrate slowly. Maintain adequate protein intake throughout cycle. Monitor blood glucose if diabetic history present.",
      keyNotes: "Not approved for human therapeutic use. Research compound only. Individual response varies significantly. Nausea is commonly reported at higher doses.",
    },
  ];

  const filteredProtocols = dosageCategory === "View All" ? protocols : protocols.filter(p => p.category === dosageCategory);

  const pdfUrl = "/menuinfoapril7.pdf";

  const supportUrl =
    "https://bodk0yq9zjh9vdxs.public.blob.vercel-storage.com/Superclear%20-%20Post%20Purchase%20Support.pdf";

  const [supportOpen, setSupportOpen] = useState(false);

  const openPdf = () => {
    window.open(pdfUrl, "_blank");
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

          <div className={`content-area${view === "prints" || view === "product" || view === "dosage" ? " content-area--full" : ""}`}>

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
                  onClick={() => setView("prints")}
                >
                  3D Prints
                </button>
                <button
                  className="btn-pill btn-outline"
                  onClick={() => setView("contact")}
                >
                  Contact
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


          {view === "prints" && (
            <div className="prints-page">
              <h2 className="prints-title">3D Prints - <span className="prints-contact-link" onClick={() => setView("contact")}>Contact</span> for Purchase</h2>
              <div className="prints-grid">
                {products.map((p, i) => (
                  <button key={i} className="product-card" onClick={() => { setSelectedProduct(i); setActiveImg(0); setView("product"); }}>
                    <Image src={p.images[0]} alt={p.name} width={400} height={400} className="product-thumb" />
                    <span className="product-name">{p.name}</span>
                    <span className="product-price">{p.price}</span>
                  </button>
                ))}
              </div>
              <button className="btn-pill btn-ghost" onClick={() => setView("home")}>Go Back</button>
            </div>
          )}

          {view === "product" && (
            <>
            <div className="product-page">
              <div className="product-gallery">
                <Image src={products[selectedProduct].images[activeImg]} alt={products[selectedProduct].name} width={600} height={800} className="product-main-img" unoptimized />
                <div className="product-thumbs">
                  {products[selectedProduct].images.map((img, i) => (
                    <button key={i} className={`thumb-btn${activeImg === i ? " thumb-active" : ""}`} onClick={() => setActiveImg(i)}>
                      <Image src={img} alt="" width={80} height={80} className="thumb-img" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="product-info">
                <h2 className="product-detail-name">{products[selectedProduct].name}</h2>
                <span className="product-detail-price">{products[selectedProduct].price}</span>
                <p className="product-desc" style={{whiteSpace: "pre-line"}}>{products[selectedProduct].description}</p>
              </div>
            </div>
            <button className="btn-pill btn-ghost product-go-back" onClick={() => setView("prints")}>Go Back</button>
            </>
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

          {view === "member" && (
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
                onClick={() => { setDosageIndex(0); setDosageCategory("View All"); setView("dosage"); }}
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

      {/* ── Dosage Page ── */}
      {view === "dosage" && (
        <div className="dosage-page">
          <div className="dosage-header">
            <button className="dosage-back" onClick={() => setView("member")}>&#8249; Back</button>
            <span className="dosage-header-title">Dosage: Common Protocols</span>
            <span className="dosage-counter">{String(dosageIndex + 1).padStart(2, "0")} / {String(filteredProtocols.length).padStart(2, "0")}</span>
          </div>
          <div className="dosage-categories">
            {dosageCategories.map(cat => (
              <button key={cat} className={`dosage-cat-btn${dosageCategory === cat ? " dosage-cat-active" : ""}`} onClick={() => { setDosageCategory(cat); setDosageIndex(0); }}>
                {cat}
              </button>
            ))}
          </div>
          {filteredProtocols.length > 0 ? (
            <div className="dosage-card-area">
              <div className="dosage-card">
                <div className="dosage-card-scroll">
                  <h2 className="dosage-card-name">{filteredProtocols[dosageIndex].name}</h2>
                  <p className="dosage-card-subtitle">{filteredProtocols[dosageIndex].subtitle}</p>
                  <div className="dosage-tags">
                    {filteredProtocols[dosageIndex].tags.map(tag => (
                      <span key={tag} className="dosage-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="dosage-section">
                    <span className="dosage-section-label">OVERVIEW</span>
                    <p className="dosage-section-text">{filteredProtocols[dosageIndex].overview}</p>
                  </div>
                  <div className="dosage-section">
                    <span className="dosage-section-label">RESEARCHED BENEFITS</span>
                    <p className="dosage-section-text">{filteredProtocols[dosageIndex].benefits}</p>
                  </div>
                  <div className="dosage-row">
                    <span className="dosage-section-label">COMMON DOSAGE</span>
                    <span className="dosage-row-value">{filteredProtocols[dosageIndex].dosage}</span>
                  </div>
                  <div className="dosage-row">
                    <span className="dosage-section-label">FREQUENCY</span>
                    <span className="dosage-row-value">{filteredProtocols[dosageIndex].frequency}</span>
                  </div>
                  <div className="dosage-row">
                    <span className="dosage-section-label">TIME OF DAY</span>
                    <span className="dosage-row-value">{filteredProtocols[dosageIndex].timeOfDay}</span>
                  </div>
                  <div className="dosage-row">
                    <span className="dosage-section-label">CYCLE LENGTH</span>
                    <span className="dosage-row-value">{filteredProtocols[dosageIndex].cycleLength}</span>
                  </div>
                  <div className="dosage-section">
                    <span className="dosage-section-label">DOSAGE PROTOCOL</span>
                    <div className="dosage-table">
                      {filteredProtocols[dosageIndex].protocol.map((row, i) => (
                        <div key={i} className="dosage-table-row">
                          <span className="dosage-table-week">{row.week}</span>
                          <span className="dosage-table-dose">{row.dose}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="dosage-section">
                    <span className="dosage-section-label">BEST PRACTICES</span>
                    <p className="dosage-section-text">{filteredProtocols[dosageIndex].bestPractices}</p>
                  </div>
                  <div className="dosage-section">
                    <span className="dosage-section-label">KEY NOTES</span>
                    <p className="dosage-section-text">{filteredProtocols[dosageIndex].keyNotes}</p>
                  </div>
                  <div className="dosage-scroll-hint">&#8964;</div>
                </div>
              </div>
              {filteredProtocols.length > 1 && (
                <button className="dosage-next" onClick={() => setDosageIndex((dosageIndex + 1) % filteredProtocols.length)}>&#8250;</button>
              )}
            </div>
          ) : (
            <p className="dosage-empty">No protocols in this category yet.</p>
          )}
          <div className="dosage-footer">
            <button className="dosage-notice-btn" onClick={() => setDosageNotice(true)}>IMPORTANT NOTICE</button>
          </div>

          {/* ── Important Notice Overlay ── */}
          {dosageNotice && (
            <div className="dosage-disclaimer" onClick={() => setDosageNotice(false)}>
              <h2 className="disclaimer-title">For research use only.</h2>
              <p className="disclaimer-text">
                Products are not approved by the FDA and are not intended to diagnose, treat, cure, or prevent any disease. We encourage you to do your own research. Consult a licensed medical professional before use.
              </p>
              <button className="btn-pill disclaimer-btn" onClick={() => setDosageNotice(false)}>
                I Understand
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
