'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Heart, Cake, Bird, PartyPopper, Briefcase, Video } from 'lucide-react';

interface OccasionCardProps {
  icon: React.ReactNode;
  emoji: string;
  title: string;
  description: string;
  color: string;
  index: number;
}

function OccasionCard({ icon, emoji, title, description, color, index }: OccasionCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex-shrink-0 w-80 h-96 perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl p-8 flex flex-col items-center justify-center text-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${color}20, ${color}05)`,
            border: `2px solid ${color}40`,
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full grid-background" />
          </div>

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative mb-6"
            style={{ color }}
          >
            {icon}
          </motion.div>

          <div className="text-6xl mb-4">{emoji}</div>

          <h3
            className="font-display font-bold text-2xl uppercase tracking-tight mb-2"
            style={{ color }}
          >
            {title}
          </h3>

          <p className="text-sm text-gray-400 font-mono uppercase tracking-wider">
            Hover voor meer
          </p>

          {/* Decorative Corner Elements */}
          <div
            className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2"
            style={{ borderColor: color }}
          />
          <div
            className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2"
            style={{ borderColor: color }}
          />
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl p-8 flex flex-col justify-center"
          style={{
            transform: 'rotateY(180deg)',
            background: `linear-gradient(135deg, ${color}, ${color}80)`,
            boxShadow: `0 20px 40px ${color}60`,
          }}
        >
          <div className="mb-4" style={{ color: '#000000' }}>
            {icon}
          </div>

          <h3 className="font-display font-bold text-2xl uppercase tracking-tight mb-4 text-black">
            {title}
          </h3>

          <p className="text-black text-base leading-relaxed">{description}</p>

          <button
            className="mt-6 px-6 py-3 bg-black text-white font-bold uppercase tracking-wider rounded-lg smooth-transition hover:bg-opacity-80"
            onClick={(e) => {
              e.stopPropagation();
              window.location.href = '#contact';
            }}
          >
            Neem Contact Op
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function SpecialMomentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const occasions = [
    {
      icon: <Heart className="w-16 h-16" />,
      emoji: '💒',
      title: 'BRUILOFTEN',
      description:
        'Jullie dag, jullie liedje. Van ceremonie tot first dance. Muziek die jullie verhaal vertelt en waar je je leven lang naar terugluistert.',
      color: '#FF0066',
    },
    {
      icon: <PartyPopper className="w-16 h-16" />,
      emoji: '🎉',
      title: 'JUBILEA',
      description:
        '25 jaar getrouwd? 50 jaar in dienst? Vier het met een song die de jaren eert en de toekomst viert.',
      color: '#FFD700',
    },
    {
      icon: <Bird className="w-16 h-16" />,
      emoji: '🕊️',
      title: 'HERDENKINGEN',
      description:
        'Een muzikaal eerbetoon aan iemand die er niet meer is. Met respect, liefde en de herinnering levend houden.',
      color: '#00FFFF',
    },
    {
      icon: <Cake className="w-16 h-16" />,
      emoji: '🎂',
      title: 'VERJAARDAGEN',
      description:
        'Van 18 tot 80. Een verjaardagsliedje dat niet kinderachtig is maar wel blijft plakken. Het cadeau waar niemand op rekent.',
      color: '#00FF87',
    },
    {
      icon: <Briefcase className="w-16 h-16" />,
      emoji: '🏢',
      title: 'BEDRIJVEN',
      description:
        'Podcast intro, product launch muziek, bedrijfssong. Audio die je merk definieert en blijft hangen bij je doelgroep.',
      color: '#0066FF',
    },
    {
      icon: <Video className="w-16 h-16" />,
      emoji: '🎬',
      title: 'CONTENT CREATORS',
      description:
        'YouTube, TikTok, podcasts. Unieke muziek die je content onderscheidt van de rest en copyright-vrij is.',
      color: '#8B00FF',
    },
  ];

  return (
    <section
      id="occasions"
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-secondary-black via-primary-black to-charcoal overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-electric-blue opacity-5 rounded-full"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-black text-5xl md:text-7xl lg:text-display uppercase tracking-tight mb-4">
            <span className="text-white">VOOR ALLE</span>
            <br />
            <span className="neon-text-pink">MOMENTEN DIE</span>
            <br />
            <span className="neon-text">ERTOE DOEN</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-32 h-1 bg-gradient-to-r from-hot-pink via-vivid-yellow to-cyan-bright mx-auto mb-6"
          />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ik maak muziek voor alle belangrijke momenten
          </p>
        </motion.div>

        {/* Horizontal Scroll Container - Desktop */}
        <div className="hidden md:block">
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-8 px-6"
              style={{ width: 'max-content' }}
            >
              {occasions.map((occasion, index) => (
                <OccasionCard key={occasion.title} {...occasion} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-8"
          >
            <p className="font-mono text-sm text-gray-500 uppercase tracking-wider flex items-center justify-center gap-2">
              <span>←</span>
              <span>Scroll horizontaal voor meer</span>
              <span>→</span>
            </p>
          </motion.div>
        </div>

        {/* Grid Layout - Mobile/Tablet */}
        <div className="md:hidden grid gap-8">
          {occasions.map((occasion, index) => (
            <OccasionCard key={occasion.title} {...occasion} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="font-mono text-cyan-bright mb-6 uppercase tracking-wider">
            Voor welk moment wil jij een liedje?
          </p>
          <a href="#contact">
            <button className="magnetic-button px-10 py-5 bg-gradient-to-r from-vivid-yellow to-sunset-orange text-black font-bold text-lg uppercase tracking-wider rounded-lg smooth-transition hover:shadow-lg hover:shadow-vivid-yellow/50">
              Neem Contact Op
            </button>
          </a>
        </motion.div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
