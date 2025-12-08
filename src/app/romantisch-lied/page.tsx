import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ContactSection from '@/components/sections/ContactSection';
import { Heart, Music, Sparkles, Gift } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Romantisch Lied Laten Maken | Liefdesliedje voor Partner | Rai Clark',
  description:
    'Laat een persoonlijk romantisch lied maken voor je partner. Perfect voor Valentijnsdag, jubileum, verjaardag of gewoon omdat je van hem of haar houdt. Een liefdeslied dat blijft hangen.',
  keywords: [
    'romantisch lied',
    'liefdesliedje',
    'valentijnslied',
    'lied voor partner',
    'romantisch cadeau',
    'persoonlijk liefdeslied',
    'lied laten maken voor vriendin',
    'lied laten maken voor vriend',
  ],
  openGraph: {
    title: 'Romantisch Lied Laten Maken | Liefdesliedje voor Partner',
    description: 'Verras je partner met een persoonlijk romantisch lied - het ultieme liefdesgeschenk',
    url: 'https://raiclark.nl/romantisch-lied',
  },
};

export default function RomantischLiedPage() {
  const relatedServices = [
    { title: 'Trouwdaglied', href: '/trouwdag-lied' },
    { title: 'Vriendschapslied', href: '/vriendschap-lied' },
    { title: 'Muziekcadeau', href: '/muziekcadeau-lied' },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="ROMANTISCH LIED"
        subtitle="Liefde in Muziek"
        description="Soms zeggen woorden niet genoeg. Een persoonlijk romantisch lied zegt alles wat je voelt, op een manier die blijft hangen. Voor Valentijnsdag, jubileum, verjaardag, of gewoon omdat je van hem of haar houdt."
        icon={<Heart className="w-10 h-10 text-white" />}
      />

      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Waarom een Romantisch Lied?
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Bloemen verwelken. Chocolade is op. Maar een persoonlijk liefdeslied? Dat blijft voor altijd.
              </p>
              <p>
                Een romantisch lied is het meest persoonlijke cadeau dat je kunt geven. Het vertelt jullie verhaal: hoe jullie elkaar ontmoetten, wat je in hem of haar ziet, waarom jullie bij elkaar horen. Het is een muzikale liefdesverklaring die je partner keer op keer kan beluisteren.
              </p>
              <p>
                Perfect voor Valentijnsdag, een jubileum, een verjaardag, of gewoon op een willekeurige dinsdag omdat je wilt laten zien hoeveel je om iemand geeft. Het kan een intieme akoestische ballade zijn, een uptempo love song, of een jazzy crooner-stijl nummer. Jij bepaalt de toon.
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
                    Hoe hebben jullie elkaar ontmoet? Wat maakt jullie relatie bijzonder? Welke eigenschappen van je partner hou je het meest van? Welke herinneringen wil je vastleggen?
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
                    Emotioneel en intiem? Speels en vrolijk? Sensueel en jazzy? We stemmen de muziekstijl af op jullie smaak en het moment waarop je het wilt geven.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-bright bg-opacity-20 border-2 border-cyan-bright flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-bright font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Verras je Partner</h3>
                  <p className="text-gray-300">
                    Geef het lied cadeau en zie de reactie. Je krijgt een hoogwaardige audiofile die jullie samen kunnen beluisteren, altijd en overal.
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
                <h3 className="font-display font-bold text-xl mb-2 text-white">Valentijnsdag</h3>
                <p className="text-gray-300">
                  Geen standaard kaart en chocolade, maar een persoonlijk liefdeslied dat laat horen hoeveel je om je partner geeft.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Sparkles className="w-8 h-8 text-cyan-bright mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Jubileum</h3>
                <p className="text-gray-300">
                  Vier jullie relatie met een lied dat de jaren samen samenvat en laat horen waarom jullie bij elkaar horen.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Gift className="w-8 h-8 text-electric-blue mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Verjaardag Partner</h3>
                <p className="text-gray-300">
                  Het meest persoonlijke verjaardagscadeau: een lied dat precies vertelt waarom je van hem of haar houdt.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Music className="w-8 h-8 text-vivid-yellow mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Zomaar</h3>
                <p className="text-gray-300">
                  Geen speciale gelegenheid nodig. Gewoon omdat je wilt laten zien hoeveel je partner voor je betekent.
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
