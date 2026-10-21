import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import WhyEcho from '../components/WhyEcho';
import GalleryStrip from '../components/GalleryStrip';
import { Button, Card, Eyebrow, GreyPanel, SectionHeading } from '../components/ui';
import { useSEO } from '../lib/useSEO';

import heroImg from '../assets/images/hero2.webp';
// About strip
import aboutTallImg from '../assets/images/josh.webp';
import aboutSmallImg from '../assets/images/Kids Ministry.webp';
// "What you'll do in Kenya" cards
import culturalImg from '../assets/images/drumming.webp';
import villageImg from '../assets/images/giving.webp';
import schoolImg from '../assets/images/food serving.webp';
import kidsImg from '../assets/images/Kids Ministry.webp';
import fellowshipImg from '../assets/images/shan.webp';
import safariImg from '../assets/images/maraexperience.webp';
// Testimonials
import testimonialImg1 from '../assets/images/alie.webp';
import testimonialImg2 from '../assets/images/IMG_9676.webp';
import testimonialImg3 from '../assets/images/Burke.webp';
// Closing CTA floating photos
import ctaFloat1 from '../assets/images/Equator.webp';
import ctaFloat2 from '../assets/images/drumming.webp';
import ctaFloat3 from '../assets/images/Safari image.webp';
import ctaFloat4 from '../assets/images/giving.webp';

const DO_IN_KENYA = [
  {
    image: culturalImg,
    title: 'Kenyan life up close',
    description: 'Eat, sing, and celebrate with your hosts, and see what everyday life looks like for them.',
  },
  {
    image: villageImg,
    title: 'Village outreach',
    description: 'Work with local leaders on practical projects and get to know the families they serve.',
  },
  {
    image: schoolImg,
    title: 'School visits',
    description: "Spend time in classrooms, answer students' questions, and hear what they hope to do.",
  },
  {
    image: kidsImg,
    title: 'Kids ministry',
    description: 'Lead games, Bible lessons, and activities with children from partner churches.',
  },
  {
    image: fellowshipImg,
    title: 'Worship and fellowship',
    description: 'Pray and worship with Kenyan believers in their own churches.',
  },
  {
    image: safariImg,
    title: 'Maasai Mara safari',
    description: "See lions, elephants, and the open plains of Kenya's best-known reserve.",
  },
];

const STATS = [
  { number: '10+', label: 'years serving in Kenya' },
  { number: '90+', label: 'trips led' },
  { number: '40+', label: 'Kenyan partner churches and ministries' },
];

const CTA_FLOATS = [
  { src: ctaFloat1, className: 'top-6 left-6 w-24 xl:w-28 -rotate-6' },
  { src: ctaFloat2, className: 'bottom-8 left-12 w-20 xl:w-24 rotate-6' },
  { src: ctaFloat3, className: 'top-6 right-6 w-24 xl:w-28 rotate-6' },
  { src: ctaFloat4, className: 'bottom-8 right-12 w-20 xl:w-24 -rotate-6' },
];

