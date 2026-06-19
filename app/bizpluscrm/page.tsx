"use client";

import bizplusLogo from "../img/Logo-bizpluscrm1.png";
import logo from "../img/LTPLLogo.png";
import { useState, useEffect, useRef } from "react";
import { FeatureBentoGrid } from "./FeatureBentoGrid";
import { PerformanceCarousel } from "./PerformanceCarousel";
import AdvantagesPremium from "./AdvantagesPremium";

// Set a YouTube video ID here to embed the Bizplus promo. Leave empty to show the logo image.
const VIDEO_ID = "_wZskNaClsg"; // embedded video provided by user

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";

function FadeInSection(props: { children: React.ReactNode }) {
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
      {props.children}
    </div>
  );
}

export default function BizplusPage() {
  const [videoError, setVideoError] = useState(false);
  return (
    <main style={{ overflowX: "hidden" }}>

      <FadeInSection>
        <section className="hero hero-blue">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Presenting Bizplus CRM Software with Easy &amp; Affordable Solution</span>
              <h1>Are you Frustrated &amp; Worried about lead and follow-up management Everyday?</h1>
              <p>Bizplus CRM is an all-in-one platform designed to streamline your lead tracking, automate follow-ups, and boost your sales team&apos;s productivity. Experience a premium, hassle-free CRM solution tailored for your business growth.</p>
              <div className="hero-actions" style={{ flexWrap: 'wrap' }}>
                <a className="button button-primary" href="https://calendly.com/bizpluscrm/freedemo">BOOK AN APPOINTMENT</a>
                <a className="button button-secondary" href="https://calendly.com/bizpluscrm/freedemo">FREE TRIAL</a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-ring" aria-hidden="true" />
              <div className="visual-card">
                {VIDEO_ID ? (
                  <div style={{ width: "100%", height: 0, paddingBottom: "56.25%", position: "relative" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                      title="Bizplus CRM video"
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <img src={bizplusLogo.src} alt="Bizplus CRM" />
                )}
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="perf-split" aria-label="Performance insights split-screen">
          <div className="perf-content">
            <span className="eyebrow">Performance Insights</span>
            <h2>Premium CRM visibility for fast-moving teams</h2>
            <p>
              Experience Bizplus through a polished split-screen hero with smooth motion, glassmorphism
              surfaces, and a floating product carousel built to feel modern and high-trust.
            </p>
            <div className="hero-trust">
              <div className="trust-pill">Lightning-fast dashboard views</div>
              <div className="trust-pill">Lead tracking across channels</div>
              <div className="trust-pill">Automation-ready workflows</div>
              <div className="trust-pill">Mobile-first experience</div>
            </div>
            <div className="hero-actions" style={{ marginTop: '18px' }}>
              <a className="button button-primary" href="https://calendly.com/bizpluscrm/freedemo">BOOK AN APPOINTMENT</a>
              <a className="button button-secondary" href="https://calendly.com/bizpluscrm/freedemo">FREE TRIAL</a>
            </div>
          </div>

          <div className="perf-visual">
            <PerformanceCarousel />
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <FeatureBentoGrid />
      </FadeInSection>

      <FadeInSection>
        <AdvantagesPremium />
      </FadeInSection>

      {/* Integrations Section */}
      <FadeInSection>
        <section className="connectivity-section" aria-label="Connectivity Integrations" style={{ paddingTop: '32px', paddingBottom: '32px', backgroundColor: '#f8fafc' }}>

          <div style={{ width: 'min(var(--content), calc(100% - 48px))', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>

            {/* Header Part (not taken in vertical alignment with the video) */}
            <div className="section-heading" style={{ marginBottom: 0, textAlign: 'center', margin: '0 auto' }}>
              <span className="eyebrow" style={{ display: 'inline-flex', marginBottom: '12px' }}>Connectivity</span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.1, margin: 0, letterSpacing: '-0.02em' }}>Integration for you Forever!</h2>
            </div>

            {/* Video & Content Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>

              {/* Video Side (left) */}
              <div style={{ width: '100%', alignSelf: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 24px 50px rgba(15,23,42,0.1)', backgroundColor: '#1e293b', aspectRatio: '16/9', width: '100%', maxWidth: '720px' }}>
                  <iframe src="https://www.youtube.com/embed/DST5Oadpqa4" title="Bizplus CRM Connectivity" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
              </div>

              {/* Content Side (right) */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ marginBottom: '24px', color: 'var(--muted)', fontSize: '17px', lineHeight: 1.6 }}>
                  Seamlessly connect Bizplus CRM with your favorite platforms. Sync leads, manage communication, and automate workflows across multiple channels effortlessly.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px' }}>
                  {['Facebook', 'Indiamart', 'JustDial', 'IVR', 'Website', 'SMS'].map((int, i) => (
                    <div key={int} className="impact-card" style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80px', animationDelay: `${i * 0.1}s`, textAlign: 'center', background: 'rgba(239, 246, 255, 0.94)', border: '1px solid rgba(191, 219, 254, 0.45)', borderRadius: '16px' }}>
                      <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: 'var(--ink)' }}>{int} Integration</h3>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>
      </FadeInSection>

      {/* About text section */}
      <FadeInSection>
        <section className="company-intro" style={{ paddingTop: '24px', paddingBottom: '24px', backgroundColor: '#fafafa', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
            {/* Centered Heading */}
            <header className="section-heading" style={{ textAlign: 'center', margin: '0 auto 32px auto' }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', lineHeight: 1.2, margin: 0, letterSpacing: '-0.02em', color: 'var(--ink)', fontWeight: 700 }}>
                About Bizplus CRM
              </h2>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#475467', fontSize: '16.5px', lineHeight: '1.8', textAlign: 'justify' }}>
              <p style={{ margin: 0 }}>
                Bizplus CRM is a highly regarded CRM (Customer Relationship Management) software in India, known for its exceptional features and user-friendly interface. It is recognized as one of the best CRM software solutions available in the Indian market. With its comprehensive functionality and affordability, Bizplus CRM is a popular choice for businesses of all sizes.
              </p>
              <p style={{ margin: 0 }}>
                This CRM software offers a range of features designed to streamline and enhance customer relationship management. It provides a centralized platform for managing leads, contacts, sales, and customer interactions, enabling businesses to efficiently track and nurture their relationships with clients.
              </p>
              <p style={{ margin: 0 }}>
                Bizplus CRM stands out in the market for its ease of use, making it accessible even to non-technical users. The software offers a user-friendly interface, intuitive navigation, and robust customization options, allowing businesses to tailor the CRM system to their specific requirements.
              </p>
              <p style={{ margin: 0 }}>
                One of the notable strengths of Bizplus CRM is its seamless integration capabilities with popular platforms such as IndiaMart, Justdial, Facebook, WhatsApp, and IVR (Interactive Voice Response) systems. These integrations enable businesses to sync their CRM data with these platforms, ensuring efficient communication, lead management, and customer engagement across various channels.
              </p>
              <p style={{ margin: 0 }}>
                With its focus on affordability, Bizplus CRM offers a cost-effective CRM solution without compromising on quality or functionality. This makes it an ideal choice for startups, small and medium-sized enterprises (SMEs), and businesses operating on a budget.
              </p>
              <p style={{ margin: 0 }}>
                In summary, Bizplus CRM is a top-rated CRM software in India, known for being the best CRM software in terms of affordability and ease of use. Its seamless integrations with IndiaMart, Justdial, Facebook, WhatsApp, and IVR systems make it a comprehensive solution for managing customer relationships and optimizing business operations.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="contact" className="contact">
          <div className="section-heading">
            <span className="eyebrow">CONTACT US</span>
            <h2>Contact</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-panel">
              <div>
                <h3>Location:</h3>
                <p>Dhruta Complex, 104 &amp; 105, NC Kelkar Road, Narayan Peth, Pune, Maharashtra 411030</p>
              </div>
              <div>
                <h3>Contact Us:</h3>
                <p>+91 70303 23838<br />+91 99213 88999</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.307581162119!2d73.84057107703!3d18.51499762444613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c151e106c94d%3A0x15033b3fb4b0f620!2sDhruta%20Complex!5e0!3m2!1sen!2sin!4v1737194392520"
                title="LandMark TechEdge location"
                loading="lazy"
              />
            </div>

            <form className="contact-form">
              <label>
                Your Name
                <input type="text" name="name" required />
              </label>
              <label>
                Your Email
                <input type="email" name="email" required />
              </label>
              <label>
                Subject
                <input type="text" name="subject" required />
              </label>
              <label>
                Message
                <textarea name="message" rows={7} required />
              </label>
              <button className="button button-primary" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </FadeInSection>

      

      <a className="whatsapp-float" href={whatsappHref} aria-label="Chat with us on WhatsApp">
        <span className="tooltip">Chat with us! 👋</span>
      </a>
    </main>
  );
}
