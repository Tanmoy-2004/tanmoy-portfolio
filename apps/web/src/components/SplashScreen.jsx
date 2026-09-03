import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg2 from '../assets/daniel.jpeg';

export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show splash screen for 3 seconds total
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600); // Trigger completion after fade-out animation completes
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090d16] text-white px-4"
        >
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />

          {/* Profile Picture with Pulsing Ring */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative mb-8"
          >
            <div className="h-36 w-36 sm:h-48 sm:w-48 overflow-hidden rounded-full border-2 border-primary/80 shadow-[0_0_35px_rgba(0,242,254,0.35)]">
              <img
                src={profileImg2}
                alt="Tanmoy Naskar"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Welcome Text Animation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center px-4"
          >
            <p className="mono text-xs uppercase tracking-[0.35em] text-primary mb-3">
              Welcome
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Hello, this is <span className="text-primary">Tanmoy</span>
            </h1>
            <p className="mt-3 text-base sm:text-xl text-muted-foreground font-medium">
              Welcome to my portfolio
            </p>
          </motion.div>

          {/* Animated Loading Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '120px' }}
            transition={{ delay: 0.6, duration: 1.8, ease: 'easeInOut' }}
            className="mt-8 h-1 rounded-full bg-primary"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}