'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Music2, Radio, Sliders } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

function ServiceCard({ icon, title, description, color, delay }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotateX: 0 }
          : { opacity: 0, y: 100, rotateX: -15 }
      }
      transition={{ duration: 0.8, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group perspective-1000"
    >
      <motion.div
        animate={
          isHovered
            ? { y: -10, rotateX: 5, rotateY: 2 }
            : { y: 0, rotateX: 0, rotateY: 0 }
        }
        transition={{ duration: 0.3 }}
        className={`
          relative p-8 rounded-2xl bg-gradient-to-br from-secondary-black to-charcoal
          border-2 border-gray-800 overflow-hidden
          smooth-transition card-elevated
        `}
        style={{
          boxShadow: isHovered ? `0 20px 40px ${color}40` : 'none',
          borderColor: isHovered ? color : '#2A2A2A',
        }}
      >
        {/* Background Gradient on Hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 smooth-transition"
          style={{
            background: `linear-gradient(135deg, ${color}00, ${color})`,
          }}
        />

        {/* Icon */}
        <motion.div
          animate={isHovered ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6 w-16 h-16 flex items-center justify-center rounded-full"
          style={{
            backgroundColor: `${color}20`,
            border: `2px solid ${color}`,
            boxShadow: isHovered ? `0 0 20px ${color}` : 'none',
          }}
        >
          <div style={{ color }}>{icon}</div>
        </motion.div>

        {/* Title */}
        <h3
          className="relative font-display font-bold text-2xl md:text-3xl uppercase tracking-tight mb-4"
          style={{ color: isHovered ? color : '#FFFFFF' }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="relative text-gray-300 leading-relaxed mb-6">{description}</p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={
            isHovered
              ? { opacity: 1, height: 'auto' }
              : { opacity: 0, height: 0 }
          }
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden"
        >
          <a href="#contact">
            <button
              className="w-full px-6 py-3 border-2 font-bold uppercase tracking-wider rounded-lg smooth-transition hover:bg-opacity-100"
              style={{
                borderColor: color,
                color: color,
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = color;
                e.currentTarget.style.color = '#000000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = color;
              }}
            >
              Neem Contact Op
            </button>
          </a>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-24 h-24 border border-gray-800 rounded-full opacity-20 group-hover:opacity-40 smooth-transition" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-gray-800 rotate-45 opacity-10 group-hover:opacity-30 smooth-transition" />
      </motion.div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: <Music2 className="w-8 h-8" />,
      title: 'PERSOONLIJKE LIEDJES',
      description:
        'Een liedje over jouw vader, jouw vriendin, jouw hond. Voor een verjaardag, jubileum, afscheid of gewoon omdat het kan. Dit is wat ik het liefste doe en waar mensen het meest blij van worden.',
      color: '#0066FF',
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: 'BRUILOFTSMUZIEK',
      description:
        'Van introsong voor jullie binnenkomst tot een eigen versie van jullie favoriete nummer. Muziek die jullie dag nog specialer maakt en waar gasten over napraten.',
      color: '#FF0066',
    },
    {
      icon: <Sliders className="w-8 h-8" />,
      title: 'BEDRIJFSMUZIEK',
      description:
        'Podcasts, video\'s, presentaties. Voor content die een signature sound nodig heeft. Muziek die past bij je merk en blijft hangen bij je publiek.',
      color: '#FFD700',
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="relative min-h-screen py-24 px-6 bg-gradient-to-b from-primary-black via-secondary-black to-primary-black overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-30" />

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-20 right-20 w-32 h-32 border-2 border-vhs-purple opacity-10"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-bright to-electric-blue opacity-10"
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display font-black text-5xl md:text-7xl lg:text-display uppercase tracking-tight mb-4">
            <span className="text-white">WAT IK VOOR</span>
            <br />
            <span className="neon-text">JE KAN MAKEN</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-32 h-1 bg-gradient-to-r from-electric-blue to-cyan-bright mx-auto"
          />
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
            Naast mijn eigen releases maak ik ook muziek in opdracht. Van persoonlijke liedjes tot professionele producties.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
              delay={0.2 + index * 0.2}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="font-mono text-cyan-bright mb-6 uppercase tracking-wider">
            Klaar om iets moois te maken?
          </p>
          <a href="#contact">
            <button className="magnetic-button px-10 py-5 bg-gradient-to-r from-hot-pink to-magenta text-white font-bold text-lg uppercase tracking-wider rounded-lg smooth-transition hover:shadow-neon-pink">
              Neem Contact Op
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
