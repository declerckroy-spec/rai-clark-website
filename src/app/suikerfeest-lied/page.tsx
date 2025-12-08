import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ContactSection from '@/components/sections/ContactSection';
import { Sparkles, Heart, Music, Users } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Suikerfeestlied laten maken: Eid Mubarak muziek',
  description:
    'Laat een persoonlijk suikerfeestlied maken voor familie en vrienden. Vier Eid al-Fitr met een liedje dat de vreugde en dankbaarheid vastlegt. Warm, feestelijk en oprecht.',
  keywords: [
    'suikerfeestlied',
    'eid lied',
    'eid mubarak lied',
    'suikerfeest muziek',
    'lied voor suikerfeest',
    'ramadan lied',
    'islamitisch feestlied',
    'eid cadeau',
  ],
  openGraph: {
    title: 'Suikerfeestlied Laten Maken | Eid Mubarak Lied',
    description: 'Vier het Suikerfeest met een persoonlijk lied voor familie en vrienden - Eid Mubarak!',
    url: 'https://raiclark.nl/suikerfeest-lied',
  },
};

export default function SuikerfeestLiedPage() {
  const relatedServices = [
    { title: 'Feestlied', href: '/feest-lied' },
    { title: 'Muziekcadeau', href: '/muziekcadeau-lied' },
    { title: 'Familielied', href: '/lied-laten-maken' },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="SUIKERFEESTLIED"
        subtitle="Eid Mubarak in muziek"
        description="Het Suikerfeest is een moment van vreugde, dankbaarheid en samenzijn. Vier het met een persoonlijk lied dat de bijzondere band met familie en vrienden vastlegt. Eid Mubarak!"
        icon={<Sparkles className="w-10 h-10 text-white" />}
      />

      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Waarom een suikerfeestlied?
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Het Suikerfeest markeert het einde van Ramadan. Een maand van bezinning, vasten en spiritualiteit wordt afgesloten met vreugde, familie en dankbaarheid. Dat verdient een bijzonder moment.
              </p>
              <p>
                Een persoonlijk suikerfeestlied is een manier om die vreugde en dankbaarheid vast te leggen. Het vertelt over de familie die samenkomt, de tradities die jullie koesteren, de warmte van samenzijn na een maand van vasten. Het is een cadeau dat blijft en elk jaar opnieuw betekenis heeft.
              </p>
              <p>
                Of je nu een warm, emotioneel lied wilt over de familie, een vrolijk nummer voor de kinderen, of een feestelijk lied voor de bijeenkomst: het wordt gemaakt met respect en oprechte aandacht voor wat het Suikerfeest betekent.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Hoe werkt het?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-electric-blue bg-opacity-20 border-2 border-electric-blue flex items-center justify-center flex-shrink-0">
                  <span className="text-electric-blue font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Deel jullie verhaal</h3>
                  <p className="text-gray-300">
                    Wat maakt het Suikerfeest bij jullie speciaal? Welke tradities hebben jullie? Wat betekent de familie voor jullie? Hoe vieren jullie samen? Dit alles kan verwerkt worden.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-hot-pink bg-opacity-20 border-2 border-hot-pink flex items-center justify-center flex-shrink-0">
                  <span className="text-hot-pink font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Kies de sfeer</h3>
                  <p className="text-gray-300">
                    Warm en emotioneel? Vrolijk en feestelijk? Traditioneel of modern? We maken een lied dat past bij jullie viering en de gevoelens van dankbaarheid en vreugde.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-bright bg-opacity-20 border-2 border-cyan-bright flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-bright font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Vier samen met muziek</h3>
                  <p className="text-gray-300">
                    Draai het lied af tijdens de samenkomst en deel de vreugde. Je krijgt een hoogwaardige audiofile om te bewaren en elk jaar opnieuw te beluisteren.
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
                <Heart className="w-8 h-8 text-electric-blue mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Familiebijeenkomst</h3>
                <p className="text-gray-300">
                  Een lied speciaal voor de familie tijdens het Suikerfeest. Over samenzijn, tradities en de warmte van familie.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Sparkles className="w-8 h-8 text-cyan-bright mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Cadeau voor dierbaren</h3>
                <p className="text-gray-300">
                  Een persoonlijk lied als cadeau voor ouders, familie of vrienden. Een uiting van dankbaarheid en liefde.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Users className="w-8 h-8 text-hot-pink mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Gemeenschapsviering</h3>
                <p className="text-gray-300">
                  Een lied voor een grotere gemeenschapsviering of evenement. Een muzikaal moment dat mensen verbindt in vreugde.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Music className="w-8 h-8 text-vivid-yellow mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Jaarlijkse traditie</h3>
                <p className="text-gray-300">
                  Een lied dat elk Suikerfeest terugkomt. Een muzikale traditie die de jaren verbindt en betekenis krijgt.
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
