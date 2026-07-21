import { motion } from 'motion/react';

export default function Itinerary() {
  const days = [
    {
      day: 'Day 1',
      date: 'Friday',
      title: 'Arrival in Kenya',
      description: 'Evening arrival in Kenya at Jomo Kenyatta International Airport (JKIA). Meet the ECHO team and transfer to the guesthouse for rest.',
    },
    {
      day: 'Day 2',
      date: 'Saturday',
      title: 'Orientation & Acclimatization',
      description: 'Morning orientation, team breakfast, and a brief tour of the local area to get acclimated to the new environment.',
    },
    {
      day: 'Day 3',
      date: 'Sunday',
      title: 'Worship & Community Connection',
      description: 'Attend a local church service and spend the afternoon connecting with community members.',
    },
    {
      day: 'Day 4',
      date: 'Monday',
      title: 'Village Outreach',
      description: 'First day of practical ministry through village outreach and relationship building.',
    },
    {
      day: 'Day 5',
      date: 'Tuesday',
      title: 'School Visit & Children’s Ministry',
      description: 'Spend the day at a local school interacting with students and supporting educational programs.',
    },
    {
      day: 'Day 6',
      date: 'Wednesday',
      title: 'Service Project',
      description: 'Engage in a practical community service project alongside local partners.',
    },
    {
      day: 'Day 7',
      date: 'Thursday',
      title: 'Continued Ministry',
      description: 'Follow up on outreach activities and enjoy shared meals with local families.',
    },
    {
      day: 'Day 8',
      date: 'Friday',
      title: 'Masai Mara Safari Departure',
      description: 'Travel to the Masai Mara National Reserve for an afternoon game drive.',
    },
    {
      day: 'Day 9',
      date: 'Saturday',
      title: 'Safari & Reflection',
      description: 'Morning safari game drive, followed by team reflection and packing.',
    },
    {
      day: 'Day 10',
      date: 'Monday',
      title: 'Departure',
      description: 'Final farewells and transfer to JKIA for the evening departure flight back home.',
    },
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">Trip Details</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-text-primary mb-6">
            Itinerary & Logistics
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Everything you need to know to prepare for your journey, from travel logistics to expected costs and cultural notes.
          </p>
        </motion.div>

        <div className="space-y-20">
          {/* Itinerary Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-serif text-text-primary mb-8 border-b border-border/50 pb-4">
              Proposed Itinerary (10 Days)
            </h2>
            <div className="space-y-8">
              {days.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 group">
                  <div className="md:w-48 shrink-0">
                    <p className="text-sm font-semibold tracking-wider text-accent uppercase">{item.day} — {item.date}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-text-primary mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Costs Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-serif text-text-primary mb-8 border-b border-border/50 pb-4">
              Expected Cost
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface p-8 rounded-2xl border border-border/50">
                <h3 className="text-xl font-medium text-text-primary mb-4">Airfare</h3>
                <p className="text-3xl font-serif text-text-primary mb-2">$1,000–$1,500</p>
                <ul className="text-text-secondary space-y-2 text-sm leading-relaxed mt-4">
                  <li>• Individual responsibility to purchase</li>
                  <li>• Must be booked 3 months before departure</li>
                  <li>• <span className="font-medium text-text-primary">Action required:</span> Requires screenshot approval from Sterling Kurtz before booking.</li>
                </ul>
              </div>
              <div className="bg-surface p-8 rounded-2xl border border-border/50">
                <h3 className="text-xl font-medium text-text-primary mb-4">Team Contribution</h3>
                <p className="text-3xl font-serif text-text-primary mb-2">$1,500</p>
                <ul className="text-text-secondary space-y-2 text-sm leading-relaxed mt-4">
                  <li>• $50 non-refundable deposit due immediately</li>
                  <li>• $1,450 remaining balance due 3 months before trip</li>
                  <li>• <span className="font-medium text-text-primary">Covers:</span> Lodging, ground transportation, breakfast, water, and Masai Mara safari.</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-surface p-6 rounded-2xl border border-border/50 flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shrink-0 text-accent font-serif text-xl">
                $
              </div>
              <div>
                <h4 className="text-text-primary font-medium mb-1">Additional Cash Guidance</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Plan for about $10 per meal for lunches and dinners. Bring extra discretionary spending money for souvenirs, gifts, or helping others along the way.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Additional Info Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-serif text-text-primary mb-8 border-b border-border/50 pb-4">
              Additional Tips & Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div>
                <h3 className="text-lg font-medium text-text-primary mb-3">Travel & Logistics</h3>
                <ul className="text-text-secondary space-y-3 leading-relaxed text-sm">
                  <li><strong>ETA Requirement:</strong> Information for the Electronic Travel Authorisation will be provided 3 weeks before the trip.</li>
                  <li><strong>Money Exchange:</strong> Bring clean, crisp $20 or $100 bills (no older bills, tears, or marks) for the best exchange rates.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-text-primary mb-3">Health & Comfort</h3>
                <ul className="text-text-secondary space-y-3 leading-relaxed text-sm">
                  <li><strong>Precautions:</strong> Preventative malaria treatment and mosquito repellent are highly recommended.</li>
                  <li><strong>Packing:</strong> Bring toilet paper, tissues, wipes, hand sanitizer, and optional washcloths (as they are rarely provided).</li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-lg font-medium text-text-primary mb-3">Language & Culture</h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  English is widely spoken in towns and high schools, but Swahili is more common in everyday interactions. A posture of cultural respect and humility is emphasized throughout the journey.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Closing Prayer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center pt-12"
          >
            <p className="text-xl font-serif text-text-primary italic">
              "May God guide our steps, open our hearts, and use our hands to reflect His love to every person we meet."
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
