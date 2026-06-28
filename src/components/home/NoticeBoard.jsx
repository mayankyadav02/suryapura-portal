import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
};

export default function NoticeBoard({ title, button, news }) {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950 transition-colors duration-300">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="rounded-3xl bg-slate-900 p-10 text-white shadow-2xl border border-slate-800 dark:bg-slate-900/90 dark:border-slate-800 md:p-12"
        >
          {/* Header */}
          <div className="mb-12 flex items-center justify-between">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wide">
              {title}
            </h2>

            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
            </span>
          </div>

          {/* News / Notices List */}
          <div className="space-y-10">
            {news.map((item, index) => (
              <div
                key={index}
                className="relative border-l border-white/20 pl-6 group"
              >
                <span className="absolute -left-1 top-2 h-2 w-2 rounded-full bg-emerald-400 transition-all group-hover:scale-125" />

                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300/80">
                  {item.date} • {item.tag}
                </p>

                <h3 className="mt-3 text-lg md:text-xl font-medium text-slate-100 group-hover:text-emerald-400 transition-colors duration-300 leading-relaxed">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Action Link Button */}
          <Link
            to="/transparency"
            className="mt-12 inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/20 py-5 font-semibold bg-white/5 text-white hover:bg-white/10 hover:border-white/40 active:scale-[0.98] transition-all duration-300 shadow-inner"
          >
            {button}
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
          
        </motion.div>
      </Container>
    </section>
  );
}