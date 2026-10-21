import { useState } from 'react';
import type { ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export interface AccordionItem {
  id: string;
  title: ReactNode;
  /** Optional right-aligned summary shown on the closed row (e.g. a day's one-liner). */
  summary?: ReactNode;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Index open on first render; omit to start all closed. */
  defaultOpen?: number;
  className?: string;
}

/** Rows separated by a 1px divider, each toggled by a + / − icon (ref 08). */
export default function Accordion({ items, defaultOpen, className = '' }: AccordionProps) {
  const [open, setOpen] = useState<Set<string>>(
    () => new Set(defaultOpen != null && items[defaultOpen] ? [items[defaultOpen].id] : []),
  );

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className={`border-t border-line ${className}`}>
      {items.map((item) => {
        const isOpen = open.has(item.id);
        return (
          <div key={item.id} className="border-b border-line">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 py-5 text-left group"
            >
              <span className="flex flex-1 items-baseline justify-between gap-4 min-w-0">
                <span className="font-serif text-lg md:text-xl text-ink">{item.title}</span>
                {item.summary && (
                  <span className="hidden sm:block text-body text-sm text-right max-w-[55%] truncate">
                    {item.summary}
                  </span>
                )}
              </span>
              <span className="text-ink/70 group-hover:text-clay transition-colors shrink-0">
                {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-9 text-body text-[15px] leading-[1.6]">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
