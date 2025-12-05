'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  color: string;
}

function TestimonialCard({ quote, author, role, rating, color }: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-96 mx-4">
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-secondary-black to-charcoal border-2 border-gray-800 hover:border-gray-600 smooth-transition h-full flex flex-col">
        {/* Quote Icon */}
        <div
          className="absolute top-6 right-6 opacity-20"
          style={{ color }}
        >
          <Quote className="w-12 h-12" />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-6 relative z-10">
          {[...Array(rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Star
                className="w-5 h-5 fill-current"
                style={{ color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Quote Text */}
        <blockquote className="text-lg text-gray-200 leading-relaxed mb-6 flex-1 relative z-10">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Author Info */}
        <div className="relative z-10">
          <div
            className="w-12 h-1 mb-4"
            style={{ backgroundColor: color }}
          />
          <p className="font-bold text-white text-lg">{author}</p>
          <p className="text-sm text-gray-400 font-mono">{role}</p>
        </div>

        {/* Decorative Corner */}
        <div
          className="absolute bottom-0 left-0 w-24 h-24 opacity-10"
          style={{
            background: `radial-gradient(circle at bottom left, ${color}, transparent)`,
          }}
        />
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      quote:
        'Rai creëerde de perfecte soundtrack voor onze bruiloft. Gasten vragen er NOG steeds naar! De muziek maakte ons moment echt onvergetelijk.',
      author: 'Sarah & Tom',
      role: 'Bruiloft Compositie',
      rating: 5,
      color: '#FF0066',
    },
    {
      quote:
        'Onze podcast sound ging van amateur naar professional in één sessie. Game changer. Rai snapt precies wat content creators nodig hebben.',
      author: 'Mark van Dijk',
      role: 'Podcast Producer',
      rating: 5,
      color: '#0066FF',
    },
    {
      quote:
        'Hij snapt precies wat een merk nodig heeft. Onze signature sound is nu herkenbaar én memorable. ROI op ons event is gestegen met 40%.',
      author: 'Lisa Vermeulen',
      role: 'CMO @ TechBrand',
      rating: 5,
      color: '#FFD700',
    },
    {
      quote:
        'De herdenking van mijn vader was emotioneel, maar de muziek die Rai componeerde bracht troost en vreugde. Perfect balans tussen verdriet en viering.',
      author: 'Jan Bakker',
      role: 'Herdenking Compositie',
      rating: 5,
      color: '#00FFFF',
    },
    {
      quote:
        'Ons bedrijfsjubileum had een anthem nodig die onze 50-jarige geschiedenis eer aan deed. Rai leverde precies dat - en meer. Standing ovation garantie.',
      author: 'Robert de Jong',
      role: 'CEO @ Innovate BV',
      rating: 5,
      color: '#00FF87',
    },
    {
      quote:
        'Als content creator heb ik met veel producers gewerkt, maar Rai\'s oor voor detail en begrip van sonic branding is next level. Elke track is een kunstwerk.',
      author: 'Emma Jansen',
      role: 'YouTuber & Filmmaker',
      rating: 5,
      color: '#8B00FF',
    },
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-primary-black via-charcoal to-secondary-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-background w-full h-full" />
      </div>

      {/* Section Title */}
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-display font-black text-5xl md:text-7xl lg:text-display uppercase tracking-tight mb-4">
            <span className="text-white">WAT</span>
            <br />
            <span className="neon-text">ANDEREN ZEGGEN</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-32 h-1 bg-gradient-to-r from-cyan-bright to-electric-blue mx-auto mb-6"
          />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Echte verhalen van echte mensen - dit is waar het om draait
          </p>
        </motion.div>
      </div>

      {/* Marquee Scroller */}
      <div className="relative">
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary-black to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex overflow-hidden relative"
        >
          <motion.div
            animate={{
              x: [0, -1920], // Adjust based on total width
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            className="flex"
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.author}-${index}`}
                {...testimonial}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Note about Placeholders */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="container mx-auto px-6 mt-12 text-center relative z-10"
      >
        <p className="font-mono text-sm text-gray-600 uppercase tracking-wider">
          [PLACEHOLDER TESTIMONIALS - VERVANG MET ECHTE REVIEWS]
        </p>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="container mx-auto px-6 text-center mt-16 relative z-10"
      >
        <p className="font-mono text-hot-pink mb-6 uppercase tracking-wider text-lg">
          Word de volgende success story
        </p>
        <a href="#contact">
          <button className="magnetic-button px-10 py-5 bg-gradient-to-r from-hot-pink to-magenta text-white font-bold text-lg uppercase tracking-wider rounded-lg smooth-transition hover:shadow-neon-pink">
            Start Jouw Project
          </button>
        </a>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-20 left-20 w-24 h-24 border-2 border-vivid-yellow opacity-10 rounded-lg"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-40 right-20 w-32 h-32 bg-gradient-to-br from-cyan-bright to-electric-blue opacity-10 rounded-full blur-xl"
      />
    </section>
  );
}
