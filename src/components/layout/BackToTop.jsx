import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Respect user's accessibility preferences
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          title="Back to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.25,
          }}
          whileHover={
            prefersReducedMotion
              ? {}
              : {
                  scale: 1.08,
                  y: -2,
                }
          }
          whileTap={{ scale: 0.95 }}
          className="
            fixed
            bottom-24
            right-5
            md:bottom-8
            md:right-8
            z-50

            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-full

            border
            border-surface-muted

            bg-white/90
            text-surya-600

            shadow-xl
            backdrop-blur-md

            transition-all
            duration-300

            hover:bg-surya-600
            hover:text-white

            focus:outline-none
            focus:ring-4
            focus:ring-surya-300

            dark:border-ink-low
            dark:bg-slate-900/90
            dark:text-surya-400
            dark:hover:bg-surya-600
            dark:hover:text-white
          "
        >
          <ArrowUp
            className="h-5 w-5"
            strokeWidth={2.5}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}