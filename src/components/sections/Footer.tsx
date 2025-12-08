'use client';

import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'Lied op maat', href: '/lied-op-maat' },
    { label: 'Over mij', href: '/over-mij' },
    { label: 'Voorbeelden', href: '/voorbeelden' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-charcoal via-secondary-black to-primary-black border-t-2 border-gray-900 overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue via-hot-pink to-vivid-yellow" />

      {/* Background Pattern */}
      <div className="absolute inset-0 grid-background opacity-5" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Top Section: Brand + Links */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left: Brand */}
            <div className="text-center md:text-left">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display font-black text-3xl uppercase mb-4 neon-text"
              >
                RAI CLARK
              </motion.h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Producer & Componist
                <br />
                Jouw verhaal, mijn muziek
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 justify-center md:justify-start">
                <motion.a
                  href="https://open.spotify.com/artist/2fkKXGwlVqdj3FaPK7XLtH"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 rounded-full bg-spotify-green bg-opacity-20 border-2 border-spotify-green flex items-center justify-center hover:bg-opacity-40 smooth-transition group"
                >
                  <svg className="w-6 h-6 text-spotify-green" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/rai.clark/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 rounded-full bg-hot-pink bg-opacity-20 border-2 border-hot-pink flex items-center justify-center hover:bg-opacity-40 smooth-transition"
                >
                  <Instagram className="w-6 h-6 text-hot-pink" />
                </motion.a>

                <motion.a
                  href="mailto:rai@raiclark.nl"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 rounded-full bg-electric-blue bg-opacity-20 border-2 border-electric-blue flex items-center justify-center hover:bg-opacity-40 smooth-transition"
                >
                  <Mail className="w-6 h-6 text-electric-blue" />
                </motion.a>
              </div>
            </div>

            {/* Right: Links */}
            <div className="text-center md:text-left">
              <h4 className="font-display font-bold text-lg uppercase mb-4 text-white">
                Navigatie
              </h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span className="text-gray-400 hover:text-cyan-bright smooth-transition cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8" />

          {/* Bottom Row */}
          <div className="text-center text-sm text-gray-500">
            <p>
              © {currentYear} Rai Clark. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -bottom-20 -left-20 w-40 h-40 border-2 border-electric-blue opacity-5 rounded-full"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-hot-pink to-magenta opacity-5 blur-2xl rounded-full"
      />
    </footer>
  );
}
