"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/cn";
import { FaIcon } from "@/components/ui/FaIcon";

type Item = { q: string; a: string };
type Props = { items: Item[] };

export function FAQ({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  return (
    <div className="divide-y divide-white/8 border-y border-white/8">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full min-w-0 items-center justify-between gap-4 py-6 text-left sm:gap-6 sm:py-7"
              >
                <span className="min-w-0 flex-1 font-display text-lg font-light text-bone-50 transition-colors group-hover:text-silver-soft [overflow-wrap:anywhere] sm:text-xl md:text-2xl">
                  {item.q}
                </span>
                <span
                  className={cn(
                    "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-bone-300 transition-[transform,border-color,color] duration-300 group-hover:border-white/30",
                    isOpen && "rotate-45 border-silver/60 text-silver"
                  )}
                >
                  <FaIcon icon={faPlus} className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[65ch] pb-6 pr-4 text-base leading-relaxed text-bone-300/75 [overflow-wrap:anywhere] sm:pb-7 sm:pr-16">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
