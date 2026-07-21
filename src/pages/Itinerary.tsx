import { motion } from 'motion/react';
import itineraryHero from '../assets/images/Echo.jpg';

export default function Itinerary() {
  const days = [
    {
      day: 'Day 1',
      date: 'Friday',
      title: 'Arrival in Kenya',
      description: 'Evening arrival in Kenya at JKIA airport.',
    },
    {
      day: 'Day 2',
      date: 'Saturday',
      title: 'Travel to Nakuru & Kids Class',
      description: 'Morning travel to Nakuru, afternoon kids class.',
    },
    {
      day: 'Day 3',
      date: 'Sunday',
      title: 'Local Church & Fellowship',
      description: 'Visit local church in Nakuru, evening supper for all missionaries.',
    },
    {
      day: 'Day 4',
      date: 'Monday',
      title: 'Travel to Maralal & Village Ministry',
      description: 'Morning travel to Maralal, spend the day with the villagers in homes & school.',
    },
    {
      day: 'Day 5',
      date: 'Tuesday',
      title: 'Amaya & Market Day',
      description: 'Spend the day in Amaya during market day & other activities.',
    },
    {
      day: 'Day 6',
      date: 'Wednesday',
      title: 'Sports Outreach & Travel to Nakuru',
      description: 'Morning volleyball with locals in Maralal, afternoon travel to Nakuru.',
    },
    {
      day: 'Day 7',
      date: 'Thursday',
      title: 'Special Needs Home & Youth Fellowship',
      description: 'Morning special needs home, afternoon football game, evening supper & volleyball with missionary youth.',
    },
    {
      day: 'Day 8',
      date: 'Friday',
      title: 'Shopping & Travel to Masai Mara',
      description: 'Souvenir shopping, lunch in Nakuru, afternoon travel to Masai Mara.',
    },
    {
      day: 'Day 9',
      date: 'Saturday',
      title: 'Masai Mara Safari',
      description: 'Masai Mara game drives all day, evening return to Nakuru.',
    },
    {
      day: 'Day 10',
      date: 'Sunday',
      title: 'Church at CBF Maruk & Kurtz Home',
      description: 'Church in CBF Maruk, afternoon kids class, evening at Kurtz’s home.',
    },
    {
      day: 'Day 11',
      date: 'Monday',
      title: 'Nairobi Departure',
      description: 'Morning departure for Nairobi, Airport drop offs (evening flights).',
    },
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      {/* 1 & 2. Heading & Subheading */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 mb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">Trip Details</span>
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-text-primary mb-4">
            Proposed Itinerary & Logistics
          </h1>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            Everything you need to know to prepare for your journey, from travel financial commitments to our trip schedule and essential travel tips.
          </p>
        </motion.div>
      </div>

      {/* 3. Hero Image Centered */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-6xl mx-auto px-6 md:px-12 mb-20"
      >
        <div className="relative h-[380px] md:h-[540px] lg:h-[620px] rounded-3xl overflow-hidden shadow-2xl border border-earth-500/10">
          <img 
            src={itineraryHero} 
            alt="ECHO Mission Trip Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* 4. Price Breakdown (No cards, creative editorial layout) */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 mb-28">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="border-b border-earth-500/20 pb-6 mb-12 text-center md:text-left">
            <h2 className="text-3xl font-serif text-text-primary">Expected Cost</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Airfare Block */}
            <div className="space-y-4 relative">
              <div className="flex items-baseline justify-between border-b border-earth-500/15 pb-4">
                <h3 className="text-2xl font-serif text-text-primary">Round Trip Airfare</h3>
                <span className="text-2xl md:text-3xl font-serif text-terracotta font-medium">$1,000 – $1,500</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Round trip airfare to Kenya is typically $1,000 - $1,500. Each person is responsible for buying their own ticket.
              </p>
              <ul className="space-y-3 text-sm text-text-secondary pt-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                  <span>Tickets should be purchased <strong>3 months before trip</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                  <span><strong className="text-text-primary">Action required:</strong> Message Sterling Kurtz with a screenshot of the itinerary you want to buy <em>BEFORE</em> you reserve the flights.</span>
                </li>
              </ul>
            </div>

            {/* Team Contribution Block */}
            <div className="space-y-4 relative">
              <div className="flex items-baseline justify-between border-b border-earth-500/15 pb-4">
                <h3 className="text-2xl font-serif text-text-primary">Team Contribution</h3>
                <span className="text-2xl md:text-3xl font-serif text-terracotta font-medium">$1,500</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Each team member will need to send $1,500 to cover their lodging, ground transportation, breakfast, water, Masai Mara safari, etc.
              </p>
              <ul className="space-y-3 text-sm text-text-secondary pt-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                  <span><strong>$50 (non-refundable)</strong> deposit is required immediately.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                  <span>Remaining <strong>$1,450 balance</strong> should be sent 3 months before trip.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Cash Guidance & Discretionary Spending */}
          <div className="mt-12 pt-8 border-t border-earth-500/15 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="text-lg font-serif text-text-primary">Meals Cash Guidance</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                Please carry extra cash for lunch and dinner. We suggest <strong>$10 for each meal</strong>. Some use more; many need less.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-serif text-text-primary">Discretionary Spending</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                Keep in mind you may wish to purchase souvenirs, gifts, or help someone in need, so extra cash is encouraged for those items.
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* 5. Itinerary Section */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase block mb-1">Daily Schedule</span>
            <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-4">Proposed Itinerary</h2>
            <p className="text-text-secondary text-sm md:text-base max-w-xl mx-auto">
              Our proposed schedule for the trip duration from arrival to departure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {days.map((item, index) => (
              <div 
                key={index} 
                className="bg-surface/60 hover:bg-surface p-8 rounded-2xl border border-earth-500/10 hover:border-earth-500/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-widest text-accent uppercase">{item.day}</span>
                    <span className="text-xs text-text-secondary font-medium px-2.5 py-1 rounded-full bg-background border border-earth-500/10">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-serif text-text-primary mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* 6. Tips for the Trip */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 mb-24">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="border-b border-earth-500/20 pb-6 mb-12 text-center md:text-left">
            <span className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase block mb-1">Preparation & Advice</span>
            <h2 className="text-3xl font-serif text-text-primary">Additional Tips & Info</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-surface/50 border border-earth-500/10 space-y-2">
              <h3 className="text-lg font-serif text-text-primary">ETA Requirement</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                You must have an ETA to enter Kenya. You will receive information around 3 weeks before the trip to help you apply for your ETA.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface/50 border border-earth-500/10 space-y-2">
              <h3 className="text-lg font-serif text-text-primary">Currency Exchange</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                We will help you exchange your money to Kenyan currency. Clean, crisp $20 bills or $100 bills work best for exchange.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface/50 border border-earth-500/10 space-y-2">
              <h3 className="text-lg font-serif text-text-primary">Restroom & Hygiene Supplies</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Always keep toilet paper or tissues with you (provided upon arrival). Many restrooms do not have toilet paper. Wipes and hand sanitizer are also helpful.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface/50 border border-earth-500/10 space-y-2">
              <h3 className="text-lg font-serif text-text-primary">Washcloths Notice</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Accommodations in Kenya likely will not have washcloths. You can bring your own if you need them.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface/50 border border-earth-500/10 space-y-2">
              <h3 className="text-lg font-serif text-text-primary">Malaria & Repellant</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                It would be advised to take the preventative malaria treatment before you come. Mosquito repellant could also be helpful.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface/50 border border-earth-500/10 space-y-2">
              <h3 className="text-lg font-serif text-text-primary">Language</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Most people in towns and high schools can speak English although Swahili is more commonly used.
              </p>
            </div>

            <div className="md:col-span-2 p-6 rounded-2xl bg-surface/50 border border-earth-500/10 space-y-2">
              <h3 className="text-lg font-serif text-text-primary">Cultural Consideration</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Please be considerate of the Kenyan culture. Try to understand their way of thinking, ask questions, interact with them, make friends with them, and be open and honest with their questions for you.
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Closing Prayer */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-12 border-t border-earth-500/15"
        >
          <p className="text-xl font-serif text-text-primary italic">
            "Pray that God would guide and direct us as we plan these trips!"
          </p>
        </motion.div>
      </div>
    </div>
  );
}
