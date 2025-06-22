import React from 'react';
import { motion } from 'framer-motion';

interface GlassmorphicCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.01,
        y: -2,
      }}
      className={`
        backdrop-blur-lg bg-gradient-to-br from-white/8 to-white/4
        border border-white/15 rounded-xl p-4 sm:p-6
        shadow-lg hover:shadow-xl
        transition-all duration-300
        ${className}
      `}
    >
      <motion.div
        whileHover={{ y: -1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default GlassmorphicCard;