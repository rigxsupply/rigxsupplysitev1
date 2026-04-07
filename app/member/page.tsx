"use client";

import Image from "next/image";
import { useState } from "react";

const MEMBER_PASSWORD = "levelup";

export default function MemberPage() {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === MEMBER_PASSWORD) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
    }
  };

  return (
    <div className="site-wrapper">
      {/* ── Video Background ── */}
      <div className="video-bg">
        <video autoPlay muted loop playsInline className="video-el">
          <source src="/bg-video.mp4" type="video/mp4" />
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

        {!unlocked ? (
          /* ── Password Gate ── */
          <form className="member-gate" onSubmit={handleSubmit}>
            <input
              className={`member-input${error ? " member-input--error" : ""}`}
              type="password"
              placeholder="Enter password"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError(false);
              }}
              autoFocus
            />
            {error && <p className="member-error">Incorrect password</p>}
            <button type="submit" className="btn-pill">
              Enter
            </button>
            <a href="/" className="btn-pill btn-ghost">
              Go Back
            </a>
          </form>
        ) : (
          /* ── Member Buttons ── */
          <div className="buttons">
            <a
              href="https://square.link/u/Bxnpw1ws"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill"
            >
              Payment via Square
            </a>
            <a
              href="#"
              className="btn-pill btn-outline"
            >
              Post-Purchase Info &amp; Support
            </a>
            <a
              href="#"
              className="btn-pill btn-outline"
            >
              Dosage: Common Research Protocols
            </a>
            <a href="/" className="btn-pill btn-ghost">
              Go Back
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
