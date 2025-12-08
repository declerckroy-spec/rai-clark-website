'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function AllServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    { title: 'Lied Laten Maken', href: '/lied-laten-maken', emoji: '🎵' },
    { title: 'Verjaardagslied', href: '/verjaardag-lied', emoji: '🎂' },
    { title: 'Trouwdaglied', href: '/trouwdag-lied', emoji: '💍' },
    { title: 'Vriendschapslied', href: '/vriendschap-lied', emoji: '🤝' },
    { title: 'Vaderdaglied', href: '/vaderdag-lied', emoji: '👨' },
    { title: 'Moederdaglied', href: '/moederdag-lied', emoji: '👩' },
    { title: 'Lied voor Opa', href: '/lied-voor-opa', emoji: '👴' },
    { title: 'Lied voor Oma', href: '/lied-voor-oma', emoji: '👵' },
    { title: 'Pensioenlied', href: '/pensioen-lied', emoji: '🏆' },
    { title: 'Afscheid Collega', href: '/afscheid-collega-lied', emoji: '💼' },
    { title: 'Romantisch Lied', href: '/romantisch-lied', emoji: '❤️' },
    { title: 'Geboorte Kind', href: '/geboorte-kind-lied', emoji: '👶' },
    { title: 'Herinneringslied', href: '/herinneringslied', emoji: '🕊️' },
    { title: 'Feestlied', href: '/feest-lied', emoji: '🎉' },
    { title: 'Kerstlied', href: '/kerst-lied', emoji: '🎄' },
    { title: 'Carnavalslied', href: '/carnaval-lied', emoji: '🎭' },
    { title: 'Suikerfeestlied', href: '/suikerfeest-lied', emoji: '🌙' },
    { title: 'Muziekcadeau', href: '/muziekcadeau-lied', emoji: '🎁' },
  ];

  return (
    <section
      id="all-services"
      ref={ref}
      className="relative min-h-screen py-24 px-6 bg-gradient-to-b from-primary-black via-secondary-black to-primary-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-5xl md:text-7xl lg:text-display uppercase tracking-tight mb-4">
            <span className="text-white">ALLE</span>
            <br />
            <span className="neon-text">GELEGENHEDEN</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-32 h-1 bg-gradient-to-r from-electric-blue to-cyan-bright mx-auto mb-6"
          />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Van verjaardag tot bruiloft, van pensioen tot geboorte. Kies de gelegenheid die bij jou past.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-12"
        >
          {services.map((service, index) => (
            <Link key={service.href} href={service.href}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                className="group p-4 rounded-xl bg-gradient-to-br from-secondary-black to-charcoal border-2 border-gray-800 hover:border-cyan-bright smooth-transition cursor-pointer text-center"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 smooth-transition">
                  {service.emoji}
                </div>
                <p className="text-sm text-gray-300 group-hover:text-cyan-bright smooth-transition font-medium">
                  {service.title}
                </p>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Link href="/lied-op-maat">
            <button className="magnetic-button px-10 py-5 bg-gradient-to-r from-electric-blue to-cyan-bright text-white font-bold text-lg uppercase tracking-wider rounded-lg smooth-transition hover:shadow-neon-blue">
              Bekijk Alle Diensten →
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
