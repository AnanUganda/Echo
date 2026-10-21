import type { ReactNode } from 'react';

interface CardProps {
  image?: string;
  imageAlt?: string;
  imageAspect?: string;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}

/**
 * White card with 12px inner padding around an inset rounded image,
 * then a serif title and one-line description.
 */
export default function Card({
  image,
  imageAlt = '',
  imageAspect = 'aspect-[4/3]',
  title,
  description,
  children,
  className = '',
}: CardProps) {
  return (
    <div className={`bg-white rounded-2xl p-3 border border-line/70 shadow-sm ${className}`}>
      {image && (
        <div className={`overflow-hidden rounded-xl ${imageAspect}`}>
          <img src={image} alt={imageAlt} loading="lazy" decoding="async" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="px-2 pt-4 pb-2">
        {title && <h3 className="font-serif text-xl text-ink leading-snug mb-2">{title}</h3>}
        {description && <p className="text-body text-[15px] leading-[1.6]">{description}</p>}
        {children}
      </div>
    </div>
  );
}
