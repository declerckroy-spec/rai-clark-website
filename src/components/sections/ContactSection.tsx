'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Mail, Instagram, MessageCircle, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert(result.error || 'Er ging iets mis. Probeer het opnieuw of mail direct naar rai@raiclark.nl');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Er ging iets mis. Probeer het opnieuw of mail direct naar rai@raiclark.nl');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen py-24 px-6 bg-gradient-to-b from-secondary-black via-primary-black to-charcoal overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-electric-blue to-transparent opacity-10 blur-3xl rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-hot-pink to-transparent opacity-10 blur-3xl rounded-full"
        />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-5xl md:text-7xl lg:text-display uppercase tracking-tight mb-4">
            <span className="text-white">KLAAR OM TE</span>
            <br />
            <span className="neon-text-pink">CREËREN?</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-32 h-1 bg-gradient-to-r from-hot-pink to-magenta mx-auto mb-6"
          />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Vertel me je idee. Geen idee is te gek, te klein of te vaag. En maak je geen zorgen over het budget, we stemmen de prijs samen af op basis van wat je wilt.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-mono uppercase tracking-wider text-gray-400 mb-2">
                  Naam *
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Naam is verplicht' })}
                  className="w-full px-6 py-4 bg-secondary-black border-2 border-gray-800 rounded-lg text-white focus:border-cyan-bright focus:outline-none smooth-transition"
                  placeholder="Jouw naam"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-hot-pink">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-mono uppercase tracking-wider text-gray-400 mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is verplicht',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Ongeldig email adres',
                    },
                  })}
                  className="w-full px-6 py-4 bg-secondary-black border-2 border-gray-800 rounded-lg text-white focus:border-cyan-bright focus:outline-none smooth-transition"
                  placeholder="jouw@email.nl"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-hot-pink">{errors.email.message}</p>
                )}
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-mono uppercase tracking-wider text-gray-400 mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  {...register('projectType', { required: 'Selecteer een project type' })}
                  className="w-full px-6 py-4 bg-secondary-black border-2 border-gray-800 rounded-lg text-white focus:border-cyan-bright focus:outline-none smooth-transition cursor-pointer"
                >
                  <option value="">Selecteer...</option>
                  <option value="persoonlijk">Persoonlijk liedje</option>
                  <option value="bruiloft">Bruiloft</option>
                  <option value="jubileum">Jubileum</option>
                  <option value="verjaardag">Verjaardag</option>
                  <option value="bedrijf">Bedrijf</option>
                  <option value="content">Content</option>
                  <option value="anders">Anders</option>
                </select>
                {errors.projectType && (
                  <p className="mt-2 text-sm text-hot-pink">{errors.projectType.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-mono uppercase tracking-wider text-gray-400 mb-2">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register('message', { required: 'Bericht is verplicht' })}
                  className="w-full px-6 py-4 bg-secondary-black border-2 border-gray-800 rounded-lg text-white focus:border-cyan-bright focus:outline-none smooth-transition resize-none"
                  placeholder="Vertel me over je project, visie, en wat je voor ogen hebt..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-hot-pink">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="magnetic-button w-full px-10 py-5 bg-gradient-to-r from-electric-blue to-cyan-bright text-white font-bold text-lg uppercase tracking-wider rounded-lg smooth-transition hover:shadow-neon-blue disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Verzenden...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Stuur Bericht</span>
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-gradient-to-r from-arcade-green to-spotify-green rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-black" />
                  <p className="text-black font-bold">
                    Bericht verzonden! Ik neem zo snel mogelijk contact op.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Right: Contact Info & Alternatives */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Alternative Contact Methods */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary-black to-charcoal border-2 border-gray-800">
              <h3 className="font-display font-bold text-2xl uppercase mb-6 text-cyan-bright">
                Of Neem Direct Contact Op
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:rai@raiclark.nl"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary-black border-2 border-gray-800 hover:border-electric-blue smooth-transition group"
                >
                  <div className="w-12 h-12 rounded-full bg-electric-blue bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-40 smooth-transition">
                    <Mail className="w-6 h-6 text-electric-blue" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase text-gray-400">Email</p>
                    <p className="text-white font-medium">rai@raiclark.nl</p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/rai.clark/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary-black border-2 border-gray-800 hover:border-hot-pink smooth-transition group"
                >
                  <div className="w-12 h-12 rounded-full bg-hot-pink bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-40 smooth-transition">
                    <Instagram className="w-6 h-6 text-hot-pink" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase text-gray-400">Instagram</p>
                    <p className="text-white font-medium">@rai.clark</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/31628206410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary-black border-2 border-gray-800 hover:border-arcade-green smooth-transition group"
                >
                  <div className="w-12 h-12 rounded-full bg-arcade-green bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-40 smooth-transition">
                    <MessageCircle className="w-6 h-6 text-arcade-green" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase text-gray-400">WhatsApp</p>
                    <p className="text-white font-medium">+31 6 28 20 64 10</p>
                  </div>
                </a>

                {/* Spotify */}
                <a
                  href="https://open.spotify.com/artist/2fkKXGwlVqdj3FaPK7XLtH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary-black border-2 border-gray-800 hover:border-spotify-green smooth-transition group"
                >
                  <div className="w-12 h-12 rounded-full bg-spotify-green bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-40 smooth-transition">
                    <svg className="w-6 h-6 text-spotify-green" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase text-gray-400">Spotify</p>
                    <p className="text-white font-medium">Rai Clark</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Info Box */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-electric-blue to-vhs-purple bg-opacity-10 border-2 border-electric-blue border-opacity-30">
              <h3 className="font-display font-bold text-xl uppercase mb-4 text-white">
                Wat Kun Je Verwachten?
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-bright text-xl">→</span>
                  <span>Reactie binnen 24 uur</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-bright text-xl">→</span>
                  <span>Vrijblijvend gesprek over je idee</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-bright text-xl">→</span>
                  <span>Eerlijke prijs die past bij je wensen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-bright text-xl">→</span>
                  <span>Geen gedoe, gewoon goeie muziek</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
