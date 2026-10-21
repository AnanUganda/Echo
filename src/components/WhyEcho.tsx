import { motion } from 'motion/react';
import { Handshake, Compass, Sprout, Users, Repeat } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { Button, Eyebrow, IconTile } from './ui';
import wideImg from '../assets/images/See Kenya.webp';

interface Point {
  icon: LucideIcon;
  title: string;
  body: string;
}

const POINTS: Point[] = [
  {
    icon: Handshake,
    title: 'Work under local leaders',
    body: "You'll serve with churches and ministries we've partnered with for years, on work they lead.",
  },
  {
    icon: Compass,
    title: 'Meet Kenya off the tourist route',
    body: "Share meals, stay close to the communities you serve, and learn people's names.",
  },
  {
    icon: Sprout,
    title: 'Grow in your faith',
    body: "Worship, prayer, and hard work in a new culture stretch you in ways home doesn't.",
  },
  {
    icon: Users,
    title: 'Make friends who last',
    body: 'Teammates and Kenyan hosts often stay in touch long after the trip.',
  },
  // The 5th point is paired with a photo in the wide card below.
  {
    icon: Repeat,
    title: 'Back work that keeps going',
    body: 'These ministries serve their neighbors all year. Your visit encourages the people doing it.',
  },
];

function PointCard({ point }: { point: Point }) {
  return (
    <div className="bg-panel rounded-2xl p-7 md:p-8 h-full flex flex-col">
      <IconTile icon={point.icon} className="mb-6" />
      <h3 className="font-serif text-xl text-ink mb-2">{point.title}</h3>
      <p className="text-body text-[15px] leading-[1.6]">{point.body}</p>
    </div>
  );
}

export default function WhyEcho() {
  const wide = POINTS[4];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="w-full mx-auto">
        {/* Header: left-aligned heading, intro on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-end mb-12 md:mb-16">
          <div>
            <Eyebrow className="mb-4">The ECHO difference</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] text-ink leading-[1.05]">
              Why go with ECHO
            </h2>
          </div>
          <p className="text-body text-[17px] leading-[1.6] lg:pb-2">
            We don't run our own projects. Every ECHO team works under Kenyan pastors and ministry leaders who
            know their communities and stay after you fly home.
          </p>
        </div>

        {/* Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Tall forest card (left) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative overflow-hidden bg-forest rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[340px]"
          >
            {/* soft brand-mark wash */}
            <div aria-hidden="true" className="absolute -bottom-10 -right-6 w-64 h-64 rounded-full bg-forest-2/60 blur-2xl" />
            <blockquote className="relative font-serif text-3xl md:text-4xl lg:text-[40px] text-white leading-[1.1]">
              Come to serve. Expect to learn.
            </blockquote>
            <div className="relative mt-10">
              <Button to="/signup" variant="clay">
                See Upcoming Trips
              </Button>
            </div>
          </motion.div>

          {/* Right region: 2×2 point cards + a wide photo card */}
          <div className="lg:col-span-7 grid gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {POINTS.slice(0, 4).map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                >
                  <PointCard point={point} />
                </motion.div>
              ))}
            </div>

            {/* Wide card: photo + the 5th point (ref 04 "24/7" card) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-panel rounded-2xl p-3 grid grid-cols-1 sm:grid-cols-[minmax(0,42%)_1fr] gap-4 items-center"
            >
              <div className="overflow-hidden rounded-xl aspect-[4/3] sm:h-full">
                <img
                  src={wideImg}
                  alt="An ECHO team serving alongside a local Kenyan community"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <IconTile icon={wide.icon} className="mb-5" />
                <h3 className="font-serif text-xl md:text-2xl text-ink mb-2">{wide.title}</h3>
                <p className="text-body text-[15px] leading-[1.6]">{wide.body}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
