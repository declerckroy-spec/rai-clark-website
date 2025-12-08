import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ContactSection from '@/components/sections/ContactSection';
import { Trophy, Music, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pensioenlied laten maken | Afscheidslied pensioen',
  description:
    'Laat een persoonlijk pensioenlied maken voor een collega die met pensioen gaat. Het perfecte afscheidscadeau dat een carrière vol herinneringen viert. Grappig, emotioneel of feestelijk.',
  keywords: [
    'pensioenlied',
    'afscheidslied pensioen',
    'pensioen cadeau',
    'afscheidscadeau collega',
    'pensioenfeest muziek',
    'lied voor pensioen',
    'persoonlijk pensioencadeau',
  ],
  openGraph: {
    title: 'Pensioenlied Laten Maken | Afscheidslied voor Pensioen',
    description: 'Vier een carrière met een persoonlijk pensioenlied - het perfecte afscheidscadeau',
    url: 'https://raiclark.nl/pensioen-lied',
  },
};

export default function PensioenLiedPage() {
  const relatedServices = [
    { title: 'Afscheid Collega', href: '/afscheid-collega-lied' },
    { title: 'Jubileumlied', href: '/lied-laten-maken' },
    { title: 'Lied voor Opa', href: '/lied-voor-opa' },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="PENSIOENLIED"
        subtitle="Een carrière verdient een eigen soundtrack"
        description="40 jaar hard werken, talloze herinneringen, en nu is het tijd voor pensioen. Vier het afscheid met een persoonlijk lied dat de carrière samenvat en voor altijd blijft hangen."
        icon={<Trophy className="w-10 h-10 text-white" />}
      />

      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Waarom een pensioenlied?
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Een pensioen is meer dan een afscheid. Het is het einde van een carrière, het begin van een nieuw hoofdstuk, en een moment om terug te kijken op alles wat iemand heeft bereikt.
              </p>
              <p>
                Een standaard afscheidsgeschenk is oké. Maar een persoonlijk pensioenlied? Dat is onvergetelijk. Het vertelt het verhaal van de collega: de grappige anekdotes, de legendarische momenten, de eigenschappen waar iedereen hem of haar om kent. Het is een cadeau waar de jarige en alle collega's nog jaren over napraten.
              </p>
              <p>
                Of je nu een emotioneel lied wilt dat de carrière viert, een grappig nummer vol inside jokes, of een feestelijke track voor het pensioenfeest: ik maak precies wat past bij de persoon en het moment.
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
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Verzamel verhalen</h3>
                  <p className="text-gray-300">
                    Vraag collega's om anekdotes, grappige verhalen en mooie herinneringen. Wat maakt deze persoon bijzonder? Welke momenten zijn legendarisch? Hoe meer details, hoe persoonlijker het lied.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-hot-pink bg-opacity-20 border-2 border-hot-pink flex items-center justify-center flex-shrink-0">
                  <span className="text-hot-pink font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Kies de toon</h3>
                  <p className="text-gray-300">
                    Grappig en relativerend? Emotioneel en dankbaar? Feestelijk en uitbundig? We stemmen de stijl af op de persoon en de sfeer van het pensioenfeest.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-bright bg-opacity-20 border-2 border-cyan-bright flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-bright font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Verras op het feest</h3>
                  <p className="text-gray-300">
                    Draai het lied af tijdens het pensioenfeest en zie de reacties. Je krijgt een professionele audiofile die je kunt afspelen, delen met collega's of zelfs op cd/vinyl laten persen.
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
                <Trophy className="w-8 h-8 text-electric-blue mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Pensioenfeest</h3>
                <p className="text-gray-300">
                  Het officiële afscheidsfeest op kantoor. Een lied dat de hele carrière samenvat en collega's laat lachen én ontroert.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Music className="w-8 h-8 text-hot-pink mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Privéfeest</h3>
                <p className="text-gray-300">
                  Een persoonlijker afscheidsmoment met de directe collega's. Perfect voor een lied vol inside jokes en warme herinneringen.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Heart className="w-8 h-8 text-cyan-bright mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Van familie</h3>
                <p className="text-gray-300">
                  Een cadeau van de partner of kinderen. Een lied dat de carrière viert en trots uitdrukt op alles wat bereikt is.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Sparkles className="w-8 h-8 text-vivid-yellow mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Video tribute</h3>
                <p className="text-gray-300">
                  Gebruik het lied als soundtrack voor een videomontage met foto's en beelden uit de carrière.
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
