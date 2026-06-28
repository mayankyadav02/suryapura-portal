import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';

export default function StorySection({ t }) {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950 transition-colors duration-300">
      <Container>
        <div className="grid items-center gap-16 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 font-display text-4xl leading-tight text-slate-900 dark:text-white md:text-5xl">
              {t.storyHeading}
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {t.storyText1}
            </p>

            <p className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {t.storyText2}
            </p>

            <Link
              to="/initiatives"
              className="group inline-flex items-center gap-3 font-semibold text-emerald-600 transition-colors hover:text-emerald-500 dark:text-emerald-400"
            >
              {t.storyLink}
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800"
          >
            <img
              src="/village-leader.jpg" 
              alt="Rural Leadership & Development"
              className="h-[460px] w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1590622995256-4279b9803273?q=80&w=1200&auto=format&fit=crop';
              }}
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}