"use client";

import React from "react";
import trioLogo from "../img/Trio-corporation.jpg";
import ContactSection from "../components/ContactSection";
import FadeInSection from "../components/FadeInSection";
import { motion, useReducedMotion } from "framer-motion";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";
const contactHref = "/#contact";

const features = [
  {
    title: "Advanced HIMS Solution",
    text: "A comprehensive ERP built for hospitals and clinics to manage every aspect of healthcare delivery efficiently.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
    ),
  },
  {
    title: "End-to-End Management",
    text: "Digital transformation for your hospital. From patient entry to discharge, everything is tracked securely.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
    ),
  },
  {
    title: "Paperless Workflows",
    text: "Reduce errors and speed up processing times by moving to a completely paperless, digital hospital workflow.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    ),
  },
];

const modules = [
  { name: "Patient Registration", desc: "Streamline patient onboarding with fast, digital registration and unique patient ID generation." },
  { name: "Appointment & Scheduling", desc: "Manage doctor schedules, book appointments easily, and reduce patient wait times." },
  { name: "OPD Management", desc: "Efficient Outpatient Department workflows from consulting to prescription and follow-ups." },
  { name: "IPD Management", desc: "Comprehensive Inpatient tracking including admission, bed allocation, and daily clinical notes." },
  { name: "Billing & Invoicing", desc: "Automated, error-free billing integrating all departments (consultation, pharmacy, lab)." },
  { name: "Pharmacy Management", desc: "Manage drug inventory, expiry alerts, supplier bills, and patient prescription dispensing." },
  { name: "Laboratory Management", desc: "Track lab samples, automate test results, and deliver digital reports directly to patients." },
  { name: "Ward & Bed Management", desc: "Real-time visibility into bed availability, ward allocation, and nursing shift management." },
  { name: "MIS & Analytics", desc: "Detailed management reports and dashboards for revenue, patient flow, and operational efficiency." },
];

const doctors = [
  { name: "Dr. Kawedia", title: "Hospital Director", quote: "Trio HIMS completely transformed our daily operations. Everything is centralized." },
  { name: "Dr. Ravindra Bhate", title: "Chief Surgeon", quote: "The paperless workflows help us focus entirely on patient care rather than administrative paperwork." },
  { name: "Dr. Surana", title: "Medical Superintendent", quote: "Incredible system. Billing and IPD management are seamlessly connected." },
  { name: "Dr. Suhas Kulkarni", title: "Head of Cardiology", quote: "We can access patient history instantly using the EMR modules. Highly recommended." },
  { name: "Dr. Jirge", title: "Senior Consultant", quote: "Appointment scheduling and OPD management have never been smoother." },
  { name: "Dr. Sachin Patil", title: "Orthopedic Surgeon", quote: "The laboratory integration ensures I get test results the moment they are verified." },
  { name: "Sunrise Hospital", title: "Healthcare Partner", quote: "A reliable and robust system that easily scales with our hospital's growing needs." },
  { name: "Dr. Satish", title: "Head of Pediatrics", quote: "Support from the LandMark TechEdge team is fantastic. The software is intuitive." },
];

export default function TrioHimsPage() {
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
            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '16px' }}>Healthcare Management</span>
            <h1>Trio HIMS</h1>
            <p>
              An advanced hospital and healthcare management solution developed to simplify hospital operations, patient management, billing, records management, and healthcare workflows through a secure digital platform.
            </p>
            <div className="hero-actions" style={{ flexWrap: 'wrap' }}>
              <a className="button button-primary" href={contactHref}>Request a Demo</a>
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
              style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.8)', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', borderRadius: '24px', boxShadow: '0 24px 60px rgba(15,23,42,0.1)' }}
            >
              <img src={trioLogo.src} alt="Trio HIMS" style={{ maxWidth: '100%', height: 'auto', borderRadius: '16px' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(59,130,246,0.1)', padding: '8px 16px', borderRadius: '99px', border: '1px solid rgba(59,130,246,0.2)' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Enterprise</span>
                <strong style={{ fontSize: '14px', color: '#0f172a' }}>Hospital Management</strong>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Trio HIMS */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: '#fff' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="section-heading" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Why Us</span>
              <h2>Why Choose Trio HIMS?</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
              {features.map((item, i) => (
                <div key={i} className="impact-card" style={{ borderRadius: '24px', padding: '40px', background: 'linear-gradient(135deg, rgba(239,246,255,0.5), rgba(219,234,254,0.5))', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(59,130,246,0.1)', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
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

      {/* Modules Bento Grid */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: 'linear-gradient(135deg, rgba(207,232,255,0.15), rgba(255,179,184,0.15))' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="section-heading" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>HIMS Modules</span>
              <h2>Comprehensive Healthcare Modules</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {modules.map((item, i) => (
                <div key={i} className="impact-card" style={{ borderRadius: '20px', padding: '32px', background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', display: 'flex', gap: '20px' }}>
                  <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', color: '#0f172a', marginBottom: '8px' }}>{item.name}</h3>
                    <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Doctors & Testimonials Masonry */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: '#fff' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="section-heading" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Testimonials</span>
              <h2>Trusted by Leading Doctors</h2>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', width: '100%' }}>
              {doctors.map((doc, i) => (
                <div key={i} className="impact-card doctor-card" style={{ borderRadius: '24px', padding: '32px', background: '#f8fafc', border: '1px solid #e2e8f0', boxSizing: 'border-box' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18px', flexShrink: 0 }}>
                      {doc.name.charAt(0)}
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '16px', color: '#0f172a' }}>{doc.name}</strong>
                      <span style={{ fontSize: '14px', color: '#64748b' }}>{doc.title}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>"{doc.quote}"</p>
                </div>
              ))}
            </div>
            {/* Responsive flex styles */}
            <style>{`
              .doctor-card { width: calc(33.333% - 16px); }
              @media (max-width: 900px) { .doctor-card { width: calc(50% - 12px); } }
              @media (max-width: 600px) { .doctor-card { width: 100%; } }
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
