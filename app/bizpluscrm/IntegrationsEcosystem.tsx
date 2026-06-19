"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// Small inline SVG icons (avoids lucide-react export issues)
const IconFacebook = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12.07C22 6.49 17.52 2 11.94 2S2 6.49 2 12.07C2 17.09 5.66 21.18 10.44 22v-7.02H8.08v-2.9h2.36V9.41c0-2.33 1.38-3.61 3.5-3.61.99 0 2.03.18 2.03.18v2.23h-1.14c-1.13 0-1.48.7-1.48 1.42v1.7h2.51l-.4 2.9h-2.11V22C18.34 21.18 22 17.09 22 12.07z" fill="currentColor" />
  </svg>
);

const IconGlobe = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconLayers = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPhone = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012 4.18 2 2 0 014 2h3a2 2 0 012 1.72c.12.9.38 1.76.76 2.56a2 2 0 01-.45 2.11L8.91 9.09a14 14 0 006 6l1.7-1.7a2 2 0 012.11-.45c.8.38 1.66.64 2.56.76A2 2 0 0122 16.92z" fill="currentColor" />
  </svg>
);

const IconMessage = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconLink = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 14a5 5 0 007.07 0l3-3a5 5 0 00-7.07-7.07l-1.4 1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 10a5 5 0 00-7.07 0l-3 3a5 5 0 007.07 7.07L11 18.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const integrations = [
  { id: 'facebook', title: 'Facebook Integration', icon: IconFacebook },
  { id: 'indiamart', title: 'IndiaMart Integration', icon: IconGlobe },
  { id: 'justdial', title: 'JustDial Integration', icon: IconLayers },
  { id: 'ivr', title: 'IVR Integration', icon: IconPhone },
  { id: 'website', title: 'Website Integration', icon: IconLink },
  { id: 'sms', title: 'SMS Integration', icon: IconMessage },
];

function ConnectionLines({ active }: { active?: string | null }) {
  return (
    <svg className="absolute inset-0 pointer-events-none" viewBox="0 0 1200 700" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {integrations.map((it, i) => (
        <path key={it.id} d={`M ${100 + i*80} ${520 - i*8} C ${420} ${420} 780 360 920 220`} stroke={`url(#g1)`} strokeWidth={active === it.id ? 3.8 : 1.8} fill="none" style={{ opacity: active ? (active === it.id ? 1 : 0.18) : 0.6, filter: active === it.id ? 'drop-shadow(0 8px 28px rgba(124,58,237,0.18))' : undefined, transition: 'all 220ms ease' }} />
      ))}
    </svg>
  );
}

