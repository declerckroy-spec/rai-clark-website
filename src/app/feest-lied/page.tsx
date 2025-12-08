import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ContactSection from '@/components/sections/ContactSection';
import { PartyPopper, Music, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Feestlied laten maken: persoonlijke party anthem',
  description:
    'Laat een energiek feestlied maken voor elk moment dat gevierd moet worden. Uptempo, meezingbaar en speciaal voor jouw feest. Van huisfeest tot festival - het perfecte party anthem.',
  keywords: [
    'feestlied',
    'party lied',
    'feestnummer',
    'uptempo lied',
    'party anthem',
    'lied voor feest',
    'feestmuziek op maat',
    'festival lied',
  ],
  openGraph: {
    title: 'Feestlied Laten Maken | Party Anthem op Maat',
    description: 'Start het feest met een persoonlijk uptempo feestlied - gemaakt voor jouw moment',
    url: 'https://raiclark.nl/feest-lied',
  },
};

export default function FeestLiedPage() {
  const relatedServices = [
    { title: 'Verjaardagslied', href: '/verjaardag-lied' },
    { title: 'Carnavalslied', href: '/carnaval-lied' },
    { title: 'Trouwdaglied', href: '/trouwdag-lied' },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="FEESTLIED"
        subtitle="Het ultieme party anthem"
        description="Elk feest verdient een eigen soundtrack. Een uptempo, energiek feestlied dat iedereen meteen in de stemming brengt en de hele avond blijft hangen."
        icon={<PartyPopper className="w-10 h-10 text-white" />}
      />

      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Waarom een feestlied?
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Een feest is meer dan muziek uit een playlist. Het is een moment om te vieren, om te lachen, om samen te zijn. En wat maakt dat feest onvergetelijk? Een lied dat gemaakt is voor dat specifieke moment.
              </p>
              <p>
                Een persoonlijk feestlied is de perfecte opener, het hoogtepunt van de avond, of het nummer waar iedereen nog weken over napraat. Het kan gaan over de jarige, de groep vrienden, het moment dat gevierd wordt, of gewoon een uptempo knaller zijn die iedereen aan het dansen krijgt.
              </p>
              <p>
                Of je nu een huisfeest geeft, een groot jubileum viert, een festival organiseert, of gewoon een excuus zoekt om te knallen: een persoonlijk feestlied tilt de sfeer naar een ander niveau. Uptempo, meezingbaar, en 100% gemaakt voor jouw moment.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Hoe werkt het?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-vivid-yellow bg-opacity-20 border-2 border-vivid-yellow flex items-center justify-center flex-shrink-0">
                  <span className="text-vivid-yellow font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Vertel over het feest</h3>
                  <p className="text-gray-300">
                    Wat wordt er gevierd? Wie is de hoofdpersoon? Welke inside jokes zijn er? Wat is de vibe van het feest? Hoe wilder het verhaal, hoe leuker het lied.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-hot-pink bg-opacity-20 border-2 border-hot-pink flex items-center justify-center flex-shrink-0">
                  <span className="text-hot-pink font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Kies de energie</h3>
                  <p className="text-gray-300">
                    Uptempo EDM? Popsong met hook? Nederlandstalige feesthit?Rock anthem? We maken een track die perfect past bij de sfeer en het publiek.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-electric-blue bg-opacity-20 border-2 border-electric-blue flex items-center justify-center flex-shrink-0">
                  <span className="text-electric-blue font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Draai het af en ga los</h3>
                  <p className="text-gray-300">
                    Je krijgt een professioneel geproduceerd feestlied dat je kunt afspelen op je feest, delen met vrienden, of zelfs uploaden naar streamingdiensten.
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
                <PartyPopper className="w-8 h-8 text-vivid-yellow mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Huisfeest</h3>
                <p className="text-gray-300">
                  Een epic huisfeest met vrienden. Een lied dat de groep viert en het feest opent met een knál.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Sparkles className="w-8 h-8 text-hot-pink mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Jubileum</h3>
                <p className="text-gray-300">
                  Een groot jubileum: 25 jaar getrouwd, 10 jaar bedrijf, of gewoon een mijlpaal die gevierd moet worden.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Music className="w-8 h-8 text-electric-blue mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Festival of event</h3>
                <p className="text-gray-300">
                  Een anthem voor een festival, evenement of grote bijeenkomst. Een lied dat de energie vastlegt en mensen verbindt.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Zap className="w-8 h-8 text-cyan-bright mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Studentenfeest</h3>
                <p className="text-gray-300">
                  Een uptempo knaller voor een studentenvereniging, huisfeest of intro. Vol inside jokes en feestelijke energie.
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
