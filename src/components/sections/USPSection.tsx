'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Heart, DollarSign, CheckCircle, Clock, Sparkles } from 'lucide-react';

export default function USPSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const usps = [
    {
      icon: Clock,
      title: 'Razendsnel Klaar',
      description: 'Binnen een week geleverd. En als het moet? Dezelfde dag nog.',
      color: 'electric-blue',
    },
    {
      icon: Heart,
      title: '100% Persoonlijk',
      description: 'Geen standaard templates. Echt jouw verhaal, echt uniek.',
      color: 'hot-pink',
    },
    {
      icon: DollarSign,
      title: 'Eerlijke Prijzen',
      description: 'Geen verborgen kosten. Prijs vooraf afgestemd, geen verrassingen.',
      color: 'vivid-yellow',
    },
    {
      icon: Sparkles,
      title: 'Professioneel Geluid',
      description: 'AI-productie die klinkt als een echte band. Check Het Beestenbal.',
      color: 'cyan-bright',
    },
    {
      icon: CheckCircle,
      title: 'Revisies Tot Je Blij Bent',
      description: 'Niet tevreden? We passen aan totdat het perfect is.',
      color: 'arcade-green',
    },
    {
      icon: Zap,
      title: 'Snelle Reactie',
      description: 'Antwoord binnen 24 uur. Geen weken wachten op een reactie.',
      color: 'magenta',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 bg-gradient-to-b from-primary-black via-secondary-black to-primary-black"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tight mb-4">
            <span className="neon-text">WAAROM</span>
            <br />
            <span className="text-white">RAI CLARK?</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-32 h-1 bg-gradient-to-r from-electric-blue to-cyan-bright mx-auto"
          />
        </motion.div>

        {/* USPs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => {
            const IconComponent = usp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-secondary-black to-charcoal border-2 border-gray-800 hover:border-cyan-bright smooth-transition"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full bg-${usp.color} bg-opacity-20 border-2 border-${usp.color} flex items-center justify-center mb-6 group-hover:scale-110 smooth-transition`}>
                  <IconComponent className={`w-8 h-8 text-${usp.color}`} />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl uppercase mb-3 text-white group-hover:text-cyan-bright smooth-transition">
                  {usp.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {usp.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
