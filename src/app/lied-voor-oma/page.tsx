import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ContactSection from '@/components/sections/ContactSection';
import { Heart, Flower2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lied voor Oma Laten Maken | Persoonlijk Cadeau voor Grootmoeder | Rai Clark',
  description:
    'Laat een uniek lied voor oma maken. Het perfecte persoonlijke cadeau voor je grootmoeder. Emotioneel, liefdevol en warm - een lied dat blijft hangen.',
  keywords: [
    'lied voor oma',
    'cadeau voor grootmoeder',
    'persoonlijk omacadeau',
    'liedje voor oma',
    'oma verjaardag cadeau',
  ],
  openGraph: {
    title: 'Lied voor Oma Laten Maken | Persoonlijk Cadeau voor Grootmoeder',
    description: 'Verras je oma met een persoonlijk lied',
    url: 'https://raiclark.nl/lied-voor-oma',
  },
};

export default function LiedVoorOmaPage() {
  const relatedServices = [
    { title: 'Lied voor Opa', href: '/lied-voor-opa' },
    { title: 'Moederdaglied', href: '/moederdag-lied' },
    { title: 'Herinneringslied', href: '/herinneringslied' },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="LIED VOOR OMA"
        subtitle="Voor Jouw Grootmoeder"
        description="Je oma heeft zoveel liefde, warmte en wijsheid gegeven. Tijd om dat te vieren met een persoonlijk lied speciaal voor haar."
        icon={<Flower2 className="w-10 h-10 text-white" />}
      />

      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Waarom een Lied voor Oma?
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Je oma heeft altijd koekjes voor je klaar, luistert naar je verhalen, en geeft je het gevoel dat je de belangrijkste persoon ter wereld bent. Haar omhelzingen zijn warm, haar wijsheid is tijdloos, en haar liefde is onvoorwaardelijk. Ze verdient een cadeau dat net zo bijzonder is.
              </p>
              <p>
                Een persoonlijk lied voor oma is het ultieme cadeau. Een lied dat haar levensverhaal viert, de mooie momenten die jullie samen hebben gedeeld vastlegt, haar warme karakter benoemd. Perfect voor haar verjaardag, een jubileum, of gewoon omdat je haar wilt laten weten hoeveel ze betekent.
              </p>
              <p>
                Het kan emotioneel en ontroerend zijn, vol dankbaarheid en liefde. Het kan ook luchtig en vrolijk zijn, met herkenbare situaties over haar thee, haar breiwerk, of de lekkere koekjes die ze altijd bakt. Wat past bij jouw oma, dat maken we.
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
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Vertel Over Je Oma</h3>
                  <p className="text-gray-300">
                    Wat maakt je oma bijzonder? Welke herinneringen koester je? Heeft ze typische gewoontes, uitspraken of recepten? Hoe meer details, hoe persoonlijker het lied.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-bright bg-opacity-20 border-2 border-cyan-bright flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-bright font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Kies de Sfeer</h3>
                  <p className="text-gray-300">
                    Moet het rustig en emotioneel zijn? Vrolijk en warm? Een combinatie? We stemmen de muziekstijl af op wat bij je oma past.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-electric-blue bg-opacity-20 border-2 border-electric-blue flex items-center justify-center flex-shrink-0">
                  <span className="text-electric-blue font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Verras Je Oma</h3>
                  <p className="text-gray-300">
                    Draai het lied af tijdens haar verjaardag, bij de koffie, of tijdens een familiebijeenkomst. Zie haar ontroering wanneer ze beseft dat je dit speciaal voor haar hebt laten maken.
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
                <Flower2 className="w-8 h-8 text-hot-pink mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Verjaardag</h3>
                <p className="text-gray-300">
                  Vooral voor bijzondere mijlpalen: 75 jaar, 80 jaar, 85 jaar. Een lied dat haar levensverhaal en wijsheid viert.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Heart className="w-8 h-8 text-cyan-bright mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Jubileum</h3>
                <p className="text-gray-300">
                  50 jaar getrouwd? 60 jaar? Een lied dat haar huwelijk en mooie leven samen met opa viert.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Heart className="w-8 h-8 text-electric-blue mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Herinneringslied</h3>
                <p className="text-gray-300">
                  Een lied ter nagedachtenis. Rustig, respectvol en vol liefde. Om haar verhaal en warme persoonlijkheid vast te leggen.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Flower2 className="w-8 h-8 text-vivid-yellow mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Zomaar</h3>
                <p className="text-gray-300">
                  Gewoon om te laten zien hoeveel je om haar geeft. Geen speciale gelegenheid nodig om je oma te verrassen.
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
