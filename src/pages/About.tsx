import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, HeartHandshake, Users } from 'lucide-react';

// Hero collage tiles
import tileGroupImg from '../assets/images/brian 2.jpg';
import tileFaceImg from '../assets/images/facepainting.jpg';
import tileSchoolImg from '../assets/images/IMG_9618.JPG';
import tileGivingImg from '../assets/images/giving.JPG';
import tileSafariImg from '../assets/images/Safari image.JPG';
import tileDrumImg from '../assets/images/drumming.jpg';
// Our Story
import storyImg from '../assets/images/Brian.jpg';
// Meet the Team (placeholder photos until sterling/stennet/another are added)
import teamImg1 from '../assets/images/josh.jpg';
import teamImg2 from '../assets/images/alie.jpg';
import teamImg3 from '../assets/images/IMG_9676.JPG';

/* ---------------- Hero floating collage ---------------- */

const HERO_TILES = [
  { src: tileGroupImg, alt: 'The ECHO team with local friends', className: 'top-[4%] left-[3%] w-28 xl:w-36 rotate-[-6deg]', float: -12 },
  { src: tileSchoolImg, alt: 'Smiling schoolchildren', className: 'top-[10%] right-[4%] w-32 xl:w-40 rotate-[5deg]', float: 10 },
  { src: tileFaceImg, alt: 'Crafts with children', className: 'top-[42%] -left-[1%] w-24 xl:w-32 rotate-[4deg]', float: 14 },
  { src: tileSafariImg, alt: 'On safari beneath an acacia tree', className: 'top-[46%] -right-[1%] w-28 xl:w-40 rotate-[-5deg]', float: -10 },
  { src: tileGivingImg, alt: 'Serving a local community', className: 'bottom-[3%] left-[10%] w-28 xl:w-36 rotate-[7deg]', float: -14 },
  { src: tileDrumImg, alt: 'Local drumming and worship', className: 'bottom-[2%] right-[12%] w-24 xl:w-32 rotate-[-4deg]', float: 12 },
];

const VALUES = [
  {
    icon: Handshake,
    title: 'Partner',
    body: 'We work alongside local churches, ministries, and community leaders, supporting the work already happening within their communities.',
    accent: 'border-accent',
    iconColor: 'text-accent',
  },
  {
    icon: HeartHandshake,
    title: 'Serve',
    body: 'We participate in practical ministry through village outreach, school visits, children’s ministry, worship, and other opportunities to encourage and serve.',
    accent: 'border-secondary',
    iconColor: 'text-secondary',
  },
  {
    icon: Users,
    title: 'Connect',
    body: 'We believe transformation happens through relationships. We create space to listen, learn, worship, share, and grow together across cultures.',
    accent: 'border-accent',
    iconColor: 'text-accent',
  },
];

