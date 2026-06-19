"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Cloud,
  Database,
  Gauge,
  HardDrive,
  Layers3,
  LockKeyhole,
  RefreshCw,
  Repeat2,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Meta } from "../../../components/Meta";
import { LenisProvider } from "../../../components/LenisProvider";
import { BackgroundFX } from "../../../components/BackgroundFX";
import { yearsExperience } from "../../constants/experience";
import FadeInSection from "components/FadeInSection";

const trialHref = "#contact";
const demoHref = "#contact";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const stats = [
  { value: yearsExperience, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "Protected Virtual Machines" },
  { value: 99.99, suffix: "%", label: "Recovery Success Rate", decimals: 2 },
  { value: 24, suffix: "/7", label: "Technical Support" },
];

const whyCards = [
  {
    icon: Cloud,
    title: "Immutable Cloud Storage",
    text: "Keep offsite recovery points protected from deletion, encryption, and unauthorized changes during the configured retention window.",
  },
  {
    icon: ShieldCheck,
    title: "Ransomware Protection",
    text: "Layer backup immutability, encryption, and controlled access to keep recovery options available after cyber incidents.",
  },
  {
    icon: Gauge,
    title: "Fast Recovery",
    text: "Restore complete VMs, files, and priority workloads quickly so teams can get back to business with less disruption.",
  },
  {
    icon: Activity,
    title: "Continuous Data Protection",
    text: "Reduce recovery point gaps for high-value workloads with frequent protection policies and centralized visibility.",
  },
  {
    icon: LockKeyhole,
    title: "Secure Encryption",
    text: "Protect backup copies in transit and at rest with strong encryption choices for local, offsite, and cloud destinations.",
  },
  {
    icon: Repeat2,
    title: "WAN Optimized Replication",
    text: "Move VM replicas efficiently across locations and prepare standby infrastructure for faster disaster response.",
  },
];

const features = [
  { icon: Server, title: "Centralized Backup Management", text: "Control policies, hosts, jobs, alerts, and recovery from a single operational console." },
  { icon: Activity, title: "Continuous Data Protection", text: "Protect critical workloads with frequent recovery points and smarter scheduling." },
  { icon: Database, title: "Multiple Backup Destinations", text: "Use local repositories, offsite locations, and compatible cloud storage targets." },
  { icon: RefreshCw, title: "Flexible Recovery Options", text: "Recover complete VMs, individual files, application data, and replicated machines." },
  { icon: Layers3, title: "Cross Platform Restore", text: "Restore protected workloads across supported Hyper-V, VMware, and Proxmox scenarios." },
  { icon: LockKeyhole, title: "Secure Backup Encryption", text: "Apply encryption and access controls for sensitive business backup data." },
  { icon: HardDrive, title: "Deduplication", text: "Optimize repository usage and reduce repeated data across backup chains." },
  { icon: CheckCircle2, title: "Backup Scheduling", text: "Define automated policies, retention rules, and maintenance windows around operations." },
];

const platforms = [
  {
    name: "Microsoft Hyper-V",
    logo: "/assets/img/Altaro/windows-server-2022.svg",
    text: "Protect virtual machines across supported Windows Server, Hyper-V clusters, and Azure Stack HCI environments.",
    badge: "Compatible",
  },
  {
    name: "VMware",
    logo: "/assets/img/Altaro/vmware-ready.png",
    text: "Back up and replicate supported VMware ESXi, vSphere, and vCenter workloads with efficient recovery workflows.",
    badge: "VMware Ready",
  },
  {
    name: "Proxmox VE",
    logoText: "PROXMOX VE",
    text: "Extend protection to supported Proxmox VE environments with backup and restore coverage for modern virtualization.",
    badge: "Supported",
  },
];

const timeline = [
  { title: "Backup", text: "Capture consistent VM recovery points into secure repositories." },
  { title: "Replication", text: "Move protected workloads to secondary infrastructure or cloud-ready targets." },
  { title: "Recovery", text: "Restore files, full machines, or replicated workloads when incidents happen." },
  { title: "Business Continuity", text: "Keep teams productive with tested recovery plans and Landmark support." },
];

const testimonials = [
  {
    quote: "Landmark helped us simplify VM backup policies and validate restores before we had a serious incident.",
    name: "Rohit Mehta",
    role: "IT Manager, Technology Company",
  },
  {
    quote: "The deployment was clean, the team explained the recovery process clearly, and our offsite backup posture improved.",
    name: "Anita Deshmukh",
    role: "Infrastructure Lead, Manufacturing",
  },
  {
    quote: "We needed fast recovery for virtual servers across locations. Landmark gave us a practical, manageable setup.",
    name: "Sandeep Patil",
    role: "Director, Distribution Business",
  },
];

