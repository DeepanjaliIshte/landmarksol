"use client";

import React from "react";
import altaroLogo from "../img/altaro2.png";
import ContactSection from "../components/ContactSection";
import FadeInSection from "../components/FadeInSection";
import { motion, useReducedMotion } from "framer-motion";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";
const downloadHref = "/#contact";

const topFeatures = [
  {
    title: "Back up and restore physical servers",
    text: "Back up your physical servers and restore them to a virtual environment (as a virtual disk or a virtual machine running on a Hyper-V hypervisor).",
  },
  {
    title: "Easy to use",
    text: "Run the solution on the physical server you wish to back up and create your backup schedule. Manage it through a user-friendly local management console.",
  },
  {
    title: "Outstanding storage savings",
    text: "Enjoy industry-leading reductions in backup storage size thanks to our signature inline deduplication.",
  },
  {
    title: "Unbeatable value",
    text: "Benefit from reliable, no-cost backup and recovery for the physical machines on your network.",
  },
];

const mainFeatures = [
  {
    title: "Reliable, fast backup and recovery",
    text: "Physical Server Backup is a reliable, fast backup and recovery solution for physical Windows servers. Back up your entire server with ease and restore it quickly when needed.",
  },
  {
    title: "P2V backup for physical servers",
    text: "Restore physical server backups to a virtual environment as a virtual disk or VM on Hyper-V — ideal for disaster recovery and migration scenarios.",
  },
  {
    title: "Backup schedule",
    text: "Create flexible backup schedules that fit your business hours. Automated jobs run in the background without disrupting production workloads.",
  },
  {
    title: "Restore your backups",
    text: "Restore full servers or granular items to the original machine or an alternate target. Export and recover with confidence from any supported restore point.",
  },
];

const disasterFeatures = [
  {
    title: "Avert the impact of a disaster",
    text: "Recover physical servers to virtual environments quickly after hardware failure, ransomware, or site outages — minimizing downtime and data loss.",
  },
  {
    title: "Encryption and retention policies",
    text: "Configure backup targets, encryption keys, and retention policies to meet your security and compliance requirements.",
  },
  {
    title: "Ease of use",
    text: "Simple product setup with a local management console — no complex deployment or lengthy training required.",
  },
];

const performanceFeatures = [
  {
    title: "Local management console",
    text: "Monitor backup status, jobs, and health through an intuitive web-based local management console on your network.",
  },
  {
    title: "Fast and efficient backups",
    text: "Change Block Tracking (CBT) and VSS-aware backups keep jobs fast while protecting application-consistent data.",
  },
  {
    title: "Optimized backup size",
    text: "Inline deduplication dramatically reduces backup storage requirements so you keep more restore points without extra disk cost.",
  },
];

const valuePoints = [
  {
    title: "No impact on your pocket",
    text: "Physical Server Backup is free backup and recovery software for the physical machines on your network — enterprise-grade protection without license fees.",
  },
  {
    title: "Community support",
    text: "Join the active user community and get answers from peers and experts through the official community forum and knowledge base.",
  },
];

const supportedOs = [
  "Windows Server 2022",
  "Windows Server 2019",
  "Windows Server 2016",
  "Windows Server 2012 R2",
  "Windows Server 2012",
  "Windows Server 2008 R2",
];

const faqs = [
  {
    q: "What is the best free online backup solution?",
    a: "Physical Server Backup offers reliable, efficient, and completely free backup and recovery for physical Windows servers on your network — with P2V restore to Hyper-V when you need disaster recovery flexibility.",
  },
  {
    q: "What is the cheapest backup solution?",
    a: "For physical servers, Physical Server Backup is free. You get fast backups, inline deduplication, and restore capabilities without subscription costs for the machines you protect.",
  },
  {
    q: "How to back up everything on my Windows Server?",
    a: "Install Physical Server Backup on the server, define your backup schedule and target, and the solution captures full disk images with VSS-aware consistency. Restore to physical or virtual environments when required.",
  },
];

