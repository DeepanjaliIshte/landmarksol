import ContactForm from "./ContactForm";
import FAQAccordion from "./FAQAccordion";

const contactInfo = [
  {
    title: "Phone",
    icon: "icon-support",
    details: ["+91 70303 23838", "+91 99213 88999"]
  },
  {
    title: "Email",
    icon: "icon-ivr",
    details: ["info@landmarktechedge.com"]
  },
  {
    title: "Office Address",
    icon: "icon-building",
    details: ["Dhruta Complex, 104 & 105", "NC Kelkar Road, Narayan Peth", "Pune, Maharashtra 411030"]
  },
  {
    title: "Working Hours",
    icon: "icon-clock",
    details: ["Monday – Saturday", "9:00 AM – 6:00 PM"]
  }
];

const whyUs = [
  {
    title: "Fast Response",
    icon: "icon-clock",
    text: "Our team prioritizes rapid communication, ensuring your inquiries are addressed promptly to keep your business moving."
  },
  {
    title: "Expert Consultation",
    icon: "icon-ai",
    text: "Speak directly with seasoned technology professionals who understand industry challenges and practical solutions."
  },
  {
    title: "Customized Solutions",
    icon: "icon-stack",
    text: "We don't believe in one-size-fits-all. We tailor our software, ERP, and cloud services to your specific workflow."
  },
  {
    title: "Dedicated Support",
    icon: "icon-support",
    text: "Enjoy peace of mind with our dedicated post-launch support and maintenance teams, available whenever you need them."
  }
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="hero hero-blue contact-hero">
        <div className="hero-orbits" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="contact-hero-content">
          <span className="eyebrow">Contact Us</span>
          <h1>Let's Talk About Your Business Needs</h1>
          <p>
            Get in touch with our experts for software solutions, ERP systems, SAP services, cloud infrastructure, and digital transformation.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="contact-container">
          
          <div className="contact-info-grid">
            {contactInfo.map((info) => (
              <div className="info-card" key={info.title}>
                <span className={`feature-icon ${info.icon}`} aria-hidden="true" />
                <h3>{info.title}</h3>
                {info.details.map((detail, idx) => (
                  info.title === "Email" ? (
                    <a href={`mailto:${detail}`} key={idx}>{detail}</a>
                  ) : (
                    <p key={idx}>{detail}</p>
                  )
                ))}
              </div>
            ))}
          </div>

          <div className="contact-form-section">
            <div className="form-header">
              <h2>Send us a message</h2>
              <p>Fill out the form below and we will get back to you within 24 hours.</p>
            </div>
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-overlay-card">
            <h3>Pune Office</h3>
            <p>Dhruta Complex, 104 & 105, NC Kelkar Road, Narayan Peth, Pune, Maharashtra 411030</p>
            <a href="https://maps.google.com/?q=Dhruta+Complex+Narayan+Peth+Pune" target="_blank" rel="noreferrer" className="button button-primary">
              Get Directions
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.307581162119!2d73.84057107703!3d18.51499762444613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c151e106c94d%3A0x15033b3fb4b0f620!2sDhruta%20Complex!5e0!3m2!1sen!2sin!4v1737194392520!5m2!1sen!2sin"
            title="LandMark TechEdge location"
            style={{ border: 0, width: '100%', height: '450px' }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="why-contact-section">
        <div className="section-heading text-center">
          <span className="eyebrow">Why Choose Us</span>
          <h2>A Technology Partner You Can Trust</h2>
          <p>We combine deep industry expertise with responsive support to ensure your business operations never miss a beat.</p>
        </div>
        
        <div className="contact-why-grid">
          {whyUs.map((item) => (
            <article className="why-card" key={item.title}>
              <span className={`feature-icon ${item.icon}`} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-left">
            <div className="section-heading">
              <span className="eyebrow">Common Questions</span>
              <h2>Frequently Asked Questions</h2>
              <p>Find quick answers to common questions about our services, deployment timelines, and support.</p>
            </div>
          </div>
          <div className="faq-right">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="homepage-cta">
        <div className="homepage-cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Let's discuss how our smart ERP, CRM, and cloud infrastructure solutions can streamline your workflow and accelerate growth.
          </p>
          <div className="cta-buttons">
            <a href="https://calendly.com/bizpluscrm/freedemo" className="button button-primary">
              Book Free Demo
            </a>
            <a href="https://calendly.com/bizpluscrm/freedemo" className="button button-secondary">
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
