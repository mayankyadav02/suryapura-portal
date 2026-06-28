import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltCard({ children, className = '' }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 180, damping: 18 });
  const mouseY = useSpring(y, { stiffness: 180, damping: 18 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ['-7deg', '7deg']);

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      <div
        className="h-full"
        style={{
          transform: 'translateZ(30px)',
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}