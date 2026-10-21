import type { ReactNode } from 'react';
import Eyebrow from './Eyebrow';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'center' | 'left';
  className?: string;
  titleClassName?: string;
  introClassName?: string;
}

/** Eyebrow + serif H2 + optional intro paragraph, centered or left-aligned. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
  className = '',
  titleClassName = '',
  introClassName = '',
}: SectionHeadingProps) {
  const isCentered = align === 'center';
  return (
    <div
      className={`flex flex-col ${
        isCentered ? 'items-center text-center mx-auto max-w-2xl' : 'items-start text-left'
      } ${className}`}
    >
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-[44px] text-ink leading-[1.05] ${titleClassName}`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-body text-[17px] leading-[1.6] ${
            isCentered ? 'max-w-xl' : 'max-w-xl'
          } ${introClassName}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
