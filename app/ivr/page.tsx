"use client";

import Link from "next/link";
import logo from "../img/LTPLLogo.png";
import ivrHeroImg from "../img/ivr_hero.png";
import { useState, useEffect, useRef } from "react";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";
const trialPhone = "tel:+919021023456";

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

export default function IvrPage() {

  return (
    <main>

      {/* Hero Section */}
      <FadeInSection>
        <section className="hero hero-blue">
          <div className="hero-orbits" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>Smart Interactive Voice Response System (IVR)</h1>
              <p>
                Enhance your customer support with our intelligent Interactive Voice Response system. Automate call routing, reduce wait times, and deliver exceptional, round-the-clock service experiences tailored to your business needs.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={trialPhone}>Start 7 Days Free Trial</a>
                <a className="button button-secondary" href="#contact">Contact Us</a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-ring" aria-hidden="true" />
              <div className="visual-card">
                <img src={ivrHeroImg.src} alt="Interactive Voice Response System" />
              </div>
              <div className="floating-stat stat-a">
                <strong>50+</strong>
                Concurrent Calls
              </div>
              <div className="floating-stat stat-b">
                <strong>Smart</strong>
                Call Routing
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Key Features */}
      <FadeInSection>
        <section className="about">
          <div className="section-heading">
            <span className="eyebrow">Capabilities</span>
            <h2>IVR Features</h2>
          </div>

          <div className="about-grid">
            <div className="about-card" style={{ minHeight: 'auto', padding: '24px 20px', gap: '12px', animationDelay: '0.1s' }}>
              <div className="feature-icon icon-support" aria-hidden style={{ width: '60px', height: '60px' }} />
              <small>Routing</small>
              <h3 style={{ fontSize: '20px' }}>Efficient Call Routing</h3>
              <p style={{ fontSize: '14px' }}>Route incoming calls to available agents and appropriate departments with ease and reduce wait times.</p>
            </div>

            <div className="about-card" style={{ minHeight: 'auto', padding: '24px 20px', gap: '12px', animationDelay: '0.2s' }}>
              <div className="feature-icon icon-backup" aria-hidden style={{ width: '60px', height: '60px' }} />
              <small>Recording</small>
              <h3 style={{ fontSize: '20px' }}>Call Record</h3>
              <p style={{ fontSize: '14px' }}>Record all calls on a secured cloud IVR to monitor the quality of leads and provide better guidance.</p>
            </div>

            <div className="about-card" style={{ minHeight: 'auto', padding: '24px 20px', gap: '12px', animationDelay: '0.3s' }}>
              <div className="feature-icon icon-stack" aria-hidden style={{ width: '60px', height: '60px' }} />
              <small>Customization</small>
              <h3 style={{ fontSize: '20px' }}>Customizable Menu</h3>
              <p style={{ fontSize: '14px' }}>Create an automated menu that fits all the needs of your business and is accessible by customers easily.</p>
            </div>

            <div className="about-card" style={{ minHeight: 'auto', padding: '24px 20px', gap: '12px', animationDelay: '0.4s' }}>
              <div className="feature-icon icon-ai" aria-hidden style={{ width: '60px', height: '60px' }} />
              <small>Data</small>
              <h3 style={{ fontSize: '20px' }}>Advanced Analytics</h3>
              <p style={{ fontSize: '14px' }}>Get detailed data of your valuable customer interactions, call outcomes to understand your customers.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Why Choose IVR? (Benefits) */}
      <FadeInSection>
        <section className="why-choose-us" style={{ paddingTop: '32px' }}>
          <div className="section-heading" style={{ maxWidth: 'none' }}>
            <span className="eyebrow">Benefits</span>
            <h2>Why Does Your Business Need an IVR System?</h2>
          </div>
          <div className="impact-strip" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <div className="impact-card" style={{ minHeight: '190px', padding: '18px 20px', animationDelay: '0.1s' }}>
              <h3>Customer Engagement</h3>
              <p>Trio’s IVR system helps engage customers in a more personalised way, building trust.</p>
            </div>
            <div className="impact-card" style={{ minHeight: '190px', padding: '18px 20px', animationDelay: '0.2s' }}>
              <h3>Boost Agent Productivity</h3>
              <p>Enables customers to access basic info, freeing agents for more complex issues.</p>
            </div>
            <div className="impact-card" style={{ minHeight: '190px', padding: '18px 20px', animationDelay: '0.3s' }}>
              <h3>Large Call Volume</h3>
              <p>Forget peak hour stress and let the automated system handle up to 50 calls concurrently.</p>
            </div>
            <div className="impact-card" style={{ minHeight: '190px', padding: '18px 20px', animationDelay: '0.4s' }}>
              <h3>Cost-Efficient</h3>
              <p>Automating routine tasks reduces initial labor costs and increases lead capacity.</p>
            </div>
            <div className="impact-card" style={{ minHeight: '190px', padding: '18px 20px', animationDelay: '0.5s' }}>
              <h3>Callers-to-Customers</h3>
              <p>Combine IVR with sales to convert callers by automating the interaction and routing.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Final CTA */}
      <FadeInSection>
        <section className="homepage-cta">
          <div className="homepage-cta-content">
            <h2>Maximise your call Management Efficiency Today!</h2>
            <p>Start 7 days free trial today. Join hundreds of businesses streamlining their support.</p>
            <div className="cta-buttons">
              <a href={trialPhone} className="button button-primary">
                Call: (+91) 902 10 23456
              </a>
              <a href="#contact" className="button button-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Contact Section */}
      <FadeInSection>
        <section id="contact" className="contact">
          <div className="section-heading">
            <span className="eyebrow">CONTACT US</span>
            <h2>Get in Touch</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-panel">
              <div>
                <h3>Location:</h3>
                <p>Dhruta Complex, Office 104 & 105, Narayan Peth, Pune, Maharashtra.</p>
              </div>
              <div>
                <h3>Contact Us:</h3>
                <p>+91 70303 23838 <br/> +91 99213 88999</p>
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

      {/* Footer */}
      

      <a className="whatsapp-float" href={whatsappHref} aria-label="Chat with us on WhatsApp">
        <span className="tooltip">Chat with us! 👋</span>
      </a>
    </main>
  );
}
