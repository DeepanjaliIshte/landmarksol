"use client";

import React, { useState } from "react";
import ContactSection from "../components/ContactSection";
import { ChevronDown } from "lucide-react";


// Award images (since they were many, we will link them directly if they exist in public/assets/img/Altaro)
const awardImages = [
  "SpiceworksLogo_Lockup_h_1C_grey_RGB_small.png",
  "storage-awards-storage-marketing-2022-bw.png",
  "SA-front-runners-award-2022-bw.png",
  "getapp-category-leaders-2022-bw.png",
  "g2-leader-summer-2022-bw.svg",
  "g2-most-implementable-winter-2022-bw.svg",
  "DCIG-Top-5-2022-23-bw.png",
  "UK-enterprise-awards-2021-bw.png",
  "expert-insights-backup-award-2021-bw.png",
  "sourceforge-customers-love-us-bw.svg",
  "global-infosec-award-winner-2021-bw.png",
  "digital-best-VM-software-award-2021-bw.png",
  "digital-award-2020-bw.png",
  "winmag-award-2021-bw.png",
  "techconsult-2021-award-backup-recovery-bw.png",
  "DCS-awards-winner-2020-bw.png",
  "awards32-bw.png",
  "awards22-bw.svg",
  "ITPro_Editors-Choice.png"
];

