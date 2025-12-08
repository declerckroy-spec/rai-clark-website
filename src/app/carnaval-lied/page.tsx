import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ContactSection from '@/components/sections/ContactSection';
import { PartyPopper, Music, Users, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Carnavalslied Laten Maken | Kroegenhit op Maat | Rai Clark',
  description:
    'Laat een meezingbaar carnavalslied maken voor je vriendengroep, kroeg of carnavalsvereniging. Een uptempo kroegenhit die de hele tent meezingt. Perfect voor carnaval 2025!',
  keywords: [
    'carnavalslied',
    'carnavalsliedje laten maken',
    'kroegenhit',
    'carnavalshit',
    'feestlied carnaval',
    'lied voor carnaval',
    'carnavalsmuziek op maat',
    'alaaf lied',
  ],
  openGraph: {
    title: 'Carnavalslied Laten Maken | Kroegenhit op Maat',
    description: 'Maak carnaval onvergetelijk met een eigen carnavalshit die de hele tent meezingt',
    url: 'https://raiclark.nl/carnaval-lied',
  },
};

export default function CarnavalLiedPage() {
  const relatedServices = [
    { title: 'Feestlied', href: '/feest-lied' },
    { title: 'Vriendschapslied', href: '/vriendschap-lied' },
    { title: 'Verjaardagslied', href: '/verjaardag-lied' },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="CARNAVALSLIED"
        subtitle="Je Eigen Kroegenhit"
        description="Carnaval zonder een eigen lied? Dat kan niet. Laat een meezingbaar carnavalslied maken dat de hele kroeg uit volle borst meebrult. Uptempo, simpel, en 100% feest."
        icon={<PartyPopper className="w-10 h-10 text-white" />}
      />

      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Waarom een Carnavalslied?
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Carnaval draait om drie ding: feest, vriendschap, en liedjes die iedereen meezingt. Een eigen carnavalslied is het ultieme statement: dit is ons lied, dit is onze groep, en hier gaan we los.
              </p>
              <p>
                Een goede carnavalshit hoeft niet ingewikkeld te zijn. Het moet meezingbaar zijn, het moet energie hebben, en het moet blijven hangen. Of het nu gaat over je vriendengroep, de kroeg waar jullie altijd zitten, of gewoon een ode aan carnaval zelf: het wordt een lied dat de hele tent uit volle borst meebrult.
              </p>
              <p>
                Perfect voor carnavalsverenigingen, vriendengroepen, kroegen, of gewoon voor de lol. Met een uptempo beat, simpele teksten vol inside jokes, en een refrein dat meteen blijft plakken. Alaaf!
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Hoe Werkt Het?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-vivid-yellow bg-opacity-20 border-2 border-vivid-yellow flex items-center justify-center flex-shrink-0">
                  <span className="text-vivid-yellow font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Verzamel Verhalen</h3>
                  <p className="text-gray-300">
                    Waar gaat het lied over? De vriendengroep? De kroeg? Inside jokes van vorige carnavals? Hoe grappiger en gekker, hoe beter het werkt.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-hot-pink bg-opacity-20 border-2 border-hot-pink flex items-center justify-center flex-shrink-0">
                  <span className="text-hot-pink font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Maak het Meezingbaar</h3>
                  <p className="text-gray-300">
                    We maken een uptempo carnavalshit met een simpel refrein dat iedereen direct kan meezingen. Denk aan: veel energie, simpele tekst, onweerstaanbare hook.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-electric-blue bg-opacity-20 border-2 border-electric-blue flex items-center justify-center flex-shrink-0">
                  <span className="text-electric-blue font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Draai het in de Kroeg</h3>
                  <p className="text-gray-300">
                    Je krijgt een professioneel geproduceerd carnavalslied klaar om af te spelen tijdens carnaval. En wie weet wordt het de nieuwe kroegenhit.
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
                <Users className="w-8 h-8 text-vivid-yellow mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Vriendengroep</h3>
                <p className="text-gray-300">
                  Een anthem voor de vriendengroep die elk carnaval samen doorbrengt. Vol inside jokes en mooie herinneringen.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Music className="w-8 h-8 text-hot-pink mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Kroeg of Café</h3>
                <p className="text-gray-300">
                  Een lied speciaal voor de kroeg waar jullie altijd zitten tijdens carnaval. De ultieme kroegenhit voor de stamgasten.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <PartyPopper className="w-8 h-8 text-electric-blue mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Carnavalsvereniging</h3>
                <p className="text-gray-300">
                  Een officieel carnavalslied voor de vereniging. Perfect voor optochten, polonaises en feestavonden.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Zap className="w-8 h-8 text-cyan-bright mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Carnavalsfeest</h3>
                <p className="text-gray-300">
                  Een uptempo knaller voor een carnavalsfeest. Draai het af en kijk hoe de hele tent direct meezingt.
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
