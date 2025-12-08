import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ContactSection from '@/components/sections/ContactSection';
import { Heart, Music, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Trouwdaglied laten maken | Unieke bruiloftsmuziek',
  description:
    'Laat een persoonlijk trouwdaglied maken voor jullie grote dag. Van first dance song tot ceremoniemuziek. Romantische, professionele bruiloftsmuziek die jullie verhaal vertelt.',
  keywords: [
    'trouwdaglied',
    'bruiloftslied',
    'trouwmuziek',
    'first dance song',
    'huwelijkslied',
    'bruiloft muziek op maat',
    'persoonlijke trouwsong',
  ],
  openGraph: {
    title: 'Trouwdaglied Laten Maken | Unieke Bruiloftsmuziek',
    description: 'Maak jullie bruiloft onvergetelijk met een persoonlijk trouwdaglied',
    url: 'https://raiclark.nl/trouwdag-lied',
  },
};

export default function TrouwdagLiedPage() {
  const relatedServices = [
    { title: 'Romantisch Lied', href: '/romantisch-lied' },
    { title: 'Jubileumlied', href: '/lied-laten-maken' },
    { title: 'Vriendschapslied', href: '/vriendschap-lied' },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="TROUWDAGLIED"
        subtitle="Muziek voor jullie grote dag"
        description="Jullie liefdesverhaal verdient een eigen soundtrack. Een persoonlijk trouwdaglied dat jullie reis samen viert en voor altijd blijft hangen."
        icon={<Heart className="w-10 h-10 text-white" />}
      />

      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Waarom een trouwdaglied?
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Je bruiloft is de belangrijkste dag van je leven. De locatie is perfect, het eten is geregeld, de bloemen staan klaar. Maar wat als je ook een liedje had dat precies jullie verhaal vertelt?
              </p>
              <p>
                Een persoonlijk trouwdaglied is meer dan achtergrondmuziek. Het is een cadeau aan elkaar, een herinnering voor later, en een moment waarover gasten nog jaren napraten. Stel je voor: jullie lopen binnen op een lied dat gaat over jullie eerste date, jullie inside jokes, jullie reis samen.
              </p>
              <p>
                Het maakt niet uit of je een romantische ballade wilt voor de first dance, een vrolijke uptempo track voor de ceremonie, of een emotioneel akoestisch nummer voor het moment dat jullie elkaar het ja-woord geven. Ik maak precies wat bij jullie past.
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
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Vertel jullie verhaal</h3>
                  <p className="text-gray-300">
                    Hoe hebben jullie elkaar ontmoet? Wat maakt jullie relatie bijzonder? Welke inside jokes, mooie momenten of grappige anekdotes willen jullie in het lied? Hoe meer ik weet, hoe persoonlijker het wordt.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-electric-blue bg-opacity-20 border-2 border-electric-blue flex items-center justify-center flex-shrink-0">
                  <span className="text-electric-blue font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Kies stijl en sfeer</h3>
                  <p className="text-gray-300">
                    Romantische singer-songwriter? Uptempo pop? Jazzy crooner stijl? Akoestische gitaar? We stemmen de muziekstijl af op jullie smaak en het moment waarop het gespeeld wordt.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-bright bg-opacity-20 border-2 border-cyan-bright flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-bright font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Ontvang en verras</h3>
                  <p className="text-gray-300">
                    Je krijgt eerst een demo om feedback op te geven. Na goedkeuring ontvang je de finale versie in topkwaliteit, klaar om af te spelen op jullie bruiloft of te delen met gasten.
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
                <Music className="w-8 h-8 text-hot-pink mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">First Dance</h3>
                <p className="text-gray-300">
                  De openingsdans. Het moment dat alle ogen op jullie zijn. Maak het onvergetelijk met een lied dat écht over jullie gaat.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Sparkles className="w-8 h-8 text-cyan-bright mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Binnenkomst</h3>
                <p className="text-gray-300">
                  Jullie entree. Een uptempo nummer dat de toon zet en gasten direct enthousiast maakt.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Heart className="w-8 h-8 text-electric-blue mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Ceremonie</h3>
                <p className="text-gray-300">
                  Een emotioneel moment tijdens de ceremonie. Perfect voor het uitwisselen van geloften of ringen.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Music className="w-8 h-8 text-vivid-yellow mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Cadeau voor partner</h3>
                <p className="text-gray-300">
                  Verras je partner met een zelfgeschreven lied als ultiem huwelijkscadeau.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Andere gelegenheden
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
