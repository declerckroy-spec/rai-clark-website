'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type CursorState = 'default' | 'link' | 'button' | 'image';

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide cursor on mobile
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);

      // Add trail effect
      setTrail((prev) => [
        ...prev.slice(-5),
        { x: e.clientX, y: e.clientY, id: Date.now() },
      ]);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.tagName === 'A') {
        setCursorState('link');
      } else if (target.tagName === 'BUTTON' || target.closest('button')) {
        setCursorState('button');
      } else if (target.tagName === 'IMG' || target.closest('[data-cursor="image"]')) {
        setCursorState('image');
      }
    };

    const handleMouseLeave = () => {
      setCursorState('default');
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter as any);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter as any);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  // Don't render on mobile
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  if (!isVisible) return null;

  return (
    <>
      {/* Trail Effect */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          style={{
            x: point.x - 5,
            y: point.y - 5,
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0066FF, #00D4FF)',
          }}
        />
      ))}

      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {/* Default State - Pulsating Circle */}
        {cursorState === 'default' && (
          <motion.div
            className="relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                border: '2px solid #00D4FF',
                boxShadow: '0 0 10px #00D4FF, 0 0 20px #00D4FF',
              }}
            />
            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                border: '2px solid #0066FF',
              }}
            />
          </motion.div>
        )}

        {/* Link State - Vinyl Record */}
        {cursorState === 'link' && (
          <motion.div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            exit={{ scale: 0 }}
            transition={{
              rotate: {
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            style={{
              width: '40px',
              height: '40px',
            }}
          >
            <svg viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="45" stroke="#FF0066" strokeWidth="2" fill="#1A1A1A" />
              <circle cx="50" cy="50" r="35" stroke="#FF0066" strokeWidth="1" fill="none" />
              <circle cx="50" cy="50" r="25" stroke="#FF0066" strokeWidth="1" fill="none" />
              <circle cx="50" cy="50" r="8" fill="#FF0066" />
            </svg>
          </motion.div>
        )}

        {/* Button State - Particle Explosion */}
        {cursorState === 'button' && (
          <motion.div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '2px solid #FFD700',
                boxShadow: '0 0 15px #FFD700, 0 0 30px #FFD700',
              }}
            />
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                animate={{
                  x: [0, Math.cos((i * 60 * Math.PI) / 180) * 20],
                  y: [0, Math.sin((i * 60 * Math.PI) / 180) * 20],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: '#FFD700',
                }}
              />
            ))}
          </motion.div>
        )}

        {/* Image State - Waveform Visualizer */}
        {cursorState === 'image' && (
          <motion.div
            className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-0.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  height: ['10px', '30px', '10px'],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: 'easeInOut',
                }}
                style={{
                  width: '3px',
                  backgroundColor: '#00FFFF',
                  boxShadow: '0 0 10px #00FFFF',
                }}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
