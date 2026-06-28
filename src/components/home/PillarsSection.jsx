import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import Container from '../layout/Container';
import TiltCard from './TiltCard';

export default function PillarsSection({
  pillars,
  t,
}) {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950 transition-colors duration-300">
      <Container>

        <div className="mb-16 max-w-2xl">
          <h2 className="mb-4 font-display text-4xl leading-tight text-slate-900 dark:text-white md:text-5xl">
            {t.initiativesHeading}
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400">
            {t.initiativesText}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 [perspective:1000px]">

          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full [transform-style:preserve-3d]"
              >
                <TiltCard className="h-full">

                  <div
                    className={cn(
                      "flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80"
                    )}
                    style={{ transform: 'translateZ(0px)' }}
                  >
                    {/* Icon Box: Forced dark background in light mode so white icons pop nicely, and vice-versa */}
                    <div
                      className={cn(
                        "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-md bg-slate-900 dark:bg-emerald-600"
                      )}
                    >
                      {/* Icons are explicitly set to pure white in both light and dark modes since background box has high contrast */}
                      <Icon 
                        size={32} 
                        className="stroke-[2.5] text-white dark:text-white" 
                      />
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h3>

                    <p className="mb-8 flex-grow text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pillar.desc}
                    </p>

                    <div className="mt-auto inline-flex items-center gap-2 font-semibold text-emerald-600 transition-colors hover:text-emerald-500 dark:text-emerald-400">
                      {t.pillarLink}
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </div>

                  </div>

                </TiltCard>
              </motion.div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}