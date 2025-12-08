import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import ServiceHero from '@/components/ServiceHero';
import { HelpCircle, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Veelgestelde Vragen | FAQ | Rai Clark',
  description:
    'Antwoorden op veelgestelde vragen over persoonlijke liedjes laten maken. Levertijd, kosten, muziekstijlen, auteursrechten en meer.',
  keywords: [
    'FAQ persoonlijke liedjes',
    'veelgestelde vragen',
    'lied laten maken vragen',
    'kosten persoonlijk lied',
    'levertijd muziek',
  ],
  openGraph: {
    title: 'Veelgestelde Vragen | FAQ | Rai Clark',
    description: 'Antwoorden op je vragen over persoonlijke liedjes laten maken',
    url: 'https://raiclark.nl/faq',
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: 'Algemeen',
      questions: [
        {
          q: 'Hoe lang duurt het voordat mijn lied klaar is?',
          a: 'Meestal is een persoonlijk lied binnen een week klaar. En als het moet? Dezelfde dag nog. Dit hangt af van de complexiteit en drukte, maar ik werk snel. Voor spoedopdrachten bespreken we de planning samen.',
        },
        {
          q: 'Wat kost een persoonlijk lied?',
          a: 'De prijs hangt af van wat je wilt: lengte van het lied, muziekstijl, hoeveelheid tekst, aantal revisies. We stemmen de prijs vooraf af, zodat je precies weet waar je aan toe bent. Neem contact op voor een offerte op maat.',
        },
        {
          q: 'Welke informatie heb je nodig?',
          a: 'Hoe meer, hoe beter! Vertel me over de persoon waar het lied over gaat, inside jokes, mooie herinneringen, grappige gewoontes, belangrijke momenten. Deel foto\'s, verhalen, anekdotes. Hoe persoonlijker de input, hoe beter het lied.',
        },
        {
          q: 'Kan ik het lied horen voordat ik betaal?',
          a: 'Ja. Je ontvangt eerst een demo om te beluisteren en feedback te geven. Pas als je tevreden bent met de demo, maken we de finale versie. Zo weet je zeker dat je krijgt wat je wilt.',
        },
      ],
    },
    {
      category: 'Muziek & Stijl',
      questions: [
        {
          q: 'Welke muziekstijlen kun je maken?',
          a: 'Bijna alles: pop, rock, electronic, akoestisch, kinderliedjes, uptempo feestnummers, emotionele ballades, experimentele tracks. We bespreken samen wat bij jouw verhaal past en wat je voor ogen hebt.',
        },
        {
          q: 'Kan ik zelf de melodie of muziekstijl kiezen?',
          a: 'Absoluut. Vertel me welke artiesten of nummers je mooi vindt, of welke sfeer je voor ogen hebt. We kunnen ook een bestaand nummer als inspiratie gebruiken voor de stijl.',
        },
        {
          q: 'Klinkt het als "AI-muziek"?',
          a: 'Nee. De muziek klinkt professioneel en authentiek, alsof het door een echte band is opgenomen. Check Het Beestenbal op Spotify om te horen wat mogelijk is. AI is een tool, het eindresultaat klinkt menselijk.',
        },
        {
          q: 'Kan ik zelf in het lied zingen?',
          a: 'Dat is nu nog niet mogelijk, maar een leuk idee voor de toekomst! Op dit moment maak ik de volledige productie zelf, inclusief de zang (via AI-stemmen die klinken als echte zangers).',
        },
      ],
    },
    {
      category: 'Proces & Aanpassingen',
      questions: [
        {
          q: 'Hoeveel revisies zijn mogelijk?',
          a: 'We stemmen dit vooraf af. Meestal zijn 1-2 revisierondes voldoende om het lied perfect te krijgen. Wil je meer aanpassingen? Geen probleem, dan bespreken we dat samen.',
        },
        {
          q: 'Wat als ik niet tevreden ben met het resultaat?',
          a: 'Dat gebeurt bijna nooit, maar als het voorkomt: we bespreken samen wat er niet klopt en ik pas het aan. Pas als je echt blij bent met het eindresultaat, rond ik de opdracht af.',
        },
        {
          q: 'Kan ik een lied laten maken in een andere taal?',
          a: 'Ja! Nederlands is mijn moedertaal, maar ik kan ook liedjes in het Engels maken. Voor andere talen neem ik graag contact op om te kijken of het mogelijk is.',
        },
      ],
    },
    {
      category: 'Rechten & Gebruik',
      questions: [
        {
          q: 'Mag ik het lied commercieel gebruiken?',
          a: 'Dat hangt af van het gebruik. Voor persoonlijk gebruik (afspelen op feestjes, delen met vrienden/familie) is er geen probleem. Voor commercieel gebruik (bijvoorbeeld in een video die je online zet) bespreken we de rechten vooraf.',
        },
        {
          q: 'Wie bezit de auteursrechten?',
          a: 'De auteursrechten blijven bij mij, tenzij we anders afspreken. Jij krijgt wel het recht om het lied voor persoonlijke doeleinden te gebruiken, af te spelen, en te delen. Voor commercieel gebruik maken we aparte afspraken.',
        },
        {
          q: 'Kan ik het lied op Spotify zetten?',
          a: 'Ja, dat kan! Daar moeten we wel aparte afspraken over maken qua rechten en distributie. Neem contact op als je dit wilt.',
        },
        {
          q: 'Mag ik het lied op social media plaatsen?',
          a: 'Ja! Je mag het lied delen op Instagram, Facebook, TikTok, YouTube of waar je ook wilt. Een vermelding naar @rai.clark of raiclark.nl wordt gewaardeerd, maar is niet verplicht.',
        },
      ],
    },
    {
      category: 'Levering & Formaat',
      questions: [
        {
          q: 'In welk bestandsformaat krijg ik het lied?',
          a: 'Je ontvangt het lied als hoogwaardige MP3 (voor gemakkelijk delen) en eventueel ook als WAV (voor maximale kwaliteit). Heb je een ander formaat nodig? Dat is geen probleem.',
        },
        {
          q: 'Hoe wordt het lied geleverd?',
          a: 'Via e-mail of via een downloadlink (bijv. WeTransfer). Je kunt het bestand vervolgens opslaan, delen, op USB zetten, of wat je ook wilt.',
        },
        {
          q: 'Kan ik het lied op vinyl of CD laten persen?',
          a: 'Ja! Ik lever het bestand in de juiste kwaliteit, waarna je het zelf kunt laten persen via een vinylpers-service. Ik kan je adviseren over welke services goed zijn.',
        },
      ],
    },
    {
      category: 'Betaling & Voorwaarden',
      questions: [
        {
          q: 'Hoe werkt de betaling?',
          a: 'We stemmen eerst de prijs af. Vervolgens betaal je een aanbetaling (meestal 50%) voordat ik begin. De rest betaal je na ontvangst van de finale versie. Ik stuur een factuur die je kunt overmaken.',
        },
        {
          q: 'Wat als ik toch annuleer?',
          a: 'Als je annuleert voordat ik ben begonnen: geen probleem, je krijgt je aanbetaling terug. Ben ik al aan het werk? Dan berekenen we eventueel een klein bedrag voor de al gemaakte uren. We bespreken dit altijd eerlijk en transparant.',
        },
      ],
    },
  ];

  return (
    <PageLayout>
      <ServiceHero
        title="FAQ"
        subtitle="Veelgestelde vragen"
        description="Antwoorden op de meest gestelde vragen over persoonlijke liedjes laten maken. Staat je vraag er niet bij? Neem contact op."
        icon={<HelpCircle className="w-10 h-10 text-white" />}
      />

      <section className="relative py-24 px-6 bg-gradient-to-b from-secondary-black to-primary-black">
        <div className="container mx-auto max-w-4xl">
          {/* FAQ Categories */}
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="font-display font-bold text-3xl uppercase mb-8 text-cyan-bright">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((item, index) => (
                  <details
                    key={index}
                    className="group p-6 rounded-xl bg-secondary-black border-2 border-gray-800 hover:border-cyan-bright smooth-transition"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-bright smooth-transition pr-4">
                        {item.q}
                      </h3>
                      <ChevronDown className="w-6 h-6 text-cyan-bright flex-shrink-0 group-open:rotate-180 smooth-transition" />
                    </summary>
                    <div className="mt-4 pt-4 border-t border-gray-800">
                      <p className="text-gray-300 leading-relaxed">{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-electric-blue to-cyan-bright bg-opacity-10 border-2 border-electric-blue border-opacity-30">
            <h2 className="font-display font-bold text-2xl uppercase mb-4 text-white text-center">
              Staat je vraag er niet bij?
            </h2>
            <p className="text-gray-300 text-center mb-6">
              Geen probleem! Neem contact op en ik beantwoord al je vragen persoonlijk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact">
                <button className="px-8 py-4 bg-gradient-to-r from-hot-pink to-magenta text-white font-bold uppercase tracking-wider rounded-lg smooth-transition hover:shadow-neon-pink">
                  Neem contact op
                </button>
              </a>
              <Link href="/lied-op-maat">
                <button className="px-8 py-4 border-2 border-cyan-bright text-cyan-bright font-bold uppercase tracking-wider rounded-lg hover:bg-cyan-bright hover:text-black smooth-transition">
                  Bekijk alle diensten
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
