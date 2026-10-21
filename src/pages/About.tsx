import { motion, useReducedMotion } from 'motion/react';
import { Handshake, HeartHandshake, Users } from 'lucide-react';

import { Button, Eyebrow, IconTile, SectionHeading } from '../components/ui';
import { useSEO } from '../lib/useSEO';

// Hero images
import heroMainImg from '../assets/images/brian 2.webp';
import heroSmallImg from '../assets/images/team-prayer.jpg';
// Our Story
import storyImg from '../assets/images/Story.webp';
// Meet the Team
import teamImg1 from '../assets/images/sterling1.webp';
import teamImg3 from '../assets/images/stennet.webp';

const VALUES = [
  {
    icon: Handshake,
    title: 'Partner',
    body: 'Kenyan pastors and leaders set the plan. We support the work they already do in their communities.',
  },
  {
    icon: HeartHandshake,
    title: 'Serve',
    body: 'We do hands-on ministry: village visits, school days, kids’ classes, sports outreach, and time at a special needs home.',
  },
  {
    icon: Users,
    title: 'Connect',
    body: 'Friendships change people. We leave room every day to listen, ask questions, and worship together.',
  },
];

const TEAM = [
  {
    img: teamImg1,
    name: 'Sterling Kurtz',
    role: 'Founder & Director',
    bio: "Sets ECHO's direction and keeps every trip focused on Christ and on real friendships with Kenyan partners.",
  },
  {
    img: teamImg3,
    name: 'Stennet Kurtz',
    role: 'Logistics & Operations',
    bio: 'Handles travel, preparation, and daily logistics so your team can focus on serving.',
  },
];

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  useSEO(
    'Our Story | ECHO Trips Kenya',
    'Why ECHO Trips exists, what we believe about short-term missions, and the team who leads every trip to Kenya.',
  );

  return (
    <div className="flex flex-col bg-white">
      {/* ============ Hero (ref 02 style) ============ */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Eyebrow className="mb-4">About ECHO Trips</Eyebrow>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-ink leading-[1.06] mb-6">
              Echoing what God is already doing in Kenya
            </h1>
            <p className="text-body text-[17px] leading-[1.6] mb-8 max-w-xl">
              ECHO Trips brings small teams to Kenya to serve with local churches and ministries. You'll worship
              with Kenyan believers, help where they ask, and see what God is doing there.
            </p>
            <Button to="/signup" variant="clay">
              See Upcoming Trips
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-5 gap-4 md:gap-5"
          >
            <div className="col-span-3 rounded-2xl overflow-hidden aspect-[4/5]">
              <img src={heroMainImg} alt="The ECHO team with local friends in Kenya" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden aspect-[3/4] self-center">
              <img src={heroSmallImg} alt="Team members praying together" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ How ECHO started ============ */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[5/6]">
              <img src={storyImg} alt="Sharing a meal together after a day of service" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <Eyebrow className="mb-4">Our story</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] text-ink mb-8 leading-[1.05]">
              How ECHO started
            </h2>
            <div className="space-y-5 text-body text-[17px] leading-[1.6]">
              {/* TODO(copy): copy doc asks for 2–3 more sentences (founding year, what
                  sparked it, how long the Kurtz family has served). Using para 1's first
                  sentence only until that fact is supplied. */}
              <p>
                Sterling Kurtz started ECHO Trips to connect people with the church in Kenya through friendship
                and service, not sightseeing.
              </p>
              <p>
                We come to listen, learn, serve, and worship. On a typical trip you'll teach a kids' class in
                Nakuru, spend a day in homes and a school in Maralal, and worship at a local church on Sunday.
              </p>
              <p className="text-ink font-medium">
                We don't come to fix anything. We come alongside what God is already doing, serve with humility,
                and let Him change us along the way.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ Our mission ============ */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Our mission"
            title="Our mission"
            intro="We help believers serve with local ministries in Kenya, make friends across cultures, and grow in faith. We hope you go home loving God more, seeing His church as bigger than you knew, and still in touch with the friends you made."
            className="mb-14 md:mb-16"
            introClassName="max-w-2xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="bg-panel rounded-2xl p-8 flex flex-col h-full"
              >
                <IconTile icon={value.icon} className="mb-6" />
                <h3 className="font-serif text-2xl text-ink mb-3">{value.title}</h3>
                <p className="text-body text-[15px] leading-[1.6]">{value.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Meet the team ============ */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Meet the team"
            title="The People Behind ECHO"
            intro="ECHO is run by a small team who love Jesus and the local church in Kenya. Their job is to keep every trip safe, well planned, and centered on Christ."
            className="mb-14 md:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="bg-white rounded-2xl p-3 border border-line/70 shadow-sm"
              >
                <div className="rounded-xl overflow-hidden aspect-[4/5]">
                  <img src={member.img} alt={member.name} loading="lazy" className="w-full h-full object-cover object-top" />
                </div>
                <div className="px-2 pt-5 pb-2">
                  <h3 className="font-serif text-xl text-ink">{member.name}</h3>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-clay mt-1 mb-3">{member.role}</p>
                  <p className="text-body text-[15px] leading-[1.6]">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Final CTA ============ */}
      <section className="px-4 sm:px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto max-w-[1320px] rounded-[32px] overflow-hidden bg-forest px-8 py-16 md:px-16 md:py-24 text-center"
        >
          <div aria-hidden="true" className="absolute -bottom-16 -right-10 w-96 h-96 rounded-full bg-forest-2/60 blur-3xl" />
          <div className="relative">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[48px] text-white mb-6 leading-[1.08]">
              Come see for yourself
            </h2>
            <p className="text-white/80 text-[17px] leading-[1.6] max-w-2xl mx-auto mb-10">
              Kenya has plenty to see. What people remember most are the friends they made and what God did while
              they served together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/signup" variant="clay">
                See Upcoming Trips
              </Button>
              <Button to="/signup" variant="outline">
                Apply to Join
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
