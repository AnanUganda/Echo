import type { ReactNode } from 'react';

interface GreyPanelProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
}

/**
 * Grey section container: 32px radius, inset ~24px from the viewport edge.
 * Used to frame the card grids and photo galleries.
 */
export default function GreyPanel({ children, className = '', innerClassName = '', id }: GreyPanelProps) {
  return (
    <section id={id} className={`px-4 sm:px-6 ${className}`}>
      <div
        className={`mx-auto w-full bg-panel rounded-[32px] px-6 py-16 md:px-12 md:py-20 ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
