import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';
import Button from '../common/Button';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

// Reusable Blur Wrapper
const BlurText = ({ children, className = "" }) => (
  <span className={`inline-block px-4 py-1 rounded-lg backdrop-blur-md bg-white/10 border border-white/10 ${className}`}>
    {children}
  </span>
);

export default function HeroSection({ t }) {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/village.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <BlurText className="text-white text-sm font-medium">
              {t.heroBadge}
            </BlurText>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mb-6 font-display text-4xl md:text-4xl font-bold leading-tight text-white"
          >
            <BlurText className="px-6 py-2">{t.heroTitle}</BlurText>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mb-10 max-w-2xl text-lg md:text-xl text-white"
          >
            <BlurText className="px-4 py-2">{t.heroText}</BlurText>
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row justify-center"
          >
            <Button as={Link} to="/initiatives" className="bg-surya-600 px-8 py-4 hover:bg-surya-700 text-white">
              {t.primaryCta} <ArrowRight size={18} />
            </Button>
            <Button as={Link} to="/connect" variant="secondary" className="border-white/20 bg-white/10 px-8 py-4 text-white backdrop-blur hover:bg-white/20">
              {t.secondaryCta} <PlayCircle size={18} />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}