import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.6,
          ease: 'easeInOut',
        },
      }}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        flex-col
        items-center
        justify-center

        bg-slate-50/60
        dark:bg-slate-950
        transition-colors
        duration-300
      "
    >
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-900/10" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-slate-200/40 blur-3xl dark:bg-slate-800/40" />
      </div>

      {/* Portal Name (Top-level focus since logo is removed) */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          relative
          z-10
          text-center
          font-display
          text-4xl
          font-bold
          tracking-tight

          text-slate-900
          dark:text-white
        "
      >
        सूर्यपुरा
      </motion.h1>

      <p
        className="
          relative
          z-10
          mt-2
          text-center
          text-sm
          tracking-wide

          text-slate-600
          dark:text-slate-400
        "
      >
        ग्राम विकास पोर्टल
      </p>

      {/* Loader */}
      <div className="relative z-10 mt-12 flex gap-2">
        {[0, 1, 2].map((item) => (
          <motion.span
            key={item}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.7,
              delay: item * 0.15,
            }}
            className="
              h-3
              w-3
              rounded-full
              bg-emerald-600
              dark:bg-emerald-400
            "
          />
        ))}
      </div>

      <p
        className="
          relative
          z-10
          mt-8
          text-xs
          tracking-widest
          uppercase

          text-slate-400
          dark:text-slate-500
        "
      >
        Loading Experience...
      </p>
    </motion.div>
  );
}