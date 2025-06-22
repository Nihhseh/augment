import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const particles = Array.from({ length: 30 }, (_, i) => i);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Solid gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1a0033 0%, #4c1d95 25%, #7c3aed 50%, #a855f7 75%, #c084fc 100%)'
        }}
      />
      
      {/* Floating particles - reduced count and opacity */}
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-0.5 h-0.5 bg-purple-300 rounded-full opacity-15"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
          }}
          animate={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{
            duration: Math.random() * 30 + 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Large gradient orbs - more subtle */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full opacity-8"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.05, 1],
          x: [0, 30, -15, 0],
          y: [0, -20, 25, 0],
          rotate: [0, 45, 90],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-64 h-64 rounded-full opacity-8"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)'
        }}
        animate={{
          scale: [1.02, 1, 1.08, 1.02],
          x: [0, -30, 20, 0],
          y: [0, 15, -10, 0],
          rotate: [90, 45, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Center floating orb - very subtle */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full opacity-6"
        style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.1) 0%, transparent 60%)'
        }}
        animate={{
          scale: [0.95, 1.1, 0.95],
          rotate: [0, -90],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default AnimatedBackground;