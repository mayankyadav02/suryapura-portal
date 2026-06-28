import { motion } from 'framer-motion';
import {
  Heart,
  MessageCircle,
  Repeat2,
  BadgeCheck,
} from 'lucide-react';

import Card from '../common/Card';
import { H3, P } from '../common/Typography';

export default function SocialPostCard({
  post,
  isHi,
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card hover={true} className="flex flex-col h-full overflow-hidden p-0 border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900/80">

        {/* ================= IMAGE ================= */}
        <div className="relative h-72 overflow-hidden">
          <img
            src={post.image}
            alt={isHi ? post.titleHi : post.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1590622995256-4279b9803273?q=80&w=1200&auto=format&fit=crop';
            }}
          />

          {/* Subtle Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20 opacity-60" />

          {/* Time / Category Badge */}
          <div className="absolute left-5 top-5">
            <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
              {post.time}
            </span>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex flex-col flex-grow p-8">

          {/* Author */}
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 font-bold text-white shadow-md dark:bg-emerald-500">
              {post.author
                .split(' ')
                .map((word) => word[0])
                .join('')}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-slate-900 dark:text-white">
                  {post.author}
                </h4>

                {post.verified && (
                  <BadgeCheck
                    size={18}
                    className="fill-sky-500 text-sky-500"
                  />
                )}
              </div>

              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                {isHi ? 'आधिकारिक अपडेट' : 'Official Update'}
              </p>
            </div>
          </div>

          {/* Title */}
          <H3 className="mb-3 text-2xl font-bold leading-snug text-slate-900 dark:text-white transition-colors hover:text-emerald-600 dark:hover:text-emerald-400">
            {isHi ? post.titleHi : post.title}
          </H3>

          {/* Description */}
          <P className="mb-8 flex-grow text-slate-600 dark:text-slate-300 leading-relaxed">
            {isHi ? post.descriptionHi : post.description}
          </P>

          {/* Divider */}
          <div className="mb-5 border-t border-slate-100 dark:border-slate-800" />

          {/* Actions */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="flex items-center gap-2.5 text-slate-500 transition-colors hover:text-rose-500 dark:text-slate-400 dark:hover:text-rose-400"
            >
              <Heart size={20} className="transition-transform hover:scale-110" />
              <span className="text-sm font-semibold">
                {post.likes}
              </span>
            </button>

            <button
              type="button"
              className="flex items-center gap-2.5 text-slate-500 transition-colors hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
            >
              <MessageCircle size={20} className="transition-transform hover:scale-110" />
              <span className="text-sm font-semibold">
                {post.comments}
              </span>
            </button>

            <button
              type="button"
              className="flex items-center gap-2.5 text-slate-500 transition-colors hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400"
            >
              <Repeat2 size={20} className="transition-transform hover:scale-110" />
              <span className="text-sm font-semibold">
                {post.shares}
              </span>
            </button>
          </div>

        </div>

      </Card>
    </motion.article>
  );
}