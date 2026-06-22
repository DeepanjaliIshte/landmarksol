"use client";

import altaroLogo from "../../img/altaro2.png";
import Microsoft365BackupPage from "../Microsoft365BackupPage";
import WindowsServerBackupPage from "../WindowsServerBackupPage";
import FileServerBackupPage from "../FileServerBackupPage";
import HomePcBackupPage from "../HomePcBackupPage";
import FadeInSection from "../../components/FadeInSection";
import ContactSection from "../../components/ContactSection";
import { motion, useReducedMotion } from "framer-motion";

const whatsappHref = "https://api.whatsapp.com/send?phone=919370943551&text=Hi";

const pages: Record<string, { title: string; category: string; description: string }> = {
  "microsoft-365-backup": {
    title: "Microsoft 365 Backup",
    category: "Backup Solutions",
    description: "A dedicated Microsoft 365 Backup page is ready for the structure and content you will share.",
  },
  "windows-server-backup": {
    title: "Windows Server Backup",
    category: "Backup Solutions",
    description: "A dedicated Windows Server Backup page is ready for the structure and content you will share.",
  },
  "file-server-backup": {
    title: "File Server Backup",
    category: "Other Products",
    description: "A dedicated File Server Backup page is ready for the structure and content you will share.",
  },
  "home-pc-backup": {
    title: "Home PC Backup",
    category: "Other Products",
    description: "A dedicated Home PC Backup page is ready for the structure and content you will share.",
  },
};

const awards = [
  "Spiceworks 4.5 Star Reviews",
  "Storage Awards Winner",
  "Front Runners 2022",
  "GetApp Leaders 2022",
  "G2 Leader Summer 2022",
  "Top 5 DCIG",
  "Best of Backup",
  "SourceForge Loved",
  "Digital Best",
  "Editor's Choice",
];

const immutablePoints = [
  "Tamper-proof data: Ensures backup data cannot be erased or modified.",
  "Peace of mind: Safeguards against ransomware attacks and rogue admins.",
  "Cost-effective retention: Minimizes unnecessary data storage costs.",
  "Cloud compatibility: Works seamlessly with Wasabi, Amazon S3, Microsoft Azure, and BackBlaze B2.",
];

const osSupport = [
  "Azure Stack HCI",
  "Windows Server 2022",
  "Windows Server 2019",
  "Windows Server 2016",
  "Windows Server 2012 R2",
  "Windows Server 2012",
  "Windows Server 2008 R2",
  "Microsoft Hyper-V Server (Core)",
];

const vmwareSupport = [
  "VMware vCenter 5.5, 6.0, 6.5, 6.7, 7.0 & 8.0",
  "VMware vSphere 5.5, 6.0, 6.5, 6.7, 7.0 & 8.0",
  "VMware ESXi 5.5, 6.0, 6.5, 6.7, 7.0 & 8.0",
  "Free VMware ESXi is not supported",
];

export default function ClientPage({ slug }: { slug: string }) {
  if (slug === "microsoft-365-backup") {
    return <Microsoft365BackupPage />;
  }

  if (slug === "windows-server-backup") {
    return <WindowsServerBackupPage />;
  }

  if (slug === "file-server-backup") {
    return <FileServerBackupPage />;
  }

  if (slug === "home-pc-backup") {
    return <HomePcBackupPage />;
  }

  const page = pages[slug] ?? {
    title: "Altaro Product",
    category: "Altaro",
    description: "This Altaro product page is ready for the structure and content you will share.",
  };

  return (
    <main style={{ overflowX: "hidden", background: "#f8fafc" }}>

      <section className="hero hero-blue" style={{ background: "linear-gradient(135deg, rgba(239,246,255,1) 0%, rgba(219,234,254,0.5) 100%)" }}>
        <div className="hero-grid" style={{ gridTemplateColumns: '1fr', textAlign: 'center' }}>
          <motion.div 
            className="hero-copy"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <img src={altaroLogo.src} alt="Altaro Backup" style={{ maxWidth: '200px', marginBottom: '32px' }} />
            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '16px' }}>{page.category}</span>
            <h1 style={{ maxWidth: '800px' }}>{page.title}</h1>
            <p style={{ maxWidth: '600px', margin: '0 auto 32px' }}>{page.description}</p>
            <div className="hero-actions" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
              <a className="button button-secondary" href="/altaro">Back to Altaro</a>
              <a className="button button-primary" href="/#contact">Request Details</a>
            </div>
          </motion.div>
        </div>
      </section>

      
    </main>
  );
}
