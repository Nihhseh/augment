import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const taglines = [
    "Lasting Results.",
    "Proven Growth."
  ];
  
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center text-center pt-16 sm:pt-20 px-4">
      {/* Main content */}
      <div className="max-w-6xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          <div className="mb-2 sm:mb-4">Strategic Solutions.</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTagline}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent font-black relative z-10">
                {taglines[currentTagline]}
              </span>
              {/* Text shadow/outline for better visibility */}
              <span 
                className="absolute inset-0 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent font-black opacity-50 blur-sm"
                aria-hidden="true"
              >
                {taglines[currentTagline]}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 sm:mt-8"
        >
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-semibold text-base sm:text-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105 active:scale-95">
            Discover Our Services
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1.5 sm:mt-2"></div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;