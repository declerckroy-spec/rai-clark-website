'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function SpotifyFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Show button after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.a
          href="https://open.spotify.com/artist/2fkKXGwlVqdj3FaPK7XLtH"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          {/* Pulsating Glow */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 bg-spotify-green rounded-full blur-xl"
          />

          {/* Main Button */}
          <div className="relative w-16 h-16 bg-spotify-green rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl smooth-transition">
            <svg className="w-10 h-10 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>

            {/* Equalizer Animation */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-end gap-0.5 opacity-0 group-hover:opacity-100 smooth-transition">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: ['8px', '16px', '8px'],
                  }}
                  transition={{
                    duration: 0.6 + i * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-1 bg-spotify-green rounded-full"
                  style={{
                    boxShadow: '0 0 8px #1DB954',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap"
              >
                <div className="px-4 py-2 bg-secondary-black border-2 border-spotify-green rounded-lg shadow-lg">
                  <p className="text-spotify-green font-bold text-sm uppercase tracking-wider">
                    Luister op Spotify
                  </p>
                </div>
                {/* Arrow */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-spotify-green" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.a>

        {/* Close Button (optional - uncomment if you want dismissable button) */}
        {/* <motion.button
          onClick={(e) => {
            e.preventDefault();
            setIsVisible(false);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg"
        >
          <X className="w-4 h-4" />
        </motion.button> */}
      </motion.div>
    </AnimatePresence>
  );
}
