import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ContactSection from '@/components/sections/ContactSection';
import { Heart, Users, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vriendschapslied Laten Maken | Cadeau voor Beste Vriend | Rai Clark',
  description:
    'Laat een persoonlijk vriendschapslied maken voor je beste vriend of vriendin. Het perfecte cadeau om jullie vriendschap te vieren. Emotioneel, grappig of gewoon omdat het kan.',
  keywords: [
    'vriendschapslied',
    'lied voor beste vriend',
    'vriendschapscadeau',
    'cadeau beste vriend',
    'persoonlijk vriendschapslied',
    'liedje voor vrienden',
  ],
  openGraph: {
    title: 'Vriendschapslied Laten Maken | Cadeau voor Beste Vriend',
    description: 'Vier jullie vriendschap met een persoonlijk liedje',
    url: 'https://raiclark.nl/vriendschap-lied',
  },
};

export default function VriendschapLiedPage() {
  const relatedServices = [
    { title: 'Verjaardagslied', href: '/verjaardag-lied' },
    { title: 'Muziekcadeau', href: '/muziekcadeau-lied' },
    { title: 'Feestlied', href: '/feest-lied' },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="VRIENDSCHAPSLIED"
        subtitle="Voor Je Beste Vriend of Vriendin"
        description="Jullie delen inside jokes, avonturen en onvergetelijke momenten. Maak het compleet met een persoonlijk vriendschapslied."
        icon={<Users className="w-10 h-10 text-white" />}
      />

      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Waarom een Vriendschapslied?
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Je beste vriend verdient meer dan een standaard cadeau. Jullie hebben samen gelachen, gehuild, gekke dingen gedaan en elkaar door moeilijke tijden heen geholpen. Dat verdient een cadeau dat net zo uniek is als jullie vriendschap.
              </p>
              <p>
                Een vriendschapslied is het perfecte cadeau voor een verjaardag, een afscheid, of gewoon zomaar omdat je wilt laten zien hoeveel iemand voor je betekent. Vol inside jokes, mooie herinneringen en momenten die alleen jullie begrijpen.
              </p>
              <p>
                Het maakt niet uit of je een grappig nummer wilt over jullie meest absurde avonturen, een emotioneel lied dat laat zien hoeveel jullie vriendschap betekent, of een uptempo feesttrack die jullie samen kunt draaien: alles is mogelijk.
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
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Vertel Jullie Verhaal</h3>
                  <p className="text-gray-300">
                    Hoe hebben jullie elkaar ontmoet? Welke inside jokes zijn er? Wat zijn de meest memorabele momenten? Waar hebben jullie samen om gelachen of gehuild? Hoe meer ik weet, hoe persoonlijker het wordt.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-electric-blue bg-opacity-20 border-2 border-electric-blue flex items-center justify-center flex-shrink-0">
                  <span className="text-electric-blue font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Kies de Vibe</h3>
                  <p className="text-gray-300">
                    Moet het lied grappig zijn? Emotioneel? Een uptempo party track? We stemmen de muziekstijl, toon en sfeer samen af zodat het perfect past bij jullie vriendschap.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-bright bg-opacity-20 border-2 border-cyan-bright flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-bright font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Verras Je Vriend</h3>
                  <p className="text-gray-300">
                    Je ontvangt het lied in topkwaliteit. Draai het af tijdens een verjaardagsfeest, stuur het als verrassing, of deel het gewoon omdat je wilt laten zien hoeveel je om elkaar geeft.
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
                <h3 className="font-display font-bold text-xl mb-2 text-white">Verjaardag</h3>
                <p className="text-gray-300">
                  Het perfecte verjaardagscadeau voor je beste vriend. Beter dan een fles wijn of een cadeaubon.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Sparkles className="w-8 h-8 text-cyan-bright mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Afscheid</h3>
                <p className="text-gray-300">
                  Gaat je vriend verhuizen, emigreren of een nieuwe baan beginnen? Een vriendschapslied is het ultieme afscheidscadeau.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Users className="w-8 h-8 text-vivid-yellow mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Vriendschap Jubileum</h3>
                <p className="text-gray-300">
                  10 jaar vrienden? 20 jaar? Vier jullie jarenlange vriendschap met een lied dat jullie reis samen viert.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Heart className="w-8 h-8 text-electric-blue mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Zomaar</h3>
                <p className="text-gray-300">
                  Gewoon omdat je wilt laten zien hoeveel je beste vriend voor je betekent. Geen speciale aanleiding nodig.
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
