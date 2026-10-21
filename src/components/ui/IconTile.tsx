import type { LucideIcon } from 'lucide-react';

interface IconTileProps {
  icon: LucideIcon;
  className?: string;
}

/** 56px peach rounded square holding a clay lucide icon. */
export default function IconTile({ icon: Icon, className = '' }: IconTileProps) {
  return (
    <div
      className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-peach text-clay shrink-0 ${className}`}
    >
      <Icon className="w-6 h-6" strokeWidth={1.75} aria-hidden="true" />
    </div>
  );
}
