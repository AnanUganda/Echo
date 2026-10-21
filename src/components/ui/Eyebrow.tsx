import type { ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

/** Inter 13px uppercase label in forest — section kicker above a heading. */
export default function Eyebrow({ children, className = '' }: EyebrowProps) {
  return (
    <span
      className={`inline-block font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-forest ${className}`}
    >
      {children}
    </span>
  );
}
