import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Container from '../layout/Container';

export default function TestimonialsSection({
  testimonials,
  t,
}) {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950 transition-colors duration-300">
      <Container>

        <h2 className="mb-16 font-display text-4xl leading-tight text-slate-900 dark:text-white md:text-5xl">
          {t.voicesHeading}
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80"
            >
              <div>
                <Quote
                  size={34}
                  className="mb-6 text-emerald-500/30 dark:text-emerald-400/30"
                />

                <p className="mb-8 text-lg leading-relaxed text-slate-700 dark:text-slate-200">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 font-bold text-white shadow-md dark:bg-emerald-500">
                  {item.name
                    .split(' ')
                    .map(word => word[0])
                    .join('')}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.role}
                  </p>
                </div>
              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}