import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ContactSection from '@/components/sections/ContactSection';
import { Heart, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lied voor Opa Laten Maken | Persoonlijk Cadeau voor Grootvader | Rai Clark',
  description:
    'Laat een uniek lied voor opa maken. Het perfecte persoonlijke cadeau voor je grootvader. Emotioneel, dankbaar en warm - een lied dat blijft hangen.',
  keywords: [
    'lied voor opa',
    'cadeau voor grootvader',
    'persoonlijk opacadeau',
    'liedje voor opa',
    'opa verjaardag cadeau',
  ],
  openGraph: {
    title: 'Lied voor Opa Laten Maken | Persoonlijk Cadeau voor Grootvader',
    description: 'Verras je opa met een persoonlijk lied',
    url: 'https://raiclark.nl/lied-voor-opa',
  },
};

export default function LiedVoorOpaPage() {
  const relatedServices = [
    { title: 'Lied voor Oma', href: '/lied-voor-oma' },
    { title: 'Verjaardagslied', href: '/verjaardag-lied' },
    { title: 'Herinneringslied', href: '/herinneringslied' },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="LIED VOOR OPA"
        subtitle="Voor Jouw Grootvader"
        description="Je opa heeft zoveel mooie verhalen, wijze lessen en warme herinneringen. Tijd om dat te vieren met een persoonlijk lied."
        icon={<Heart className="w-10 h-10 text-white" />}
      />

      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Waarom een Lied voor Opa?
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Je opa heeft altijd tijd voor je gemaakt. Hij heeft je verhalen verteld, knutselprojecten met je gedaan, je ijsjes gekocht, en je wijze adviezen gegeven die je nu pas begint te begrijpen. Hij verdient meer dan een standaard cadeau.
              </p>
              <p>
                Een persoonlijk lied voor opa is het ultieme cadeau. Een lied dat zijn levensverhaal viert, zijn grappige gewoontes benoemt, de mooie momenten die jullie samen hebben gedeeld vastlegt. Of het nu gaat om zijn 80e verjaardag, een jubileum, of gewoon omdat je hem wilt laten weten hoeveel hij betekent.
              </p>
              <p>
                Het kan emotioneel en ontroerend zijn, vol dankbaarheid en liefde. Het kan ook luchtig en grappig zijn, met herkenbare situaties en inside jokes. Wat past bij jouw opa, dat maken we.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Hoe Werkt Het?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-electric-blue bg-opacity-20 border-2 border-electric-blue flex items-center justify-center flex-shrink-0">
                  <span className="text-electric-blue font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Vertel Over Je Opa</h3>
                  <p className="text-gray-300">
                    Wat maakt je opa bijzonder? Welke herinneringen koester je? Heeft hij typische uitspraken of grappige gewoontes? Vertel me zijn verhaal, dan maak ik daar muziek van.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-bright bg-opacity-20 border-2 border-cyan-bright flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-bright font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Kies de Toon</h3>
                  <p className="text-gray-300">
                    Moet het rustig en emotioneel zijn? Vrolijk en feestelijk? Een combinatie? We stemmen de muziekstijl af op wat bij je opa past.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-hot-pink bg-opacity-20 border-2 border-hot-pink flex items-center justify-center flex-shrink-0">
                  <span className="text-hot-pink font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Verras Je Opa</h3>
                  <p className="text-gray-300">
                    Draai het lied af tijdens zijn verjaardag, jubileum, of gewoon tijdens een gezellig bezoek. Zie zijn ontroering wanneer hij beseft dat je dit speciaal voor hem hebt laten maken.
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
                <Clock className="w-8 h-8 text-electric-blue mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Verjaardag</h3>
                <p className="text-gray-300">
                  Vooral voor bijzondere mijlpalen: 75 jaar, 80 jaar, 85 jaar. Een lied dat zijn levensverhaal viert.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Heart className="w-8 h-8 text-hot-pink mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Jubileum</h3>
                <p className="text-gray-300">
                  50 jaar getrouwd? 60 jaar? Een lied dat zijn huwelijk en levensverhaal samen met oma viert.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Heart className="w-8 h-8 text-cyan-bright mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Herinneringslied</h3>
                <p className="text-gray-300">
                  Een lied ter nagedachtenis. Rustig, respectvol en liefdevol. Om zijn verhaal en nalatenschap vast te leggen.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Clock className="w-8 h-8 text-vivid-yellow mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Zomaar</h3>
                <p className="text-gray-300">
                  Gewoon om te laten zien hoeveel je om hem geeft. Geen speciale gelegenheid nodig om je opa te verrassen.
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
                  <span className="inline-block px-6 py-3 rounded-lg bg-secondary-black border-2 border-gray-800 hover:border-electric-blue text-gray-300 hover:text-electric-blue smooth-transition cursor-pointer">
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
