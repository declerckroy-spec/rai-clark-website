'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative min-h-screen py-24 px-6 bg-gradient-to-b from-primary-black via-charcoal to-secondary-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-electric-blue to-transparent opacity-10 blur-3xl rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-hot-pink to-transparent opacity-10 blur-3xl rounded-full"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-black text-5xl md:text-7xl lg:text-display uppercase tracking-tight mb-4">
            <span className="text-white">DE</span>
            <br />
            <span className="neon-text-pink">SHOWCASE</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-32 h-1 bg-gradient-to-r from-hot-pink to-magenta mx-auto"
          />
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
            Van absurde kinderliedjes tot experimentele bangers. Dit is waar ik mezelf uitleef en mezelf verras. Alles gemaakt met AI, creativiteit en soms te veel koffie. Wil je een opdracht? Scroll door. Wil je gewoon luisteren? Hit play.
          </p>
        </motion.div>


        {/* Spotify Embed - Hero Feature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mb-16 relative group"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute -top-4 -left-4 z-20 px-4 py-2 bg-spotify-green text-black font-bold text-sm uppercase tracking-wider rounded-full flex items-center gap-2 shadow-lg"
          >
            <Play className="w-4 h-4" />
            STREAM NOW
          </motion.div>

          {/* Spotify Logo Animation */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-8 -right-8 z-20 w-16 h-16 bg-spotify-green rounded-full flex items-center justify-center shadow-lg shadow-spotify-green/50"
          >
            <svg className="w-10 h-10 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </motion.div>

          {/* Embed Container with Glow Effect */}
          <div className="relative p-1 rounded-2xl bg-gradient-to-br from-spotify-green via-electric-blue to-hot-pink">
            <div className="bg-secondary-black rounded-xl overflow-hidden">
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/artist/2fkKXGwlVqdj3FaPK7XLtH?utm_source=generator&theme=0"
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full"
              />
            </div>
          </div>

          {/* Decorative Equalizer Bars */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-end gap-1">
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  height: ['20px', `${Math.random() * 40 + 20}px`, '20px'],
                }}
                transition={{
                  duration: 0.6 + Math.random() * 0.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-2 bg-gradient-to-t from-spotify-green to-arcade-green rounded-full"
                style={{
                  boxShadow: '0 0 10px #1DB954',
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Additional Content - Sample Works */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {/* Featured Album - Het Beestenbal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="group relative bg-secondary-black rounded-xl border-2 border-gray-800 hover:border-vivid-yellow smooth-transition overflow-hidden"
          >
            {/* Album Cover Image */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/het-beestenbal-album.png"
                alt="Het Beestenbal - Album Cover"
                fill
                className="object-cover group-hover:scale-110 smooth-transition duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-black via-transparent to-transparent opacity-60" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 smooth-transition">
                <div className="w-16 h-16 rounded-full bg-vivid-yellow flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 text-black fill-current" />
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full border border-vivid-yellow text-vivid-yellow">
                  Featured
                </span>
              </div>
              <h3 className="font-display font-bold text-xl uppercase mb-2">HET BEESTENBAL</h3>
              <p className="text-sm text-gray-400">Een compleet album vol vrolijke dierenliedjes. Denk Hamstercontrole, Flamingo Rosa en Truus gaat los.</p>
            </div>
          </motion.div>

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.15 }}
            className="group relative p-6 bg-secondary-black rounded-xl border-2 border-gray-800 hover:border-electric-blue smooth-transition overflow-hidden md:col-span-2"
          >
            {/* Hover Gradient */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 smooth-transition"
              style={{
                background: 'linear-gradient(135deg, transparent, #0066FF)',
              }}
            />

            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <span
                  className="px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full border border-electric-blue text-electric-blue"
                >
                  Binnenkort
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl uppercase mb-2">RADIO CLARK</h3>
              <p className="text-base text-gray-400">Een nieuwe album waar ik nu aan werk. Stay tuned!</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <a
            href="https://open.spotify.com/artist/2fkKXGwlVqdj3FaPK7XLtH"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="magnetic-button group px-10 py-5 bg-gradient-to-r from-spotify-green to-arcade-green text-black font-bold text-lg uppercase tracking-wider rounded-lg smooth-transition hover:shadow-lg hover:shadow-spotify-green/50 flex items-center gap-3 mx-auto">
              <span>Beluister Alles Op Spotify</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 smooth-transition" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
