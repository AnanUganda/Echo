import { Eyebrow } from './ui';
import SocialCards from './ui/card-fan-carousel';
import type { CardItem } from './ui/card-fan-carousel';

// Every photo used on the site (the images folder; the logo is a .png and is
// excluded by the glob pattern). Newest trip photos are featured first.
const imageModules = import.meta.glob<string>('../assets/images/*.{webp,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const FEATURED = ['smiling-child', 'gift-bags', 'four-friends', 'team-prayer'];

function baseName(path: string): string {
  return (path.split('/').pop() ?? path).replace(/\.(webp|jpe?g)$/i, '');
}

const CARDS: CardItem[] = Object.entries(imageModules)
  .sort(([a], [b]) => {
    const ia = FEATURED.indexOf(baseName(a));
    const ib = FEATURED.indexOf(baseName(b));
    const ra = ia === -1 ? FEATURED.length : ia;
    const rb = ib === -1 ? FEATURED.length : ib;
    return ra !== rb ? ra - rb : a.localeCompare(b);
  })
  .map(([, url]) => ({ imgUrl: url, alt: 'A moment from an ECHO mission trip in Kenya' }));

export default function GalleryStrip() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-white overflow-hidden">
      <div className="w-full mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-2 md:mb-4">
          <Eyebrow className="mb-4">In the field</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] text-ink leading-[1.05] mb-4">
            Photos from past trips
          </h2>
          <p className="text-body text-[17px] leading-[1.6]">
            Long drives, shared meals, and new friends — a few days on an ECHO trip.
          </p>
        </div>
        <SocialCards cards={CARDS} />
      </div>
    </section>
  );
}
