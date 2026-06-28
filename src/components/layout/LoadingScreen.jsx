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

        bg-gradient-to-br
        from-surya-50
        via-white
        to-surya-100

        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
      "
    >
      {/* Logo Circle */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: 'easeInOut',
        }}
        className="
          mb-6
          flex
          h-20
          w-20
          items-center
          justify-center

          rounded-full

          bg-surya-600

          text-4xl
          text-white

          shadow-xl
        "
      >
        ☀️
      </motion.div>

      {/* Portal Name */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          text-center
          font-display
          text-3xl
          font-bold

          text-surya-700

          dark:text-surya-300
        "
      >
        सूर्यपुरा
      </motion.h1>

      <p
        className="
          mt-2
          text-center
          text-sm
          tracking-wide

          text-ink-low

          dark:text-slate-400
        "
      >
        ग्राम विकास पोर्टल
      </p>

      {/* Loader */}
      <div className="mt-10 flex gap-2">
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
              bg-surya-600
              dark:bg-surya-400
            "
          />
        ))}
      </div>

      <p
        className="
          mt-6
          text-xs
          tracking-widest
          uppercase

          text-ink-low

          dark:text-slate-500
        "
      >
        Loading Experience...
      </p>
    </motion.div>
  );
}