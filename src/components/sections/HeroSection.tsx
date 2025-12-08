'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Music, Menu, X } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';

// Dynamic import to avoid SSR issues with Three.js
const Hero3D = dynamic(() => import('../Hero3D'), { ssr: false });

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Lied op maat', href: '/lied-op-maat' },
    { label: 'Voorbeelden', href: '/voorbeelden' },
    { label: 'Over mij', href: '/over-mij' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-background"
    >
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-50 container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-blue to-cyan-bright flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-black text-xl uppercase text-white group-hover:text-cyan-bright smooth-transition">
                RAI CLARK
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.span
                  whileHover={{ y: -2 }}
                  className="font-mono text-sm uppercase tracking-wider text-gray-300 hover:text-cyan-bright smooth-transition cursor-pointer"
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-hot-pink to-magenta text-white font-bold uppercase tracking-wider rounded-lg smooth-transition hover:shadow-neon-pink"
              >
                Contact
              </motion.button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-cyan-bright smooth-transition"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-4 py-6 border-t border-gray-800 mt-4 bg-primary-black bg-opacity-95 rounded-lg px-4">
                {menuItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <motion.span
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="block font-mono text-sm uppercase tracking-wider text-gray-300 hover:text-cyan-bright smooth-transition cursor-pointer py-2"
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                ))}
                <a href="#contact">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-hot-pink to-magenta text-white font-bold uppercase tracking-wider rounded-lg smooth-transition"
                  >
                    Contact
                  </motion.button>
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
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
            <span className="text-hot-pink">|</span> SONGWRITER
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
            Muzikant, producer, songwriter. Ik maak tracks die raken en blijven hangen. Of het nu gaat om een wild experimenteel nummer, een persoonlijk liedje voor je verjaardag, of de volgende hit voor je Spotify playlist: alles kan.
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
                LUISTER NAAR MIJN MUZIEK
              </span>
            </motion.button>
          </a>

          {/* Contact CTA */}
          <a href="#contact">
            <button className="magnetic-button group relative px-10 py-5 bg-gradient-to-r from-electric-blue to-cyan-bright text-white font-bold text-lg uppercase tracking-wider rounded-lg overflow-hidden smooth-transition hover:shadow-neon-blue">
              <span className="relative z-10 flex items-center gap-2">
                <Music className="w-5 h-5" />
                LAAT EEN LIEDJE MAKEN
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-bright to-electric-blue opacity-0 group-hover:opacity-100 smooth-transition" />
            </button>
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
