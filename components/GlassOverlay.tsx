import React from 'react';

interface GlassOverlayProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassOverlay: React.FC<GlassOverlayProps> = ({ children, className = '' }) => (
  <div className={`bg-white/30 backdrop-blur-lg rounded-xl border border-white/20 p-6 ${className}`}>
    {children}
  </div>
);
