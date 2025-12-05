'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EasterEggs() {
  const [raveModeActive, setRaveModeActive] = useState(false);
  const [konamiSequence, setKonamiSequence] = useState<string[]>([]);
  const [showKonamiMessage, setShowKonamiMessage] = useState(false);

  // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
  const konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ];

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newSequence = [...konamiSequence, e.key].slice(-10);
      setKonamiSequence(newSequence);

      // Check if Konami code is entered
      if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
        activateRaveMode();
        setShowKonamiMessage(true);
        setTimeout(() => setShowKonamiMessage(false), 3000);
        setKonamiSequence([]); // Reset sequence
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [konamiSequence]);

  const activateRaveMode = () => {
    setRaveModeActive(true);

    // Auto-deactivate after 30 seconds
    setTimeout(() => setRaveModeActive(false), 30000);
  };

  // Rave Mode Effect
  useEffect(() => {
    if (raveModeActive) {
      document.body.classList.add('rave-mode');
    } else {
      document.body.classList.remove('rave-mode');
    }
  }, [raveModeActive]);

  return (
    <>
      {/* Konami Success Message */}
      <AnimatePresence>
        {showKonamiMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: -100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: -100 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[10000] pointer-events-none"
          >
            <div className="px-8 py-4 bg-gradient-to-r from-hot-pink via-vivid-yellow to-electric-blue rounded-2xl shadow-2xl border-4 border-white">
              <motion.h2
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [-2, 2, -2, 2, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: 6,
                }}
                className="font-display font-black text-4xl uppercase text-white text-center"
                style={{
                  textShadow: '0 0 20px #000, 0 0 40px #000',
                }}
              >
                🎉 RAVE MODE ACTIVATED! 🎉
              </motion.h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rave Mode Visual Effects */}
      {raveModeActive && (
        <>
          {/* Pulsating Color Overlay */}
          <motion.div
            className="fixed inset-0 z-[9998] pointer-events-none mix-blend-overlay"
            animate={{
              background: [
                'radial-gradient(circle, #FF006680, transparent)',
                'radial-gradient(circle, #0066FF80, transparent)',
                'radial-gradient(circle, #FFD70080, transparent)',
                'radial-gradient(circle, #00FFFF80, transparent)',
                'radial-gradient(circle, #FF00FF80, transparent)',
              ],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
            }}
          />

          {/* Floating Particles */}
          <div className="fixed inset-0 z-[9997] pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: [
                    '#FF0066',
                    '#0066FF',
                    '#FFD700',
                    '#00FFFF',
                    '#FF00FF',
                  ][Math.floor(Math.random() * 5)],
                  boxShadow: '0 0 20px currentColor',
                }}
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.random() * 100 - 50, 0],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Spinning Borders */}
          <motion.div
            className="fixed inset-8 z-[9996] pointer-events-none border-8 rounded-3xl"
            animate={{
              borderColor: [
                '#FF0066',
                '#0066FF',
                '#FFD700',
                '#00FFFF',
                '#FF00FF',
                '#FF0066',
              ],
              rotate: [0, 360],
            }}
            transition={{
              borderColor: { duration: 0.5, repeat: Infinity },
              rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
            }}
          />

          {/* Dismiss Button */}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={() => setRaveModeActive(false)}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[10001] px-8 py-4 bg-black border-4 border-white text-white font-bold text-lg uppercase tracking-wider rounded-full shadow-2xl hover:scale-110 smooth-transition"
          >
            Exit Rave Mode
          </motion.button>
        </>
      )}

      {/* Global Styles for Rave Mode */}
      <style jsx global>{`
        .rave-mode * {
          animation: rave-pulse 0.3s infinite !important;
        }

        @keyframes rave-pulse {
          0%,
          100% {
            filter: hue-rotate(0deg) brightness(1);
          }
          50% {
            filter: hue-rotate(180deg) brightness(1.2);
          }
        }
      `}</style>
    </>
  );
}
