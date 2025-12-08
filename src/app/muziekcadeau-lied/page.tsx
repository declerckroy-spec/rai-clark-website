import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ContactSection from '@/components/sections/ContactSection';
import { Gift, Music, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Muziekcadeau laten maken: persoonlijk lied',
  description:
    'Laat een uniek lied maken als cadeau voor iemand die je dierbaar is. Het meest persoonlijke cadeau voor elke gelegenheid. Een lied dat blijft hangen en altijd herinnerd wordt.',
  keywords: [
    'muziekcadeau',
    'lied cadeau',
    'persoonlijk cadeau',
    'origineel cadeau',
    'lied laten maken cadeau',
    'uniek cadeau',
    'muziek cadeau',
    'song als cadeau',
  ],
  openGraph: {
    title: 'Muziekcadeau Laten Maken | Persoonlijk Lied als Cadeau',
    description: 'Het meest persoonlijke cadeau: een lied speciaal gemaakt voor iemand die je dierbaar is',
    url: 'https://raiclark.nl/muziekcadeau-lied',
  },
};

export default function MuziekcadeauLiedPage() {
  const relatedServices = [
    { title: 'Verjaardagslied', href: '/verjaardag-lied' },
    { title: 'Romantisch Lied', href: '/romantisch-lied' },
    { title: 'Vriendschapslied', href: '/vriendschap-lied' },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="MUZIEKCADEAU"
        subtitle="Het cadeau dat blijft"
        description="Een cadeau vinden dat écht bijzonder is? Maak een persoonlijk lied. Voor elke gelegenheid, voor iedereen die je dierbaar is. Het meest originele cadeau dat blijft hangen."
        icon={<Gift className="w-10 h-10 text-white" />}
      />

      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Waarom muziek als cadeau?
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Standaard cadeaus zijn prima. Maar een persoonlijk lied? Dat is iets wat niemand verwacht en wat blijft hangen voor altijd.
              </p>
              <p>
                Een muziekcadeau is het meest persoonlijke cadeau dat je kunt geven. Het vertelt een verhaal: over de persoon, jullie band, mooie herinneringen, grappige momenten. Het laat horen hoeveel iemand voor je betekent, op een manier die woorden alleen niet kunnen.
              </p>
              <p>
                Perfect voor elke gelegenheid: verjaardagen, jubilea, afscheid, bedankt zeggen, of gewoon omdat je iemand wilt verrassen. Of het nu een emotioneel lied is, een grappig nummer, of een uptempo track: het wordt precies wat past bij de persoon en het moment.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Hoe werkt het?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-hot-pink bg-opacity-20 border-2 border-hot-pink flex items-center justify-center flex-shrink-0">
                  <span className="text-hot-pink font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Vertel over de persoon</h3>
                  <p className="text-gray-300">
                    Wie is de persoon? Wat maakt hem of haar bijzonder? Welke herinneringen hebben jullie? Wat wil je zeggen met dit cadeau? Hoe meer je deelt, hoe persoonlijker het lied.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-electric-blue bg-opacity-20 border-2 border-electric-blue flex items-center justify-center flex-shrink-0">
                  <span className="text-electric-blue font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Kies de stijl</h3>
                  <p className="text-gray-300">
                    Emotioneel en ontroerend? Grappig en luchtig? Uptempo en energiek? We stemmen de muziekstijl af op de persoon en de boodschap die je wilt overbrengen.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-bright bg-opacity-20 border-2 border-cyan-bright flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-bright font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Geef en verras</h3>
                  <p className="text-gray-300">
                    Je krijgt een professioneel geproduceerd lied in topkwaliteit. Geef het cadeau en zie de reactie. Een moment om nooit te vergeten.
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
                <Gift className="w-8 h-8 text-hot-pink mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Verjaardag</h3>
                <p className="text-gray-300">
                  Het meest originele verjaardagscadeau: een persoonlijk lied dat de jarige nog jaren later beluistert.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Heart className="w-8 h-8 text-electric-blue mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Dank je wel</h3>
                <p className="text-gray-300">
                  Een muzikale manier om iemand te bedanken. Voor een leraar, mentor, vriend, of iemand die er voor je was.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Sparkles className="w-8 h-8 text-cyan-bright mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Jubileum of mijlpaal</h3>
                <p className="text-gray-300">
                  Vier een bijzondere mijlpaal met een lied: 25 jaar samen, afstuderen, promotie, of een ander belangrijk moment.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Music className="w-8 h-8 text-vivid-yellow mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Zomaar</h3>
                <p className="text-gray-300">
                  Geen speciale gelegenheid nodig. Gewoon omdat je iemand wilt verrassen en laten zien hoeveel hij of zij betekent.
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
