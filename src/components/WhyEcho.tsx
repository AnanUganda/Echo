import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

import serveImg from '../assets/images/elay.jpg';

interface Value {
  title: string;
  description: string;
}

const VALUES: Value[] = [
  {
    title: 'Serve Alongside Local Ministries',
    description: 'Work hand in hand with trusted local churches and ministry partners making a lasting impact.',
  },
  {
    title: 'Experience Authentic Kenyan Communities',
    description: 'Go beyond tourism and build genuine relationships with the people and culture of Kenya.',
  },
  {
    title: 'Grow Spiritually',
    description: 'Deepen your faith through worship, prayer, service, and cross-cultural experiences.',
  },
  {
    title: 'Build Lifelong Friendships',
    description: 'Connect with fellow team members and local believers through shared experiences and meaningful conversations.',
  },
  {
    title: 'Support Ongoing Gospel Work',
    description: 'Your participation encourages and strengthens ministries already serving their communities year-round.',
  },
];

export default function WhyEcho() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  // Subtle parallax: image drifts opposite to scroll (background layer only).
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header — editorial rule eyebrow, no pill badge */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              The ECHO Difference
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-text-primary mb-6">
            Why Go With <em className="italic text-accent">ECHO</em>?
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            ECHO Trips is more than a mission trip. It's an opportunity to serve, grow in your faith,
            build lasting relationships, and partner with the work God is already doing in Kenya.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: parallax image with offset frame + squared-corner motif (sticky on desktop) */}
          <div className="lg:sticky lg:top-28">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-5 -left-5 w-full h-full rounded-[2.5rem] rounded-tr-none border-2 border-accent/25"
              />
              <div className="relative rounded-[2.5rem] rounded-tr-none overflow-hidden aspect-[4/5] md:aspect-[5/6]">
                <motion.img
                  src={serveImg}
                  alt="An ECHO team serving alongside a local Kenyan community"
                  style={prefersReducedMotion ? undefined : { y: imageY, willChange: 'transform' }}
                  className="absolute inset-0 w-full h-[116%] -top-[8%] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />
                <blockquote className="absolute bottom-0 left-0 p-8 md:p-10">
                  <span className="block w-10 h-0.5 bg-accent mb-5" aria-hidden="true" />
                  <p className="text-white font-serif text-xl md:text-2xl leading-snug max-w-md">
                    "Come not simply to see Kenya, but to serve, learn, and be transformed."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Right: numbered editorial ledger — hairline dividers, ghost numerals, no boxes */}
          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ staggerChildren: 0.1 }}
            className="flex flex-col divide-y divide-earth-900/[0.08]"
          >
            {VALUES.map((value, index) => (
              <motion.li
                key={value.title}
                variants={itemVariants}
                transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group grid grid-cols-[3.25rem_1fr] gap-5 md:gap-7 py-7 md:py-8 px-2 md:px-4 rounded-2xl transition-colors duration-300 hover:bg-background"
              >
                <span
                  aria-hidden="true"
                  className={`font-serif italic text-[1.75rem] leading-none pt-1 text-earth-900/20 transition-colors duration-300 ${
                    index % 2 === 0 ? 'group-hover:text-accent' : 'group-hover:text-secondary'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-text-primary mb-2 transition-transform duration-300 group-hover:translate-x-1.5">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                    {value.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
