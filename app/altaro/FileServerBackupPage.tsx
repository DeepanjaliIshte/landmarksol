"use client";

import React from "react";
import altaroLogo from "../img/altaro2.png";
import fsDashboardImg from "../img/fs_dashboard_3d.png";
import continuousProtectionImg from "../img/continuous_protection_3d.png";
import backInTimeImg from "../img/back_in_time_3d.png";
import ContactSection from "../components/ContactSection";
import FadeInSection from "../components/FadeInSection";
import { motion, useReducedMotion } from "framer-motion";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";
const contactHref = "/#contact";

const productFeatures = [
  {
    title: "Save Space",
    text: "Uses ReverseDelta™ Technology to only back up the sections of files that have changed — dramatically reducing backup storage requirements.",
  },
  {
    title: "Continuous Data Protection (CDP)",
    text: "Highly tuned file-change-detection technology keeps your file server protected throughout the day.",
  },
  {
    title: "Double-Protection",
    text: "Backup Drive Redundancy helps protect against theft, fire, or drive loss by maintaining redundant backup targets.",
  },
  {
    title: "Back up to NAS, Network Drive & USB",
    text: "Flexible backup destinations — store copies on NAS appliances, network shares, or USB drives to match your infrastructure.",
  },
  {
    title: "Automatic Backup on Connect with Plug & Protect™",
    text: "Ideal for laptop users — backups start automatically when a configured backup drive is connected.",
  },
  {
    title: "Restore different versions",
    text: "BackInTime Technology lets you browse and restore files from multiple points in time with ease.",
  },
  {
    title: "Email Notifications",
    text: "Receive reports on backup success or failure so your team stays informed without checking consoles manually.",
  },
  {
    title: "Flexible Scheduling",
    text: "Back up multiple times per day or at pre-set times — schedules adapt to how often your data changes.",
  },
  {
    title: "Restore files through Email",
    text: "With Altaro Backup FS you can send a copy of restored files to employees via email automatically — wherever they are in the world.",
  },
  {
    title: "Unattended Backups",
    text: "Runs as a Windows service — ideal for unattended servers. Backs up even when users are not logged in.",
  },
  {
    title: "Supports Windows Server & desktop OS",
    text: "Fully supports Windows Server 2012, 2008 (incl. R2), 2003 and Microsoft Small Business Server — plus Windows 8, 7, Vista and XP. Ideal for small and mid-sized businesses.",
  },
];

export default function FileServerBackupPage() {
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
            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '16px' }}>File Server Backup</span>
            <h1>File Server BackUp</h1>
            <p>
              <strong>Altaro Backup FS</strong> is the perfect & affordable premium backup solution for professionals and small & mid- sized businesses looking to protect their Windows Servers and PCs from data loss.
            </p>
            <div className="hero-actions" style={{ flexWrap: 'wrap' }}>
              <a className="button button-primary" href={contactHref}>Request a Quote</a>
              <a className="button button-secondary" href={whatsappHref}>Talk to Our Team</a>
            </div>
            <small style={{ display: 'block', marginTop: '16px', color: '#64748b', fontWeight: 600 }}>
              Backup for Windows 2012, 2008, 2003, MS SBS, 8, 7, Vista & XP
            </small>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img src={fsDashboardImg.src} alt="Altaro Backup FS Dashboard" style={{ maxWidth: '100%', height: 'auto', filter: 'drop-shadow(0 24px 60px rgba(15,23,42,0.2))' }} />
          </motion.div>
        </div>
      </section>

      {/* Feature Split 1 */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: '#fff' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div className="impact-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}>
              <img src={continuousProtectionImg.src} alt="Continuous Data Protection" style={{ width: '100%', height: 'auto', padding: '24px' }} />
            </div>
            <div>
              <h2 style={{ fontSize: '36px', color: '#0f172a', margin: '16px 0 24px', lineHeight: 1.2 }}>Continuous Data Protection</h2>
              <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.7 }}>
                Highly tuned file-change-detection technology makes sure that you are protected at all times.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Feature Split 2 */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: 'linear-gradient(135deg, rgba(207,232,255,0.15), rgba(255,179,184,0.15))' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '36px', color: '#0f172a', margin: '16px 0 24px', lineHeight: 1.2 }}>Backs Up Open Files</h2>
              <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.7 }}>
                Integrates with MS Volume Shadow (VSS) to back up files that are in use such as PST files, etc.
              </p>
              
              <h2 style={{ fontSize: '36px', color: '#0f172a', margin: '48px 0 24px', lineHeight: 1.2 }}>BackIn Time</h2>
              <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.7 }}>
                Using the BackInTime browser it takes seconds to find and restore a file from any point in time.
              </p>
            </div>
            <div className="impact-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}>
              <img src={backInTimeImg.src} alt="BackIn Time" style={{ width: '100%', height: 'auto', padding: '24px' }} />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Feature List */}
      <FadeInSection>
        <section style={{ padding: '48px 24px', background: '#fff' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div className="section-heading" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
              <h2>More Features</h2>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
              {[
                {
                  title: "Save Space",
                  text: "Only back up sections of files that changed using ReverseDelta™ Technology - Using ReverseDelta™ incremental technology, Backup FS only backs up the actual changes you make to a file – without needing to back up the whole file again every time you make a change.",
                },
                {
                  title: "Continuous Data Protection (CDP) for Best Protection",
                  text: "Highly tuned file-change-detection technology makes sure that you are protected at all time.",
                },
                {
                  title: "Double-Protection with Backup Drive Redundancy",
                  text: "Automatically keep a double-backup to protect against theft, fire or loss of your backup drive.",
                },
                {
                  title: "Back up to NAS, Network Drive & USB",
                  text: "Choose the locations where you want to back up to; offices can choose to backup to their server or NAS drive.",
                },
                {
                  title: "Automatic Backup on Connect with Plug & Protect™",
                  text: "for Laptop Users - Automatically initiates a backup once the backup drive is connected to the computer.",
                },
                {
                  title: "Restore different versions of your files with inbuilt BackInTime Technology",
                  text: "Restore from multiple points in time rather than 'the most recent backup'",
                },
                {
                  title: "Email Notifications on Backup Success or Failure",
                  text: "Receive email reports when a backup takes place. Providing peace of mind knowing that all your data is backed up.",
                },
                {
                  title: "Flexible Scheduling fits your needs",
                  text: "With Backup Scheduling you can choose to backup multiple times a day or to back up automatically as soon as a file changes. You can also choose to back up multiple times a day at a pre-set time, say for example at lunch break and during the night.",
                },
                {
                  title: "Restore Files through Email",
                  text: "With Altaro Backup FS you have the option to send a copy of the restored files to employees via email automatically - wherever they are in the world.",
                },
                {
                  title: "Unattended Backups",
                  text: "Runs as a Windows service -ideal for unattended servers. Backs up even when users are not logged in.",
                },
                {
                  title: "Supports Windows 2012, 2008 (incl. R2), 2003 & Microsoft Small Business Server",
                  text: "Fully supports Windows server operating systems including Microsoft SBS. Ideal for Small & Mid-Sized Businesses.",
                },
              ].map((item, i) => (
                <div key={i} className="impact-card" style={{ flex: '0 1 calc(33.333% - 16px)', minWidth: '300px', borderRadius: '20px', padding: '32px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '18px', color: '#0f172a', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6', marginTop: '6px', flexShrink: 0 }}></div>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{item.text}</p>
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