export default function WindowsServerBackupPage() {
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
            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '16px' }}>Windows Server Backup</span>
            <h1>Download Your Free Windows Server Backup</h1>
            <p>
              Back up the physical servers on your network through this P2V solution and benefit from fast, easy recovery
              should they be impacted by a disaster.
            </p>
            <div className="hero-actions" style={{ flexWrap: 'wrap' }}>
              <a className="button button-primary" href={downloadHref}>Download Now</a>
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
              style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.8)', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '16px', borderRadius: '24px', boxShadow: '0 24px 60px rgba(15,23,42,0.1)' }}
            >
              <img src={altaroLogo.src} alt="Physical Server Backup" style={{ maxWidth: '100%', height: 'auto', alignSelf: 'center', margin: '0 auto', display: 'block', mixBlendMode: 'multiply' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(139,92,246,0.1)', padding: '8px 16px', borderRadius: '99px', border: '1px solid rgba(139,92,246,0.2)' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Free</span>
                <strong style={{ fontSize: '14px', color: '#0f172a' }}>Physical Server Backup</strong>
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
              Protect the physical machines on your network.
            </h2>
            <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7 }}>
              Companies and organizations with virtualized server environments sometimes also have physical machines — and
              these too require data protection. <strong>Physical Server Backup</strong> is server backup software created to
              satisfy this need, with the added bonus that it's <strong>completely free</strong>.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* Top Features */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: 'linear-gradient(135deg, rgba(207,232,255,0.15), rgba(255,179,184,0.15))' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              {topFeatures.map((item, i) => (
                <div key={i} className="impact-card" style={{ borderRadius: '20px', padding: '32px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59,130,246,0.1)', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                  </div>
                  <h3 style={{ fontSize: '20px', color: '#0f172a', marginBottom: '12px', lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Main Features Split Grid */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: '#fff' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="section-heading" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Features</span>
              <h2>Physical Server Backup: Features</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '32px' }}>
              <div className="impact-card" style={{ borderRadius: '24px', padding: '40px' }}>
                <h3 style={{ fontSize: '24px', color: '#0f172a', marginBottom: '24px', borderBottom: '2px solid rgba(59,130,246,0.1)', paddingBottom: '16px' }}>Backup & Recovery</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {mainFeatures.map((item, i) => (
                    <div key={i}>
                      <h4 style={{ fontSize: '18px', color: '#1e293b', margin: '0 0 8px' }}>{item.title}</h4>
                      <p style={{ fontSize: '15px', color: '#64748b', margin: 0, lineHeight: 1.6 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="impact-card" style={{ borderRadius: '24px', padding: '40px' }}>
                <h3 style={{ fontSize: '24px', color: '#0f172a', marginBottom: '24px', borderBottom: '2px solid rgba(16,185,129,0.1)', paddingBottom: '16px' }}>Performance & Setup</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {performanceFeatures.map((item, i) => (
                    <div key={i}>
                      <h4 style={{ fontSize: '18px', color: '#1e293b', margin: '0 0 8px' }}>{item.title}</h4>
                      <p style={{ fontSize: '15px', color: '#64748b', margin: 0, lineHeight: 1.6 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="impact-card" style={{ borderRadius: '24px', padding: '40px', gridColumn: '1 / -1' }}>
                <h3 style={{ fontSize: '24px', color: '#0f172a', marginBottom: '24px', borderBottom: '2px solid rgba(245,158,11,0.1)', paddingBottom: '16px' }}>Disaster Recovery & Value</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                  {disasterFeatures.concat(valuePoints).map((item, i) => (
                    <div key={i}>
                      <h4 style={{ fontSize: '18px', color: '#1e293b', margin: '0 0 8px' }}>{item.title}</h4>
                      <p style={{ fontSize: '15px', color: '#64748b', margin: 0, lineHeight: 1.6 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* OS Support */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: 'linear-gradient(135deg, rgba(15,23,42,0.02), rgba(15,23,42,0.05))' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '32px', color: '#0f172a', marginBottom: '16px' }}>What operating systems does this freeware back up?</h2>
            <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '32px' }}>Supported Windows Server OS Versions:</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
              {supportedOs.map((os) => (
                <span key={os} style={{ padding: '12px 24px', background: '#fff', borderRadius: '99px', fontSize: '15px', fontWeight: 600, color: '#334155', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                  {os}
                </span>
              ))}
            </div>
            
            <p style={{ fontSize: '14px', color: '#64748b', fontStyle: 'italic' }}>
              Free VMware ESXi hosts are not supported. For virtual environments, use{" "}
              <a href="/altaro/vm-backup" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>VM Backup & Replication</a>.
            </p>
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