const awards = [
  "/assets/img/Altaro/g2-leader-summer-2022-bw.svg",
  "/assets/img/Altaro/getapp-category-leaders-2022-bw.png",
  "/assets/img/Altaro/DCIG-Top-5-2022-23-bw.png",
  "/assets/img/Altaro/sourceforge-customers-love-us-bw.svg",
  "/assets/img/Altaro/support-pledge-lg.png",
];

function CountUp({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const frames = 72;
    const step = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / frames, 3);
      setCount(value * progress);
      if (frame < frames) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function BackupHeroVisual() {
  const shouldReduceMotion = useReducedMotion();
  const float = shouldReduceMotion ? {} : { y: [0, -12, 0], rotate: [0, 1.4, 0] };

  return (
    <motion.div className="vm-hero-visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
      <div className="vm-visual-glow" />
      <motion.div className="vm-cloud-node" animate={float} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
        <Cloud size={44} />
        <span>Immutable Cloud</span>
      </motion.div>
      <div className="vm-sync-orbit">
        <RefreshCw size={28} />
      </div>
      <motion.div className="vm-shield-node" animate={shouldReduceMotion ? {} : { scale: [1, 1.06, 1] }} transition={{ duration: 3.2, repeat: Infinity }}>
        <ShieldCheck size={42} />
      </motion.div>
      <div className="vm-machine-stack">
        {["ERP-Prod-01", "SQL-Cluster", "App-Node-07"].map((name, index) => (
          <motion.div
            className="vm-machine-card"
            key={name}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.14 }}
          >
            <span className="vm-card-led" />
            <div>
              <strong>{name}</strong>
              <small>Protected VM</small>
            </div>
            <span className="vm-card-status">Live</span>
          </motion.div>
        ))}
      </div>
      <div className="vm-replication-line line-a" />
      <div className="vm-replication-line line-b" />
      <div className="vm-particles" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
    </motion.div>
  );
}

