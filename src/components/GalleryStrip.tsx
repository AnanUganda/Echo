import { useRef, useEffect } from 'react';
import { useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Eyebrow } from './ui';

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

// Latest trip photos
import smilingChildImg from '../assets/images/smiling-child.jpg';
import giftBagsImg from '../assets/images/gift-bags.jpg';
import fourFriendsImg from '../assets/images/four-friends.jpg';
import teamPrayerImg from '../assets/images/team-prayer.jpg';

interface Photo {
  src: string;
  alt: string;
  caption: string;
  /** Fixed height with variable width; landscape shots read wider, portraits narrower. */
  orientation: 'portrait' | 'landscape';
}

// Captions kept as-is. The copy doc's suggested swaps need a [village]/[town]
// placeholder, so per the brief those captions stay unchanged.
const PHOTOS: Photo[] = [
  { src: smilingChildImg, alt: 'A smiling child during a village visit', caption: 'A new friend', orientation: 'portrait' },
  { src: giftBagsImg, alt: 'Handing out gift bags to children at a school', caption: 'Handing out gifts', orientation: 'portrait' },
  { src: fourFriendsImg, alt: 'Four children smiling together by a village fence', caption: 'All smiles', orientation: 'landscape' },
  { src: teamPrayerImg, alt: 'Team members praying together outside', caption: 'Praying together', orientation: 'portrait' },
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

    // Loop bounds handler for seamless infinite scrolling in both directions.
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
    track.scrollBy({
      left: direction * track.clientWidth * 0.8,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <section className="px-4 sm:px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1320px] bg-panel rounded-[32px] py-14 md:py-16 overflow-hidden">
        {/* Header */}
        <div className="px-6 md:px-12 mb-10 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-2xl md:max-w-none">
            <div className="max-w-2xl">
              <Eyebrow className="mb-4">In the field</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] text-ink leading-[1.05] mb-4">
                Photos from past trips
              </h2>
              <p className="text-body text-[17px] leading-[1.6]">
                Long drives, shared meals, and new friends. Swipe through a few days on an ECHO trip.
              </p>
            </div>

            {/* Desktop scroll controls */}
            <div className="hidden md:flex gap-3 shrink-0">
              <button
                onClick={() => scrollByCards(-1)}
                aria-label="Scroll gallery left"
                className="w-12 h-12 rounded-full border border-line bg-white flex items-center justify-center text-ink hover:bg-forest hover:text-white hover:border-forest transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollByCards(1)}
                aria-label="Scroll gallery right"
                className="w-12 h-12 rounded-full border border-line bg-white flex items-center justify-center text-ink hover:bg-forest hover:text-white hover:border-forest transition-all"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal scroll track — white rounded photo frames, hidden scrollbar */}
        <div
          ref={trackRef}
          onMouseEnter={() => (isInteracting.current = true)}
          onMouseLeave={() => (isInteracting.current = false)}
          onTouchStart={() => (isInteracting.current = true)}
          onTouchEnd={() => (isInteracting.current = false)}
          onPointerDown={() => (isInteracting.current = true)}
          onPointerUp={() => (isInteracting.current = false)}
          className="flex gap-5 md:gap-6 overflow-x-auto overscroll-x-contain px-6 md:px-12 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {[...PHOTOS, ...PHOTOS].map((photo, index) => (
            <figure
              key={`${photo.src}-${index}`}
              className="shrink-0 bg-white rounded-2xl p-3 shadow-sm"
            >
              <div className="overflow-hidden rounded-xl h-[42vh] min-h-[280px] max-h-[520px]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className={`h-full w-auto object-cover select-none ${
                    photo.orientation === 'landscape' ? 'aspect-[3/2]' : 'aspect-[3/4]'
                  }`}
                />
              </div>
              <figcaption className="px-1 pt-3 pb-1 font-serif text-base text-ink">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
