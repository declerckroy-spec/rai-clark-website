import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ContactSection from '@/components/sections/ContactSection';
import { Baby, Heart, Music, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Geboortелied Laten Maken | Welkomstlied voor Baby | Rai Clark',
  description:
    'Laat een persoonlijk geboortелied maken voor je pasgeboren baby. Een liedje dat de geboorte viert en een blijvende herinnering is. Het perfecte cadeau voor jonge ouders.',
  keywords: [
    'geboortелied',
    'lied geboorte kind',
    'baby lied',
    'welkomstlied baby',
    'kraamcadeau',
    'persoonlijk kraamcadeau',
    'lied voor baby',
    'geboorte muziek',
  ],
  openGraph: {
    title: 'Geboortелied Laten Maken | Welkomstlied voor Baby',
    description: 'Verwelkom je baby met een persoonlijk geboortелied - een herinnering voor altijd',
    url: 'https://raiclark.nl/geboorte-kind-lied',
  },
};

export default function GeboorteKindLiedPage() {
  const relatedServices = [
    { title: 'Verjaardagslied', href: '/verjaardag-lied' },
    { title: 'Muziekcadeau', href: '/muziekcadeau-lied' },
    { title: 'Romantisch Lied', href: '/romantisch-lied' },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="GEBOORTЕЛIED"
        subtitle="Welkom in de Wereld"
        description="Een nieuwe baby is het mooiste wat er is. Vier de geboorte met een persoonlijk lied dat de vreugde vastlegt en een blijvende herinnering is voor later."
        icon={<Baby className="w-10 h-10 text-white" />}
      />

      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Waarom een Geboortелied?
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Een geboorte is één van de mooiste momenten in je leven. De eerste ademtocht, de eerste blik, het moment dat je ouder wordt. Dat verdient meer dan een standaard felicitatiekaart.
              </p>
              <p>
                Een persoonlijk geboortелied is een cadeau dat blijft. Het viert de komst van de baby, vertelt over de blijdschap en liefde die het kindje brengt, en wordt een liedje dat de baby later kan horen: "Dit lied is gemaakt toen jij geboren werd."
              </p>
              <p>
                Of je nu een lief slaapliedje wilt, een vrolijk welkomstlied, of een emotioneel nummer over het wonder van het ouderschap: het wordt precies wat bij jullie gezin past. Perfect als kraamcadeau, of om zelf te geven aan je pasgeboren kindje.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Hoe Werkt Het?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-bright bg-opacity-20 border-2 border-cyan-bright flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-bright font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Vertel Over de Baby</h3>
                  <p className="text-gray-300">
                    Wat is de naam? Hoe was de geboorte? Wat betekent deze baby voor jullie? Welke dromen en hoop hebben jullie? Alles kan verwerkt worden in het lied.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-hot-pink bg-opacity-20 border-2 border-hot-pink flex items-center justify-center flex-shrink-0">
                  <span className="text-hot-pink font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Kies de Sfeer</h3>
                  <p className="text-gray-300">
                    Een rustig slaapliedje? Vrolijk welkomstlied? Emotioneel en ontroerend? We maken precies het lied dat past bij dit bijzondere moment.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-electric-blue bg-opacity-20 border-2 border-electric-blue flex items-center justify-center flex-shrink-0">
                  <span className="text-electric-blue font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Bewaar voor Altijd</h3>
                  <p className="text-gray-300">
                    Je krijgt een hoogwaardige audiofile die je kunt afspelen voor de baby, delen met familie, of bewaren als blijvende herinnering aan dit bijzondere moment.
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
                <Baby className="w-8 h-8 text-cyan-bright mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Welkomstlied</h3>
                <p className="text-gray-300">
                  Een vrolijk, warm liedje dat de baby verwelkomt in de wereld en de vreugde van het ouderschap viert.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Music className="w-8 h-8 text-hot-pink mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Slaapliedje</h3>
                <p className="text-gray-300">
                  Een rustig, liefdevol lied om de baby mee in slaap te sussen. Persoonlijk en speciaal voor jullie kindje.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Heart className="w-8 h-8 text-electric-blue mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Kraamcadeau</h3>
                <p className="text-gray-300">
                  Het meest unieke kraamcadeau: een persoonlijk lied voor de baby dat ouders nog jaren later met tranen in de ogen beluisteren.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Sparkles className="w-8 h-8 text-vivid-yellow mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Eerste Verjaardag</h3>
                <p className="text-gray-300">
                  Een lied dat het eerste jaar samenvat: van geboorte tot nu. Een muzikale tijdcapsule van dit bijzondere jaar.
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
                  <span className="inline-block px-6 py-3 rounded-lg bg-secondary-black border-2 border-gray-800 hover:border-cyan-bright text-gray-300 hover:text-cyan-bright smooth-transition cursor-pointer">
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
