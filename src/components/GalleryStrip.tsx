import { useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import equatorImg from '../assets/images/Equator.webp';
import groupSelfieImg from '../assets/images/brian 2.webp';
import brianImg from '../assets/images/Brian.webp';
import marjImg from '../assets/images/marj.webp';
import giraffeImg from '../assets/images/IMG_0661.webp';
import cheetahImg from '../assets/images/Cheetah.webp';
import marketImg from '../assets/images/IMG_4592.webp';
import schoolboysImg from '../assets/images/IMG_9618.webp';
import biscuitsImg from '../assets/images/IMG_9626.webp';
import walkingImg from '../assets/images/IMG_9455.webp';
import monumentImg from '../assets/images/Peace monument.webp';

// New images
import momentImg from '../assets/images/Moment.webp';
import trip2Img from '../assets/images/Trip 2.webp';
import trip01Img from '../assets/images/Trip-07-21 at 17.43.55 (1).webp';
import trip02Img from '../assets/images/Trip-07-21 at 17.43.55 (2).webp';
import trip03Img from '../assets/images/Trip-07-21 at 17.43.55 (3).webp';
import trip04Img from '../assets/images/Trip-07-21 at 17.43.55 (4).webp';
import trip05Img from '../assets/images/Trip-07-21 at 17.43.55.webp';
import tripImg from '../assets/images/trip.webp';

interface Photo {
  src: string;
  alt: string;
  caption: string;
  /** Fixed height with variable width; landscape shots read wider, portraits narrower — subtle, natural variation. */
  orientation: 'portrait' | 'landscape';
}

const PHOTOS: Photo[] = [
  { src: equatorImg, alt: 'The ECHO team at the Kenya equator marker', caption: 'Crossing the equator', orientation: 'portrait' },
  { src: marketImg, alt: 'Visiting a local partner shop in the community', caption: 'Local partners', orientation: 'landscape' },
  { src: brianImg, alt: 'Sharing a meal together after a day of service', caption: 'Shared meals', orientation: 'portrait' },
  { src: cheetahImg, alt: 'A cheetah on the open plains', caption: "God's creation", orientation: 'portrait' },
  { src: schoolboysImg, alt: 'Smiling schoolchildren during a visit', caption: 'Bright smiles', orientation: 'portrait' },
  { src: biscuitsImg, alt: 'A team member handing out a small treat to children', caption: 'A small kindness', orientation: 'landscape' },
  { src: giraffeImg, alt: 'A giraffe on the open plains', caption: 'On the plains', orientation: 'portrait' },
  { src: marjImg, alt: 'A team member sharing a moment with a local child', caption: 'New friendships', orientation: 'portrait' },
  { src: walkingImg, alt: 'Walking alongside local friends', caption: 'Side by side', orientation: 'portrait' },
  { src: monumentImg, alt: 'Learning the story behind a community peace monument', caption: 'Learning the story', orientation: 'portrait' },
  { src: groupSelfieImg, alt: 'A joyful group photo with the whole team and local friends', caption: 'The whole team', orientation: 'portrait' },
  { src: momentImg, alt: 'A special moment during our mission journey', caption: 'Cherished moments', orientation: 'portrait' },
  { src: trip2Img, alt: 'On the road in Kenya', caption: 'On the road', orientation: 'portrait' },
  { src: trip01Img, alt: 'Scenic vistas of the Kenyan countryside', caption: 'Scenic vistas', orientation: 'landscape' },
  { src: trip02Img, alt: 'Joyful fellowship with community members', caption: 'Fellowship', orientation: 'portrait' },
  { src: trip03Img, alt: 'Reaching out and serving the local community', caption: 'Community outreach', orientation: 'portrait' },
  { src: trip04Img, alt: 'Smiles and laughter all around', caption: 'Smiles all around', orientation: 'portrait' },
  { src: trip05Img, alt: 'The deep joy of hands-on service', caption: 'Joy of service', orientation: 'portrait' },
  { src: tripImg, alt: 'The team standing together in unity', caption: 'Team unity', orientation: 'portrait' },
];

export default function GalleryStrip() {
  const prefersReducedMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const isInteracting = useRef(false);

  useEffect(() => {
    let animationId: number;
    const track = trackRef.current;
    
    if (!track || prefersReducedMotion) return;

    // Loop bounds handler to provide infinite scrolling seamlessly in both directions
    const handleScroll = () => {
      const halfWidth = track.scrollWidth / 2;
      if (halfWidth <= 0) return;

      if (track.scrollLeft >= halfWidth) {
        track.scrollLeft = track.scrollLeft - halfWidth + 10;
      } else if (track.scrollLeft <= 0) {
        track.scrollLeft = halfWidth - 10;
      }
    };

    track.addEventListener('scroll', handleScroll);

    const scroll = () => {
      if (!isInteracting.current) {
        track.scrollLeft += 0.4; // Slow, elegant automatic scrolling
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
      track.removeEventListener('scroll', handleScroll);
    };
  }, [prefersReducedMotion]);

  const scrollByCards = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    // Scroll by ~80% of the visible width so a little of the next card peeks in — feels intentional, not paginated.
    track.scrollBy({
      left: direction * track.clientWidth * 0.8,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center py-16 md:py-20 bg-surface overflow-hidden">
      {/* Header — matches the editorial eyebrow pattern used across the site */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full px-6 md:px-12 mb-12 md:mb-16"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">In the Field</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-text-primary mb-4">
              Moments From <em className="italic text-accent">the Journey</em>
            </h2>
            <p className="text-text-secondary leading-relaxed text-lg">
              Shared meals, open roads, and new friendships — swipe through a few glimpses of everyday life on an ECHO trip.
            </p>
          </div>

          {/* Desktop scroll controls */}
          <div className="hidden md:flex gap-3 shrink-0">
            <button
              onClick={() => scrollByCards(-1)}
              aria-label="Scroll gallery left"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-primary hover:bg-text-primary hover:text-primary hover:border-text-primary transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollByCards(1)}
              aria-label="Scroll gallery right"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-primary hover:bg-text-primary hover:text-primary hover:border-text-primary transition-all"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Horizontal scroll track — ~1/3 viewport tall, snap + touch friendly, hidden scrollbar */}
      <div
        ref={trackRef}
        onMouseEnter={() => (isInteracting.current = true)}
        onMouseLeave={() => (isInteracting.current = false)}
        onTouchStart={() => (isInteracting.current = true)}
        onTouchEnd={() => (isInteracting.current = false)}
        onPointerDown={() => (isInteracting.current = true)}
        onPointerUp={() => (isInteracting.current = false)}
        className="flex gap-4 md:gap-6 overflow-x-auto overscroll-x-contain px-6 md:px-12 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {[...PHOTOS, ...PHOTOS].map((photo, index) => (
          <figure
            key={`${photo.src}-${index}`}
            className="group relative shrink-0 h-[58vh] min-h-[380px] max-h-[720px] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-pointer"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              draggable={false}
              className={`h-full w-auto object-cover select-none transition-transform duration-[600ms] ease-out ${
                prefersReducedMotion ? '' : 'group-hover:scale-[1.04]'
              } ${photo.orientation === 'landscape' ? 'aspect-[3/2]' : 'aspect-[3/4]'}`}
            />
            {/* Caption + gradient reveal on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <figcaption className="absolute bottom-0 left-0 p-5 md:p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
              <span className="block w-8 h-0.5 bg-accent mb-3" aria-hidden="true" />
              <span className="text-white font-serif text-lg md:text-xl">{photo.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
