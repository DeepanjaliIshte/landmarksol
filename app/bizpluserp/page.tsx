"use client";

import logo from "../img/LTPLLogo.png";
import bizplusLogo from "../img/bizplus_erp.png";
import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";

function FadeInSection({ children }: { children: React.ReactNode }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1), transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

// Custom SVGs
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#10b981' }}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const TargetIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3b82f6' }}>
    <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const EyeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#8b5cf6' }}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const clients = [
  "Client Logo 1", "Client Logo 2", "Client Logo 3", 
  "Client Logo 4", "Client Logo 5", "Client Logo 6"
];

const tags = [
  "Dashboard", "CEO Dashboards", "Enquiry", "Quotation", "Tasks", "Contacts", "Products", 
  "Stock Transfer", "Performa", "Invoice", "Challan", "Sales Return", "Cashbook", 
  "Expense Management", "Telecalling", "Complaint Management", "AMC", "Ticket", 
  "Feedback", "WhatsApp", "Email", "Wati", "Razorpay", "Instamojo", "Sulekha", 
  "Facebook", "Instagram", "Website", "Just Dial", "IndiaMART"
];

const newFeaturesList = [
  { 
    category: "Sales",
    title: "Performa", 
    desc: "Create professional proforma invoices quickly and accurately. Share estimated costs with customers, simplify approvals, and speed up the sales process with clear, well-structured quotations before final billing.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
  },
  { 
    category: "Purchase",
    title: "Purchase Module", 
    desc: "The Purchase module makes buying smart and simple. Manage vendors, track orders, and update stock automatically all from one dashboard. Stay organized, save time, and keep your procurement process running smoothly.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
  },
  { 
    category: "Services",
    title: "Telecalling", 
    desc: "The Telecalling module boosts your customer engagement with a built-in calling system. Track call history, schedule follow-ups, and record customer responses all in one place to enhance communication and close deals faster.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
  }
];

