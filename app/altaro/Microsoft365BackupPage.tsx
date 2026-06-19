"use client";

import React from "react";
import altaroLogo from "../img/altaro2.png";
import ContactSection from "../components/ContactSection";
import FadeInSection from "../components/FadeInSection";
import { motion, useReducedMotion } from "framer-motion";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";
const trialHref = "/#contact";

const awards = [
  "Spiceworks 4.5 Star Reviews",
  "Storage Awards Winner",
  "Front Runners 2022",
  "GetApp Leaders 2022",
  "G2 Leader Summer 2022",
  "Top 5 DCIG",
  "Best of Backup",
  "SourceForge Loved",
  "Digital Best",
  "Editor's Choice",
];

const highlights = [
  {
    title: "Avoid Microsoft 365 data loss",
    text: "Microsoft 365 is a communications system rather than a data protection solution. We help you back up and restore your M365 data with ease.",
  },
  {
    title: "Back up Microsoft 365 automatically",
    text: "Enjoy the benefits of an easy automated backup process, freeing up your thoughts and time for other tasks.",
  },
  {
    title: "One all-inclusive price",
    text: "Your subscription includes backups, unlimited storage, 24/7 support and a central management Control Panel. No hidden costs!",
  },
  {
    title: "Hassle-free, unlimited storage",
    text: "Your Microsoft 365 backups are automatically saved to one of our secure data centers.",
  },
  {
    title: "Data security",
    text: "Data storage in our global private cloud, offering reliability, availability and security.",
  },
  {
    title: "Disaster recovery",
    text: "Should you lose data due to outages, deletion, or other disasters, we've got your back.",
  },
];

const featureColumns = [
  {
    title: "Backup",
    items: [
      "Back up user and group mailboxes, including mail, attachments, calendars, and contacts",
      "Back up files within OneDrive & SharePoint",
      "Back up user chats (1:1, 1:M), Teams channel conversations",
      "Auto-creation of backup jobs",
      "Minimal recovery point objective (RPO)",
      "Automated backups multiple times a day",
    ],
  },
  {
    title: "Recovery",
    items: [
      "Restore full mailboxes or granular mailbox emails",
      "Recover to original or alternate mailboxes",
      "Restore OneDrive & SharePoint files to respective libraries",
      "Restore Teams chats, channel conversations",
      "Export emails to ZIP or PST, files to ZIP",
      "Restore from any point in time",
    ],
  },
];

const setupSteps = [
  "Sign up for your free 30-day trial",
  "Add your Microsoft 365 organization",
  "Choose which users, Teams Chats, and SharePoint sites to back up",
  "Choose where to store your backups",
];

export default function Microsoft365BackupPage() {
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
            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '16px' }}>Microsoft 365 Backup</span>
            <h1>Microsoft 365 Backup Is a Must</h1>
            <p>
              365 Total Backup protects your Exchange, OneDrive, SharePoint, and Teams data with automated cloud backups, unlimited storage, and expert 24/7 support.
            </p>
            <div className="hero-actions" style={{ flexWrap: 'wrap' }}>
              <a className="button button-primary" href={trialHref}>Start Your Free 30-Day Trial</a>
              <a className="button button-secondary" href="#setup">How It Works</a>
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
              <img src={altaroLogo.src} alt="365 Total Backup" style={{ maxWidth: '100%', height: 'auto' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(16,185,129,0.1)', padding: '8px 16px', borderRadius: '99px', border: '1px solid rgba(16,185,129,0.2)' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Free</span>
                <strong style={{ fontSize: '14px', color: '#0f172a' }}>30-Day Trial</strong>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Awards Marquee or Flex Row */}
      <section style={{ padding: '24px 0', borderBottom: '1px solid rgba(15,23,42,0.05)', background: '#fff' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}>
          {awards.map((award, i) => (
            <span key={i} style={{ fontSize: '13px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{award}</span>
          ))}
        </div>
      </section>

      {/* Intro */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: '#fff' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '28px', color: '#0f172a', marginBottom: '24px', lineHeight: 1.4 }}>
              365 Total Backup is the #1 Microsoft 365 backup and recovery solution for admins.
            </h2>
            <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7 }}>
              Back up and restore Exchange Online mailboxes, SharePoint sites, OneDrive for Business accounts, and Teams data — with unlimited storage and award-winning support included.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* Highlights Grid */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: 'linear-gradient(135deg, rgba(207,232,255,0.15), rgba(255,179,184,0.15))' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="section-heading" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Why 365 Total Backup</span>
              <h2>Complete protection for your Microsoft 365 data</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {highlights.map((item, i) => (
                <div key={i} className="impact-card" style={{ borderRadius: '20px', padding: '32px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59,130,246,0.1)', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <h3 style={{ fontSize: '20px', color: '#0f172a', marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Features Overview */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: '#fff' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="section-heading" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Capabilities</span>
              <h2>Overview of Features</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
              {featureColumns.map((col, i) => (
                <div key={i} className="impact-card" style={{ borderRadius: '24px', padding: '40px' }}>
                  <h3 style={{ fontSize: '24px', color: '#0f172a', marginBottom: '24px', borderBottom: '2px solid rgba(59,130,246,0.1)', paddingBottom: '16px' }}>{col.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '16px' }}>
                    {col.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '15px', color: '#475569', lineHeight: 1.5 }}>
                        <div style={{ flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Setup Steps */}
      <FadeInSection>
        <section id="setup" style={{ padding: '48px 24px', background: 'linear-gradient(135deg, rgba(16,185,129,0.05), rgba(59,130,246,0.05))' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto', textAlign: 'center' }}>
            <div className="section-heading" style={{ margin: '0 auto 48px' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Onboarding</span>
              <h2>Easy Setup, Nothing to Deploy</h2>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
              {setupSteps.map((step, i) => (
                <div key={i} style={{ flex: '1 1 200px', maxWidth: '280px', background: '#fff', borderRadius: '20px', padding: '32px 24px', boxShadow: '0 12px 32px rgba(15,23,42,0.06)', position: 'relative' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 800, margin: '0 auto 20px' }}>
                    {i + 1}
                  </div>
                  <p style={{ fontSize: '15px', color: '#475569', margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
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
