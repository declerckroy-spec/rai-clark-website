import type { Metadata} from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import { Music, Play, Headphones } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Voorbeelden: luister naar persoonlijke liedjes',
  description:
    'Luister naar voorbeelden van gemaakte persoonlijke liedjes. Van verjaardagsliederen tot bruiloftsmuziek, van emotioneel tot grappig. Hoor wat mogelijk is.',
  keywords: [
    'voorbeelden persoonlijke liedjes',
    'portfolio muziek',
    'voorbeeldliedjes',
    'muziek samples',
    'demo liedjes',
  ],
  openGraph: {
    title: 'Voorbeelden van Persoonlijke Liedjes | Portfolio',
    description: 'Luister naar voorbeelden van gemaakte persoonlijke liedjes',
    url: 'https://raiclark.nl/voorbeelden',
  },
};

export default function VoorbeeldenPage() {
  const examples = [
    {
      title: 'Het Beestenbal',
      type: 'Album Release',
      description: 'Een volledig album met absurde kinderliedjes over dieren. Mijn oma is fan.',
      spotifyUrl: 'https://open.spotify.com/artist/2fkKXGwlVqdj3FaPK7XLtH',
    },
    {
      title: 'Radio Clark',
      type: 'Aankomend Project',
      description: 'Experimentele tracks en wilde nummers die nergens op slaan. Komt binnenkort.',
      spotifyUrl: null,
    },
    {
      title: 'Verjaardagslied Voorbeeld',
      type: 'Persoonlijk Liedje',
      description: 'Een uptempo verjaardagslied vol inside jokes en herkenbare momenten.',
      spotifyUrl: null,
    },
    {
      title: 'Bruiloftslied Voorbeeld',
      type: 'Persoonlijk Liedje',
      description: 'Een romantische ballade voor een first dance. Emotioneel en persoonlijk.',
      spotifyUrl: null,
    },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="VOORBEELDEN"
        subtitle="Luister en ervaar"
        description="Van gekke experimentele nummers tot emotionele persoonlijke liedjes. Hoor wat ik maak en wat mogelijk is."
        icon={<Music className="w-10 h-10 text-white" />}
      />

      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-6xl">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-6 text-white">
              Mijn muziek
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Luister op Spotify naar Het Beestenbal voor een beeld van mijn muziekstijl. Voor persoonlijke liedjes op maat zijn ook demo's beschikbaar op aanvraag.
            </p>
          </div>

          {/* Spotify Player - Het Beestenbal */}
          <div className="mb-20">
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <h3 className="font-display font-bold text-3xl uppercase mb-2 text-white">
                  Het beestenbal
                </h3>
                <p className="text-gray-400">
                  Mijn debuutalbum. Absurde kinderliedjes over dieren. Een voorbeeld van wat ik kan maken met AI-productie.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border-2 border-gray-800">
                <iframe
                  style={{ borderRadius: '12px' }}
                  src="https://open.spotify.com/embed/artist/2fkKXGwlVqdj3FaPK7XLtH?utm_source=generator&theme=0"
                  width="100%"
                  height="380"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify Player - Rai Clark"
                />
              </div>
            </div>
          </div>

          {/* Examples Grid */}
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-12 text-center text-white">
              Wat ik kan maken
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {examples.map((example, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-secondary-black to-charcoal border-2 border-gray-800 hover:border-cyan-bright smooth-transition group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-electric-blue to-cyan-bright flex items-center justify-center flex-shrink-0 group-hover:scale-110 smooth-transition">
                      {example.spotifyUrl ? (
                        <Play className="w-7 h-7 text-white" />
                      ) : (
                        <Headphones className="w-7 h-7 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-electric-blue bg-opacity-20 text-electric-blue text-xs font-mono uppercase tracking-wider mb-2">
                        {example.type}
                      </span>
                      <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-cyan-bright smooth-transition">
                        {example.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{example.description}</p>
                  {example.spotifyUrl ? (
                    <a
                      href={example.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-spotify-green hover:text-arcade-green smooth-transition"
                    >
                      <span className="font-mono uppercase tracking-wider text-sm">Luister op Spotify</span>
                      <span>→</span>
                    </a>
                  ) : (
                    <span className="text-gray-500 text-sm">Demo beschikbaar op aanvraag</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Genres & Styles */}
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-12 text-center text-white">
              Muziekstijlen
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { style: 'Pop & Singer-Songwriter', description: 'Toegankelijk, emotioneel, perfect voor persoonlijke liedjes' },
                { style: 'Electronic & Uptempo', description: 'Feestelijk, energiek, ideaal voor party anthems' },
                { style: 'Akoestisch & Intiem', description: 'Rustig, warm, mooi voor emotionele momenten' },
                { style: 'Rock & Alternative', description: 'Krachtig, stoer, voor wie van gitaren houdt' },
                { style: 'Experimental & Weird', description: 'Absurd, creatief, voor wie durft af te wijken' },
                { style: 'Kinderliedjes', description: 'Speels, vrolijk, voor de kleintjes (of volwassenen die kind gebleven zijn)' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-secondary-black border-2 border-gray-800"
                >
                  <h3 className="font-display font-bold text-lg uppercase mb-2 text-cyan-bright">
                    {item.style}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-6 text-white">
              Klaar om te beginnen?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Kies een gelegenheid of neem direct contact op om jouw idee te bespreken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/lied-op-maat">
                <button className="px-8 py-4 border-2 border-cyan-bright text-cyan-bright font-bold uppercase tracking-wider rounded-lg hover:bg-cyan-bright hover:text-black smooth-transition">
                  Bekijk alle diensten
                </button>
              </Link>
              <a href="#contact">
                <button className="px-8 py-4 bg-gradient-to-r from-hot-pink to-magenta text-white font-bold uppercase tracking-wider rounded-lg smooth-transition hover:shadow-neon-pink">
                  Neem contact op
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
