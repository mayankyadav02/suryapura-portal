import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function FaqItem({ q, a, isLast }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn(
      "py-6 transition-colors duration-200",
      !isLast && "border-b border-slate-100 dark:border-slate-800"
    )}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={q}
        className="flex w-full items-center justify-between text-left group"
      >
        <span className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {q}
        </span>

        <div className={cn(
          "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 transition-all duration-300",
          open && "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400 rotate-180"
        )}>
          <ChevronDown className="h-5 w-5" />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}