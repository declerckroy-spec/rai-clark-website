import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import { Music, Lightbulb, Mic, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Over Mij & Hoe Het Werkt | Persoonlijke Liedjes | Rai Clark',
  description:
    'Ontdek hoe ik persoonlijke liedjes maak met AI-technologie. Van intake tot finale versie: zo werkt het proces. Transparant, persoonlijk en professioneel.',
  keywords: [
    'hoe werkt het',
    'over mij',
    'AI muziek',
    'proces persoonlijk lied',
    'muziek op maat maken',
  ],
  openGraph: {
    title: 'Over Mij & Hoe Het Werkt | Rai Clark',
    description: 'Ontdek hoe ik persoonlijke liedjes maak van idee tot eindresultaat',
    url: 'https://raiclark.nl/over-mij',
  },
};

export default function OverMijPage() {
  return (
    <PageLayout>
      <ServiceHero
        title="OVER MIJ"
        subtitle="Hoe het werkt"
        description="Van idee tot eindresultaat. Transparant, persoonlijk en professioneel. Dit is hoe ik jouw verhaal omzet in muziek."
        icon={<Music className="w-10 h-10 text-white" />}
      />

      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-6xl">
          {/* About Me */}
          <div className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-6 text-white">
                  Wie ben ik?
                </h2>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Ik ben Rai Clark. Overdag schrijf ik teksten voor bedrijven, 's avonds maak ik muziek. Veel muziek.
                  </p>
                  <p>
                    Wat begon als hobby is uitgegroeid tot een obsessie. Ik release albums, experimentele tracks, gekke nummers die nergens op slaan: en ja, ook persoonlijke liedjes in opdracht. Met AI-tools maak ik muziek die klinkt alsof je favoriete band opeens een nummer over jouw oma heeft geschreven.
                  </p>
                  <p>
                    Het mooie is: het kan echt alles zijn. Van uptempo feestnummer tot emotioneel akoestisch verhaal. Van absurd kinderliedje tot experimentele noise. Soms maak ik het voor mezelf, soms voor jou, maar altijd met dezelfde energie.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/rai-clark-portrait.jpg"
                    alt="Rai Clark - Music Producer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-blue to-hot-pink mix-blend-overlay opacity-20" />
                </div>
              </div>
            </div>
          </div>

          {/* How It Works - Detailed */}
          <div className="mb-24">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-12 text-center text-white">
              Zo werkt het proces
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-full bg-electric-blue bg-opacity-20 border-2 border-electric-blue flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-8 h-8 text-electric-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-2xl mb-3 text-white">1. Intake en brainstorm</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Je vult het contactformulier in of stuurt me een e-mail. Vertel me alles: over wie gaat het lied? Wat maakt deze persoon of dit moment bijzonder? Welke inside jokes, anekdotes of emoties wil je vastleggen?
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    We bespreken samen de muziekstijl, toon en sfeer. Moet het grappig zijn of emotioneel? Uptempo of rustig? Akoestisch of electronic? We stemmen alles af op jouw visie.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-full bg-hot-pink bg-opacity-20 border-2 border-hot-pink flex items-center justify-center flex-shrink-0">
                  <Mic className="w-8 h-8 text-hot-pink" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-2xl mb-3 text-white">2. Schrijven en produceren</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Ik ga aan de slag met de tekst. Dit is het belangrijkste onderdeel: een goed persoonlijk lied zit vol details, herkenbare momenten en echte emotie. Geen generieke platitudes, maar verhalen die kloppen.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Daarna componeer en produceer ik de muziek met behulp van AI-tools. Het eindresultaat klinkt professioneel, alsof het door een echte band is opgenomen. Geen robotstem, maar echte muziek.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-full bg-cyan-bright bg-opacity-20 border-2 border-cyan-bright flex items-center justify-center flex-shrink-0">
                  <Music className="w-8 h-8 text-cyan-bright" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-2xl mb-3 text-white">3. Demo en feedback</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Je ontvangt een demo van het lied. Luister, laat het op je inwerken, en geef feedback. Wil je aanpassingen in de tekst? Moet de muziek anders? Dit is het moment om alles te finetunen.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Ik verwerk je feedback en stuur een herziene versie. Dit proces herhalen we totdat je 100% tevreden bent.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-full bg-vivid-yellow bg-opacity-20 border-2 border-vivid-yellow flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-vivid-yellow" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-2xl mb-3 text-white">4. Finale versie en levering</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Zodra je akkoord geeft, maak ik de finale versie. Je ontvangt een hoogwaardige audiofile (MP3 of WAV) die je kunt afspelen, delen, op USB zetten, of zelfs op vinyl laten persen.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Het lied is van jou. Je mag het zo vaak afspelen, delen en gebruiken als je wilt. Geen beperkingen, geen gedoe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI & Technology */}
          <div className="mb-24">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-8 text-center text-white">
              Over AI en technologie
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Ik gebruik AI-tools voor de muziekproductie. Geen live band, geen studio van 500 euro per uur, maar wel muziek waar mensen blij van worden.
              </p>
              <p>
                Dat betekent niet dat het minder persoonlijk is. Integendeel. De tekst schrijf ik zelf, op basis van jouw verhaal. De muziek produceer ik met zorg, aandacht voor detail en oog voor wat bij het lied past. AI is een tool, net zoals een gitaar of een drumcomputer dat is.
              </p>
              <p>
                Het voordeel? Ik kan sneller werken, goedkoper leveren, en experimenten durven die anders te duur of te tijdrovend zouden zijn. Het eindresultaat klinkt professioneel, authentiek en precies zoals jij het wilt.
              </p>
            </div>
          </div>

          {/* Why Me */}
          <div className="mb-20">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-12 text-center text-white">
              Waarom Rai Clark?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <h3 className="font-display font-bold text-xl uppercase mb-3 text-electric-blue">
                  Persoonlijk en transparant
                </h3>
                <p className="text-gray-300">
                  Geen corporate gedoe, geen standaard processen. Gewoon een direct contact, eerlijke communicatie en muziek die klopt.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <h3 className="font-display font-bold text-xl uppercase mb-3 text-hot-pink">
                  Snelle levering
                </h3>
                <p className="text-gray-300">
                  Dankzij AI-productie kan ik razendsnel werken. Binnen een week klaar, en als het moet dezelfde dag nog.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <h3 className="font-display font-bold text-xl uppercase mb-3 text-cyan-bright">
                  Eerlijke prijzen
                </h3>
                <p className="text-gray-300">
                  Geen verborgen kosten, geen onverwachte meerwerk. We stemmen de prijs vooraf af op basis van wat je wilt.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-secondary-black border-2 border-gray-800">
                <h3 className="font-display font-bold text-xl uppercase mb-3 text-vivid-yellow">
                  Passie voor muziek
                </h3>
                <p className="text-gray-300">
                  Dit is niet alleen een bijverdienste. Ik leef voor muziek. Check Het Beestenbal als je me niet gelooft. Mijn oma is mijn grootste fan.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-6 text-white">
              Klaar om te beginnen?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Kies een gelegenheid of neem direct contact op. Ik help je graag verder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/lied-op-maat">
                <button className="px-8 py-4 border-2 border-cyan-bright text-cyan-bright font-bold uppercase tracking-wider rounded-lg hover:bg-cyan-bright hover:text-black smooth-transition">
                  Bekijk alle diensten
                </button>
              </Link>
              <a href="/#contact">
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
