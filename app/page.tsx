"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const MEMBER_PASSWORD = "levelup";

type View = "home" | "gate" | "unlocking" | "member" | "contact" | "prints" | "product" | "menu";


export default function Home() {
  const [view, setView] = useState<View>("home");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("sc_auth") === "1") {
      setView("member");
    }
  }, []);
  const [dosageOpen, setDosageOpen] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const [selectedProduct, setSelectedProduct] = useState(0);

  // Typewriter effect
  const typewriterText = "Body + Mind Refined.";
  const [displayedText, setDisplayedText] = useState("");
  const [cursorState, setCursorState] = useState<"typing" | "blinking" | "hidden">("typing");

  useEffect(() => {
    if (view !== "home") return;
    setDisplayedText("");
    setCursorState("typing");
    let i = 0;
    let timeout: NodeJS.Timeout;

    const typeNext = () => {
      i++;
      setDisplayedText(typewriterText.slice(0, i));
      if (i >= typewriterText.length) {
        setCursorState("blinking");
        // Hide cursor after 3 blinks (3 seconds at 1s per blink cycle)
        timeout = setTimeout(() => setCursorState("hidden"), 3000);
        return;
      }
      // Vary delay to feel human: longer pauses after spaces/punctuation, slight randomness
      const char = typewriterText[i - 1];
      let delay = 70 + Math.random() * 60; // base 70-130ms
      if (char === " ") delay += 40 + Math.random() * 60; // pause after space
      if (char === "+" || char === ".") delay += 100 + Math.random() * 80; // longer pause on punctuation
      timeout = setTimeout(typeNext, delay);
    };

    // Initial delay before typing starts
    timeout = setTimeout(typeNext, 400);
    return () => clearTimeout(timeout);
  }, [view]);

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

  const supportUrl =
    "https://bodk0yq9zjh9vdxs.public.blob.vercel-storage.com/Superclear%20-%20Post%20Purchase%20Support.pdf";

  const [supportOpen, setSupportOpen] = useState(false);

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

          <div className={`content-area${view === "prints" || view === "product" || view === "menu" ? " content-area--full" : ""}`}>

          {view === "home" && (
            <>
              <div className="buttons">
                <button className="btn-pill" onClick={() => setView("menu")}>
                  Menu &amp; Info
                </button>
                <button
                  className="btn-pill btn-outline btn-enter"
                  onClick={() => setView("gate")}
                >
                  Member Access
                </button>

                {/* 3D Prints button hidden for now
                <button
                  className="btn-pill btn-outline"
                  onClick={() => setView("prints")}
                >
                  3D Prints
                </button>
                */}
                <button
                  className="btn-pill btn-outline"
                  onClick={() => setView("contact")}
                >
                  Contact
                </button>
              </div>
              <p className="subheader">
                {displayedText}
                {cursorState !== "hidden" && (
                  <span className={`typewriter-cursor${cursorState === "blinking" ? " blink" : ""}`}>&#9608;</span>
                )}
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
                WhatsApp
              </a>
              <a
                href="https://discord.gg/AGDWSH2tB9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-outline btn-enter"
              >
                Discord
              </a>
              <a
                href="mailto:rigxsupply@proton.me"
                className="btn-pill btn-outline btn-enter"
              >
                Email
              </a>
              <button className="btn-pill btn-ghost" onClick={() => setView("home")}>
                Go Back
              </button>
            </div>
          )}


          {view === "menu" && (
            <div className="prints-page">
              <div className="menu-images">
                {["/menu1.png", "/menu2.png", "/menu3.png", "/menu4.png"].map((src, i) => (
                  <Image key={i} src={src} alt={`Menu page ${i + 1}`} width={1000} height={1373} className="menu-img" />
                ))}
              </div>
              <button className="btn-pill btn-ghost" onClick={() => setView("home")}>
                Go Back
              </button>
            </div>
          )}

          {view === "prints" && (
            <div className="prints-page">
              <h2 className="prints-title"><span className="prints-contact-link" onClick={() => setView("contact")}>Contact</span> for Purchase</h2>
              <p className="prints-under-construction">🚧🚧 Under Construction 🚧🚧</p>
              <div className="prints-grid">
                {products.map((p, i) => (
                  <button key={i} className="product-card" onClick={() => { setSelectedProduct(i); setActiveImg(0); setView("product"); }}>
                    <Image src={p.images[0]} alt={p.name} width={400} height={400} className="product-thumb" />
                    <span className="product-name">{p.name}</span>
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
                Payment via Square
              </a>
              <button
                className="btn-pill btn-outline btn-enter"
                onClick={openSupport}
              >
                Post-Purchase Support
              </button>
              <button
                className="btn-pill btn-outline btn-enter"
                onClick={() => setDosageOpen(true)}
              >
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

      {/* ── PDF Modal removed, now using menu view ── */}

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
