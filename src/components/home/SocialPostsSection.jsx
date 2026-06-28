import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Share2,
  Calendar,
  MoreHorizontal
} from "lucide-react";

import Container from "../layout/Container";
import Card from "../common/Card";
import Badge from "../common/Badge";
import { H2, H3, P } from "../common/Typography";

export default function SocialPostsSection({
  heading,
  text,
}) {
  // यहाँ आपके दिए गए इमेज पाथ के साथ रियल पोस्ट्स का डेटा सेट किया गया है
  const posts = [
    {
      id: "1",
      category: "पंचायत (Governance)",
      date: "26 जून 2026",
      title: "ग्राम पंचायत की मासिक बैठक",
      description: "सूर्यपुरा पंचायत भवन में सरपंच और ग्रामीणों की उपस्थिति में गाँव के विकास कार्यों, बजट और नई डिजिटल सेवाओं पर चर्चा की गई।",
      image: "/meeting.jpg", // public/meeting.jpg
      likes: 145,
      comments: 32
    },
    {
      id: "2",
      category: "विकास कार्य (Infrastructure)",
      date: "24 जून 2026",
      title: "नई पक्की सड़क का निर्माण",
      description: "गाँव के मुख्य मार्गों को जोड़ने वाली नई पक्की सड़कों का निर्माण कार्य पूरा हुआ, जिससे ग्रामीणों का आवागमन और अधिक सुगम हो गया है।",
      image: "/road.jpg", // public/road.jpg
      likes: 208,
      comments: 45
    }
  ];

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950 transition-colors duration-300">
      <Container>

        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <Badge className="mb-6 bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800/50">
            जन-संवाद (Community)
          </Badge>

          <H2 className="mb-5 text-slate-900 dark:text-white">
            {heading || 'गाँव की ताज़ा झलकियाँ'}
          </H2>

          <P className="text-lg text-slate-600 dark:text-slate-400">
            {text || 'हमारे ग्रामीणों और पंचायत द्वारा साझा की गई विकास की कहानियाँ और दैनिक गतिविधियाँ।'}
          </P>
        </div>

        {/* Premium Post Cards Grid */}
        <div className="grid gap-10 lg:grid-cols-2">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
            >
              <Card 
                hover={true} 
                className="group flex flex-col h-full overflow-hidden border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900/80"
              >
                {/* Image Section with Overlay */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1590622995256-4279b9803273?q=80&w=1200&auto=format&fit=crop';
                    }}
                  />
                  
                  {/* Subtle Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20 opacity-60 transition-opacity group-hover:opacity-80" />

                  {/* Category Badge on Image */}
                  <div className="absolute left-5 top-5">
                    <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow p-8">
                  
                  <div className="mb-4 flex items-center justify-between text-sm font-medium text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-emerald-500" />
                      {post.date}
                    </div>
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </div>

                  <H3 className="mb-3 text-2xl font-bold leading-snug text-slate-900 dark:text-white transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    {post.title}
                  </H3>

                  <P className="mb-8 flex-grow text-slate-600 dark:text-slate-300">
                    {post.description}
                  </P>

                  {/* Social Footer */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-5 dark:border-slate-800">
                    
                    <div className="flex items-center gap-6">
                      {/* Like Button */}
                      <button className="group/btn flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-rose-500 dark:text-slate-400 dark:hover:text-rose-400">
                        <Heart className="h-5 w-5 transition-transform group-hover/btn:scale-110 group-hover/btn:fill-rose-500/20" />
                        <span>{post.likes}</span>
                      </button>

                      {/* Comment Button */}
                      <button className="group/btn flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400">
                        <MessageCircle className="h-5 w-5 transition-transform group-hover/btn:scale-110 group-hover/btn:fill-blue-500/20" />
                        <span>{post.comments}</span>
                      </button>
                    </div>

                    {/* Share Button */}
                    <button
                      type="button"
                      aria-label="Share post"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-all hover:bg-emerald-50 hover:text-emerald-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-400"
                    >
                      <Share2 className="h-4 w-4" />
                    </button>

                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}