import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import { Music2, Heart, PartyPopper, Users, Briefcase, Baby, Cake, Flower2, Gift, Snowflake, Sparkles, Clock, Trophy } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lied op Maat Laten Maken | Alle Gelegenheden | Rai Clark',
  description:
    'Laat een persoonlijk lied op maat maken voor elke gelegenheid. Van verjaardag tot bruiloft, van pensioen tot geboorte. Bekijk alle mogelijkheden en kies de perfecte service.',
  keywords: [
    'lied op maat',
    'persoonlijk lied',
    'custom song',
    'liedje laten maken',
    'muziek op maat',
    'origineel cadeau',
    'muziekcadeau',
  ],
  openGraph: {
    title: 'Lied op Maat Laten Maken | Alle Gelegenheden',
    description: 'Persoonlijke liedjes voor elke gelegenheid. Kies jouw moment.',
    url: 'https://raiclark.nl/lied-op-maat',
  },
};

export default function LiedOpMaatPage() {
  const services = [
    {
      title: 'Lied Laten Maken',
      description: 'Algemene service voor elk moment',
      href: '/lied-laten-maken',
      icon: Music2,
      color: 'electric-blue',
      emoji: '🎵',
    },
    {
      title: 'Verjaardagslied',
      description: 'Perfect cadeau voor elke verjaardag',
      href: '/verjaardag-lied',
      icon: Cake,
      color: 'vivid-yellow',
      emoji: '🎂',
    },
    {
      title: 'Trouwdaglied',
      description: 'Muziek voor jullie grote dag',
      href: '/trouwdag-lied',
      icon: Heart,
      color: 'hot-pink',
      emoji: '💍',
    },
    {
      title: 'Vriendschapslied',
      description: 'Voor je beste vriend of vriendin',
      href: '/vriendschap-lied',
      icon: Users,
      color: 'cyan-bright',
      emoji: '🤝',
    },
    {
      title: 'Vaderdaglied',
      description: 'Persoonlijk cadeau voor papa',
      href: '/vaderdag-lied',
      icon: Heart,
      color: 'electric-blue',
      emoji: '👨',
    },
    {
      title: 'Moederdaglied',
      description: 'Persoonlijk cadeau voor mama',
      href: '/moederdag-lied',
      icon: Flower2,
      color: 'hot-pink',
      emoji: '👩',
    },
    {
      title: 'Lied voor Opa',
      description: 'Voor jouw grootvader',
      href: '/lied-voor-opa',
      icon: Heart,
      color: 'electric-blue',
      emoji: '👴',
    },
    {
      title: 'Lied voor Oma',
      description: 'Voor jouw grootmoeder',
      href: '/lied-voor-oma',
      icon: Flower2,
      color: 'hot-pink',
      emoji: '👵',
    },
    {
      title: 'Pensioenlied',
      description: 'Afscheid van een carrière',
      href: '/pensioen-lied',
      icon: Trophy,
      color: 'vivid-yellow',
      emoji: '🏆',
    },
    {
      title: 'Afscheid Collega',
      description: 'Voor een vertrekkende collega',
      href: '/afscheid-collega-lied',
      icon: Briefcase,
      color: 'cyan-bright',
      emoji: '💼',
    },
    {
      title: 'Romantisch Lied',
      description: 'Valentijn, jubileum, liefdesverklaring',
      href: '/romantisch-lied',
      icon: Heart,
      color: 'hot-pink',
      emoji: '❤️',
    },
    {
      title: 'Geboorte Kind',
      description: 'Welkomstlied voor een baby',
      href: '/geboorte-kind-lied',
      icon: Baby,
      color: 'cyan-bright',
      emoji: '👶',
    },
    {
      title: 'Herinneringslied',
      description: 'Rouw, herdenking, in memoriam',
      href: '/herinneringslied',
      icon: Heart,
      color: 'electric-blue',
      emoji: '🕊️',
    },
    {
      title: 'Feestlied',
      description: 'Voor elk feest en viering',
      href: '/feest-lied',
      icon: PartyPopper,
      color: 'vivid-yellow',
      emoji: '🎉',
    },
    {
      title: 'Kerstlied',
      description: 'Gezellige kerstmuziek',
      href: '/kerst-lied',
      icon: Snowflake,
      color: 'cyan-bright',
      emoji: '🎄',
    },
    {
      title: 'Carnavalslied',
      description: 'Kroegenhit of vriendengroep anthem',
      href: '/carnaval-lied',
      icon: PartyPopper,
      color: 'vivid-yellow',
      emoji: '🎭',
    },
    {
      title: 'Suikerfeestlied',
      description: 'Muziek voor Eid al-Fitr',
      href: '/suikerfeest-lied',
      icon: Sparkles,
      color: 'vivid-yellow',
      emoji: '🌙',
    },
    {
      title: 'Muziekcadeau',
      description: 'Algemeen cadeau voor elke gelegenheid',
      href: '/muziekcadeau-lied',
      icon: Gift,
      color: 'hot-pink',
      emoji: '🎁',
    },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="LIED OP MAAT"
        subtitle="Kies Jouw Gelegenheid"
        description="Van verjaardag tot bruiloft, van pensioen tot geboorte. Wat je ook wilt vieren, herdenken of vieren: ik maak er muziek van."
        icon={<Music2 className="w-10 h-10 text-white" />}
      />

      {/* Main Content */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-7xl">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-6 text-white">
              Voor Elke Gelegenheid
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Een persoonlijk lied is het ultieme cadeau. Uniek, emotioneel en onvergetelijk. Kies hieronder de gelegenheid die bij jou past, of scroll verder voor algemene informatie.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link key={service.href} href={service.href}>
                  <div className="group h-full p-6 rounded-2xl bg-gradient-to-br from-secondary-black to-charcoal border-2 border-gray-800 hover:border-cyan-bright smooth-transition cursor-pointer">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-electric-blue to-cyan-bright flex items-center justify-center group-hover:scale-110 smooth-transition">
                        <span className="text-3xl">{service.emoji}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-xl uppercase mb-2 text-white group-hover:text-cyan-bright smooth-transition">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 smooth-transition">
                      {service.description}
                    </p>

                    {/* Arrow */}
                    <div className="mt-4 text-cyan-bright opacity-0 group-hover:opacity-100 smooth-transition">
                      <span className="text-sm font-mono uppercase tracking-wider">Bekijk →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* How It Works Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-12 text-center text-white">
              Hoe Werkt Het?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-electric-blue bg-opacity-20 border-2 border-electric-blue flex items-center justify-center flex-shrink-0">
                  <span className="text-electric-blue font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Kies Je Gelegenheid</h3>
                  <p className="text-gray-300 text-lg">
                    Klik op de gelegenheid die bij jou past en vul het contactformulier in. Vertel me jouw verhaal, de persoon waar het over gaat, en wat je voor ogen hebt.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-hot-pink bg-opacity-20 border-2 border-hot-pink flex items-center justify-center flex-shrink-0">
                  <span className="text-hot-pink font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Samen de Details Bepalen</h3>
                  <p className="text-gray-300 text-lg">
                    We stemmen de muziekstijl, toon en inhoud samen af. Grappig of emotioneel? Uptempo of rustig? Alles is bespreekbaar en wordt precies zoals jij het wilt.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-bright bg-opacity-20 border-2 border-cyan-bright flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-bright font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">Ontvang Je Lied</h3>
                  <p className="text-gray-300 text-lg">
                    Je krijgt eerst een demo om feedback te geven. Na eventuele aanpassingen ontvang je de finale versie als hoogwaardige audiofile, klaar om te delen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-6 text-white">
              Nog Vragen?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Bekijk de veelgestelde vragen of neem direct contact op. Ik help je graag verder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/faq">
                <button className="px-8 py-4 border-2 border-cyan-bright text-cyan-bright font-bold uppercase tracking-wider rounded-lg hover:bg-cyan-bright hover:text-black smooth-transition">
                  Bekijk FAQ
                </button>
              </Link>
              <a href="#contact">
                <button className="px-8 py-4 bg-gradient-to-r from-hot-pink to-magenta text-white font-bold uppercase tracking-wider rounded-lg smooth-transition hover:shadow-neon-pink">
                  Neem Contact Op
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