const VmBackupPage = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [faqExpanded, setFaqExpanded] = useState(false);

  return (
    <main id="main" style={{ fontFamily: "'Open Sans', sans-serif", backgroundColor: "#f9f9f9", color: "#333", overflowX: "hidden" }}>

      {/* Hero Spacer Section */}
      <section style={{ backgroundColor: "#0f172a", textAlign: "center", paddingBottom: "50px" }}>
        <img src="/assets/img/Altaro/slide1.png" alt="Hornetsecurity VM Backup V9" style={{ width: "100%", maxWidth: "1366px", height: "auto", margin: "0 auto", display: "block" }} />
        <div style={{ marginTop: "-60px", position: "relative", zIndex: 10 }}>
          <a href="#contact" style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "16px 32px",
            fontSize: "1.2rem",
            borderRadius: "5px",
            textTransform: "uppercase",
            textDecoration: "none",
            display: "inline-block",
            fontWeight: "bold",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
            border: "2px solid rgba(255,255,255,0.2)"
          }}>
            Download your Free Trial
          </a>
          <span style={{ fontSize: "1rem", color: "#f1f1f1", display: "block", marginTop: "15px", textShadow: "0px 2px 4px rgba(0,0,0,0.8)" }}>
            30-day trial + free for micro businesses:<br /> Get started in &lt; 15 minutes
          </span>
        </div>
      </section>

      {/* Awards Section */}
      <div style={{ textAlign: "center", padding: "40px 20px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
            {awardImages.map((img, idx) => (
              <img key={idx} src={`/assets/img/Altaro/${img}`} alt="Award" style={{ maxHeight: "50px", maxWidth: "70px", objectFit: "contain" }} />
            ))}
          </div>
          <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: "18px", color: "#333", lineHeight: 1.6, maxWidth: "900px", margin: "0 auto" }}>
            <p>
              VM Backup (formerly Altaro VM Backup) is a fast, affordable, high-performance backup and replication solution.
              We've cut the waste and hassle to give you an agile, streamlined solution that is easy to implement and feature-rich,
              with outstanding 24/7 support as part of the package.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div style={{ backgroundColor: "#f3f3f3", padding: "60px 20px", width: "100%" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", padding: "20px" }}>

          <ul style={{ display: "flex", justifyContent: "space-around", borderBottom: "2px solid #007BFF", paddingBottom: "10px", listStyle: "none", margin: 0, padding: 0, flexWrap: "wrap" }}>
            {[
              { id: "tab1", label: "Ransomware Protection leveraging Immutable Cloud Storage" },
              { id: "tab2", label: "Efficient backup setup" },
              { id: "tab3", label: "Full control of your backups" },
              { id: "tab4", label: "Award-winning 24/7 support" }
            ].map((tab) => (
              <li key={tab.id} style={{ flex: 1, textAlign: "center", margin: "5px" }}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    width: "100%",
                    color: "#fff",
                    backgroundColor: activeTab === tab.id ? "#28a745" : "#6c757d",
                    border: "none",
                    borderRadius: "8px",
                    padding: "14px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "background-color 0.3s"
                  }}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          <div style={{ padding: "30px" }}>
            {/* Tab 1 Content */}
            {activeTab === "tab1" && (
              <div>
                <h4 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>Ransomware Protection with Immutable Cloud Storage</h4>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px" }}>
                  <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
                    <h5 style={{ color: "#555", fontSize: "1.2rem", marginBottom: "10px", fontWeight: "600" }}>Why Choose Immutable Cloud Storage?</h5>
                    <ul style={{ paddingLeft: "20px", fontSize: "1rem", lineHeight: "1.8" }}>
                      <li><strong>Tamper-proof data:</strong> Ensures backup data cannot be erased or modified.</li>
                      <li><strong>Peace of mind:</strong> Safeguards against ransomware attacks and rogue admins.</li>
                      <li><strong>Cost-effective retention:</strong> Minimizes unnecessary data storage costs.</li>
                      <li><strong>Cloud compatibility:</strong> Works seamlessly with Wasabi, Amazon S3, Microsoft Azure, and BackBlaze B2.</li>
                    </ul>
                  </div>
                  <div style={{ flex: "1 1 40%", textAlign: "center", minWidth: "300px" }}>
                    <img src="/assets/img/Altaro/vm-backup-v9-immutable-cloud-storage.png" alt="Immutable Cloud Storage" style={{ maxWidth: "100%", borderRadius: "8px", boxShadow: "0px 2px 4px rgba(0,0,0,0.1)" }} />
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2 Content */}
            {activeTab === "tab2" && (
              <div>
                <h4 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>Efficient Backup Setup</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                  <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
                    <h5 style={{ color: "#0056b3", fontSize: "1.2rem", marginBottom: "15px", fontWeight: "bold" }}>Up and running quickly, without the need for complex configurations</h5>
                    <p>With VM Backup, you can get started quickly: install and run your first virtual machine (VM) backup in less than 15 minutes, without the need for complex configurations or software dependencies.</p>
                    <ul style={{ paddingLeft: "20px", fontSize: "1rem", lineHeight: "1.8", listStyleType: "square" }}>
                      <li><b>Easy to use, intuitive UI</b> - making it simple for you to implement a reliable backup strategy</li>
                      <li><b>Fast and simple to manage</b> across multiple hosts</li>
                      <li><b>Full control</b> – Monitor and manage from a single console</li>
                      <li><b>No training required</b> – VM Backup is user-friendly</li>
                    </ul>
                  </div>
                  <div style={{ flex: "1 1 40%", textAlign: "center", minWidth: "300px" }}>
                    <img src="/assets/img/Altaro/homepage-img1.png" alt="Efficient Backup Setup" style={{ maxWidth: "100%", borderRadius: "8px" }} />
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3 Content */}
            {activeTab === "tab3" && (
              <div>
                <h4 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>Full Control of Your Backups</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                  <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
                    <h5 style={{ color: "#0056b3", fontSize: "1.2rem", marginBottom: "15px", fontWeight: "bold" }}>Powerful and fast centralized control: We've got your back</h5>
                    <ul style={{ paddingLeft: "20px", fontSize: "1rem", lineHeight: "1.8", listStyleType: "square" }}>
                      <li><b>Ransomware Protection</b> leveraging Immutable Cloud Storage</li>
                      <li><b>WAN-Optimized Replication</b></li>
                      <li><b>Continuous Data Protection (CDP)</b></li>
                      <li><b>Multiple offsite backup locations</b></li>
                      <li><b>256-bit AES encryption</b></li>
                    </ul>
                  </div>
                  <div style={{ flex: "1 1 40%", textAlign: "center", minWidth: "300px" }}>
                    <img src="/assets/img/Altaro/overview-feature2.png" alt="Backup Control" style={{ maxWidth: "100%", borderRadius: "8px" }} />
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4 Content */}
            {activeTab === "tab4" && (
              <div>
                <h4 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>Award-Winning 24/7 Support</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                  <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
                    <h5 style={{ color: "#0056b3", fontSize: "1.2rem", marginBottom: "15px", fontWeight: "bold" }}>Our pledge to you: Outstanding 24/7 human support</h5>
                    <p>No matter how great your backup setup is, things can go wrong, so we're committed to helping you ensure your solutions are up and running, right around the clock.</p>
                    <ul style={{ paddingLeft: "20px", fontSize: "1rem", lineHeight: "1.8", listStyleType: "square" }}>
                      <li><b>Phone</b> – We pick up in less than 30 seconds</li>
                      <li><b>Email</b> – We reply within the hour</li>
                      <li><b>Live chat</b> – We reply in seconds</li>
                      <li><b>Speak directly to a product expert</b> – No entry-level agents</li>
                    </ul>
                  </div>
                  <div style={{ flex: "1 1 40%", textAlign: "center", minWidth: "300px" }}>
                    <img src="/assets/img/Altaro/support-pledge-lg.png" alt="24/7 Support" style={{ maxWidth: "100%", borderRadius: "8px" }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer info below tabs */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h4 style={{ fontSize: "1.2rem", lineHeight: 1.5, color: "#0056b3", fontWeight: "bold" }}>
            Virtual machine backup and replication software packed with powerful features for Hyper-V and VMware.
          </h4>
        </div>
      </div>

      {/* Top Rated Section */}
      <div style={{ backgroundColor: "#f8f9fa", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "30px" }}>
          <div style={{ flex: "1 1 40%", textAlign: "center", minWidth: "300px" }}>
            <img src="/assets/img/Altaro/vm-backup-v9-dark.png" alt="VM Backup V9 logo" style={{ maxWidth: "150px", marginBottom: "15px", display: "block", margin: "0 auto" }} />
            <img src="/assets/img/Altaro/software-reviews-awards.png" alt="SoftwareReviews awards" style={{ maxWidth: "100%" }} />
          </div>
          <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
            <h3 style={{ fontWeight: "bold", color: "#007BFF", fontSize: "1.8rem" }}>The Ultimate Backup Champion 2023</h3>
            <p style={{ marginTop: "15px", fontSize: "1.1rem" }}>
              Hornetsecurity has been named a Champion in the 2023 Backup and Availability Emotional Footprint Report from SoftwareReviews.
            </p>
            <p style={{ fontWeight: "bold", marginTop: "15px" }}>Top rated:</p>
            <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem", lineHeight: "1.8" }}>
              <li>✓ Strategy and Innovation</li>
              <li>✓ Conflict Resolution</li>
              <li>✓ Service Experience</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Requirements / OS Support */}
      <div style={{ padding: "60px 20px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "30px" }}>
          <div style={{ flex: "0 0 200px" }}>
            <h4 style={{ fontWeight: "bold", color: "#333", fontSize: "1.5rem" }}>OS Support</h4>
          </div>
          <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "20px" }}>
            <div style={{ flex: "1 1 45%", minWidth: "250px" }}>
              <ul style={{ paddingLeft: "20px", fontSize: "1rem", color: "#555", lineHeight: "1.8" }}>
                <li>Azure Stack HCI</li>
                <li>Windows Server 2022 / 2019 / 2016 / 2012 R2</li>
                <li>Windows Server 2012 / 2008 R2</li>
                <li>Microsoft Hyper-V Server (Core)</li>
              </ul>
              <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
                <img src="/assets/img/Altaro/windows-server-2019.svg" alt="Win 2019" style={{ maxWidth: "100px" }} />
                <img src="/assets/img/Altaro/windows-server-2022.svg" alt="Win 2022" style={{ maxWidth: "100px" }} />
              </div>
            </div>
            <div style={{ flex: "1 1 45%", minWidth: "250px" }}>
              <ul style={{ paddingLeft: "20px", fontSize: "1rem", color: "#555", lineHeight: "1.8" }}>
                <li>VMware vCenter 5.5, 6.0, 6.5, 6.7, 7.0 & 8.0</li>
                <li>VMware vSphere 5.5, 6.0, 6.5, 6.7, 7.0 & 8.0</li>
                <li>VMware ESXi 5.5, 6.0, 6.5, 6.7, 7.0 & 8.0</li>
                <li style={{ fontStyle: "italic", color: "#888" }}>(Free VMware ESXi is not supported)</li>
              </ul>
              <div style={{ marginTop: "15px" }}>
                <img src="/assets/img/Altaro/vmware-ready.png" alt="VMware Ready" style={{ maxWidth: "120px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Panel */}
      <div style={{ padding: "40px 20px", backgroundColor: "#f9f9f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #e0e0e0", overflow: "hidden" }}>
          <div
            onClick={() => setFaqExpanded(!faqExpanded)}
            style={{ backgroundColor: "#006f8e", padding: "15px 20px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <h4 style={{ color: "white", fontWeight: "bold", margin: 0, fontSize: "1.2rem" }}>
              FAQs: Virtual machine backup and replication for Hyper-V and VMware
            </h4>
            <span style={{ transform: faqExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s", display: "flex" }}>
              <ChevronDown color="white" size={24} />
            </span>
          </div>
          {faqExpanded && (
            <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
              <div style={{ marginBottom: "20px" }}>
                <h5 style={{ fontWeight: "bold", color: "#333", fontSize: "1.1rem", marginBottom: "10px" }}>What is virtual machine backup and replication for Hyper-V and VMware?</h5>
                <p style={{ color: "#555", lineHeight: "1.6" }}>
                  It is essential to have a backup and replication solution in place for Hyper-V and VMware to ensure business continuity, that is, ongoing uptime of systems and continuous access to data and applications.
                </p>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <h5 style={{ fontWeight: "bold", color: "#333", fontSize: "1.1rem", marginBottom: "10px" }}>How does virtual machine backup and replication work?</h5>
                <p style={{ color: "#555", lineHeight: "1.6" }}>
                  Virtual machine backup and replication works through a combination of different technologies that provide a layered approach, including continuous data protection, inline deduplication, cloud backup, and retention policies.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" style={{ paddingTop: "60px" }}>
        <ContactSection />
      </section>
    </main>
  );
};

export default VmBackupPage;
