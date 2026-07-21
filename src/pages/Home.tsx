import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState, useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import WhyEcho from '../components/WhyEcho';
import GalleryStrip from '../components/GalleryStrip';

import heroImg from '../assets/images/hero2.jpg';
import introImg from '../assets/images/josh.jpg';
// Bento — "What You'll Experience"
import culturalImg from '../assets/images/drumming.jpg';
import villageImg from '../assets/images/giving.JPG';
import schoolImg from '../assets/images/food serving.jpg';
import kidsImg from '../assets/images/facepainting.jpg';
import fellowshipImg from '../assets/images/shan.jpg';
import safariImg from '../assets/images/Safari image.JPG';
// Testimonials
import testimonialImg1 from '../assets/images/alie.jpg';
import testimonialImg2 from '../assets/images/IMG_9676.JPG';
import testimonialImg3 from '../assets/images/Burke.jpg';
// CTA
import ctaImg from '../assets/images/convoy.jpg';

export default function Home() {
const TESTIMONIALS = [
  {
    id: 1,
    text: "Every trip is an invitation to witness the incredible faith and resilience of the Kenyan people. You come to serve, but you often leave transformed—encouraged by the profound sense of community.",
    author: "Sarah Jenkins",
    role: "2024 Trip Participant",
    image: testimonialImg1
  },
  {
    id: 2,
    text: "The relationships built here go far beyond a typical mission trip. We're partnering with local leaders who are already doing the work, and the mutual encouragement is life-changing.",
    author: "David Chen",
    role: "Medical Team Volunteer",
    image: testimonialImg2
  },
  {
    id: 3,
    text: "I thought I was going to teach, but I ended up being the student. The joy and faith of the community taught me more about trusting God than years of study ever could.",
    author: "Emily Martinez",
    role: "Education Coordinator",
    image: testimonialImg3
  }
];

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
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-[100vh] min-h-[600px] flex flex-col justify-end pb-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src={heroImg}
            alt="An ECHO mission team in the hills of Kenya"
            style={prefersReducedMotion ? undefined : { y: heroY, willChange: 'transform' }}
            className="absolute inset-0 w-full h-[122%] -top-[11%] object-cover object-center"
          />
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 w-full text-center flex flex-col items-center px-6 md:px-12 max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl md:text-6xl lg:text-[76px] font-serif text-white font-medium tracking-tight mb-6 max-w-4xl leading-[1.04]"
          >
            Join a Life-Changing Mission Trip to Kenya
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full text-lg font-medium hover:opacity-90 transition-all hover:scale-105"
            >
              Explore Trips
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-border/80 text-xs font-semibold tracking-widest text-text-primary uppercase mb-8 lg:mb-12">
              About
            </div>
            <div className="w-full rounded-2xl overflow-hidden aspect-[4/3] bg-surface/50">
              <img
                src={introImg}
                alt="An ECHO team member with a child in Kenya"
                className="w-full h-full object-cover"
              />
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-text-primary text-primary rounded-full text-sm font-medium transition-transform duration-300 ease-out hover:scale-105 active:scale-100"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-[38px] leading-[1.3] font-sans text-text-primary mb-16"
            >
              ECHO Trips exists to connect believers with communities in Kenya through Christ-centered service, cultural exchange, and practical ministry. Each trip creates opportunities to serve local churches, encourage children, build relationships, <span className="text-text-secondary/50">and experience God's work around the world.</span>
            </motion.h2>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            >
              <div className="flex flex-col border-l border-accent/80 pl-5">
                <div className="text-4xl lg:text-5xl font-sans text-text-primary mb-3">
                  10+
                </div>
                <div className="text-[11px] text-text-secondary font-medium tracking-wide">Years of Meaningful Impact</div>
              </div>
              
              <div className="flex flex-col border-l border-accent/80 pl-5">
                <div className="text-4xl lg:text-5xl font-sans text-text-primary mb-3">
                  90+
                </div>
                <div className="text-[11px] text-text-secondary font-medium tracking-wide">Successful Mission Trips</div>
              </div>
              
              <div className="flex flex-col border-l border-accent/80 pl-5">
                <div className="text-4xl lg:text-5xl font-sans text-text-primary mb-3">
                  40+
                </div>
                <div className="text-[11px] text-text-secondary font-medium tracking-wide">Trusted Local Partners</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* What You'll Experience Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-border/80 text-xs font-semibold tracking-widest text-text-primary uppercase mb-6">
              The Journey
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-serif text-text-primary mb-6"
            >
              What You'll Experience
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-text-secondary leading-relaxed text-lg"
            >
              Every ECHO trip is a journey of service, connection, and discovery. From local communities to schools, churches, and the beauty of Kenya, each moment creates opportunities to serve and experience God's work around the world.
            </motion.p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* 1. Cultural Experiences (Featured) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group relative lg:col-span-8 lg:row-span-2 rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[3/2] lg:aspect-auto lg:min-h-[600px] flex flex-col justify-end shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <img
                src={culturalImg}
                alt="Cultural Experiences"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
              <div className="relative z-10 p-8 md:p-12">
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 transition-transform duration-500 group-hover:-translate-y-1">Cultural Experiences</h3>
                <p className="text-white/90 text-lg max-w-xl leading-relaxed transition-transform duration-500 group-hover:-translate-y-1">
                  Discover Kenyan traditions, worship, and everyday life through music, food, and shared celebration.
                </p>
              </div>
            </motion.div>

            {/* 2. Village Outreach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group relative lg:col-span-4 rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[3/2] lg:aspect-auto flex flex-col justify-end shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <img
                src={villageImg}
                alt="Village Outreach"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-serif text-white mb-3 transition-transform duration-500 group-hover:-translate-y-1">Village Outreach</h3>
                <p className="text-white/90 text-md leading-relaxed transition-transform duration-500 group-hover:-translate-y-1">
                  Serve alongside local communities, build relationships, and participate in practical ministry.
                </p>
              </div>
            </motion.div>

            {/* 3. School Visits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative lg:col-span-4 rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[3/2] lg:aspect-auto flex flex-col justify-end shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <img
                src={schoolImg}
                alt="School Visits"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-serif text-white mb-3 transition-transform duration-500 group-hover:-translate-y-1">School Visits</h3>
                <p className="text-white/90 text-md leading-relaxed transition-transform duration-500 group-hover:-translate-y-1">
                  Encourage students, share experiences, and connect with young people.
                </p>
              </div>
            </motion.div>

            {/* 4. Kids Ministry */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative lg:col-span-4 rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[3/2] lg:aspect-square flex flex-col justify-end shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <img
                src={kidsImg}
                alt="Kids Ministry"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-serif text-white mb-3 transition-transform duration-500 group-hover:-translate-y-1">Kids Ministry</h3>
                <p className="text-white/90 text-md leading-relaxed transition-transform duration-500 group-hover:-translate-y-1">
                  Spend time with children through teaching, activities, games, and encouragement.
                </p>
              </div>
            </motion.div>

            {/* 5. Worship & Fellowship */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative lg:col-span-4 rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[3/2] lg:aspect-square flex flex-col justify-end shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <img
                src={fellowshipImg}
                alt="Worship & Fellowship"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-serif text-white mb-3 transition-transform duration-500 group-hover:-translate-y-1">Worship & Fellowship</h3>
                <p className="text-white/90 text-md leading-relaxed transition-transform duration-500 group-hover:-translate-y-1">
                  Worship together with local believers and experience the beauty of the global church.
                </p>
              </div>
            </motion.div>

            {/* 6. Masai Mara Safari */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="group relative lg:col-span-4 rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[3/2] lg:aspect-square flex flex-col justify-end shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <img
                src={safariImg}
                alt="Masai Mara Safari"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-serif text-white mb-3 transition-transform duration-500 group-hover:-translate-y-1">Masai Mara Safari</h3>
                <p className="text-white/90 text-md leading-relaxed transition-transform duration-500 group-hover:-translate-y-1">
                  Experience one of Kenya's most iconic landscapes and God's incredible creation.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Go With ECHO? */}
      <WhyEcho />

      {/* Testimonials Carousel */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-background overflow-hidden">
        {/* Decorative layers: topographic contours (map motif), ghost quote mark, soft teal glow */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 800"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            <path d="M-60 620 C 220 560, 420 700, 720 640 C 1020 580, 1220 700, 1500 630" stroke="#0891B2" strokeOpacity="0.10" strokeWidth="1.5" />
            <path d="M-60 665 C 240 605, 440 745, 740 685 C 1040 625, 1240 745, 1500 675" stroke="#0891B2" strokeOpacity="0.07" strokeWidth="1.5" />
            <path d="M-60 710 C 260 650, 460 790, 760 730 C 1060 670, 1260 790, 1500 720" stroke="#0891B2" strokeOpacity="0.05" strokeWidth="1.5" />
            <path d="M-60 110 C 240 50, 460 170, 760 110 C 1060 50, 1260 170, 1500 110" stroke="#EA580C" strokeOpacity="0.08" strokeWidth="1.5" />
            <path d="M-60 155 C 260 95, 480 215, 780 155 C 1080 95, 1280 215, 1500 155" stroke="#EA580C" strokeOpacity="0.05" strokeWidth="1.5" />
          </svg>
          <span className="absolute -top-10 md:-top-20 left-4 md:left-16 font-serif leading-none text-[11rem] md:text-[18rem] text-accent/[0.07]">
            &ldquo;
          </span>
          <div className="absolute -bottom-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-secondary/[0.06] blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-14 md:mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              <h2 className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">Stories of Impact</h2>
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
            </div>
            <h3 className="text-3xl md:text-5xl font-serif text-text-primary">
              Transformed <em className="italic text-accent">Lives</em>
            </h3>
          </motion.div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 px-1">
                  <figure className="grid grid-cols-1 md:grid-cols-[minmax(0,0.85fr)_1fr] gap-8 md:gap-12 items-center">
                    <div className="relative aspect-[5/4] md:aspect-[4/5] rounded-[2.5rem] rounded-bl-none overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <Quote className="w-10 h-10 md:w-12 md:h-12 text-accent mb-6 shrink-0" strokeWidth={1.5} />
                      <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-text-primary leading-[1.3] mb-8">
                        {testimonial.text}
                      </blockquote>
                      <figcaption>
                        <p className="text-text-primary font-semibold text-lg">{testimonial.author}</p>
                        <p className="text-secondary text-sm uppercase tracking-wider font-bold mt-1">{testimonial.role}</p>
                      </figcaption>
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
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-primary hover:bg-text-primary hover:text-primary hover:border-text-primary transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-primary hover:bg-text-primary hover:text-primary hover:border-text-primary transition-all"
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
                    index === selectedIndex ? 'w-8 bg-accent' : 'w-2 bg-earth-500/40 hover:bg-earth-500/70'
                  }`}
                />
              ))}
            </div>

            <div className="hidden md:block w-[104px]" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* In the Field — horizontal-scroll photo strip */}
      <GalleryStrip />

      {/* CTA Section — full-bleed image band */}
      <section className="relative py-28 md:py-40 px-6 md:px-12 overflow-hidden">
        <img
          src={ctaImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Ready to Step Out?</h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join our upcoming teams. Discover your purpose, serve others, and be part of a story much larger than yourself.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-white rounded-full text-lg md:text-xl font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-black/20"
          >
            View Upcoming Trips
            <ArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
