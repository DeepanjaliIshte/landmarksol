"use client";

import ContactSection from "../components/ContactSection";
import mobileAppImg from "../img/MobileApp.jpg";
import webdevImg from "../img/webdev.jpg";
import softdevImg from "../img/softdev.jpg";
import iotdevImg from "../img/IOTDev.jpg";
import plcAutoImg from "../img/PLCAUto.jpg";
import aidevImg from "../img/AIDev.jpg";

import client1 from "../img/client-1.png";
import client2 from "../img/client-2.png";
import client3 from "../img/client-3.png";
import client4 from "../img/client-4.png";
import client5 from "../img/client-5.png";
import client6 from "../img/client-6.png";
import cssImg from "../img/CSS.png";
import sqlServerImg from "../img/SQL-Server.png";

const services = [
  {
    name: "Mobile Apps",
    label: "iOS, Android, Hybrid",
    description:
      "Customer-facing and internal mobile apps designed for smooth onboarding, daily use, and measurable business outcomes.",
    image: mobileAppImg.src,
    tags: ["UI/UX ", "APIs ", "Analytics"],
  },
  {
    name: "Web Development",
    label: "Websites and portals",
    description:
      "Modern websites, business portals, and web applications that help teams manage workflows and improve customer conversion.",
    image: webdevImg.src,
    tags: ["Next.js", "Dashboards", "CMS"],
  },
  {
    name: "Software Development",
    label: "Custom business systems",
    description:
      "Tailored CRM, ERP, ecommerce, and operations software built around your process instead of forcing your team into rigid tools.",
    image: softdevImg.src,
    tags: ["CRM", "ERP", "Automation"],
  },
  {
    name: "IoT Development",
    label: "Connected devices",
    description:
      "End-to-end industrial IoT systems using controllers, sensors, cloud dashboards, and custom software integrations.",
    image: iotdevImg.src,
    tags: ["ESP32", "Sensors", "Monitoring"],
  },
  {
    name: "PLC Automation",
    label: "Industrial control",
    description:
      "PLC-based automation for monitoring inputs, controlling outputs, reducing manual decisions, and improving plant efficiency.",
    image: plcAutoImg.src,
    tags: ["Control", "SCADA", "Efficiency"],
  },
  {
    name: "AI Development",
    label: "Applied AI solutions",
    description:
      "AI assistants, automation workflows, reporting intelligence, and smart interfaces that make business data easier to act on.",
    image: aidevImg.src,
    tags: ["GPT", "Reports", "Assistants"],
  },
];

const deliverySteps = [
  { title: "Discover", text: "We map goals, users, current tools, and operational bottlenecks." },
  { title: "Design", text: "We shape the workflow, screens, integrations, and implementation plan." },
  { title: "Build", text: "We develop in focused milestones with demos, feedback, and testing." },
  { title: "Support", text: "We help your team launch, train users, and improve after rollout." },
];

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";
const demoHref = "https://calendly.com/bizpluscrm/freedemo";

export default function ServicesPage() {
  return (
    <main>

      <section className="services-hero">
        <div className="services-hero-content">
          <div>
            <span className="eyebrow">Services & Technology Stack</span>
            <h2>Practical software, automation, and AI services for growing teams</h2>
            <p>
              From web platforms and mobile apps to industrial automation and AI assistants, we design technology that
              fits your operations and keeps improving after launch.
            </p>
            <div className="hero-actions services-hero-actions">
              <a className="button button-primary" href="#services-list">
                Explore Services
              </a>
              <a className="button button-secondary" href="#contact">
                Discuss a Project
              </a>
            </div>
          </div>

          <div className="services-hero-panel" aria-label="Service capabilities">
            <span>Business Apps </span>
            <span>Industrial IoT </span>
            <span>AI Automation </span>
            <span>CRM / ERP</span>
          </div>
        </div>
      </section>

      <section id="services-list" className="services-grid-section">

        <div className="section-heading" style={{ textAlign: "center", margin: "0 auto 40px" }}>
          <span className="eyebrow">Technology Excellence</span>
          <h2>Services tailored around your workflows</h2>
          <p>
            We combine product thinking, practical engineering, and implementation support so your software solves the
            real operational problem, not only the screen in front of it.
          </p>
        </div>
        <div className="services-container">
          <div className="services-extended-grid">
            {services.map((service) => (
              <article className="service-extended-card" key={service.name}>
                <div className="service-card-media">
                  <img src={service.image} alt={service.name} />
                </div>
                <small>{service.label}</small>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a href="#contact" className="service-link">
                  Learn more
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-process">
        <div className="services-process-inner">
          <div className="section-heading">
            <span className="eyebrow">How We Work</span>
            <h2>A clear path from idea to rollout</h2>
          </div>

          <div className="services-process-grid">
            {deliverySteps.map((step, index) => (
              <article className="services-process-card" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="technologies-section" style={{ padding: '48px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">Technologies We Use</span>
          <h2 style={{ marginBottom: '48px', fontSize: '32px' }}>Modern Tech Stack</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px' }}>
            {[
              { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/000000" },
              { name: "Python", src: "https://cdn.simpleicons.org/python/3776AB" },
              { name: "CSS", src: cssImg.src },
              { name: "HTML5", src: "https://cdn.simpleicons.org/html5/E34F26" },
              { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript/3178C6" },
              { name: "WordPress", src: "https://cdn.simpleicons.org/wordpress/21759B" },
              { name: "SQLite", src: "https://cdn.simpleicons.org/sqlite/003B57" },
              { name: "SQL Server", src: sqlServerImg.src },
              { name: "Angular", src: "https://cdn.simpleicons.org/angular/DD0031" },
              { name: ".NET", src: "https://cdn.simpleicons.org/dotnet/512BD4" },
              { name: "Flutter", src: "https://cdn.simpleicons.org/flutter/02569B" }
            ].map(tech => (
              <div key={tech.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', minWidth: '80px' }}>
                <div style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                  <img src={tech.src} alt={tech.name} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                </div>
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#475569' }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="clients-section" style={{ padding: '48px 24px', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">Our Clients</span>
          <h2 style={{ marginBottom: '48px', fontSize: '32px' }}>Trusted By Industry Leaders</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '48px' }}>
            {[client1, client2, client3, client4, client5, client6].map((client, idx) => (
              <img 
                key={idx} 
                src={client.src} 
                alt={`Client ${idx + 1}`} 
                style={{ 
                  height: '60px', 
                  width: 'auto', 
                  maxWidth: '200px',
                  objectFit: 'contain',
                  filter: 'grayscale(100%) opacity(70%)', 
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }} 
                onMouseOver={e => { e.currentTarget.style.filter = 'grayscale(0%) opacity(100%)'; }} 
                onMouseOut={e => { e.currentTarget.style.filter = 'grayscale(100%) opacity(70%)'; }} 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="services-cta-content">
          <h2>Ready to turn an operation problem into a working system?</h2>
          <p>
            Share what you want to improve. Our team can suggest the right mix of software, automation, AI, and support.
          </p>
          <div className="cta-buttons">
            <a href="/#products" className="button button-tertiary">
              View Products
            </a>
            <a href="#contact" className="button button-primary">
              Book Free Demo
            </a>
            <a href={demoHref} className="button button-secondary">
              Request ERP Demo
            </a>
          </div>
        </div>
      </section>

      <ContactSection />

      

      <a className="whatsapp-float" href={whatsappHref} aria-label="Chat with us on WhatsApp">
        <span className="tooltip">Chat with us! 👋</span>
      </a>
    </main>
  );
}
