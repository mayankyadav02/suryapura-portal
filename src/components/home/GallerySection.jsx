import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';

export default function GallerySection({
  heading,
  text,
  button,
}) {
  return (
    <section className="overflow-hidden bg-slate-50 py-24 dark:bg-slate-950 transition-colors duration-300">
      <Container>

        {/* Header Section */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="mb-4 font-display text-4xl leading-tight text-slate-900 dark:text-white md:text-5xl">
              {heading}
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400">
              {text}
            </p>
          </div>

          <Link
            to="/initiatives"
            className="group hidden md:inline-flex items-center gap-3 font-semibold text-emerald-600 transition-colors hover:text-emerald-500 dark:text-emerald-400"
          >
            {button}
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Gallery Grid using local public images with fallback handling */}
        <div className="grid h-[360px] gap-6 sm:h-[500px] md:h-[600px] md:grid-cols-4">

          {/* Main Large Image */}
          <div className="group col-span-2 row-span-2 overflow-hidden rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              src="/village.webp"
              alt="Village Farming & Agriculture"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=900&auto=format&fit=crop';
              }}
            />
          </div>

          {/* Secondary Image 1 */}
          <div className="group overflow-hidden rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              src="/village.webp"
              alt="Rural Education & School"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=700&auto=format&fit=crop';
              }}
            />
          </div>

          {/* Secondary Image 2 */}
          <div className="group overflow-hidden rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              src="/village.webp"
              alt="Community Gathering"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=700&auto=format&fit=crop';
              }}
            />
          </div>

          {/* Wide Bottom Image */}
          <div className="group col-span-2 overflow-hidden rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              src="/village.webp"
              alt="Green Energy & Solar Initiative"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=900&auto=format&fit=crop';
              }}
            />
          </div>

        </div>

        {/* Mobile View Button */}
        <div className="mt-12 flex justify-center md:hidden">
          <Link
            to="/initiatives"
            className="group inline-flex items-center gap-3 font-semibold text-emerald-600 transition-colors hover:text-emerald-500 dark:text-emerald-400"
          >
            {button}
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </Container>
    </section>
  );
}