export default function Home() {
  const TESTIMONIALS = [
    {
      id: 1,
      text: "Every trip is an invitation to witness the incredible faith and resilience of the Kenyan people. You come to serve, but you often leave transformed—encouraged by the profound sense of community.",
      author: 'Sarah Jenkins',
      role: '2024 Trip Participant',
      image: testimonialImg1,
    },
    {
      id: 2,
      text: "The relationships built here go far beyond a typical mission trip. We're partnering with local leaders who are already doing the work, and the mutual encouragement is life-changing.",
      author: 'David Chen',
      role: 'Medical Team Volunteer',
      image: testimonialImg2,
    },
    {
      id: 3,
      text: 'I thought I was going to teach, but I ended up being the student. The joy and faith of the community taught me more about trusting God than years of study ever could.',
      author: 'Emily Martinez',
      role: 'Education Coordinator',
      image: testimonialImg3,
    },
  ];

  useSEO(
    'Mission Trips to Kenya with Local Churches | ECHO Trips',
    "Serve with Kenyan churches on an 11-day mission trip: kids' ministry, village and school visits, worship, and a Maasai Mara safari.",
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Hero parallax — image drifts slower than the page as you scroll past it.
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="flex flex-col bg-white">
      {/* ===================== Hero (ref 01) ===================== */}
      <section
        ref={heroRef}
        className="relative w-full h-[100vh] min-h-[620px] flex flex-col justify-end pb-16 md:pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src={heroImg}
            alt="An ECHO mission team in the hills of Kenya"
            style={prefersReducedMotion ? undefined : { y: heroY, willChange: 'transform' }}
            className="absolute inset-0 w-full h-[122%] -top-[11%] object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="lg:col-span-7 text-[44px] md:text-6xl lg:text-[72px] font-serif text-white font-medium tracking-[-0.02em] leading-[1.02]"
            >
              Serve alongside Kenyan churches. Come home changed.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="lg:col-span-5 lg:pb-3"
            >
              <p className="text-white/90 text-base md:text-lg leading-[1.6] mb-6 max-w-md">
                ECHO Trips takes small teams to Kenya to work with local churches in villages, schools, and kids'
                programs. Our next 11-day trip leaves April 16, 2027.
              </p>
              <Button to="/signup" variant="clay">
                See Upcoming Trips
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== About strip (ref 02) ===================== */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Tall photo (left) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <img src={aboutTallImg} alt="An ECHO team member with a child in Kenya" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Heading + small photo + body (right) */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="grid sm:grid-cols-2 gap-8 items-start">
                <div>
                  <Eyebrow className="mb-4">About us</Eyebrow>
                  {/* Design-required heading — the copy doc supplies no heading for this strip. */}
                  <h2 className="font-serif text-3xl md:text-4xl text-ink leading-[1.08]">
                    Work beside local churches in Kenya
                  </h2>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square"
                >
                  <img src={aboutSmallImg} alt="Kids ministry on an ECHO trip" className="w-full h-full object-cover" />
                </motion.div>
              </div>

              <div className="max-w-xl">
                <p className="text-body text-[17px] leading-[1.6] mb-6">
                  We bring believers to Kenya to work beside local churches. You'll help with kids' ministry,
                  visit schools and villages, worship with Kenyan congregations, and make friends you'll keep.
                  The ministry was here before you arrived, and it keeps going after you leave.
                </p>
                <Button to="/about" variant="link">
                  Read Our Story
                </Button>
              </div>
            </div>
          </div>

          {/* Stat cards (ref 06 "99%" card) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 mt-16 md:mt-20">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-forest rounded-2xl p-8 flex flex-col justify-between min-h-[160px]">
                <div className="text-5xl md:text-6xl font-serif text-white">{stat.number}</div>
                <div className="text-white/70 text-[15px] leading-snug mt-6">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== What you'll do in Kenya (ref 03) ===================== */}
      <GreyPanel className="pb-8 md:pb-12">
        <SectionHeading
          eyebrow="What a trip looks like"
          title="What you'll do in Kenya"
          intro="Each trip mixes hands-on ministry with time to learn from Kenyan believers. Here's what a typical team does."
          className="mb-14 md:mb-16"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DO_IN_KENYA.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
            >
              <Card image={item.image} imageAlt={item.title} title={item.title} description={item.description} />
            </motion.div>
          ))}
        </div>
      </GreyPanel>

      {/* ===================== Why go with ECHO (ref 04) ===================== */}
      <WhyEcho />

      {/* ===================== Stories from past teams (ref 06) ===================== */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Stories from past teams"
            title="In their words"
            intro="Most people come expecting to help. Many go home saying they learned more than they gave."
            className="mb-14 md:mb-16"
          />

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 px-1">
                  <figure className="bg-panel rounded-[28px] p-6 md:p-10 grid grid-cols-1 md:grid-cols-[1fr_minmax(0,340px)] gap-8 md:gap-10 items-center">
                    <div className="order-2 md:order-1">
                      <blockquote className="font-sans text-xl md:text-[22px] font-medium text-ink leading-[1.5]">
                        &ldquo;{testimonial.text}&rdquo;
                      </blockquote>
                      <figcaption className="mt-8">
                        <p className="font-serif text-lg text-ink">{testimonial.author}</p>
                        <p className="text-body text-sm mt-1">{testimonial.role}</p>
                      </figcaption>
                    </div>
                    <div className="order-1 md:order-2 relative">
                      <div
                        aria-hidden="true"
                        className="absolute -top-3 -right-3 w-full h-full bg-forest rounded-[24px] rounded-tr-[64px]"
                      />
                      <div className="relative rounded-[24px] rounded-tr-[64px] overflow-hidden aspect-[4/5]">
                        <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center md:justify-between gap-6 mt-12">
            <div className="hidden md:flex gap-3">
              <button
                onClick={scrollPrev}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full border border-line flex items-center justify-center text-ink hover:bg-forest hover:text-white hover:border-forest transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full border border-line flex items-center justify-center text-ink hover:bg-forest hover:text-white hover:border-forest transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-2.5">
              {TESTIMONIALS.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === selectedIndex}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex ? 'w-8 bg-clay' : 'w-2 bg-ink/20 hover:bg-ink/40'
                  }`}
                />
              ))}
            </div>

            <div className="hidden md:block w-[104px]" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ===================== Photos from past trips (ref 07) ===================== */}
      <GalleryStrip />

      {/* ===================== Closing CTA (ref 09) ===================== */}
      <section className="px-4 sm:px-6 py-16 md:py-24">
        <div className="relative mx-auto max-w-[1320px] bg-mist rounded-[32px] px-6 py-20 md:px-12 md:py-28 text-center overflow-hidden">
          {/* Floating trip photos — desktop only */}
          <div aria-hidden="true" className="hidden lg:block">
            {CTA_FLOATS.map((f, i) => (
              <div
                key={i}
                className={`absolute ${f.className} rounded-2xl overflow-hidden shadow-lg border-4 border-white aspect-square`}
              >
                <img src={f.src} alt="" loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <Eyebrow className="mb-4">Next trip</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-ink leading-[1.05] mb-6">
              Ready to go?
            </h2>
            <p className="text-body text-[17px] leading-[1.6] mb-10 max-w-xl mx-auto">
              Our next team is in Kenya April 16&ndash;26, 2027. The cost is $1,500 plus airfare. Have questions
              first? We're glad to talk.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button to="/signup" variant="clay">
                See Upcoming Trips
              </Button>
              <Button to="/contact" variant="link">
                Ask Us a Question
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
