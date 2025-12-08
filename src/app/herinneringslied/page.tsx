import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ContactSection from '@/components/sections/ContactSection';
import { Heart, Music, Star, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Herinneringslied laten maken | Herdenkingslied',
  description:
    'Laat een persoonlijk herinneringslied maken ter nagedachtenis aan een dierbare. Een liefdevolle manier om een overledene te herdenken en herinneringen te koesteren. Warm, oprecht en troostend.',
  keywords: [
    'herinneringslied',
    'herdenkingslied',
    'rouwlied',
    'lied overledene',
    'in memoriam lied',
    'afscheidslied',
    'herdenkingsmuziek',
    'troostlied',
  ],
  openGraph: {
    title: 'Herinneringslied Laten Maken | Herdenkingslied & Rouwlied',
    description: 'Herdenk een dierbare met een persoonlijk herinneringslied - een liefdevolle eerbetoon',
    url: 'https://raiclark.nl/herinneringslied',
  },
};

export default function HerinnеringsliedPage() {
  const relatedServices = [
    { title: 'Lied voor Opa', href: '/lied-voor-opa' },
    { title: 'Lied voor Oma', href: '/lied-voor-oma' },
    { title: 'Muziekcadeau', href: '/muziekcadeau-lied' },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="HERINNERINGSLIED"
        subtitle="Een muzikaal eerbetoon"
        description="Herdenk een dierbare op een manier die recht doet aan het leven dat geleefd is. Een persoonlijk herinneringslied dat troost biedt en mooie herinneringen vasthoudt."
        icon={<Heart className="w-10 h-10 text-white" />}
      />

      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Waarom een herinneringslied?
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Wanneer je iemand verliest, blijven de herinneringen. De verhalen, de grappen, de momenten samen. Het mooiste wat je kunt doen is die herinneringen koesteren en levend houden.
              </p>
              <p>
                Een persoonlijk herinneringslied is een warme, liefdevolle manier om een dierbare te herdenken. Het vertelt over wie deze persoon was, wat hij of zij betekende, en welke mooie herinneringen blijven. Het is geen verdrietig lied, maar een eerbetoon aan een mooi leven.
              </p>
              <p>
                Of je nu een rustig, troostend nummer wilt voor jezelf en de familie, een lied voor tijdens de uitvaart of herdenkingsdienst, of een muzikale herinnering om later te beluisteren: het wordt met respect, warmte en aandacht gemaakt.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Hoe werkt het?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-bright bg-opacity-20 border-2 border-cyan-bright flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-bright font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Deel herinneringen</h3>
                  <p className="text-gray-300">
                    Vertel over de persoon die je verloren hebt. Wat maakte hem of haar bijzonder? Welke momenten koester je? Welke eigenschappen blijven bij? We werken met respect en zorgvuldigheid.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-electric-blue bg-opacity-20 border-2 border-electric-blue flex items-center justify-center flex-shrink-0">
                  <span className="text-electric-blue font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Kies de sfeer</h3>
                  <p className="text-gray-300">
                    Rustig en troostend? Hoopvol en liefdevol? Akoestisch en intiem? We stemmen de muziek af op wat voelt als een passend eerbetoon.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-hot-pink bg-opacity-20 border-2 border-hot-pink flex items-center justify-center flex-shrink-0">
                  <span className="text-hot-pink font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Koester het lied</h3>
                  <p className="text-gray-300">
                    Je ontvangt een hoogwaardige audiofile om te bewaren, te delen met familie, of af te spelen tijdens een herdenkingsmoment. Een blijvende muzikale herinnering.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Voor welke momenten?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Music className="w-8 h-8 text-cyan-bright mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Uitvaart of herdenkingsdienst</h3>
                <p className="text-gray-300">
                  Een persoonlijk lied dat gespeeld wordt tijdens de uitvaart. Een muzikaal eerbetoon dat raakt en past bij de persoon die herdacht wordt.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Heart className="w-8 h-8 text-electric-blue mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Familieherdenking</h3>
                <p className="text-gray-300">
                  Een intiem moment met familie om samen te herdenken. Het lied vertelt het verhaal en brengt mooie herinneringen terug.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Star className="w-8 h-8 text-hot-pink mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Jaarlijkse herdenking</h3>
                <p className="text-gray-300">
                  Een lied om elk jaar opnieuw te beluisteren op de sterfdag of verjaardag. Een troostende herinnering aan een dierbaar persoon.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Sparkles className="w-8 h-8 text-vivid-yellow mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Persoonlijke verwerking</h3>
                <p className="text-gray-300">
                  Een lied voor jezelf, om te helpen bij het verwerken van het verlies en om herinneringen levend te houden.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Bekijk ook
            </h2>
            <div className="flex flex-wrap gap-4">
              {relatedServices.map((service) => (
                <Link key={service.href} href={service.href}>
                  <span className="inline-block px-6 py-3 rounded-lg bg-secondary-black border-2 border-gray-800 hover:border-cyan-bright text-gray-300 hover:text-cyan-bright smooth-transition cursor-pointer">
                    {service.title} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </PageLayout>
  );
}
