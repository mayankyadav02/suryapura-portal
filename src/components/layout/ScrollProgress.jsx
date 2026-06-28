import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="
        fixed
        top-0
        left-0
        right-0

        z-[100]

        h-1

        origin-left

        bg-gradient-to-r
        from-surya-600
        via-terra-500
        to-surya-400

        shadow-sm

        dark:from-surya-400
        dark:via-terra-500
        dark:to-surya-300
      "
    />
  );
}