export default function BizPlusErpPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main style={{ overflowX: "hidden", background: "#f8fafc" }}>

      {/* Hero Section */}
      <section className="hero hero-blue" style={{ background: "linear-gradient(135deg, rgba(239,246,255,1) 0%, rgba(219,234,254,0.5) 100%)", paddingBottom: '0' }}>
        <div className="hero-grid">
          <motion.div 
            className="hero-copy"
            initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '16px' }}>Automate Your Business</span>
            <h1>From Leads to Revenue<br/>With Smart Automation System</h1>
            <p>
              Built for growing businesses doing ₹1Cr+ revenue. Eliminate manual work, increase conversions, and gain complete
              control with BizPlus Business Automation System.
            </p>
            <div className="hero-actions" style={{ flexWrap: 'wrap' }}>
              <a className="button button-primary" href="#contact">Start Free Trial</a>
              <a className="button button-secondary" href="#contact">Get Free Business Audit</a>
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
              style={{ background: 'linear-gradient(135deg, #7dd3fc, #0ea5e9)', backdropFilter: 'blur(16px)', border: '1px solid #bae6fd', padding: '24px', borderRadius: '24px', boxShadow: '0 24px 60px rgba(14, 165, 233, 0.25)' }}
            >
              <img src={bizplusLogo.src} alt="BizPlus ERP" style={{ maxWidth: '100%', height: 'auto', borderRadius: '16px' }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Client Logo Ticker */}
      <div style={{ background: '#fff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '32px 0', overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex' }}>
        <motion.div 
          animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }} 
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          style={{ display: 'flex', gap: '80px', paddingLeft: '80px' }}
        >
          {[...clients, ...clients, ...clients].map((client, i) => (
            <div key={i} style={{ fontSize: '18px', fontWeight: 800, color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '2px', display: 'flex', alignItems: 'center' }}>
              {client}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mission & Vision Section */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', position: 'relative' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
            <div className="section-heading" style={{ margin: '0 auto 48px', maxWidth: '800px' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>About BizPlus ERP</span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginTop: '12px' }}>A Powerful Business Automation Platform</h2>
              <p style={{ marginTop: '16px', fontSize: '18px', lineHeight: 1.7, color: 'var(--muted)' }}>
                BizPlus ERP is a powerful business automation platform by Landmark Techedge Pvt. Ltd. built for companies aiming to scale beyond ₹1Cr+ revenue. It centralizes sales, CRM, finance, inventory, and operations into a single system, enabling better visibility and faster decision-making. With automation at its core, BizPlus reduces manual effort, improves team productivity, and enhances customer conversion rates. Its flexible and user-friendly design ensures easy adoption across teams, while real-time analytics and seamless integrations help businesses optimize processes and achieve consistent, scalable growth.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px', textAlign: 'left' }}>
              <motion.div 
                className="impact-card" 
                style={{ padding: '32px', background: 'rgba(255, 255, 255, 0.8)', border: '1px solid rgba(191, 219, 254, 0.45)', borderRadius: '24px' }}
                whileHover={shouldReduceMotion ? undefined : { y: -8, boxShadow: '0 20px 40px rgba(15,23,42,0.08)' }}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <TargetIcon />
                </div>
                <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Our Mission</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
                  To provide businesses with intelligent, scalable, and user-friendly ERP solutions that empower them to optimize operations, improve resource management, and achieve sustainable growth.
                </p>
              </motion.div>
              
              <motion.div 
                className="impact-card" 
                style={{ padding: '32px', background: 'rgba(255, 255, 255, 0.8)', border: '1px solid rgba(191, 219, 254, 0.45)', borderRadius: '24px' }}
                whileHover={shouldReduceMotion ? undefined : { y: -8, boxShadow: '0 20px 40px rgba(15,23,42,0.08)' }}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <EyeIcon />
                </div>
                <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Our Vision</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
                  To be a trusted partner for businesses in India, delivering advanced, scalable, and reliable ERP solutions that help improve productivity, streamline operations, and achieve sustainable growth.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Start Automating / Tags Section */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: 'linear-gradient(135deg, rgba(207,232,255,0.15), rgba(255,179,184,0.15))' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: '#0f172a', marginBottom: '24px' }}>
              Start Automating and Scaling Your Business Operations
            </h2>
            <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
              At BizPlus, we provide a powerful business automation system that helps companies streamline operations and improve efficiency. From lead management and sales to finance, inventory, and customer relationships, our platform reduces manual work and drives predictable, scalable growth.
            </p>
            <p style={{ fontSize: '16px', fontWeight: 600, color: '#334155', marginBottom: '48px' }}>
              Trusted by growing businesses across India to automate operations, increase conversions, and improve productivity.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              {tags.map((tag) => (
                <span key={tag} style={{ padding: '8px 16px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '99px', fontSize: '14px', color: '#334155', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Features Grid */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: '#fff' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="section-heading" style={{ textAlign: 'center', margin: '0 auto 48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Features</span>
              <h2>Core Modules</h2>
              <a href="#all-features" style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'none', marginTop: '16px', display: 'inline-block' }}>View All &rarr;</a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {newFeaturesList.map((f, i) => (
                <motion.div 
                  key={f.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -5, boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="impact-card"
                  style={{ padding: '32px', background: 'rgba(248, 250, 252, 0.6)', border: '1px solid rgba(226, 232, 240, 0.8)', borderRadius: '24px', display: 'flex', flexDirection: 'column' }}
                >
                  <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em', marginBottom: '16px' }}>{f.category}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ color: '#2563eb', background: 'rgba(59,130,246,0.1)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{f.icon}</div>
                    <h4 style={{ margin: '0', fontSize: '20px', color: '#0f172a' }}>{f.title}</h4>
                  </div>
                  <p style={{ margin: 0, color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6, flexGrow: 1, paddingBottom: '24px' }}>{f.desc}</p>
                  <a href={`#${f.category.toLowerCase()}`} style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>See More &rarr;</a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Benefits Section */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: 'linear-gradient(to bottom, #ffffff, #f8fafc)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="section-heading" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Transformation</span>
              <h2>What Changes After Implementing BizPlus</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {[
                "Never lose a lead again",
                "Automated follow-ups and reminders",
                "Complete visibility of your sales pipeline",
                "Real-time reports for better decision making",
                "Streamlined operations from enquiry to billing",
                "Better team productivity and accountability"
              ].map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '16px', background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.04)' }}
                >
                  <div style={{ flexShrink: 0 }}><CheckIcon /></div>
                  <span style={{ fontSize: '17px', color: '#1e293b', fontWeight: 500, lineHeight: 1.5 }}>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* AI Section */}
      <FadeInSection>
        <section style={{ padding: '48px 24px' }}>
          <div className="perf-split" style={{ maxWidth: '1200px', margin: '0 auto', borderRadius: '32px', padding: '60px', background: 'linear-gradient(135deg, #1e293b, #0f172a)', color: '#fff', boxShadow: '0 24px 50px rgba(15,23,42,0.2)' }}>
            <div className="perf-content">
              <span className="eyebrow" style={{ color: '#38bdf8', border: '1px solid rgba(56,189,248,0.3)', background: 'rgba(56,189,248,0.1)' }}>AI POWERED ANALYTICS</span>
              <h2 style={{ color: '#fff' }}>Meet BizPlus AI</h2>
              <p style={{ color: '#94a3b8' }}>
                BizPlus AI Assistant helps you get instant insights from your business data. Ask questions, get summaries, generate reports, and
                receive guided recommendations — right inside the BizPlus ERP dashboard.
              </p>
              <div style={{ marginTop: '24px' }}>
                <a className="button button-primary" href="#contact" style={{ background: '#38bdf8', color: '#0f172a', border: 'none' }}>See AI in Action</a>
              </div>
            </div>
            
            <div className="perf-visual" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <motion.div 
                style={{ width: '100%', maxWidth: '400px', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', padding: '32px' }}
                animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #38bdf8, #818cf8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: 600 }}>BizPlus AI</div>
                    <div style={{ fontSize: '13px', color: '#94a3b8' }}>Online</div>
                  </div>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '16px', borderRadius: '12px', fontSize: '14px', color: '#cbd5e1', marginBottom: '12px' }}>
                  "Your sales are up 24% this week. Would you like me to generate a quarterly revenue projection?"
                </div>
                <div style={{ background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)', padding: '16px', borderRadius: '12px', fontSize: '14px', color: '#e0f2fe', textAlign: 'right' }}>
                  Yes, show me the projections.
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Contact Section */}
      <FadeInSection>
        <section id="contact" className="contact" style={{ padding: '48px 24px', backgroundColor: '#fafafa', borderTop: '1px solid #f1f5f9' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
            <div>
              <div className="section-heading" style={{ marginBottom: '32px' }}>
                <span className="eyebrow">Get Started</span>
                <h2>Contact Us</h2>
                <p style={{ color: 'var(--muted)', marginTop: '16px' }}>Reach out to our team for a free business audit and find out how BizPlus ERP can transform your operations.</p>
              </div>

              <div className="info">
                <div className="address">
                  <h4 style={{ margin: '0 0 8px', color: '#0f172a' }}>Location:</h4>
                  <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.6 }}>Dhruta Complex, Office 104 &amp; 105,<br/>Narayan Peth, Pune, Maharashtra.</p>
                </div>

                <div className="phone" style={{ marginTop: '24px' }}>
                  <h4 style={{ margin: '0 0 8px', color: '#0f172a' }}>Call Us:</h4>
                  <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.6 }}>+91 70303 23838<br/>+91 99213 88999</p>
                </div>

                <div style={{ marginTop: '32px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.307581162119!2d73.84057107703!3d18.51499762444613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c151e106c94d%3A0x15033b3fb4b0f620!2sDhruta%20Complex!5e0!3m2!1sen!2sin!4v1737194392520"
                    title="LandMark TechEdge location"
                    style={{ border: 0, width: '100%', height: '240px', display: 'block' }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', border: '1px solid #f1f5f9' }}>
              <form className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', fontWeight: 500, color: '#334155' }}>
                  Your Name
                  <input type="text" name="name" required style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#f8fafc' }} />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', fontWeight: 500, color: '#334155' }}>
                  Your Email
                  <input type="email" name="email" required style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#f8fafc' }} />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', fontWeight: 500, color: '#334155' }}>
                  Subject
                  <input type="text" name="subject" required style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#f8fafc' }} />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', fontWeight: 500, color: '#334155' }}>
                  Message
                  <textarea name="message" rows={5} required style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#f8fafc', resize: 'vertical' }} />
                </label>
                <button className="button button-primary" type="submit" style={{ marginTop: '8px', width: '100%', border: 'none' }}>Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </FadeInSection>

      <a className="whatsapp-float" href={whatsappHref} aria-label="Chat with us on WhatsApp">
        <span className="tooltip">Chat with us! 👋</span>
      </a>
    </main>
  );
}
