import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ContactSection from '@/components/sections/ContactSection';
import { Heart, Flower2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Moederdaglied Laten Maken | Persoonlijk Cadeau voor Mama | Rai Clark',
  description:
    'Laat een uniek moederdaglied maken voor je moeder. Het perfecte persoonlijke cadeau voor Moederdag. Emotioneel, dankbaar en lief - een lied dat blijft hangen.',
  keywords: [
    'moederdaglied',
    'lied voor moeder',
    'moederdag cadeau',
    'persoonlijk moederdagscadeau',
    'liedje voor mama',
    'origineel moederdag cadeau',
  ],
  openGraph: {
    title: 'Moederdaglied Laten Maken | Persoonlijk Cadeau voor Mama',
    description: 'Verras je moeder met een persoonlijk lied voor Moederdag',
    url: 'https://raiclark.nl/moederdag-lied',
  },
};

export default function MoederdagLiedPage() {
  const relatedServices = [
    { title: 'Vaderdaglied', href: '/vaderdag-lied' },
    { title: 'Verjaardagslied', href: '/verjaardag-lied' },
    { title: 'Lied voor Oma', href: '/lied-voor-oma' },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="MOEDERDAGLIED"
        subtitle="Voor de Beste Moeder"
        description="Je moeder heeft alles voor je gedaan. Tijd om te laten zien hoeveel ze betekent met een persoonlijk moederdaglied."
        icon={<Heart className="w-10 h-10 text-white" />}
      />

      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Waarom een Moederdaglied?
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Bloemen zijn mooi, chocolade is lekker, maar je moeder krijgt dat elk jaar. Ze verdient iets dat echt bijzonder is. Iets dat laat zien hoeveel ze voor je betekent.
              </p>
              <p>
                Een persoonlijk moederdaglied is het ultieme cadeau. Een lied dat gaat over haar warme omhelzingen, haar wijze adviezen, de keren dat ze er voor je was wanneer je haar nodig had. Over de kleine dingen die alleen jullie samen delen.
              </p>
              <p>
                Het kan emotioneel zijn, vol dankbaarheid en liefde. Het kan ook luchtig en grappig zijn, met herkenbare momenten en inside jokes. Of een combinatie van beide. Wat past bij jullie band, dat maken we.
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
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Vertel Over Je Moeder</h3>
                  <p className="text-gray-300">
                    Wat maakt je moeder bijzonder? Welke herinneringen zijn onvergetelijk? Wat zou je haar willen zeggen in een lied? Hoe meer persoonlijke details, hoe mooier het wordt.
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
                    Moet het ontroerend zijn? Warm en lief? Met een vleugje humor? We stemmen de muziekstijl en toon af op wat bij jullie relatie past.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-bright bg-opacity-20 border-2 border-cyan-bright flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-bright font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Verras Je Moeder</h3>
                  <p className="text-gray-300">
                    Geef het lied cadeau op Moederdag, haar verjaardag, of zomaar. Zie haar gezicht wanneer ze beseft dat je een heel lied speciaal voor haar hebt laten maken.
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
                <Heart className="w-8 h-8 text-hot-pink mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Moederdag</h3>
                <p className="text-gray-300">
                  Het perfecte moederdagcadeau. Veel bijzonderder dan weer een bos bloemen of een doos bonbons.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Flower2 className="w-8 h-8 text-cyan-bright mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Verjaardag</h3>
                <p className="text-gray-300">
                  Een bijzondere mijlpaal? 50 jaar, 60 jaar? Maak het onvergetelijk met een persoonlijk lied vol dankbaarheid.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Heart className="w-8 h-8 text-electric-blue mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Pensioen</h3>
                <p className="text-gray-300">
                  Gaat je moeder met pensioen? Een mooi moment om te vieren en te laten zien hoeveel je waardeert wat ze altijd voor je heeft gedaan.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Flower2 className="w-8 h-8 text-vivid-yellow mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Zomaar</h3>
                <p className="text-gray-300">
                  Gewoon om te laten zien hoeveel je om haar geeft. Geen speciale gelegenheid nodig om je moeder te verrassen.
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
