'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Instagram, Mail, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription:', email);
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-charcoal via-secondary-black to-primary-black border-t-2 border-gray-900 overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue via-hot-pink to-vivid-yellow" />

      {/* Background Pattern */}
      <div className="absolute inset-0 grid-background opacity-5" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
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
              Transformeer momenten in meesterwerken
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
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
                href="https://instagram.com/raiclarkmusic"
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

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg uppercase mb-4 text-cyan-bright">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Over', 'Services', 'Portfolio', 'Process', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-bright smooth-transition flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-bright group-hover:w-4 smooth-transition" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-display font-bold text-lg uppercase mb-4 text-hot-pink">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Custom Composities</li>
              <li>Sound Design</li>
              <li>Muzikale Arrangementen</li>
              <li>Mixing & Mastering</li>
              <li>Podcast Productie</li>
              <li>Corporate Audio</li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-display font-bold text-lg uppercase mb-4 text-vivid-yellow">
              Stay Updated
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Blijf op de hoogte van nieuwe releases en projecten
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jouw@email.nl"
                required
                className="w-full px-4 py-3 bg-secondary-black border-2 border-gray-800 rounded-lg text-white text-sm focus:border-vivid-yellow focus:outline-none smooth-transition"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 bg-gradient-to-r from-vivid-yellow to-sunset-orange text-black font-bold text-sm uppercase tracking-wider rounded-lg smooth-transition hover:shadow-lg"
              >
                Inschrijven
              </motion.button>

              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-arcade-green text-sm"
                >
                  ✓ Ingeschreven!
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p className="flex items-center gap-2">
            © {currentYear} Rai Clark. Alle rechten voorbehouden.
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-hot-pink fill-current" /> and code
            </span>
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-bright smooth-transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-bright smooth-transition">
              Terms of Service
            </a>
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
