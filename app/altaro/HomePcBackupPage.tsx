"use client";

import React from "react";
import altaroLogo from "../img/homepc.png";
import ContactSection from "../components/ContactSection";
import FadeInSection from "../components/FadeInSection";
import { motion, useReducedMotion } from "framer-motion";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";
const downloadHref = "/#contact";

const splitSections = [
  {
    title: "Very Fast Backup & Restore",
    text: "Your data is protected every time you make a change — without slowing down your PC.",
  },
  {
    title: "Back In Time Technology",
    text: "Go back in time and choose different versions of your files from different points in time.",
  },
  {
    title: "Fully Automatic — No Hassle",
    text: "Detects file changes automatically, versions files, and backs them up for you.",
  },
];

const productFeatures = [
  {
    title: "Save Space",
    text: "Only back up sections of files that changed using ReverseDelta™ Technology. Oops!Backup backs up actual changes without copying the whole file again every time.",
  },
  {
    title: "Continuous Data Protection (CDP)",
    text: "Highly tuned file-change-detection technology ensures that you are protected at all times.",
  },
  {
    title: "Double-Protection",
    text: "Automatically keep a double-backup to protect against theft, fire, or loss of your backup drive.",
  },
  {
    title: "Back up to NAS, Network Drive & USB",
    text: "Choose where to back up — offices can backup to a server or NAS drive, or use USB drives for portability.",
  },
  {
    title: "Automatic Backup on Connect",
    text: "Ideal for laptop users — automatically initiates a backup once the backup drive is connected.",
  },
  {
    title: "Restore different versions",
    text: "Restore from multiple points in time rather than only the most recent backup.",
  },
];

const reviews = [
  {
    source: "PC Advisor",
    quote: "Oops!Backup is a capable backup tool that makes it very easy to access and restore files. If regular backup tools seem like too much hassle then this one is definitely worth a look.",
  },
  {
    source: "Software Crew",
    quote: "It's simple to set up and use, reliable, works quietly in the background without you noticing, and makes it easy to restore files or folders whenever necessary.",
  },
  {
    source: "Tech Republic",
    quote: "A great step forward in helping users back up their data as often as possible.",
  },
  {
    source: "Softonic",
    quote: "Oops!Backup is a well designed and trustworthy backup tool that gives Windows an Apple-like Time Machine. It is both easy to use and flexible.",
  },
  {
    source: "PC World",
    quote: "Oops!Backup is a delightfully easy way to back up data.",
  },
  {
    source: "Download Squad",
    quote: "Restore with one click — your fingers never having to leave your hand. Amazing.",
  },
];

export default function HomePcBackupPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main style={{ overflowX: "hidden", background: "#f8fafc" }}>

      {/* Hero Section */}
      <section className="hero hero-blue" style={{ background: "linear-gradient(135deg, rgba(239,246,255,1) 0%, rgba(219,234,254,0.5) 100%)" }}>
        <div className="hero-grid">
          <motion.div
            className="hero-copy"
            initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '16px' }}>Home PC Backup</span>
            <h1>Oops!Backup by Altaro</h1>
            <p>
              Automatic backup and versioning for documents, photos, and files on Windows PCs — with fast restore from
              any point in time.
            </p>
            <div className="hero-actions" style={{ flexWrap: 'wrap' }}>
              <a className="button button-primary" href={downloadHref}>Download Free Trial</a>
              <a className="button button-secondary" href={whatsappHref}>Talk to Our Team</a>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              className="visual-card"
              animate={shouldReduceMotion ? undefined : { y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.8)', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', borderRadius: '24px', boxShadow: '0 24px 60px rgba(15,23,42,0.1)' }}
            >
              <img src={altaroLogo.src} alt="Oops!Backup" style={{ maxWidth: '100%', height: 'auto' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(59,130,246,0.1)', padding: '8px 16px', borderRadius: '99px', border: '1px solid rgba(59,130,246,0.2)' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CDP</span>
                <strong style={{ fontSize: '14px', color: '#0f172a' }}>Always Protected</strong>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: '#fff' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '28px', color: '#0f172a', marginBottom: '24px', lineHeight: 1.4 }}>
              Backup for Windows 8, 7, Vista &amp; XP
            </h2>
            <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7 }}>
              Backup & automatic versioning of docs, images and other files lets you preview & restore versions from different points in time. Mistakes such as saving over another file or deleting a document are now a thing of the past.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* Core Advantages */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: 'linear-gradient(135deg, rgba(207,232,255,0.15), rgba(255,179,184,0.15))' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="section-heading" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Key Advantages</span>
              <h2>Why choose Oops!Backup</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
              {splitSections.map((item, i) => (
                <div key={i} className="impact-card" style={{ borderRadius: '24px', padding: '40px', background: '#fff', textAlign: 'center' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(59,130,246,0.1)', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <h3 style={{ fontSize: '22px', color: '#0f172a', marginBottom: '16px' }}>{item.title}</h3>
                  <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Detailed Features Grid */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: '#fff' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="section-heading" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Features</span>
              <h2>Everything you need for PC backup</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {productFeatures.map((item, i) => (
                <div key={i} className="impact-card" style={{ borderRadius: '20px', padding: '32px', background: '#f8fafc', border: '1px solid #e2e8f0', boxShadow: 'none' }}>
                  <h3 style={{ fontSize: '18px', color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }}></div>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Reviews Masonry */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: 'linear-gradient(135deg, rgba(15,23,42,0.02), rgba(15,23,42,0.05))' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="section-heading" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Testimonials</span>
              <h2>What the experts are saying</h2>
            </div>

            <div style={{ columnCount: 3, columnGap: '24px', width: '100%' }}>
              {reviews.map((item, i) => (
                <div key={i} className="impact-card" style={{ breakInside: 'avoid', marginBottom: '24px', borderRadius: '20px', padding: '32px', background: '#fff', display: 'inline-block', width: '100%', boxSizing: 'border-box' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(59,130,246,0.1)', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '14px' }}>
                      {item.source.charAt(0)}
                    </div>
                    <span style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a' }}>{item.source}</span>
                  </div>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>"{item.quote}"</p>
                </div>
              ))}
            </div>
            {/* Simple CSS fallback for columns if flex/grid is tricky for masonry */}
            <style>{`
              @media (max-width: 900px) { div[style*="columnCount: 3"] { column-count: 2 !important; } }
              @media (max-width: 600px) { div[style*="columnCount: 3"] { column-count: 1 !important; } }
            `}</style>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="contact">
          <ContactSection />
        </section>
      </FadeInSection>



      <a className="whatsapp-float" href={whatsappHref} aria-label="Chat with us on WhatsApp">
        <span className="tooltip">Chat with us! 👋</span>
      </a>
    </main>
  );
}
