import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

import { Accordion, Eyebrow, SectionHeading } from '../components/ui';
import type { AccordionItem } from '../components/ui';
import { useSEO } from '../lib/useSEO';

import itineraryHero from '../assets/images/Echo.webp';
import tipsImg from '../assets/images/Safari image.webp';

const COSTS = [
  {
    title: 'Airfare',
    amount: '$1,000 – $1,500',
    body: 'Round-trip flights to Nairobi usually cost $1,000–$1,500. You book your own ticket about 3 months before the trip. Before you book, send Sterling Kurtz a screenshot of the flight you plan to buy.',
  },
  {
    title: 'Team contribution',
    amount: '$1,500',
    body: '$1,500 covers your lodging, ground transport, breakfasts, drinking water, and the Maasai Mara safari. A $50 non-refundable deposit holds your spot. The remaining $1,450 is due 3 months before the trip.',
  },
  {
    title: 'Meals',
    amount: '~$10 / meal',
    body: "Lunch and dinner aren't included. Plan on about $10 a meal. Some people spend more; many spend less.",
  },
  {
    title: 'Discretionary',
    amount: 'Extra cash',
    body: 'Bring extra cash for souvenirs, gifts, or to help someone in need.',
  },
];

const DAYS = [
  { day: 'Day 1', title: 'Arrival in Kenya', description: 'Evening arrival at Jomo Kenyatta International Airport (JKIA), Nairobi.' },
  { day: 'Day 2', title: 'Travel to Nakuru & kids class', description: 'Morning travel to Nakuru, afternoon kids class.' },
  { day: 'Day 3', title: 'Local church & fellowship', description: 'Worship at a local church in Nakuru. Evening supper with the missionary community.' },
  { day: 'Day 4', title: 'Travel to Maralal & village ministry', description: 'Morning travel to Maralal, spend the day with the villagers in homes & school.' },
  { day: 'Day 5', title: 'Amaya & market day', description: 'Market day in Amaya, plus time with the community.' },
  { day: 'Day 6', title: 'Sports outreach & travel to Nakuru', description: 'Morning volleyball with locals in Maralal, afternoon travel to Nakuru.' },
  { day: 'Day 7', title: 'Special needs home & youth fellowship', description: 'Morning at a special needs home, afternoon football (soccer) game, evening supper and volleyball with missionary youth.' },
  { day: 'Day 8', title: 'Shopping & travel to Maasai Mara', description: 'Souvenir shopping, lunch in Nakuru, afternoon travel to Maasai Mara.' },
  { day: 'Day 9', title: 'Maasai Mara safari', description: 'Maasai Mara game drives all day, evening return to Nakuru.' },
  { day: 'Day 10', title: 'Church at CBF Maruk & Kurtz home', description: "Church at CBF Maruk, afternoon kids' class, evening at the Kurtz home." },
  { day: 'Day 11', title: 'Nairobi departure', description: 'Morning drive to Nairobi and airport drop-offs for evening flights.' },
];

const TIPS = [
  { title: 'eTA', content: "You need an eTA (Electronic Travel Authorization) to enter Kenya. We'll send step-by-step help about 3 weeks before the trip." },
  { title: 'Currency', content: "We'll help you change money into Kenyan shillings. Clean, crisp $20 and $100 bills exchange best." },
  { title: 'Restrooms', content: "Many restrooms don't stock toilet paper, so carry tissues (we'll give you some when you arrive). Wipes and hand sanitizer help too." },
  { title: 'Washcloths', content: 'Most places we stay don’t have washcloths. Pack one if you use them.' },
  { title: 'Malaria', content: 'Ask your doctor about antimalarial medication before the trip, and pack mosquito repellent.' },
  { title: 'Language', content: 'Swahili is the everyday language, but most people in towns and high schools also speak English.' },
  { title: 'Culture', content: 'Come curious. Ask questions, make friends, and answer people’s questions about you openly. Kenyans will be as interested in your life as you are in theirs.' },
];

export default function Itinerary() {
  useSEO(
    'Kenya Mission Trip Cost & Itinerary | ECHO Trips',
    "$1,500 plus airfare. See the day-by-day schedule, what's included, and travel tips for our April 2027 mission trip to Kenya.",
  );

  const scheduleItems: AccordionItem[] = DAYS.map((d) => ({
    id: d.day,
    title: d.day,
    summary: d.title,
    content: d.description,
  }));

  const tipItems: AccordionItem[] = TIPS.map((t) => ({ id: t.title, title: t.title, content: t.content }));

  return (
    <div className="bg-white pt-32 md:pt-40 pb-8">
      {/* Heading */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 mb-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Eyebrow className="mb-4">Trip details</Eyebrow>
          <h1 className="font-serif text-4xl md:text-5xl text-ink mb-4 leading-[1.06]">
            Trip cost, schedule, and travel tips
          </h1>
          <p className="text-body text-[17px] leading-[1.6]">
            Next trip: April 16&ndash;26, 2027 (11 days). Here's what it costs, what each day looks like, and how
            to get ready.
          </p>
        </motion.div>
      </div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="w-full mx-auto px-6 md:px-12 mb-20 md:mb-28"
      >
        <div className="relative h-[320px] md:h-[500px] lg:h-[580px] rounded-2xl overflow-hidden">
          <img src={itineraryHero} alt="ECHO mission trip landscape in Kenya" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      {/* Cost — 4 panel-grey cards */}
      <div className="w-full mx-auto px-6 md:px-12 mb-24 md:mb-28">
        <SectionHeading
          eyebrow="What it costs"
          title="$1,500 plus airfare"
          align="left"
          className="mb-10 md:mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COSTS.map((cost) => (
            <div key={cost.title} className="bg-panel rounded-2xl p-7 flex flex-col h-full">
              <h3 className="font-serif text-xl text-ink mb-1">{cost.title}</h3>
              <span className="text-clay font-sans font-semibold text-[15px] mb-4">{cost.amount}</span>
              <p className="text-body text-[14px] leading-[1.6]">{cost.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Daily schedule — accordion */}
      <div className="w-full mx-auto px-6 md:px-12 mb-24 md:mb-28">
        <SectionHeading
          eyebrow="Daily schedule"
          title="Day by day"
          intro="The plan from arrival to departure. Details may shift once we're on the ground."
          className="mb-10 md:mb-12"
        />
        <Accordion items={scheduleItems} defaultOpen={0} />
      </div>

      {/* Travel tips — accordion beside a photo + forest contact card (refs 08, 07) */}
      <div className="w-full mx-auto px-6 md:px-12 mb-20">
        <SectionHeading eyebrow="Before you go" title="Travel tips" align="left" className="mb-10 md:mb-12" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={tipsImg} alt="On safari in Kenya" className="w-full h-full object-cover" />
            </div>
            {/* Forest "Have a question?" card */}
            <div className="bg-forest rounded-2xl p-8">
              <h3 className="font-serif text-2xl text-white mb-2">Have a question?</h3>
              <p className="text-white/70 text-[15px] leading-[1.6] mb-5">
                We're glad to help you prepare. Reach out and we'll get back to you soon.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-white font-semibold text-[15px] underline underline-offset-4 decoration-1 hover:text-peach transition-colors"
              >
                Ask Us a Question
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <Accordion items={tipItems} defaultOpen={0} />
        </div>
      </div>

      {/* Closing line */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <div className="pt-12 border-t border-line">
          <p className="font-serif text-xl text-ink italic">Please pray for us as we plan these trips.</p>
        </div>
      </div>
    </div>
  );
}
