import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ContactSection from '@/components/sections/ContactSection';
import { Cake, PartyPopper, Music } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Verjaardagslied Laten Maken | Persoonlijk Verjaardagscadeau | Rai Clark',
  description:
    'Laat een uniek verjaardagslied maken! Het perfecte persoonlijke cadeau voor elke verjaardag. Grappig, emotioneel of feestelijk - jij bepaalt. Verras de jarige met een liedje dat blijft hangen.',
  keywords: [
    'verjaardagslied',
    'verjaardag cadeau',
    'persoonlijk verjaardagscadeau',
    'liedje voor verjaardag',
    'verjaardagsliedje laten maken',
    'origineel verjaardagscadeau',
    'muziek cadeau verjaardag',
  ],
  openGraph: {
    title: 'Verjaardagslied Laten Maken | Persoonlijk Cadeau',
    description: 'Het perfecte verjaardagscadeau: een persoonlijk liedje speciaal voor de jarige',
    url: 'https://raiclark.nl/verjaardag-lied',
  },
};

export default function VerjaardagLiedPage() {
  const relatedServices = [
    { title: 'Lied voor Opa', href: '/lied-voor-opa' },
    { title: 'Lied voor Oma', href: '/lied-voor-oma' },
    { title: 'Vriendschapslied', href: '/vriendschap-lied' },
    { title: 'Feestlied', href: '/feest-lied' },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="VERJAARDAGSLIED"
        subtitle="Het Perfecte Cadeau"
        description="Vergeet standaard cadeaus. Een persoonlijk verjaardagslied is het ultieme cadeau dat niemand verwacht maar iedereen onthoudt."
        icon={<Cake className="w-10 h-10 text-white" />}
      />

      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Waarom een Verjaardagslied?
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Weet je nog wat je vorig jaar cadeau kreeg voor je verjaardag? Waarschijnlijk niet. Maar een persoonlijk liedje? Dat vergeet je nooit.
              </p>
              <p>
                Een verjaardagslied is het cadeau dat blijft hangen. Het is grappig, emotioneel, verrassend en 100% uniek. Of je nu een hilarisch nummer wilt voor je beste vriend, een ontroerend lied voor je oma's 80e, of een feestelijke track voor een grote mijlpaal: het kan allemaal.
              </p>
              <p>
                Ik verwerk inside jokes, mooie herinneringen, bijzondere eigenschappen en grappige anekdotes in een professioneel geproduceerd liedje. Het resultaat? Een cadeau waar mensen nog jaren over napraten.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Hoe Werkt Het?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-vivid-yellow bg-opacity-20 border-2 border-vivid-yellow flex items-center justify-center flex-shrink-0">
                  <span className="text-vivid-yellow font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Vertel Over de Jarige</h3>
                  <p className="text-gray-300">
                    Wat maakt deze persoon bijzonder? Welke inside jokes zijn er? Wat zijn leuke eigenschappen, grappige gewoontes of mooie herinneringen? Hoe meer details, hoe leuker het lied.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-hot-pink bg-opacity-20 border-2 border-hot-pink flex items-center justify-center flex-shrink-0">
                  <span className="text-hot-pink font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Kies de Toon</h3>
                  <p className="text-gray-300">
                    Moet het grappig zijn? Emotioneel? Feestelijk? Een uptempo knaller of een rustige akoestische ballade? We stemmen de stijl af op de jarige en de sfeer van het feest.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-electric-blue bg-opacity-20 border-2 border-electric-blue flex items-center justify-center flex-shrink-0">
                  <span className="text-electric-blue font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Verras de Jarige</h3>
                  <p className="text-gray-300">
                    Draai het lied af tijdens het feest en zie de reacties. Je krijgt een hoogwaardige audiofile die je kunt afspelen, delen of zelfs op vinyl laten persen als ultiem cadeau.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Voor Elke Leeftijd & Sfeer
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <PartyPopper className="w-8 h-8 text-vivid-yellow mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Grappige Verjaardagsliedjes</h3>
                <p className="text-gray-300">
                  Vol inside jokes, rare verhalen en humoristische teksten. Perfect voor vrienden, collega's of familieleden met gevoel voor humor.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Music className="w-8 h-8 text-hot-pink mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Emotionele Verjaardagsliedjes</h3>
                <p className="text-gray-300">
                  Voor bijzondere mijlpalen: 50 jaar, 80 jaar, of gewoon om te laten zien hoeveel iemand voor je betekent. Ontroerend en oprecht.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Cake className="w-8 h-8 text-cyan-bright mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Kinderverjaardagen</h3>
                <p className="text-gray-300">
                  Een vrolijk, speels liedje voor kinderen. Met hun favoriete dingen, dromen en grappige eigenschappen verwerkt in de tekst.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <PartyPopper className="w-8 h-8 text-electric-blue mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Feestelijke Uptempo Tracks</h3>
                <p className="text-gray-300">
                  Een echte party starter. Uptempo, energiek, perfect om het feest mee te openen en iedereen direct in de stemming te krijgen.
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
                  <span className="inline-block px-6 py-3 rounded-lg bg-secondary-black border-2 border-gray-800 hover:border-vivid-yellow text-gray-300 hover:text-vivid-yellow smooth-transition cursor-pointer">
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
