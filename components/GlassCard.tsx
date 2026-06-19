import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => (
  <div
    className={`bg-white/30 backdrop-blur-lg rounded-xl border border-white/20 p-6 shadow-lg transition-transform hover:-translate-y-1 ${className}`}
    style={{ background: "rgba(255,255,255,0.25)" }}
  >
    {children}
  </div>
);

export default GlassCard;
