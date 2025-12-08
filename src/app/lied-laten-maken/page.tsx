import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import ContactSection from '@/components/sections/ContactSection';
import { Music2, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lied Laten Maken | Persoonlijk Liedje op Maat | Rai Clark',
  description:
    'Laat een uniek persoonlijk liedje maken voor elke gelegenheid. Verjaardag, bruiloft, jubileum of gewoon omdat het kan. Professionele muziekproductie met AI, snelle levering en eerlijke prijzen.',
  keywords: [
    'lied laten maken',
    'persoonlijk lied',
    'liedje op maat',
    'muziek cadeau',
    'custom song',
    'lied bestellen',
    'origineel cadeau',
    'muziek maken',
  ],
  openGraph: {
    title: 'Lied Laten Maken | Persoonlijk Liedje op Maat',
    description: 'Unieke persoonlijke liedjes voor elke gelegenheid. Van verjaardag tot bruiloft.',
    url: 'https://raiclark.nl/lied-laten-maken',
  },
};

export default function LiedLatenMakenPage() {
  const relatedServices = [
    { title: 'Verjaardagslied', href: '/verjaardag-lied', icon: '🎂' },
    { title: 'Trouwdaglied', href: '/trouwdag-lied', icon: '💍' },
    { title: 'Muziekcadeau', href: '/muziekcadeau-lied', icon: '🎁' },
    { title: 'Vriendschapslied', href: '/vriendschap-lied', icon: '🤝' },
    { title: 'Feestlied', href: '/feest-lied', icon: '🎉' },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="LIED LATEN MAKEN"
        subtitle="Persoonlijke Muziek op Maat"
        description="Een uniek liedje speciaal voor jou. Voor elke gelegenheid, elke emotie, elke persoon. Van verjaardag tot bruiloft, van jubileum tot afscheid. Professioneel, persoonlijk en verrassend."
        icon={<Music2 className="w-10 h-10 text-white" />}
      />

      {/* Main Content Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-4xl">
          {/* Why Section */}
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Waarom een Persoonlijk Lied?
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Een persoonlijk liedje is het ultieme cadeau. Het is uniek, emotioneel en blijft voor altijd hangen. Waar een standaard cadeau vergeten wordt, blijft een lied dat over iemands leven, humor of mooie momenten gaat nog jaren nazinderen.
              </p>
              <p>
                Ik maak liedjes voor elke gelegenheid: van een episch verjaardagslied voor je beste vriend tot een ontroerend nummer voor opa's 80e verjaardag. Van een romantisch liedje voor je partner tot een hilarisch afscheidsnummer voor je collega. Het kan echt alles zijn.
              </p>
              <p>
                Dankzij AI-technologie kan ik professionele muziek maken die klinkt alsof je favoriete artiest opeens een lied over jouw leven schrijft. Geen platitudes, geen generieke teksten. Alleen echte verhalen, echte emoties, echte mensen.
              </p>
            </div>
          </div>

          {/* How It Works */}
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
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Vertel Je Verhaal</h3>
                  <p className="text-gray-300">
                    Vul het contactformulier in en vertel me over wie het lied gaat. Wat maakt deze persoon bijzonder? Welke anekdotes, inside jokes of mooie momenten wil je erin verwerken? Hoe meer details, hoe persoonlijker het wordt.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-hot-pink bg-opacity-20 border-2 border-hot-pink flex items-center justify-center flex-shrink-0">
                  <span className="text-hot-pink font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Kies Je Stijl</h3>
                  <p className="text-gray-300">
                    Wil je een uptempo feestnummer? Een emotionele ballade? Een grappig kinderliedje? Een epische rock anthem? We stemmen samen de muziekstijl, sfeer en toon af op wat jij voor ogen hebt.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-bright bg-opacity-20 border-2 border-cyan-bright flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-bright font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Productie & Levering</h3>
                  <p className="text-gray-300">
                    Ik schrijf de tekst, componeer de muziek en produceer het hele nummer. Je ontvangt eerst een demo om feedback te geven. Na eventuele aanpassingen krijg je de finale versie als hoogwaardige audiofile.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Examples */}
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Voor Welke Gelegenheden?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Sparkles className="w-8 h-8 text-vivid-yellow mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Feesten & Vieringen</h3>
                <p className="text-gray-300">Verjaardagen, jubilea, bruiloften, babyborrerels, afscheidfeesten, pensioenvieringen</p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Heart className="w-8 h-8 text-hot-pink mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Emotionele Momenten</h3>
                <p className="text-gray-300">Herinneringsliedjes, rouwverwerking, dankbetuigingen, excuses, liefdesverklaringen</p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Music2 className="w-8 h-8 text-electric-blue mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Zomaar Omdat Het Kan</h3>
                <p className="text-gray-300">Een lied voor je beste vriend, je huisdier, je favoriete voetbalclub, of gewoon een rare inside joke</p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <Sparkles className="w-8 h-8 text-cyan-bright mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">Bedrijven & Events</h3>
                <p className="text-gray-300">Bedrijfsjubilea, teambuilding, productlanceringen, merkcampagnes, podcast intros</p>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-white">
              Of Kies Een Specifieke Gelegenheid
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {relatedServices.map((service) => (
                <Link key={service.href} href={service.href}>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-secondary-black to-charcoal border-2 border-gray-800 hover:border-cyan-bright smooth-transition cursor-pointer text-center group">
                    <div className="text-4xl mb-2 group-hover:scale-110 smooth-transition">{service.icon}</div>
                    <p className="text-sm text-gray-300 group-hover:text-cyan-bright smooth-transition">{service.title}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/lied-op-maat">
                <span className="text-cyan-bright hover:text-electric-blue smooth-transition cursor-pointer underline">
                  Bekijk alle gelegenheden →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </PageLayout>
  );
}
