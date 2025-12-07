'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wavePattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M0 50 Q 25 25, 50 50 T 100 50"
                fill="none"
                stroke="#0066FF"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wavePattern)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-display font-black text-5xl md:text-7xl lg:text-display uppercase tracking-tight mb-4">
            <span className="neon-text-pink">MEER DAN</span>
            <br />
            <span className="text-white">ALLEEN BEATS</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-hot-pink to-magenta" />
        </motion.div>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
            data-cursor="image"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              {/* Rai Clark Portrait */}
              <Image
                src="/images/rai-clark-portrait.jpg"
                alt="Rai Clark - Music Producer & Composer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Duotone Overlay Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan to-magenta mix-blend-color opacity-0 group-hover:opacity-70 smooth-transition" />

              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-neon-cyan group-hover:shadow-neon-cyan smooth-transition" />
            </div>

            {/* Animated Connecting Lines */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="hidden md:block absolute -right-6 top-1/2 w-12 h-0.5 bg-gradient-to-r from-cyan-bright to-transparent origin-left"
            />
          </motion.div>

          {/* Right: Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Ik ben Rai Clark. Overdag schrijf ik teksten voor bedrijven, 's avonds maak ik muziek. Veel muziek.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Wat begon als hobby is uitgegroeid tot een obsessie. Ik release albums, experimentele tracks, gekke nummers die nergens op slaan: en ja, ook persoonlijke liedjes in opdracht. Met AI-tools maak ik muziek die klinkt alsof je je favoriete band opeens een nummer over jouw oma heeft geschreven.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Het mooie is: het kan echt alles zijn. Van uptempo feestnummer tot emotioneel akoestisch verhaal. Van absurd kinderliedje tot experimentele noise. Soms maak ik het voor mezelf, soms voor jou, maar altijd met dezelfde energie.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              En ja, ik gebruik AI voor de productie. Geen live band, geen studio van 500 euro per uur, maar wel muziek waar mensen blij van worden. Check Het Beestenbal als je me niet gelooft. Mijn oma is mijn grootste fan, dat zegt genoeg.
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="pt-6"
            >
              <a href="#contact">
                <button className="magnetic-button group relative px-8 py-4 border-2 border-cyan-bright text-cyan-bright font-bold uppercase tracking-wider rounded-lg overflow-hidden smooth-transition hover:bg-cyan-bright hover:text-black">
                  <span className="relative z-10">Laten We Praten</span>
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
