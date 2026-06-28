import { motion } from 'framer-motion';
import Container from '../layout/Container';
import Badge from '../common/Badge';
import { H2, Lead } from '../common/Typography';
import SocialPostCard from './SocialPostCard';

export default function SocialFeedSection({
  posts,
  isHi,
}) {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950 transition-colors duration-300">
      <Container>

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <Badge className="mb-6 bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800/50">
            {isHi ? 'सामुदायिक अपडेट' : 'Community Updates'}
          </Badge>

          <H2 className="mb-5 text-slate-900 dark:text-white">
            {isHi ? 'सूर्यपुरा की नवीनतम गतिविधियाँ' : 'Latest Stories from Suryapura'}
          </H2>

          <Lead className="text-slate-600 dark:text-slate-400">
            {isHi
              ? 'गाँव में चल रहे विकास कार्य, शिक्षा, हरित अभियान और सामुदायिक गतिविधियों की ताज़ा जानकारी।'
              : 'Stay connected with the latest village development initiatives, educational achievements and community activities.'}
          </Lead>
        </motion.div>

        {/* ================= POSTS ================= */}
        <div className="grid gap-10 lg:grid-cols-2">
          {posts.map((post) => (
            <SocialPostCard
              key={post.id}
              post={post}
              isHi={isHi}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}