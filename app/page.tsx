"use client";
import { motion, useReducedMotion } from "framer-motion";
import altaroImage from "./img/altaro2.png";
import bizplusLogo from "./img/Logo-bizpluscrm1.png";
import bizplusErpLogo from "./img/bizplus_erp.png";
import trioImage from "./img/Trio-corporation.jpg";
import logo from "./img/LTPLLogo.png";
import ContactSection from "./components/ContactSection";
import { yearsExperience } from "./constants/experience";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";
const demoHref = "https://calendly.com/bizpluscrm/freedemo";

const trustPoints = [
  { title: `${yearsExperience}+ Years`, text: " Industry Experience", icon: "icon-star" },
  { title: "ERP & SaaS", text: " Software Company", icon: "icon-building" },
  { title: "Serving Businesses ", text: "Across India", icon: "icon-users" },
  { title: "Dedicated Support & ", text: "Implementation Team", icon: "icon-headset" },
];

const heroIndustries = [
  { title: "Manufacturing", icon: "icon-factory" },
  { title: "Healthcare", icon: "icon-health-outline" },
  { title: "Education", icon: "icon-education" },
  { title: "Retail", icon: "icon-retail" },
  { title: "Services", icon: "icon-briefcase" },
  { title: "Logistics", icon: "icon-logistics" },
  { title: "Others", icon: "icon-grid-four" },
];

const products = [

  {
    name: "BizPlus CRM",
    label: "CRM & Sales Automation Software",
    image: bizplusLogo,
    body:
      "BizPlus CRM helps businesses manage leads, customer interactions, sales follow-ups, quotations, and customer relationships from a single platform. Improve sales productivity, automate communication, and manage your sales pipeline efficiently.",
    points: ["Lead Management", "Sales Tracking", "Follow-ups", "Customer Management", "Multi-user Access"],
    action: "Book Free Demo",
    href: demoHref,
  },
  {
    name: "Altaro Backup Software",
    label: "Enterprise Backup & Recovery Solution",
    image: altaroImage,
    body:
      "Altaro VM Backup is a reliable backup and replication solution for VMware and Hyper-V environments. Trusted by thousands of businesses worldwide, it helps organizations secure their virtual environments with faster backup, disaster recovery, and continuous data protection.",
    points: ["VM Backup", "Replication", "Disaster Recovery", "Continuous Data Protection", "24/7 Support"],
    action: "Book Free Demo",
    href: "#contact",
  },
  {
    name: "TRIO HIMS",
    label: "Healthcare Information Management Software",
    image: trioImage,
    body:
      "TRIO HIMS is an advanced hospital and healthcare management solution developed to simplify hospital operations, patient management, billing, records management, and healthcare workflows through a secure digital platform.",
    points: ["Hospital Management", "Patient Records", "Billing", "Administration", "Digital Healthcare Operations"],
    action: "Book Free Demo",
    href: "#contact",
  },
  {
    name: "BizPlus ERP",
    label: "Complete Manufacturing ERP Software",
    image: bizplusErpLogo,
    body:
      "Manage your entire manufacturing and business operations from one centralized ERP platform. BizPlus ERP helps businesses streamline CRM, quotation, production planning, BOM, inventory, warehouse, dispatch, accounting, and after-sales processes with improved efficiency and visibility.",
    points: ["CRM", "Production", "BOM", "Job Cards", "Inventory", "Dispatch", "AMC", "Accounting"],
    action: "Book Free Demo",
    href: demoHref,
  },
];

