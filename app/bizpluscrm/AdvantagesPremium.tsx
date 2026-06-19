"use client";

import { motion } from "framer-motion";
import React from "react";

type Feature = { id: string; title: string; desc: string; icon: React.ReactNode };

const FEATURES: Feature[] = [
  { id: "insights", title: "Business Insights", desc: "Analytical, operational and collaborative dashboards.", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden><path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 14l3-4 3 6 4-10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { id: "automation", title: "Automation", desc: "Automate lead routing, follow-ups and repetitive tasks.", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="7" width="18" height="10" rx="3" stroke="currentColor" strokeWidth="1.6"/><circle cx="8.5" cy="12.5" r="1" fill="currentColor"/><circle cx="15.5" cy="12.5" r="1" fill="currentColor"/></svg>) },
  { id: "integrations", title: "Integrations", desc: "Connect websites, marketplaces and social channels.", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l8 6-8 6-8-6 8-6z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 14l8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 22l8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { id: "assignment", title: "Lead Assignment", desc: "Smart automatic assignment to the right reps instantly.", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M12 17v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>) },
  { id: "communication", title: "Communication", desc: "Email, WhatsApp and SMS workflows inside the CRM.", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { id: "notifications", title: "Notifications", desc: "Real-time alerts and contextual nudges.", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 17H9a3 3 0 0 1-3-3V10a6 6 0 0 1 12 0v4a3 3 0 0 1-3 3z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
];

const cardVariants = {
  hover: { scale: 1.03, boxShadow: "0 18px 44px rgba(15,23,42,0.12)" },
  initial: { scale: 1 },
};

export default function AdvantagesPremium() {
  return (
    <section className="about" aria-labelledby="advantages-heading" style={{ paddingTop: '32px', paddingBottom: '32px' }}>
      <div style={{ width: 'min(var(--content), 100%)', margin: '0 auto' }}>
        <header className="section-heading"><span className="eyebrow">Highlights</span><h2 id="advantages-heading">Advantages of BizPlusCRM</h2></header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', alignItems: 'center', marginTop: '40px' }}>
          {/* Left Column: Cards */}
          <motion.div 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.7 }}
          >
            {FEATURES.map((f) => (
              <motion.div key={f.id} className="impact-card" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', textAlign: 'left', minHeight: 'auto', padding: '24px 20px', background: 'rgba(239, 246, 255, 0.94)', border: '1px solid rgba(191, 219, 254, 0.45)', borderRadius: '16px', margin: 0 }} variants={cardVariants} initial="initial" whileHover="hover" whileTap={{ scale: 0.995 }}>
                <div style={{ color: 'var(--blue)', marginTop: '2px', background: 'rgba(37,99,235,0.08)', padding: '10px', borderRadius: '10px', flexShrink: 0 }} aria-hidden>{f.icon}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '18px', marginBottom: '6px', color: 'var(--ink)' }}>{f.title}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.5 }}>{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Video Container */}
          <motion.div 
            style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 24px 50px rgba(15,23,42,0.12)', backgroundColor: '#1e293b', width: '100%', height: 'fit-content' }}
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.7 }}
          >
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <div className="video-embed" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <video 
                  src="/videos/bizvideo.mp4" 
                  title="BizPlusCRM" 
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                />
              </div>

              {/* overlays */}
              <motion.div 
                style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)', padding: '12px 18px', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', zIndex: 10 }}
                initial={{ opacity: 0, y: 8 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6 }}
              > 
                <div style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Conversion</div>
                <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--blue)' }}>86%</div>
              </motion.div>

              <motion.div 
                style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)', padding: '12px 18px', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', zIndex: 10 }}
                initial={{ opacity: 0, x: 12 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, delay: 0.12 }}
              >
                <div style={{ fontSize: '10px', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Alerts</div>
                <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--blue)' }}>3</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