export default function IntegrationsEcosystem() {
  const wrapRef = useRef<HTMLElement | null>(null);
  const inView = useInView(wrapRef, { once: true, amount: 0.2 });
  const activeRef = useRef<string | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const blobs = document.querySelectorAll('.int-blob');
      blobs.forEach((b: any, idx) => {
        const x = (e.clientX / window.innerWidth - 0.5) * (10 + idx*6);
        const y = (e.clientY / window.innerHeight - 0.5) * (8 + idx*4);
        b.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section ref={wrapRef} className="py-12 md:py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">A Special FREE Integration For You Forever!</h2>
          <p className="mt-3 text-slate-500">Connect all your business platforms seamlessly with BizPlusCRM automation.</p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[650px]">
          <div className="relative z-20 flex items-center h-full lg:translate-y-10">
            <div className="int-blob absolute w-72 h-56 rounded-full" style={{ left: -60, top: -30, background: 'radial-gradient(circle at 30% 30%, rgba(96,165,250,0.28), transparent 40%)', filter: 'blur(48px)', opacity: 0.7 }} />
            <div className="int-blob absolute w-64 h-48 rounded-full" style={{ right: -40, bottom: -40, background: 'radial-gradient(circle at 70% 60%, rgba(99,102,241,0.20), transparent 40%)', filter: 'blur(36px)', opacity: 0.7 }} />

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: [-4, 4, -4] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} whileHover={{ scale: 1.02 }} className="mx-auto lg:mx-0 w-full max-w-3xl">
              <div className="relative rounded-2xl overflow-hidden shadow-soft-lg" style={{ border: '1px solid rgba(255,255,255,0.72)', background: 'linear-gradient(180deg, rgba(255,255,255,0.72), rgba(248,250,255,0.56))', backdropFilter: 'blur(10px)' }}>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/70 text-xs flex items-center gap-2" style={{ backdropFilter: 'blur(6px)' }}>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-700">Live Sync Active</span>
                </div>

                  <div style={{ paddingTop: '56.25%', position: 'relative' }}>
                    {/* VideoMockup: prefers local mp4; if missing uses privacy-friendly YouTube iframe on click */}
                    <VideoMockup youtubeId="DST5Oadpqa4" localSrc="/assets/img/bizvideo.mp4" posterSrc="/assets/img/app-img-image.png" />
                  </div>
              </div>
            </motion.div>

            <div className="mt-6 flex justify-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-3"><strong className="text-slate-900">50+</strong> Integrations</div>
              <div className="flex items-center gap-3"><strong className="text-slate-900">5000+</strong> Businesses</div>
              <div className="flex items-center gap-3"><strong className="text-slate-900">99.9%</strong> Sync Accuracy</div>
              <div className="flex items-center gap-3"><strong className="text-slate-900">24/7</strong> Automation</div>
            </div>
          </div>

          <div className="relative z-30">
            <div className="relative">
              <div className="bg-gradient-to-b from-white/50 to-white/30 rounded-2xl p-6 backdrop-blur-sm border border-white/60">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {integrations.map((it, idx) => {
                    const Icon = it.icon;
                    return (
                      <motion.button key={it.id} className="group flex items-center gap-3 p-4 rounded-2xl border border-slate-100/40 bg-white/60 hover:scale-[1.02] shadow-sm" whileHover={{ y: -6 }} onMouseEnter={() => { activeRef.current = it.id; }} onMouseLeave={() => { activeRef.current = null; }} initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: idx * 0.06, type: 'spring', stiffness: 120 }}>
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/60 ring-1 ring-sky-200/40 transition-all group-hover:shadow-lg">
                          <Icon className="text-sky-600" />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-slate-900">{it.title}</div>
                          <div className="text-sm text-slate-500">Connect and sync leads, messages, and analytics.</div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="mt-6 flex justify-end">
                  <motion.a href="#" whileHover={{ scale: 1.03 }} className="inline-flex items-center gap-3 px-5 py-3 rounded-full text-white" style={{ background: 'linear-gradient(90deg,#2563eb,#7c3aed)', boxShadow: '0 12px 34px rgba(124,58,237,0.18)' }}>
                    <span>Connect Your Business Now</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </motion.a>
                </div>
              </div>

              <ConnectionLines active={activeRef.current} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoMockup({ youtubeId, localSrc, posterSrc }: { youtubeId: string; localSrc: string; posterSrc?: string }) {
  const [useYouTube, setUseYouTube] = useState(false);
  const [localAvailable, setLocalAvailable] = useState(false);

  useEffect(() => {
    // quick check if local file exists by attempting to fetch its headers
    if (!localSrc) return setLocalAvailable(false);
    fetch(localSrc, { method: 'HEAD' }).then((r) => {
      setLocalAvailable(r.ok);
    }).catch(() => setLocalAvailable(false));
  }, [localSrc]);

  if (useYouTube || !localAvailable) {
    // click-to-load privacy-friendly YouTube embed
    return (
      <div className="absolute inset-0">
        <iframe
              src="https://www.youtube.com/embed/DST5Oadpqa4"
              title="BizPlusCRM integration video"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      <video src={localSrc} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" poster={posterSrc} controls={false} />
      <button onClick={() => setUseYouTube(true)} className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-opacity" aria-label="Open video in YouTube">
        <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 3v18l15-9L5 3z" fill="#0f172a"/></svg>
        </div>
      </button>
    </div>
  );
}
