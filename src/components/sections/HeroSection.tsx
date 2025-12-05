'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Music } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamic import to avoid SSR issues with Three.js
const Hero3D = dynamic(() => import('../Hero3D'), { ssr: false });

export default function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-background"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-40">
        <Hero3D />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-transparent to-secondary-black opacity-70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Main Title with Staggered Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="font-display font-black text-6xl md:text-8xl lg:text-hero neon-text uppercase tracking-tight">
            RAI CLARK
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-6"
        >
          <p className="font-mono text-xl md:text-2xl lg:text-3xl text-cyan-bright tracking-widest uppercase">
            PRODUCER <span className="text-hot-pink">|</span> COMPONIST{' '}
            <span className="text-hot-pink">|</span> SONIC ARCHITECT
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-12 max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed">
            Van concept tot creatie - ik transformeer jouw momenten in meesterwerken
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Primary CTA */}
          <a href="#portfolio">
            <button className="magnetic-button group relative px-10 py-5 bg-gradient-to-r from-electric-blue to-cyan-bright text-white font-bold text-lg uppercase tracking-wider rounded-lg overflow-hidden smooth-transition hover:shadow-neon-blue">
              <span className="relative z-10 flex items-center gap-2">
                <Music className="w-5 h-5" />
                ONTDEK MIJN SOUND
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-bright to-electric-blue opacity-0 group-hover:opacity-100 smooth-transition" />
            </button>
          </a>

          {/* Spotify CTA */}
          <a
            href="https://open.spotify.com/artist/2fkKXGwlVqdj3FaPK7XLtH"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="magnetic-button group relative px-10 py-5 border-2 border-spotify-green text-spotify-green font-bold text-lg uppercase tracking-wider rounded-lg overflow-hidden smooth-transition hover:bg-spotify-green hover:text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                LUISTER OP SPOTIFY
              </span>
            </motion.button>
          </a>
        </motion.div>

        {/* Floating Elements - Decorative */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 border-2 border-magenta opacity-30"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-br from-vivid-yellow to-sunset-orange opacity-20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="font-mono text-sm text-gray-400 uppercase tracking-wider">
            Scroll voor de ervaring
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ChevronDown className="w-8 h-8 text-cyan-bright" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
