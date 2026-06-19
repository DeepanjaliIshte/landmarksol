"use client";

import altaroLogo from "../img/altaro2.png";
import ContactSection from "../components/ContactSection";
import FadeInSection from "../components/FadeInSection";
import { motion, useReducedMotion } from "framer-motion";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";

const backupSolutions = [
  {
    title: "VM Backup & Replication",
    href: "/altaro/vm-backup",
    text: "Fast backup, replication, and recovery for VMware and Hyper-V environments.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
  },
  {
    title: "Microsoft 365 Backup",
    href: "/altaro/microsoft-365-backup",
    text: "Protect Exchange, OneDrive, SharePoint, and Teams data with simple cloud backup.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <path d="M2 15h10"></path>
        <path d="m9 18 3-3-3-3"></path>
      </svg>
    ),
  },
  {
    title: "Windows Server Backup",
    href: "/altaro/windows-server-backup",
    text: "Reliable server backup for business-critical Windows workloads and files.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
        <path d="M12 4v16"></path>
        <path d="M2 12h20"></path>
      </svg>
    ),
  },
];

const otherProducts = [
  {
    title: "File Server Backup",
    href: "/altaro/file-server-backup",
    text: "Secure file server data with centralized backup and recovery workflows.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        <line x1="12" y1="11" x2="12" y2="17"></line>
        <line x1="9" y1="14" x2="15" y2="14"></line>
      </svg>
    ),
  },
  {
    title: "Home PC Backup",
    href: "/altaro/home-pc-backup",
    text: "Simple protection for personal systems, documents, and everyday PC data.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
];

export default function AltaroPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main style={{ overflowX: "hidden", background: "#f8fafc" }}>

      {/* Premium Hero Section */}
      <section className="hero hero-blue" style={{ background: "linear-gradient(135deg, rgba(239,246,255,1) 0%, rgba(219,234,254,0.5) 100%)" }}>
        <div className="hero-grid">
          <motion.div 
            className="hero-copy"
            initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '16px' }}>Altaro Backup Solutions</span>
            <h1>Ransomware Protection Leveraging Immutable Cloud Storage</h1>
            <p>
              Secure your critical data with state-of-the-art backup, recovery, and immutable cloud storage solutions.
            </p>
            <div className="hero-actions" style={{ flexWrap: 'wrap' }}>
              <a className="button button-primary" href="#contact">Download Free Trial</a>
              <a className="button button-secondary" href={whatsappHref}>Talk to Our Team</a>
            </div>
            <small style={{ display: 'block', marginTop: '16px', color: '#64748b', fontWeight: 600 }}>30-day trial + free for micro businesses</small>
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
              <img src={altaroLogo.src} alt="Altaro VM Backup" style={{ maxWidth: '100%', height: 'auto' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(59,130,246,0.1)', padding: '8px 16px', borderRadius: '99px', border: '1px solid rgba(59,130,246,0.2)' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.05em' }}>New</span>
                <strong style={{ fontSize: '14px', color: '#0f172a' }}>VM Backup V9</strong>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Backup Solutions Grid */}
      <FadeInSection>
        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="section-heading" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Backup Solutions</span>
              <h2>Choose the Altaro protection your infrastructure needs</h2>
              <p style={{ maxWidth: '700px', margin: '16px auto 0' }}>
                Industry-leading backup solutions for virtual, physical, and cloud environments.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {backupSolutions.map((solution, i) => (
                <a 
                  key={solution.title} 
                  href={solution.href}
                  className="impact-card" 
                  style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', transition: 'all 0.3s ease', borderRadius: '20px' }}
                >
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(139,92,246,0.1) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', marginBottom: '24px' }}>
                    {solution.icon}
                  </div>
                  <h3 style={{ fontSize: '22px', margin: '0 0 12px', color: '#0f172a' }}>{solution.title}</h3>
                  <p style={{ margin: '0 0 24px', color: '#64748b', fontSize: '16px', lineHeight: 1.6, flexGrow: 1 }}>{solution.text}</p>
                  <div style={{ display: 'flex', alignItems: 'center', color: '#2563eb', fontWeight: 700, fontSize: '14px', gap: '8px' }}>
                    View Solution
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Other Products Grid */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: 'linear-gradient(135deg, rgba(207,232,255,0.15), rgba(255,179,184,0.15))' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="section-heading" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Other Products</span>
              <h2>Additional backup products for smaller environments</h2>
              <p style={{ maxWidth: '700px', margin: '16px auto 0' }}>
                Secure your files and workstations with simple, effective backup solutions.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
              {otherProducts.map((product, i) => (
                <a 
                  key={product.title} 
                  href={product.href}
                  className="impact-card" 
                  style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)', borderRadius: '20px' }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', marginBottom: '20px' }}>
                    {product.icon}
                  </div>
                  <h3 style={{ fontSize: '20px', margin: '0 0 12px', color: '#0f172a' }}>{product.title}</h3>
                  <p style={{ margin: '0 0 24px', color: '#64748b', fontSize: '15px', lineHeight: 1.6, flexGrow: 1 }}>{product.text}</p>
                  <div style={{ display: 'flex', alignItems: 'center', color: '#10b981', fontWeight: 700, fontSize: '14px', gap: '8px' }}>
                    View Product
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </div>
                </a>
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
