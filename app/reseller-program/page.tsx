"use client";

import React from "react";
import ContactSection from "../components/ContactSection";
import FadeInSection from "../components/FadeInSection";
import { motion, useReducedMotion } from "framer-motion";

const applyHref = "/#contact";
const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi%20I'm%20interested%20in%20the%20Reseller%20Program";

const benefits = [
  {
    title: "High Margins & Recurring Revenue",
    text: "Enjoy highly competitive reseller discounts that grow as you sell. Build predictable, recurring revenue streams with our subscription-based products.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    )
  },
  {
    title: "Comprehensive Product Suite",
    text: "Sell our industry-leading Altaro Backup solutions, advanced BizPlus CRM/ERP, Trio HIMS, and robust IVR systems all from one vendor.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
    )
  },
  {
    title: "Dedicated Partner Support",
    text: "Skip the generic queue. As a verified reseller, you get priority access to our top-tier technical engineers and account managers.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    )
  },
  {
    title: "Not-For-Resale (NFR) Keys",
    text: "Get free NFR licenses for your internal use and testing, allowing your team to confidently demo and sell the solutions you rely on.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
    )
  }
];

export default function ResellerProgramPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main style={{ overflowX: "hidden", background: "#f8fafc" }}>

      {/* Hero Section */}
      <section className="hero hero-blue" style={{ background: "linear-gradient(135deg, rgba(239,246,255,1) 0%, rgba(219,234,254,0.5) 100%)" }}>
        <div className="hero-grid" style={{ minHeight: '60vh', alignItems: 'center', gridTemplateColumns: '1fr' }}>
          <motion.div 
            className="hero-copy"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
          >
            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '16px', justifyContent: 'center' }}>Partner With Us</span>
            <h1 style={{ fontSize: '52px', lineHeight: 1.1 }}>LandMark TechEdge Reseller & Distributor Program</h1>
            <p style={{ fontSize: '20px', margin: '24px auto 32px' }}>
              We deliver flexible, custom solutions to IT professionals, MSPs, and top companies. Add massive value to your portfolio and generate new revenue opportunities by selling our premium enterprise software.
            </p>
            <div className="hero-actions" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
              <a className="button button-primary" href={applyHref} style={{ padding: '16px 32px', fontSize: '18px' }}>Apply to Become a Partner</a>
              <a className="button button-secondary" href={whatsappHref} style={{ padding: '16px 32px', fontSize: '18px' }}>Chat with our Channel Team</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Opportunity */}
      <FadeInSection>
        <section style={{ padding: '100px 24px', background: '#fff' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '36px', color: '#0f172a', marginBottom: '24px', lineHeight: 1.2 }}>Expand Your Market Reach</h2>
            <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.7, margin: '0' }}>
              We are constantly looking for new and imaginative ways to package and market our advanced solutions—from PC & server backup to BizPlus ERP and Trio HIMS. By utilizing your established sales channels, we grow together. When you win, we win.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* Benefits Grid */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: 'linear-gradient(135deg, rgba(207,232,255,0.15), rgba(255,179,184,0.15))' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="section-heading" style={{ textAlign: 'center', margin: '0 auto 64px' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Why Partner</span>
              <h2>Program Benefits</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '32px' }}>
              {benefits.map((item, i) => (
                <div key={i} className="impact-card" style={{ borderRadius: '24px', padding: '40px', background: 'rgba(255,255,255,0.8)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #e2e8f0' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, #3b82f6, #60a5fa)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: '0 10px 25px -5px rgba(59,130,246,0.5)' }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '22px', color: '#0f172a', marginBottom: '16px' }}>{item.title}</h3>
                  <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* How to Apply Workflow */}
      <FadeInSection>
        <section style={{ padding: '100px 24px', background: '#fff' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="section-heading" style={{ textAlign: 'center', margin: '0 auto 64px' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Simple Process</span>
              <h2>How It Works</h2>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
              <div style={{ flex: '1 1 300px', maxWidth: '350px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '40px', textAlign: 'center', position: 'relative' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', margin: '0 auto 24px' }}>1</div>
                <h3 style={{ fontSize: '20px', color: '#0f172a', marginBottom: '16px' }}>Submit Inquiry</h3>
                <p style={{ fontSize: '15px', color: '#64748b', margin: 0 }}>Fill out the contact form expressing your interest in becoming a distributor or reseller.</p>
              </div>

              <div style={{ flex: '1 1 300px', maxWidth: '350px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '40px', textAlign: 'center', position: 'relative' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#8b5cf6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', margin: '0 auto 24px' }}>2</div>
                <h3 style={{ fontSize: '20px', color: '#0f172a', marginBottom: '16px' }}>Account Review</h3>
                <p style={{ fontSize: '15px', color: '#64748b', margin: 0 }}>Our channel team will review your business profile and assign you an initial discount tier.</p>
              </div>

              <div style={{ flex: '1 1 300px', maxWidth: '350px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '40px', textAlign: 'center', position: 'relative' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#10b981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', margin: '0 auto 24px' }}>3</div>
                <h3 style={{ fontSize: '20px', color: '#0f172a', marginBottom: '16px' }}>Start Selling</h3>
                <p style={{ fontSize: '15px', color: '#64748b', margin: 0 }}>Get access to marketing materials, NFR licenses, and start generating predictable revenue!</p>
              </div>
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
