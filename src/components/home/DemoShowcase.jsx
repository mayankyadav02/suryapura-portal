import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '../../utils/cn';
import Container from '../layout/Container';

export default function DevelopmentShowcase({ t }) {
  // Embla Carousel configuration for auto-slide
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [Autoplay({ delay: 4500, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  // Minimum 5 development images from public folder
  const developmentImages = [
    '/women.jpg',
    '/agri.jpg',
    '/smartEdu.jpg',
    '/emitr.jpg',
    '/digitalPanchayat.jpg',
  ];

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950 transition-colors duration-300">
      <Container>
        {/* Header Section */}
        <div className="mb-14 max-w-3xl">
          <h2 className="mb-5 font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            {t.demoTitle || 'सूर्यपुरा: विकास के नए आयाम'}
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {t.demoIntro || 'शिक्षा, कृषि और पंचायत के स्तर पर हो रहे निरंतर बदलाव और पारदर्शिता के साथ आगे बढ़ते हमारे कदम।'}
          </p>
        </div>

        {/* Premium Split Layout: Slider + Social Posts */}
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] items-stretch">
          
          {/* Left Column: Premium Image Slider for Development Work */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 group">
            <div className="h-full overflow-hidden" ref={emblaRef}>
              <div className="flex h-full">
                {developmentImages.map((src, index) => (
                  <div className="relative min-w-full flex-[0_0_100%] h-full" key={index}>
                    <img
                      src={src}
                      alt={`Development Work ${index + 1}`}
                      className="h-[500px] w-full object-cover sm:h-[600px] transition-transform duration-1000 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = `https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop`;
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />
                    
                    {/* Text Content over Image */}
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <span className="inline-flex rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 mb-4 shadow-sm">
                        {t.demoHero || 'प्रगति रिपोर्ट'}
                      </span>
                      <h3 className="text-3xl font-extrabold leading-tight md:text-4xl text-white/95">
                        {t.demoHeroText || 'आधुनिक सुविधाओं से जुड़ता हमारा गाँव'}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Carousel Navigation Dots */}
            <div className="absolute bottom-8 right-8 z-10 flex gap-2.5">
              {developmentImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    'h-2.5 rounded-full transition-all duration-300 shadow-md',
                    selectedIndex === index
                      ? 'w-10 bg-amber-400'
                      : 'w-2.5 bg-white/50 hover:bg-white'
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Premium Social Posts / Community Voices */}
          <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
            <div className="mb-8 flex items-center justify-between border-b border-slate-100 pb-5 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {t.demoPosts || 'जन-संवाद'}
              </h3>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>
              </span>
            </div>

            {/* Community Voices List */}
            <div className="space-y-6 flex-grow flex flex-col justify-center">
              
              {/* Post 1 */}
              <div className="group relative rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-800/40 dark:hover:bg-slate-800/70">
                <p className="text-base font-medium leading-relaxed text-slate-700 dark:text-slate-200">
                  "नई पंचायत नीतियों और डिजिटल सुविधाओं से अब किसानों को मंडी के भाव और योजनाओं की जानकारी सीधे फोन पर मिल रही है।"
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-bold dark:bg-amber-900/50 dark:text-amber-400">
                    RS
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">राम सिंह</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">स्थानीय किसान • 2 घंटे पहले</p>
                  </div>
                </div>
              </div>

              {/* Post 2 */}
              <div className="group relative rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-800/40 dark:hover:bg-slate-800/70">
                <p className="text-base font-medium leading-relaxed text-slate-700 dark:text-slate-200">
                  "स्कूलों में स्मार्ट क्लासरूम बनने से बच्चों की पढ़ाई में काफी सुधार आया है। हमारा सूर्यपुरा सही मायने में आगे बढ़ रहा है।"
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-bold dark:bg-indigo-900/50 dark:text-indigo-400">
                    MD
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">मीना देवी</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">शिक्षिका • 1 दिन पहले</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Context Text */}
        <div className="mt-12 flex items-center gap-4 border-t border-slate-200 pt-8 dark:border-slate-800">
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            {t.demoExplain || 'हमारा उद्देश्य सूर्यपुरा को एक आत्मनिर्भर, पारदर्शी और डिजिटल ग्राम पंचायत बनाना है।'}
          </p>
        </div>
      </Container>
    </section>
  );
}