const whyChooseUs = [
  {
    title: "Industry Experience",
    icon: "icon-clock",
    text:
      `With more than ${yearsExperience} years of experience in the software industry, we understand the operational challenges businesses face and deliver practical technology solutions that improve efficiency and business growth.`
  },
  {
    title: "Complete Business Automation",
    icon: "icon-stack",
    text:
      "Our solutions cover multiple business operations including CRM, production, inventory, sales, dispatch, customer management, healthcare operations, and data security all from integrated and scalable platforms.",
  },
  {
    title: "Customized & Scalable Solutions",
    icon: "icon-ai",
    text:
      "We provide flexible software solutions designed to fit businesses of different sizes and industries, ensuring smooth implementation and long-term scalability.",
  },
  {
    title: "Dedicated Support & Implementation",
    icon: "icon-support",
    text:
      "Our experienced support and implementation team ensures smooth onboarding, training, technical assistance, and continuous support for all clients.",
  },
  {
    title: "Trusted Technology Partner",
    icon: "icon-backup",
    text:
      "Businesses across manufacturing, healthcare, SMEs, and service industries trust Landmark Techedge for reliable software solutions and long-term technology partnership.",
  },
  {
    title: "Transparent Delivery Process",
    icon: "icon-ivr",
    text:
      "We keep implementation, training, and support communication clear at every stage so teams know what is happening and when to expect results.",
  },
];

const strengths = [
  `${yearsExperience}+ Years Industry Experience`,
  "ERP & CRM Specialists",
  "Manufacturing & Healthcare Solutions",
  "Reliable Technical Support",
  "Scalable SaaS Solutions",
  "Custom App Development",
];

const industries = [
  {
    title: "Manufacturing Industry",
    icon: "icon-stack",
    text:
      "Manage production planning, BOM, inventory, job cards, dispatch, and business operations efficiently with powerful manufacturing ERP solutions.",
  },
  {
    title: "Healthcare & Hospitals",
    icon: "icon-health",
    text:
      "Digitize healthcare operations with secure hospital management software for patient records, billing, administration, and healthcare workflows.",
  },
  {
    title: "SMEs & Enterprises",
    icon: "icon-crm",
    text:
      "Simplify customer management, sales tracking, inventory, and daily business operations with scalable ERP and CRM solutions.",
  },
  {
    title: "Distributors & Trading Businesses",
    icon: "icon-channel",
    text:
      "Track sales, quotations, inventory, warehouse, and dispatch operations from one centralized business management platform.",
  },
  {
    title: "Service-Based Businesses",
    icon: "icon-support",
    text:
      "Improve customer communication, follow-ups, support management, and operational efficiency with CRM and automation tools.",
  },
  {
    title: "IT & Technology Companies",
    icon: "icon-backup",
    text:
      "Secure business data, streamline workflows, and improve operational productivity with backup and software management solutions.",
  },
];

const testimonials = [
  {
    quote:
      "BizPlus ERP helped us streamline our complete manufacturing process including production planning, inventory tracking, BOM management, and dispatch operations. The software improved our operational efficiency significantly.",
    name: "Rajesh Sharma",
    role: "Operations Head – Manufacturing Company",
  },
  {
    quote:
      "The CRM solution made it easier for our sales team to manage leads, customer follow-ups, and quotations from one platform. It improved our response time and customer management process.",
    name: "Amit Verma",
    role: "Sales Manager – SME Business",
  },
  {
    quote:
      "TRIO HIMS simplified our hospital management operations and reduced paperwork completely. Patient records, billing, and administration are now managed digitally with better accuracy.",
    name: "Dr. Neha Kulkarni",
    role: "Healthcare Administrator",
  },
  {
    quote:
      "The implementation team provided excellent support throughout the deployment process. The software is user-friendly, reliable, and helped us improve business productivity.",
    name: "Sandeep Patil",
    role: "Director – Trading & Distribution Company",
  },
  {
    quote:
      "Altaro Backup Software helped us secure our virtual infrastructure with reliable backup and disaster recovery solutions. The setup and support experience was excellent.",
    name: "Rohit Mehta",
    role: "IT Manager – Technology Company",
  },
];

