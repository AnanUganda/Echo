import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

import brianImg from '../assets/images/Brian.jpg';
import equatorImg from '../assets/images/Equator.jpg';
import safariImg from '../assets/images/Safari image.JPG';
import giraffeImg from '../assets/images/IMG_0661.jpg';
import marketImg from '../assets/images/IMG_4592.JPG';
import walkingImg from '../assets/images/IMG_9455.JPG';
import joshImg from '../assets/images/josh.jpg';
import marjImg from '../assets/images/marj.jpg';
import drummingImg from '../assets/images/drumming.jpg';

interface Photo {
  src: string;
  alt: string;
}

const COL_1: Photo[] = [
  { src: equatorImg, alt: 'The ECHO team at the Kenya equator marker' },
  { src: marjImg, alt: 'A team member sharing a laugh with a local child' },
  { src: marketImg, alt: 'Visiting a local partner shop in the community' },
];

const COL_2: Photo[] = [
  { src: brianImg, alt: 'Sharing a meal together after a day of service' },
  { src: safariImg, alt: 'The team gathered beneath an acacia tree on safari' },
  { src: joshImg, alt: 'A team member with a child from the community' },
];

const COL_3: Photo[] = [
  { src: drummingImg, alt: 'Local drumming during a cultural celebration' },
  { src: giraffeImg, alt: 'A giraffe on the Masai Mara plains' },
  { src: walkingImg, alt: 'Walking alongside local friends' },
];

function GalleryColumn({
  photos,
  y,
  className = '',
}: {
  photos: Photo[];
  y: ReturnType<typeof useTransform<number, string>> | undefined;
  className?: string;
}) {
  return (
    <motion.div style={y ? { y } : undefined} className={`flex flex-col gap-4 md:gap-6 ${className}`}>
      {photos.map((photo) => (
        <div key={photo.src} className="w-full aspect-[3/4] rounded-2xl overflow-hidden shrink-0">
          <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" className="w-full h-full object-cover" />
        </div>
      ))}
    </motion.div>
  );
}

export default function FieldGallery() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const yCol1 = useTransform(scrollYProgress, [0, 1], ['2%', '-18%']);
  const yCol2 = useTransform(scrollYProgress, [0, 1], ['-14%', '6%']);
  const yCol3 = useTransform(scrollYProgress, [0, 1], ['4%', '-20%']);

  if (prefersReducedMotion) {
    // Static, accessible fallback — no parallax, no tilt, just a calm grid.
    const stillPhotos = [...COL_1, ...COL_2, ...COL_3];
    return (
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <GalleryHeader />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {stillPhotos.map((photo) => (
              <div key={photo.src} className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <GalleryHeader />

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative"
        >
          {/* Offset accent frame — echoes the WhyEcho image treatment */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute -top-5 -right-5 w-full h-full rounded-[2.5rem] rounded-bl-none border-2 border-accent/25"
          />
          <div className="relative rounded-[2.5rem] rounded-bl-none overflow-hidden h-[440px] sm:h-[520px] md:h-[75vh] md:max-h-[760px]">
            <div className="absolute inset-0 flex gap-4 md:gap-6 px-4 md:px-6">
              <GalleryColumn photos={COL_1} y={yCol1} className="w-1/3" />
              <GalleryColumn photos={COL_2} y={yCol2} className="w-1/3 md:mt-16" />
              <GalleryColumn photos={COL_3} y={yCol3} className="w-1/3" />
            </div>
            {/* Soft vignette fading to the section background, not a harsh black mask */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-surface via-transparent to-surface" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-surface/80 via-transparent to-surface/80" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GalleryHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-2xl mx-auto mb-14 md:mb-20"
    >
      <div className="flex items-center justify-center gap-4 mb-4">
        <span className="h-px w-10 bg-accent" aria-hidden="true" />
        <h2 className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">In the Field</h2>
        <span className="h-px w-10 bg-accent" aria-hidden="true" />
      </div>
      <h3 className="text-3xl md:text-5xl font-serif text-text-primary mb-6">
        Every Trip, <em className="italic text-accent">In Pictures</em>
      </h3>
      <p className="text-text-secondary leading-relaxed text-lg">
        A glimpse into the everyday moments — shared meals, open roads, and new friendships — that make every ECHO trip unforgettable.
      </p>
    </motion.div>
  );
}
