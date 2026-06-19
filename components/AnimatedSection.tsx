import React from 'react';
import { motion } from 'framer-motion';
import { GlassOverlay } from './GlassOverlay';

interface AnimatedSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ id, className = '', children }) => (
  <motion.section
    id={id}
    className={`w-full px-4 py-12 md:px-8 lg:px-16 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <GlassOverlay>{children}</GlassOverlay>
  </motion.section>
);
