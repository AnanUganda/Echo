import type { ReactNode, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

type Variant = 'clay' | 'dark' | 'outline' | 'link';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  to?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: 'button' | 'submit';
  disabled?: boolean;
  withArrow?: boolean;
  className?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}

const base =
  'inline-flex items-center justify-center gap-2 font-sans font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none';

const VARIANTS: Record<Variant, string> = {
  // 8px radius, 44–48px tall
  clay: 'h-12 px-6 rounded-lg text-[15px] bg-clay text-white hover:bg-clay-dark',
  dark: 'h-12 px-6 rounded-lg text-[15px] bg-ink text-white hover:bg-forest',
  outline: 'h-12 px-6 rounded-lg text-[15px] border border-white/40 text-white hover:bg-white/10',
  link: 'text-[15px] font-semibold text-forest underline underline-offset-4 decoration-1 hover:text-clay',
};

/** Default arrow per variant: clay → , link ↗ (dark/outline none unless asked). */
function resolveArrow(variant: Variant, withArrow?: boolean) {
  const show = withArrow ?? (variant === 'clay' || variant === 'link');
  if (!show) return null;
  const Icon = variant === 'link' ? ArrowUpRight : ArrowRight;
  return <Icon className="w-4 h-4" aria-hidden="true" />;
}

export default function Button({
  children,
  variant = 'clay',
  to,
  href,
  onClick,
  type = 'button',
  disabled,
  withArrow,
  className = '',
  target,
  rel,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${VARIANTS[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {resolveArrow(variant, withArrow)}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel} onClick={onClick} aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
