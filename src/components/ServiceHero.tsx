'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ServiceHero({ title, subtitle, description, icon }: ServiceHeroProps) {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden grid-background">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-transparent to-secondary-black opacity-70" />

      {/* Floating decorative elements */}
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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Icon (optional) */}
        {icon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue to-cyan-bright flex items-center justify-center">
              {icon}
            </div>
          </motion.div>
        )}

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <p className="font-mono text-sm md:text-base uppercase tracking-widest text-cyan-bright">
            {subtitle}
          </p>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl neon-text uppercase tracking-tight">
            {title}
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#contact">
            <button className="magnetic-button group relative px-10 py-5 bg-gradient-to-r from-electric-blue to-cyan-bright text-white font-bold text-lg uppercase tracking-wider rounded-lg overflow-hidden smooth-transition hover:shadow-neon-blue">
              <span className="relative z-10">Bestel Nu</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-bright to-electric-blue opacity-0 group-hover:opacity-100 smooth-transition" />
            </button>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="font-mono text-sm text-gray-400 uppercase tracking-wider">
            Scroll voor meer
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
