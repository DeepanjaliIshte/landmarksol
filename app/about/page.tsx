"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, Eye, Target } from "lucide-react";
import ContactSection from "../components/ContactSection";
import "./about.css";

import logo2 from "../img/LTPLLogo.png";
import storyImg from "../img/about-story-3d.png";
import missionImg from "../img/about-mission-3d.png";
import visionImg from "../img/about-vision-3d.png";
import globalTechImg from "../img/global_tech.png";
import AnimatedCounter from "../components/AnimatedCounter";
const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";

const currentYear = new Date().getFullYear();
const yearsOfExp = Math.max(currentYear - 2013, 13);

const strengths = [
  { value: "2013", label: "Founded in Pune" },
  { value: yearsOfExp, label: "Years of delivery", isCounter: true },
  { value: "360", label: "Software, support, and distribution" },
];

const values = [
  {
    title: "Practical Innovation",
    text: "We design technology around the day-to-day realities of growing businesses, not around buzzwords.",
  },
  {
    title: "Responsive Support",
    text: "Our team stays close after delivery with technical help, training, and channel partner coordination.",
  },
  {
    title: "Long-Term Trust",
    text: "Every engagement is built to keep clients, resellers, and distributors moving with confidence.",
  },
];

export default function AboutPage() {
  return (
    <main className="creative-about-main">

      {/* Modern Hero Section */}
      <section className="modern-hero">
        <div className="modern-hero-bg">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>

        <div className="modern-hero-container">
          {/* Left Content Column */}
          <motion.div 
            className="modern-hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="badge-dot"></span>
              About Us
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Building Technology Solutions Since 2013
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              We bring software development, product distribution, implementation, 
              and support together to help businesses manage their operations with 
              greater scale and confidence.
            </motion.p>

            <motion.div
              className="modern-hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a href="#journey" className="creative-btn creative-btn-primary">
                Our Journey
              </a>
              <a href="/#contact" className="creative-btn creative-btn-secondary">
                Contact Us
              </a>
            </motion.div>

            {/* Inline Stats */}
            <motion.div 
              className="hero-stats-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <div className="hero-stat-item">
                <strong><AnimatedCounter value={yearsOfExp} suffix="+" duration={2} /></strong>
                <span>Years Exp.</span>
              </div>
              <div className="hero-stat-item">
                <strong><AnimatedCounter value={500} suffix="+" duration={2.5} /></strong>
                <span>Clients</span>
              </div>
              <div className="hero-stat-item">
                <strong><AnimatedCounter value={100} suffix="+" duration={2} /></strong>
                <span>Partners</span>
              </div>
              <div className="hero-stat-item">
                <strong>24/7</strong>
                <span>Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Column */}
          <motion.div 
            className="modern-hero-visual"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="visual-glass-card">
              <img src={storyImg.src} alt="Landmark Techedge Journey" className="hero-3d-illustration" />
              
              {/* Decorative floating elements */}
              <motion.div 
                className="floating-badge badge-top-right"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Target size={20} color="#3b82f6" />
                <span>Innovation</span>
              </motion.div>
              <motion.div 
                className="floating-badge badge-bottom-left"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Users size={20} color="#ec4899" />
                <span>Growth</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="creative-stats">
        {strengths.map((item, i) => (
          <motion.div
            key={item.label}
            className="stat-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="stat-value">
              {item.isCounter ? <AnimatedCounter value={item.value as number} suffix="+" /> : item.value}
            </div>
            <div className="stat-label">{item.label}</div>
          </motion.div>
        ))}
      </section>

      {/* Story Section */}
      <section className="creative-section">
        <motion.div
          className="creative-section-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-eyebrow">Our Story</span>
          <h2>Building Technology Solutions Since 2013</h2>
          <p>
            Landmark Techedge Pvt Ltd is leading Software Development and
            Distribution company which is vastly diversified and scaled to cover
            the almost entire gamut of IT services.
          </p>
          <p>
            Established in 2013 and operates from Pune. Our Company is managed
            by a group of professionals. We have grown to be a market leader in
            our verticals because of our ability to deliver products in a timely
            manner with quality service and technical support to our Clients,
            Resellers, and Distributors.
          </p>
        </motion.div>
        <motion.div
          className="creative-section-image"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="floating-illustration">
            <img src={globalTechImg.src} alt="Global Technology Collaboration" className="animated-3d-img" />
          </div>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="creative-section reverse">
        <motion.div
          className="creative-section-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-eyebrow">Our Vision</span>
          <h2>Simpler operations, stronger customer communication, greater scale.</h2>
          <p>
            To deliver value to our clients, we focus exclusively on simplifying
            business operations and customer communications as these are the
            most critical aspects to success. This enables us to build and bring
            deep expertise and resources to help our clients manage business
            situations in greater scale.
          </p>
        </motion.div>
        <motion.div
          className="creative-section-image"
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="floating-illustration">
            <img src={visionImg.src} alt="Our Vision Ecosystem" className="animated-3d-img" />
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="creative-section">
        <motion.div
          className="creative-section-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-eyebrow">Our Mission</span>
          <h2>Build a remarkable company that consistently exceeds expectations.</h2>
          <p>
            Landmark's mission is aiming to build a remarkable entrepreneurial
            company that constantly exceeds the expectation of our customer,
            clients, channel partners, and share holders.
          </p>
        </motion.div>
        <motion.div
          className="creative-section-image"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="floating-illustration">
            <img src={missionImg.src} alt="Our Mission Goals" className="animated-3d-img" />
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "1.5rem 2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span className="hero-eyebrow">How We Work</span>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#0f172a" }}>
            Reliable technology work needs clear priorities.
          </h2>
        </motion.div>

        <div className="values-grid">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="value-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="creative-cta">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-eyebrow">Let's Talk</span>
          <h2>Ready to modernize your business operations?</h2>
          <p>
            Explore our ERP, CRM, and software solutions with a team that
            understands implementation, support, and long-term growth.
          </p>
          <div className="cta-buttons-group">
            <a href="/#contact" className="creative-btn creative-btn-primary">
              Book Free Demo
            </a>
            <a href="https://calendly.com/bizpluscrm/freedemo" className="creative-btn creative-btn-secondary">
              Request ERP Demo
            </a>
          </div>
        </motion.div>
      </section>

      <ContactSection />

      

      <a className="whatsapp-float" href={whatsappHref} aria-label="Chat with us on WhatsApp">
        <span className="tooltip">Chat with us! 👋</span>
      </a>
    </main>
  );
}