export default function Page() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <main>
      {/*<div className="topbar">
        <div>
          <a href="tel:+917030323838">+91 70303 23838</a>
          <a href="tel:+919921388999">+91 99213 88999</a>
        </div>
        <div>
          <a href="https://www.facebook.com/landmarktechs/">Facebook</a>
          <a href="https://www.instagram.com/landmarktechedge/?hl=en">Instagram</a>
          <a href="https://x.com/LTechedge">X</a>
          <a href="https://in.linkedin.com/company/landmark-techedge-pvt-ltd">LinkedIn</a>
        </div>
      </div>*/}

      <section id="home" className="hero hero-blue">
        <div className="hero-orbits" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Trusted Software & Technology Solutions Since 2013</span>
            <h1>Empowering Businesses with Smart ERP, CRM & SaaS Solutions</h1>
            <p>
              Landmark Techedge Pvt. Ltd. helps businesses streamline operations with powerful software solutions for CRM,
              ERP, manufacturing, hospital management, backup, and business automation. We deliver scalable technology
              solutions designed for growth, productivity, and digital transformation.
            </p>
            <div className="hero-actions">
              <a className="button button-tertiary" href="#products">
                <span className="button-icon icon-trial" aria-hidden="true" />
                Start Free Trial
              </a>
              <a className="button button-primary" href="#contact">
                <span className="button-icon icon-calendar" aria-hidden="true" />
                Book Free Demo
              </a>
              <a className="button button-secondary" href={demoHref}>
                <span className="button-icon icon-screen" aria-hidden="true" />
                Request ERP Demo
              </a>
            </div>
            <div className="hero-trust" aria-label="Trust points">
              {trustPoints.map((point) => (
                <span key={point.title} className="trust-pill">
                  <span className={`trust-icon ${point.icon}`} aria-hidden="true" />
                  <span>
                    <strong>{point.title}</strong>
                    {point.text}
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-ring" aria-hidden="true" />
            <div className="visual-card">
              <img src={logo.src} alt="LandMark TechEdge logo" />
            </div>
            <div className="floating-stat stat-a">
              <strong>{yearsExperience}+</strong>
              years experience
            </div>

          </div>
        </div>
      </section>




      <section id="products" className="products py-12">
        <div className="section-heading">
          <span className="eyebrow">OUR PRODUCTS</span>
          <h2>Smart Software Solutions for Modern Businesses</h2>
          <p>
            Landmark Techedge Pvt. Ltd. provides powerful ERP, CRM, healthcare, backup, and automation solutions designed
            to simplify business operations, improve productivity, and support business growth across multiple industries.
          </p>
        </div>

        <div className="product-stack product-slider">
          {products.map((product, index) => (
            <article className={`product-card product-card-${index + 1}`} key={product.name}>
              <div className="product-index">0{index + 1}</div>
              <div className="product-media">
                <span className="product-orbit orbit-one" aria-hidden="true" />
                <span className="product-orbit orbit-two" aria-hidden="true" />
                <img src={product.image.src} alt={product.name} />
              </div>
              <div className="product-copy">
                <span>{product.label}</span>
                <h3>{product.name}</h3>
                <p>{product.body}</p>
                <div className="product-chips">
                  {product.points.map((point) => (
                    <b key={point}>{point}</b>
                  ))}
                </div>
                <a className="button button-primary" href={product.name.includes("Altaro") ? "/altaro" : product.href} style={{ marginTop: 'auto' }}>
                  {product.action}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="why-choose-us">
        <div className="section-heading">
          <span className="eyebrow">WHY CHOOSE US</span>
          <h2>Delivering Reliable Software Solutions Since 2013</h2>
          <p>
            At Landmark Techedge Pvt. Ltd., we help businesses streamline operations with powerful ERP, CRM, healthcare,
            and business automation solutions tailored to modern industry requirements.
          </p>
        </div>

        <div className="why-grid">
          {whyChooseUs.map((item) => (
            <article className="why-card" key={item.title}>
              <span className={`feature-icon ${item.icon}`} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="strengths-panel">
          <h3>Our Strengths</h3>
          <div className="strengths-list" aria-label="Our strengths">
            {strengths.map((strength) => (
              <span key={strength}>{strength}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="homepage-cta">
        <div className="homepage-cta-content">
          <h2>Ready to Transform Your Business Operations?</h2>
          <p>
            Streamline your workflow with smart ERP, CRM, and business automation solutions from Landmark Techedge Pvt. Ltd.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="button button-primary">
              Book Free Demo
            </a>
            <a href="#contact" className="button button-secondary">
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

      <section id="industries" className="services py-12">
        <div className="section-heading">
          <span className="eyebrow">INDUSTRIES WE SERVE</span>
          <h2>Software Solutions Designed for Multiple Industries</h2>
          <p>
            Landmark Techedge Pvt. Ltd. delivers industry-focused ERP, CRM, healthcare, and automation solutions that help
            businesses improve efficiency, streamline operations, and accelerate growth.
          </p>
        </div>
        <div className="service-grid industry-grid">
          {industries.map((item) => (
            <div className="service-tile industry-card" key={item.title}>
              <span className={`feature-icon ${item.icon}`} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="strengths-panel">
          <h3>Industries Covered</h3>
          <div className="strengths-list" aria-label="Industries covered">
            <span>Manufacturing</span>
            <span>Healthcare</span>
            <span>SMEs</span>
            <span>Trading Businesses</span>
            <span>Distributors</span>
            <span>Service Industries</span>
            <span>IT Companies</span>
            <span>Education</span>
            <span>Logistics</span>
          </div>
        </div>
      </section>

      <section className="homepage-cta">
        <div className="homepage-cta-content">
          <h2>Looking for Industry-Specific Software Solutions?</h2>
          <p>
            Our team helps businesses choose the right ERP, CRM, and automation solutions based on their industry requirements.
          </p>
          <div className="cta-buttons">
            <a href={demoHref} className="button button-primary">
              Talk To Our Experts
            </a>
            <a href="#contact" className="button button-secondary">
              Request Free Demo
            </a>
          </div>
        </div>
      </section>

      <section className="testimonials py-12">
        <div className="section-heading">
          <span className="eyebrow">CLIENT TESTIMONIALS</span>
          <h2>Trusted by Businesses Across Multiple Industries</h2>
          <p>
            See what our clients say about the software solutions and support provided by Landmark Techedge Pvt. Ltd.
          </p>
        </div>
        <div className="testimonials-carousel-wrapper" style={{ width: '100%', overflow: 'hidden', padding: '20px 0 40px' }}>
          <div
            style={{ display: 'inline-flex', gap: '24px', paddingLeft: '24px' }}
            className="auto-scroll-track"
          >
            {[...testimonials, ...testimonials].map((item, i) => (
              <article className="testimonial-card hover-zoom-card" key={`${item.name}-${i}`} style={{ width: '85vw', maxWidth: '380px', flexShrink: 0, whiteSpace: 'normal', display: 'flex', flexDirection: 'column' }}>
                <p style={{ flexGrow: 1 }}>"{item.quote}"</p>
                <h3>{item.name}</h3>
                <small>{item.role}</small>
              </article>
            ))}
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(calc(-50% - 12px)); }
            }
            .auto-scroll-track {
              animation: marquee 40s linear infinite;
            }
            .auto-scroll-track:hover {
              animation-play-state: paused;
            }
            .hover-zoom-card {
              transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
              position: relative;
            }
            .hover-zoom-card:hover {
              transform: scale(1.05);
              box-shadow: 0 24px 48px rgba(15, 23, 42, 0.12);
              border-color: #38bdf8;
              z-index: 10;
            }
          `}</style>
        </div>
      </section>

      <ContactSection />


      <a className="whatsapp-float" href={whatsappHref} aria-label="Chat with us on WhatsApp">
        <span className="tooltip">Chat with us! 👋</span>
      </a>
    </main>
  );
}
