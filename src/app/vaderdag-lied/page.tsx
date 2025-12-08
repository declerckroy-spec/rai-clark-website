import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ContactSection from '@/components/sections/ContactSection';
import { Heart, Users } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vaderdaglied Laten Maken | Persoonlijk Cadeau voor Papa | Rai Clark',
  description:
    'Laat een uniek vaderdaglied maken voor je vader. Het perfecte persoonlijke cadeau voor Vaderdag. Emotioneel, grappig of dankbaar - een lied dat blijft hangen.',
  keywords: [
    'vaderdaglied',
    'lied voor vader',
    'vaderdag cadeau',
    'persoonlijk vaderdagscadeau',
    'liedje voor papa',
    'origineel vaderdag cadeau',
  ],
  openGraph: {
    title: 'Vaderdaglied Laten Maken | Persoonlijk Cadeau voor Papa',
    description: 'Verras je vader met een persoonlijk lied voor Vaderdag',
    url: 'https://raiclark.nl/vaderdag-lied',
  },
};

export default function VaderdagLiedPage() {
  const relatedServices = [
    { title: 'Moederdaglied', href: '/moederdag-lied' },
    { title: 'Verjaardagslied', href: '/verjaardag-lied' },
    { title: 'Lied voor Opa', href: '/lied-voor-opa' },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="VADERDAGLIED"
        subtitle="Voor de Beste Vader"
        description="Je vader heeft altijd voor jou klaargestaan. Tijd om te laten zien hoeveel hij betekent met een persoonlijk vaderdaglied."
        icon={<Heart className="w-10 h-10 text-white" />}
      />

      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Waarom een Vaderdaglied?
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Een das? Sokken? Een bierpakket? Je vader verdient beter. Hij heeft je leren fietsen, je geholpen met klussen, altijd tijd voor je gemaakt (ook al had hij het druk), en is er voor je geweest op momenten dat je hem echt nodig had.
              </p>
              <p>
                Een persoonlijk vaderdaglied is het cadeau dat laat zien hoeveel je om hem geeft. Een lied over de mooie herinneringen, zijn grappige gewoontes, zijn wijze adviezen, of gewoon over hoe blij je bent dat hij je vader is.
              </p>
              <p>
                Het kan emotioneel zijn, vol dankbaarheid en liefde. Het kan ook grappig zijn, vol inside jokes en herkenbare situaties. Of iets ertussenin. Wat past bij jullie relatie, dat maken we.
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
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Vertel Over Je Vader</h3>
                  <p className="text-gray-300">
                    Wat maakt je vader bijzonder? Welke herinneringen zijn onvergetelijk? Heeft hij grappige gewoontes of typische uitspraken? Wat zou je hem willen zeggen in een lied?
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
                    Moet het emotioneel en dankbaar zijn? Grappig en luchtig? Een combinatie? We stemmen de stijl af op wat bij jullie relatie past.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-bright bg-opacity-20 border-2 border-cyan-bright flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-bright font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Verras Je Vader</h3>
                  <p className="text-gray-300">
                    Geef het lied cadeau op Vaderdag, zijn verjaardag, of zomaar. Zie zijn gezicht wanneer hij beseft dat je een heel lied speciaal voor hem hebt laten maken.
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
                <Heart className="w-8 h-8 text-electric-blue mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Vaderdag</h3>
                <p className="text-gray-300">
                  Het perfecte vaderdagcadeau. Veel beter dan weer een nieuwe das of een fles whisky.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Users className="w-8 h-8 text-hot-pink mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Verjaardag</h3>
                <p className="text-gray-300">
                  Een bijzondere mijlpaal? 50 jaar, 60 jaar, 70 jaar? Maak het onvergetelijk met een persoonlijk lied.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Heart className="w-8 h-8 text-cyan-bright mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Pensioen</h3>
                <p className="text-gray-300">
                  Gaat je vader met pensioen? Een mooi moment om te vieren met een persoonlijk lied vol dankbaarheid.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Users className="w-8 h-8 text-vivid-yellow mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Zomaar</h3>
                <p className="text-gray-300">
                  Gewoon om te laten zien hoeveel je om hem geeft. Geen speciale gelegenheid nodig.
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
