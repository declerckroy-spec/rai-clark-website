'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Music } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Lied op maat', href: '/lied-op-maat' },
    { label: 'Voorbeelden', href: '/voorbeelden' },
    { label: 'Over mij', href: '/over-mij' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${
        isScrolled
          ? 'bg-primary-black bg-opacity-95 backdrop-blur-md border-b-2 border-gray-900'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
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
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-hot-pink to-magenta text-white font-bold uppercase tracking-wider rounded-lg smooth-transition hover:shadow-neon-pink"
              >
                Contact
              </motion.button>
            </Link>
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
              <nav className="flex flex-col gap-4 py-6 border-t border-gray-800 mt-4">
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
                <Link href="/#contact">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-hot-pink to-magenta text-white font-bold uppercase tracking-wider rounded-lg smooth-transition"
                  >
                    Contact
                  </motion.button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
