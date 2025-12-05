'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Lightbulb, Cog, Download } from 'lucide-react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  index: number;
  isLast: boolean;
}

function ProcessStep({ number, title, description, icon, color, index, isLast }: ProcessStepProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="relative">
      <div className="flex gap-8 items-start">
        {/* Left: Number & Line */}
        <div className="flex flex-col items-center flex-shrink-0">
          {/* LCD Number Display */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative w-24 h-24 flex items-center justify-center mb-4"
          >
            {/* Glow Effect */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 rounded-2xl blur-xl"
              style={{ backgroundColor: color }}
            />

            {/* LCD Display Box */}
            <div
              className="relative w-full h-full rounded-2xl flex items-center justify-center border-4"
              style={{
                backgroundColor: '#0A0A0A',
                borderColor: color,
                boxShadow: `inset 0 0 20px ${color}40, 0 0 30px ${color}80`,
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                className="font-mono font-bold text-4xl tracking-wider"
                style={{
                  color: color,
                  textShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
                }}
              >
                {number}
              </motion.span>
            </div>
          </motion.div>

          {/* Connecting Line */}
          {!isLast && (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
              className="w-1 h-32 origin-top"
              style={{
                background: `linear-gradient(180deg, ${color}, transparent)`,
              }}
            />
          )}
        </div>

        {/* Right: Content Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
          className="flex-1 pb-16 group"
        >
          <div
            className="relative p-8 rounded-2xl bg-gradient-to-br from-secondary-black to-charcoal border-2 smooth-transition overflow-hidden"
            style={{
              borderColor: isInView ? color : '#2A2A2A',
            }}
          >
            {/* Background Accent */}
            <div
              className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 smooth-transition"
              style={{
                background: `radial-gradient(circle, ${color}, transparent)`,
              }}
            />

            {/* Icon */}
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative mb-4 w-12 h-12 flex items-center justify-center rounded-lg"
              style={{
                backgroundColor: `${color}20`,
                border: `2px solid ${color}`,
              }}
            >
              <div style={{ color }}>{icon}</div>
            </motion.div>

            {/* Title */}
            <h3
              className="relative font-display font-bold text-2xl md:text-3xl uppercase tracking-tight mb-4"
              style={{ color }}
            >
              {title}
            </h3>

            {/* Description */}
            <p className="relative text-gray-300 leading-relaxed text-lg">{description}</p>

            {/* Decorative Corner */}
            <div
              className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 opacity-30"
              style={{ borderColor: color }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      title: 'INTAKE & INSPIRATIE',
      description:
        'We starten met een gesprek. Wat is jouw verhaal? Wat moet de muziek overbrengen? Welke referenties resoneren met je? Dit is de basis van alles.',
      icon: <MessageSquare className="w-6 h-6" />,
      color: '#0066FF',
    },
    {
      number: '02',
      title: 'CONCEPT & CREATIE',
      description:
        'Op basis van onze intake creëer ik een concept en eerste demo. Je hoort waar de richting naartoe gaat en we fine-tunen samen tot het perfect is.',
      icon: <Lightbulb className="w-6 h-6" />,
      color: '#FF0066',
    },
    {
      number: '03',
      title: 'PRODUCTIE & POLISH',
      description:
        'De magie gebeurt. Ik produceer de volledige track met aandacht voor elk detail - van de eerste noot tot de laatste frequency. Professional grade, always.',
      icon: <Cog className="w-6 h-6" />,
      color: '#FFD700',
    },
    {
      number: '04',
      title: 'DELIVERY & DELIGHT',
      description:
        'Je ontvangt je compositie in alle formaten die je nodig hebt. Plus: volledige rechten en ownership. Het is van jou, voor altijd.',
      icon: <Download className="w-6 h-6" />,
      color: '#00FFFF',
    },
  ];

  return (
    <section
      id="process"
      ref={ref}
      className="relative min-h-screen py-24 px-6 bg-gradient-to-b from-charcoal via-secondary-black to-primary-black overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid-background opacity-20" />

      {/* Floating Shapes */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-20 right-10 w-32 h-32 border-2 border-electric-blue opacity-10"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-40 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-hot-pink to-magenta opacity-10"
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display font-black text-5xl md:text-7xl lg:text-display uppercase tracking-tight mb-4">
            <span className="text-white">VAN IDEE</span>
            <br />
            <span className="neon-text-pink">TOT</span>
            <br />
            <span className="neon-text">ICONIC</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-32 h-1 bg-gradient-to-r from-electric-blue via-hot-pink to-vivid-yellow mx-auto mb-6"
          />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Een bewezen proces dat jouw visie transformeert naar meesterwerk
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              {...step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="font-mono text-cyan-bright mb-6 uppercase tracking-wider text-lg">
            Ready om dit proces te starten?
          </p>
          <a href="#contact">
            <button className="magnetic-button px-10 py-5 bg-gradient-to-r from-electric-blue via-vhs-purple to-hot-pink text-white font-bold text-lg uppercase tracking-wider rounded-lg smooth-transition hover:shadow-lg hover:scale-105">
              Laten We Beginnen
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
