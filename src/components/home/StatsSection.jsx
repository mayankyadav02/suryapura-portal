import { motion } from 'framer-motion';
import Container from '../layout/Container';
import AnimatedCounter from './AnimatedCounter';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function StatsSection({ stats, lang }) {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950 transition-colors duration-300">
      <Container>

        <div className="grid grid-cols-2 gap-8 border-b border-slate-200 pb-16 dark:border-slate-800 md:grid-cols-4">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="border-l-4 border-emerald-500 pl-5 dark:border-emerald-400"
            >
              <h3 className="mb-3 text-4xl font-extrabold text-slate-900 dark:text-white md:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </h3>

              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                {lang === 'HI'
                  ? stat.labelHi
                  : stat.label}
              </p>

            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
}