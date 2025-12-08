import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ContactSection from '@/components/sections/ContactSection';
import { Snowflake, Music, Gift, Heart } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kerstlied Laten Maken | Persoonlijk Kerstcadeau | Rai Clark',
  description:
    'Laat een uniek kerstlied maken voor je familie, vrienden of collega\'s. Een persoonlijk kerstcadeau dat blijft hangen. Van gezellig en warm tot vrolijk en feestelijk.',
  keywords: [
    'kerstlied',
    'kerstliedje laten maken',
    'persoonlijk kerstcadeau',
    'kerstmuziek op maat',
    'familie kerstlied',
    'kerstsong maken',
    'origineel kerstcadeau',
  ],
  openGraph: {
    title: 'Kerstlied Laten Maken | Persoonlijk Kerstcadeau',
    description: 'Maak kerst onvergetelijk met een persoonlijk kerstlied voor je dierbaren',
    url: 'https://raiclark.nl/kerst-lied',
  },
};

export default function KerstLiedPage() {
  const relatedServices = [
    { title: 'Muziekcadeau', href: '/muziekcadeau-lied' },
    { title: 'Familielied', href: '/lied-laten-maken' },
    { title: 'Feestlied', href: '/feest-lied' },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="KERSTLIED"
        subtitle="Maak het de Mooiste Kerst Ooit"
        description="Kerst is het moment om samen te zijn met de mensen die je dierbaar zijn. Geef geen standaard cadeau, maar een persoonlijk kerstlied dat de warmte van jullie band vastlegt."
        icon={<Snowflake className="w-10 h-10 text-white" />}
      />

      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Waarom een Kerstlied?
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Kerst is meer dan cadeaus uitpakken. Het gaat om samen zijn, herinneringen ophalen, en de band met je dierbaren vieren. En wat past daar beter bij dan een persoonlijk kerstlied?
              </p>
              <p>
                Een kerstlied speciaal voor jouw familie, vrienden of collega's is een cadeau dat blijft hangen. Het vertelt over jullie tradities, de grappige momenten, de warmte van samen zijn. Het wordt het lied dat elk jaar opnieuw gedraaid wordt, een nieuwe kersttraditie.
              </p>
              <p>
                Of je nu een gezellig, warm lied wilt over de familie bij elkaar, een vrolijk nummer vol inside jokes, of een emotioneel kerstnummer dat de dankbaarheid uitdrukt: het wordt precies wat past bij jullie kerst.
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
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Deel Kerstverhalen</h3>
                  <p className="text-gray-300">
                    Wat zijn jullie kerst tradities? Welke grappige momenten zijn er? Wie maakt er altijd het eten? Wat maakt kerst bij jullie speciaal? Hoe meer details, hoe persoonlijker.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-hot-pink bg-opacity-20 border-2 border-hot-pink flex items-center justify-center flex-shrink-0">
                  <span className="text-hot-pink font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Kies de Kerstsfeer</h3>
                  <p className="text-gray-300">
                    Klassiek kerstgevoel met piano en strijkers? Vrolijk en uptempo? Akoestisch en intiem? We maken precies het kerstlied dat bij jullie past.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-electric-blue bg-opacity-20 border-2 border-electric-blue flex items-center justify-center flex-shrink-0">
                  <span className="text-electric-blue font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Vier Kerst met Muziek</h3>
                  <p className="text-gray-300">
                    Draai het lied af tijdens het kerstdiner en zie de reacties. Je krijgt een hoogwaardige audiofile om elk jaar opnieuw te beluisteren.
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
                <Snowflake className="w-8 h-8 text-cyan-bright mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Kerstdiner Familie</h3>
                <p className="text-gray-300">
                  Een lied speciaal voor de familie tijdens het kerstdiner. Vol inside jokes, tradities en warme herinneringen.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Gift className="w-8 h-8 text-hot-pink mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Kerstcadeau</h3>
                <p className="text-gray-300">
                  Verras je partner, ouders of vrienden met een persoonlijk kerstlied als het meest originele cadeau onder de boom.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Music className="w-8 h-8 text-electric-blue mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Bedrijfskerstborrel</h3>
                <p className="text-gray-300">
                  Een vrolijk kerstlied voor het team. Perfect om af te spelen tijdens de kerstborrel en de sfeer erin te krijgen.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Heart className="w-8 h-8 text-vivid-yellow mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Jaarlijkse Traditie</h3>
                <p className="text-gray-300">
                  Een kerstlied dat elk jaar terugkomt. Een nieuwe traditie die de jaren verbindt en elk jaar opnieuw warmte brengt.
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
