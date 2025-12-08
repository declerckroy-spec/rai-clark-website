import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ContactSection from '@/components/sections/ContactSection';
import { Briefcase, Music, Users, Heart } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Afscheidslied Collega Laten Maken | Persoonlijk Afscheidscadeau | Rai Clark',
  description:
    'Laat een persoonlijk afscheidslied maken voor een vertrekkende collega. Het perfecte afscheidscadeau dat blijft hangen. Grappig, emotioneel of feestelijk - jij bepaalt de toon.',
  keywords: [
    'afscheidslied collega',
    'afscheidscadeau collega',
    'lied collega',
    'afscheid werk',
    'persoonlijk afscheidscadeau',
    'afscheidsliedje maken',
    'origineel afscheidscadeau',
  ],
  openGraph: {
    title: 'Afscheidslied Collega Laten Maken | Persoonlijk Cadeau',
    description: 'Maak het afscheid onvergetelijk met een persoonlijk lied voor een vertrekkende collega',
    url: 'https://raiclark.nl/afscheid-collega-lied',
  },
};

export default function AfscheidCollegaLiedPage() {
  const relatedServices = [
    { title: 'Pensioenlied', href: '/pensioen-lied' },
    { title: 'Vriendschapslied', href: '/vriendschap-lied' },
    { title: 'Verjaardagslied', href: '/verjaardag-lied' },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="AFSCHEID COLLEGA"
        subtitle="Een Afscheid om Nooit te Vergeten"
        description="Een collega vertrekt. Geef geen standaard kaart, maar een persoonlijk afscheidslied vol inside jokes, mooie herinneringen en de eigenschappen waar iedereen hem of haar om kent."
        icon={<Briefcase className="w-10 h-10 text-white" />}
      />

      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Waarom een Afscheidslied?
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Een collega vertrekt. Jullie hebben jaren samengewerkt, gelachen om dezelfde dingen, deadlines gehaald, en koffie gedronken bij de automaat. En nu is het afscheid.
              </p>
              <p>
                Een standaard kaart met handtekeningen is prima. Maar een persoonlijk afscheidslied? Dat is iets wat niemand verwacht en wat blijft hangen. Het vat samen wat deze persoon bijzonder maakte: de grappige gewoontes, de legendarische momenten, de eigenschappen die het team gaat missen.
              </p>
              <p>
                Of je nu een humoristisch lied wilt vol kantoorgrappen, een emotioneel nummer dat de samenwerking viert, of een feestelijke track voor het afscheidsborrel: het wordt precies wat past bij de collega en het team.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Hoe Werkt Het?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-hot-pink bg-opacity-20 border-2 border-hot-pink flex items-center justify-center flex-shrink-0">
                  <span className="text-hot-pink font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Verzamel Team Input</h3>
                  <p className="text-gray-300">
                    Vraag collega's om anekdotes, grappige momenten en inside jokes. Wat maakt deze persoon bijzonder? Wat gaat het team missen? Wat zijn de meest legendarische momenten?
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-electric-blue bg-opacity-20 border-2 border-electric-blue flex items-center justify-center flex-shrink-0">
                  <span className="text-electric-blue font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Kies de Sfeer</h3>
                  <p className="text-gray-300">
                    Grappig en relativerend? Emotioneel en dankbaar? Feestelijk en energiek? We stemmen de stijl af op de collega en de cultuur van jullie team.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-bright bg-opacity-20 border-2 border-cyan-bright flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-bright font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Verras bij het Afscheid</h3>
                  <p className="text-gray-300">
                    Speel het lied af tijdens het afscheidsmoment en zie de reacties. Je krijgt een hoogwaardige audiofile om te delen met het hele team als blijvende herinnering.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Voor Welke Momenten?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Users className="w-8 h-8 text-hot-pink mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Nieuwe Baan</h3>
                <p className="text-gray-300">
                  Een collega gaat voor een nieuwe uitdaging. Vier de mooie tijd samen en geef een cadeau dat de samenwerking eert.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Briefcase className="w-8 h-8 text-electric-blue mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Reorganisatie</h3>
                <p className="text-gray-300">
                  Iemand vertrekt door reorganisatie. Laat zien dat de samenwerking gewaardeerd werd met een oprecht en persoonlijk lied.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Heart className="w-8 h-8 text-cyan-bright mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Emigratie</h3>
                <p className="text-gray-300">
                  Een collega vertrekt naar het buitenland. Geef een muzikaal cadeau dat de herinneringen vastlegt en overal mee kan.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Music className="w-8 h-8 text-vivid-yellow mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Afscheidsborrel</h3>
                <p className="text-gray-300">
                  Het officiële afscheidsmoment op kantoor. Draai het lied af en maak het een feest om nooit te vergeten.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Bekijk Ook
            </h2>
            <div className="flex flex-wrap gap-4">
              {relatedServices.map((service) => (
                <Link key={service.href} href={service.href}>
                  <span className="inline-block px-6 py-3 rounded-lg bg-secondary-black border-2 border-gray-800 hover:border-hot-pink text-gray-300 hover:text-hot-pink smooth-transition cursor-pointer">
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