export default function VmBackupPage() {
  return (
    <LenisProvider>
      <BackgroundFX />
      <Meta
        title="VM Backup & Replication for Hyper-V, VMware and Proxmox"
        description="Protect Hyper-V, VMware and Proxmox virtual machines with secure VM backup, replication, immutable cloud storage and fast recovery solutions."
        keywords="VM backup and replication, VM backup software, virtual machine backup, Hyper-V backup solution, VMware backup software, Proxmox backup solution, immutable cloud backup, ransomware backup protection, disaster recovery solution, Altaro VM Backup, Hornetsecurity VM Backup"
        canonicalUrl="https://landmarktechedge.com/altaro/vm-backup"
      />
      <main className="vm-page">
        <section className="vm-hero">
          <div className="hero-orbits" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="vm-hero-grid">
            <motion.div className="vm-hero-copy" initial="hidden" animate="show" variants={stagger}>
              <motion.span className="eyebrow" variants={fadeUp}>Enterprise VM Backup Solution</motion.span>
              <motion.h1 variants={fadeUp}>Protect Your Virtual Machines from Data Loss, Ransomware &amp; Downtime</motion.h1>
              <motion.p variants={fadeUp}>
                Landmark Techedge helps IT teams protect Hyper-V, VMware, and Proxmox environments with secure backup,
                immutable cloud storage, replication, and recovery workflows built for business continuity.
              </motion.p>
              <motion.div className="hero-actions" variants={fadeUp}>
                <a className="button button-tertiary" href={trialHref}>Start Free Trial</a>
                <a className="button button-primary" href={demoHref}>Book Free Demo</a>
              </motion.div>
              <motion.div className="vm-trust-badges" variants={fadeUp} aria-label="Supported platforms">
                {["Hyper-V", "VMware", "Proxmox"].map((item) => (
                  <span key={item}>
                    <CheckCircle2 size={16} />
                    {item}
                  </span>
                ))}
              </motion.div>
            </motion.div>
            <BackupHeroVisual />
          </div>
        </section>

        <motion.section className="vm-stats-section" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} variants={stagger}>
          {stats.map((stat) => (
            <motion.article className="vm-stat-card" key={stat.label} variants={fadeUp}>
              <strong><CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} /></strong>
              <span>{stat.label}</span>
            </motion.article>
          ))}
        </motion.section>

        <section className="vm-section">
          <motion.div className="section-heading" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>Why Choose VM Backup</motion.span>
            <motion.h2 variants={fadeUp}>Enterprise protection without operational complexity</motion.h2>
            <motion.p variants={fadeUp}>
              Replace fragile backup routines with resilient, policy-driven protection for virtual workloads, offsite copies,
              and recovery scenarios your business can trust.
            </motion.p>
          </motion.div>
          <motion.div className="vm-card-grid" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            {whyCards.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article className="vm-glass-card vm-feature-card" key={item.title} variants={fadeUp} whileHover={{ y: -8, scale: 1.015 }}>
                  <span className="vm-icon"><Icon size={24} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <section className="vm-section vm-feature-band">
          <motion.div className="section-heading" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>Powerful Features</motion.span>
            <motion.h2 variants={fadeUp}>Everything your backup operation needs in one modern workflow</motion.h2>
          </motion.div>
          <motion.div className="vm-features-grid" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article className="vm-mini-card" key={item.title} variants={fadeUp} whileHover={{ y: -6 }}>
                  <Icon size={22} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <section className="vm-section">
          <motion.div className="section-heading" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>Supported Platforms</motion.span>
            <motion.h2 variants={fadeUp}>Built for the virtual infrastructure you already run</motion.h2>
          </motion.div>
          <motion.div className="vm-platform-grid" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
            {platforms.map((platform) => (
              <motion.article className="vm-platform-card" key={platform.name} variants={fadeUp} whileHover={{ y: -8 }}>
                <div className="vm-platform-logo">
                  {platform.logo ? <img src={platform.logo} alt={`${platform.name} logo`} /> : <strong>{platform.logoText}</strong>}
                </div>
                <span>{platform.badge}</span>
                <h3>{platform.name}</h3>
                <p>{platform.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="vm-section vm-timeline-section">
          <motion.div className="section-heading" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>Backup Process</motion.span>
            <motion.h2 variants={fadeUp}>From protection to continuity in four clear steps</motion.h2>
          </motion.div>
          <motion.div className="vm-timeline" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
            {timeline.map((step, index) => (
              <motion.article className="vm-timeline-item" key={step.title} variants={fadeUp}>
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="vm-section vm-trust-section">
          <motion.div className="section-heading" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>Trust & Reliability</motion.span>
            <motion.h2 variants={fadeUp}>Backed by proven technology, secure practices, and expert support</motion.h2>
          </motion.div>
          <div className="vm-trust-layout">
            <div className="vm-testimonial-carousel" aria-label="Customer testimonials">
              <motion.div className="vm-testimonial-track" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }}>
                {[...testimonials, ...testimonials].map((item, index) => (
                  <article className="vm-testimonial-card" key={`${item.name}-${index}`}>
                    <Sparkles size={20} />
                    <p>"{item.quote}"</p>
                    <h3>{item.name}</h3>
                    <span>{item.role}</span>
                  </article>
                ))}
              </motion.div>
            </div>
            <div className="vm-reliability-panel">
              <div>
                <strong>AES Encryption</strong>
                <span>Secure backup copies</span>
              </div>
              <div>
                <strong>Immutable Storage</strong>
                <span>Ransomware-ready retention</span>
              </div>
              <div>
                <strong>Restore Testing</strong>
                <span>Confidence before incidents</span>
              </div>
            </div>
          </div>
          <div className="vm-awards-marquee" aria-label="Partner and award logos">
            <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 32, repeat: Infinity, ease: "linear" }}>
              {[...awards, ...awards].map((award, index) => (
                <span key={`${award}-${index}`}>
                  <img src={award} alt="Backup solution award or partner logo" />
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contact" className="vm-cta-section">
          <div className="vm-cta-bg" aria-hidden="true" />
          <motion.div className="vm-cta-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }}>
            <span className="eyebrow">Get Protected</span>
            <h2>Ready to Protect Your Virtual Infrastructure?</h2>
            <p>
              Schedule a free VM backup consultation with Landmark Techedge and map the right protection, replication,
              and recovery strategy for your environment.
            </p>
            <div className="cta-buttons">
              <a className="button button-tertiary" href="tel:+917030323838">Start Free Trial</a>
              <a className="button button-primary" href="mailto:info@landmarktechedge.com">Request Demo</a>
            </div>
          </motion.div>
        </section>

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
                    <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.6 }}>Dhruta Complex, Office 104 &amp; 105,<br />Narayan Peth, Pune, Maharashtra.</p>
                  </div>

                  <div className="phone" style={{ marginTop: '24px' }}>
                    <h4 style={{ margin: '0 0 8px', color: '#0f172a' }}>Call Us:</h4>
                    <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.6 }}>+91 70303 23838<br />+91 99213 88999</p>
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


      </main>

    </LenisProvider>
  );
}