const TEAM = [
  {
    img: teamImg1,
    name: 'Trip Director',
    role: 'Leadership & Vision',
    bio: 'Leads the heart and direction of ECHO, ensuring every trip stays Christ-centered and relational.',
  },
  {
    img: teamImg2,
    name: 'Kenya Field Coordinator',
    role: 'On-the-Ground Partnerships',
    bio: 'Connects teams with local churches and ministries and walks with communities year-round.',
  },
  {
    img: teamImg3,
    name: 'Team Care & Logistics',
    role: 'Preparation & Support',
    bio: 'Guides participants through preparation and cares for every detail so teams can focus on serving.',
  },
];

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex flex-col bg-background">
      {/* ============ Hero ============ */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12">
        {/* warm ambient wash */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-accent/[0.06] blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-secondary/[0.05] blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Floating collage — desktop only to avoid overlapping text on mobile */}
          <div aria-hidden="true" className="hidden lg:block absolute inset-0">
            {HERO_TILES.map((tile, i) => (
              <motion.div
                key={tile.src}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={
                  prefersReducedMotion
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 1, scale: 1, y: [0, tile.float, 0] }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 0.6, delay: 0.1 * i }
                    : {
                        opacity: { duration: 0.6, delay: 0.1 * i },
                        scale: { duration: 0.6, delay: 0.1 * i },
                        y: { duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay: 0.1 * i },
                      }
                }
                className={`absolute ${tile.className}`}
              >
                <div className="rounded-2xl overflow-hidden shadow-lg shadow-earth-900/10 border-4 border-surface aspect-[3/4]">
                  <img src={tile.src} alt={tile.alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Centered hero copy */}
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">About ECHO Trips</span>
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-primary leading-[1.08] mb-6"
            >
              Serving Together. Growing Together.{' '}
              <em className="italic text-accent">Echoing God&rsquo;s Love.</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-lg text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto"
            >
              ECHO Trips exists to create meaningful opportunities for people to serve alongside local
              communities and ministries in Kenya. Through relationships, practical service, worship, and
              shared experiences, we invite you to see the work God is already doing &mdash; and become part of it.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full text-lg font-medium hover:opacity-90 transition-all hover:scale-105"
              >
                Explore Our Trips
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ Our Story ============ */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with offset accent frame */}
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div
              aria-hidden="true"
              className="hidden md:block absolute -bottom-5 -left-5 w-full h-full rounded-[2.5rem] rounded-tr-none border-2 border-accent/25"
            />
            <div className="relative rounded-[2.5rem] rounded-tr-none overflow-hidden aspect-[4/5] md:aspect-[5/6]">
              <img src={storyImg} alt="Sharing a meal together after a day of service" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">Our Story</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-text-primary mb-8 leading-tight">
              More Than a Trip. <em className="italic text-accent">A Shared Journey.</em>
            </h2>
            <div className="space-y-5 text-text-secondary text-lg leading-relaxed">
              <p>
                ECHO Trips was created out of a desire to connect people with the church and communities in
                Kenya in a way that is relational, meaningful, and rooted in service.
              </p>
              <p>
                Our trips are designed to go beyond simply visiting another country. We come to listen, learn,
                serve, worship, and build genuine relationships with the people we meet.
              </p>
              <p>
                From village outreach and school visits to children&rsquo;s ministry and time spent with local
                believers, every part of the journey is an opportunity to experience the beauty of God&rsquo;s
                global family.
              </p>
              <p className="text-text-primary font-medium">
                We believe the best mission experiences are not about coming in to &ldquo;fix&rdquo; something.
                They are about coming alongside what God is already doing, serving with humility, and allowing
                ourselves to be changed in the process.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ Our Mission ============ */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center mb-16 md:mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">Our Mission</span>
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-text-primary mb-6">
              To Serve. To Connect. <em className="italic text-accent">To Grow.</em>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              We seek to connect people with opportunities to serve alongside local ministries in Kenya, build
              meaningful cross-cultural relationships, and grow in their faith through shared experiences. Our
              hope is that every person who joins returns home with more than memories &mdash; with a deeper love
              for God, a greater appreciation for His global church, and relationships that last.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-border/50 divide-y md:divide-y-0 md:divide-x divide-border/50">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group flex flex-col p-8 md:p-12 bg-background hover:bg-surface/50 transition-colors duration-500"
              >
                {/* Top row: Icon & Label */}
                <div className="flex items-start justify-between mb-12">
                  <div className={`flex items-center justify-center ${value.iconColor}`}>
                    <value.icon className="w-10 h-10" strokeWidth={1.25} />
                  </div>
                  <span className="text-xs font-medium text-text-secondary/60 uppercase tracking-widest mt-1">
                    Value 0{i + 1}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-serif text-text-primary mb-6 leading-[1.1] tracking-tight">
                  {value.title}
                </h3>
                
                {/* Body */}
                <p className="text-text-secondary leading-relaxed flex-grow text-lg">
                  {value.body}
                </p>
                
                {/* Bottom row: Authors/Avatars */}
                <div className="mt-12 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img src={teamImg1} alt="Team" className="w-8 h-8 rounded-full border-2 border-background object-cover grayscale opacity-80" />
                    <img src={teamImg2} alt="Team" className="w-8 h-8 rounded-full border-2 border-background object-cover grayscale opacity-80" />
                  </div>
                  <span className="text-sm font-medium text-text-secondary/80">ECHO Team</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Meet the Team ============ */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center mb-16 md:mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">Meet the Team</span>
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-text-primary mb-6">The People Behind ECHO</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              ECHO Trips is made possible by a team of people who care deeply about Jesus, people, and the work
              of the local church in Kenya &mdash; working together to create meaningful, safe, and Christ-centered
              experiences for every group that joins us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group"
              >
                <div className="rounded-3xl overflow-hidden aspect-[4/5] mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                  <img
                    src={member.img}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-serif text-text-primary">{member.name}</h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent mt-1 mb-3">{member.role}</p>
                <p className="text-text-secondary leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Final CTA ============ */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden bg-earth-900 px-8 py-16 md:px-16 md:py-24 text-center"
        >
          {/* subtle decorative glow */}
          <div aria-hidden="true" className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary/15 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
              Come and Be Part of <em className="italic text-terracotta-light">the Journey</em>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              There is a lot to discover in Kenya &mdash; but the greatest part of the journey is the people you
              meet, the relationships you build, and the ways God works through serving together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full text-lg font-medium hover:opacity-90 transition-all hover:scale-105"
              >
                Explore Upcoming Trips
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white rounded-full text-lg font-medium hover:bg-white/10 transition-all"
              >
                Apply to Join
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
