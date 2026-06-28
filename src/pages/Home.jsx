import SEO from '../components/common/SEO';
import { useLocale } from '../context/GlobalProviders';
import {
  Laptop,
  Sprout,
  Building2,
  Stethoscope,
} from "lucide-react";

import HeroSection from '../components/home/HeroSection';
import DemoShowcase from '../components/home/DemoShowcase';
import StatsSection from '../components/home/StatsSection';
import StorySection from '../components/home/StorySection';
import PillarsSection from '../components/home/PillarsSection';
import TestimonialsSection from '../components/home/TestimonialSection';
import NoticeBoard from '../components/home/NoticeBoard';
import GallerySection from '../components/home/GallerySection';
import FaqSection from '../components/home/FaqSection';
import ContactCTA from '../components/home/ContactCTA';
import SocialPostsSection from "../components/home/SocialPostsSection";

export default function Home() {
  const { lang } = useLocale();

  const t = lang === 'HI'
    ? {
        heroBadge: 'सूर्यपुरा: एक विकसित ग्राम की ओर',
        heroTitle: 'गाँव का भविष्य, हमारी साझी जिम्मेदारी।',
        heroText: 'शिक्षा, कृषि और डिजिटल पारदर्शिता से सशक्त, एक आधुनिक सूर्यपुरा की कल्पना।',
        primaryCta: 'पहलें देखें',
        secondaryCta: 'हमारी कहानी देखें',

        demoTitle: 'सूर्यपुरा: विकास के नए आयाम',
        demoIntro: 'शिक्षा, कृषि और पंचायत के स्तर पर हो रहे निरंतर बदलाव और पारदर्शिता के साथ आगे बढ़ते हमारे कदम।',
        demoHero: 'प्रगति रिपोर्ट',
        demoHeroText: 'आधुनिक सुविधाओं से जुड़ता हमारा गाँव।',
        demoPosts: 'जन-संवाद',
        demoExplain: 'हमारा उद्देश्य सूर्यपुरा को एक आत्मनिर्भर, पारदर्शी और डिजिटल ग्राम पंचायत बनाना है।',

        storyHeading: 'परंपरा से भविष्य तक',
        storyText1: 'सूर्यपुरा परंपरा और तकनीक का सुंदर संगम है।',
        storyText2: 'डिजिटल शासन और सामुदायिक भागीदारी से गांव लगातार आगे बढ़ रहा है।',
        storyLink: 'पूरी कहानी',

        initiativesHeading: 'मुख्य पहलें',
        initiativesText: 'शिक्षा, कृषि, स्वास्थ्य और आधारभूत विकास।',
        pillarLink: 'विस्तार देखें',

        voicesHeading: 'सूर्यपुरा की आवाज़ें',
        noticeHeading: 'डिजिटल सूचना पट्ट',
        noticeLink: 'सभी सूचनाएँ',

        galleryHeading: 'प्रगति की झलक',
        galleryText: 'गांव के विकास की तस्वीरें।',
        galleryLink: 'पूरी गैलरी',

        faqHeading: 'सामान्य प्रश्न',

        contactHeading: 'कोई समस्या है?',
        contactText: 'हमारी पंचायत आपकी सहायता के लिए सदैव तैयार है।',
        grievanceCta: 'शिकायत दर्ज करें',
      }
    : {
        heroBadge: 'Suryapura: Towards a Resilient Village',
        heroTitle: 'Building the Future of Our Roots.',
        heroText: 'Empowering Suryapura through education, sustainable farming, and digital governance.',

        primaryCta: 'Explore Initiatives',
        secondaryCta: 'Watch Story',

        demoTitle: 'Suryapura: New Horizons of Development',
        demoIntro: 'Advancing with continuous improvements in education, agriculture, and transparent governance.',
        demoHero: 'Progress Report',
        demoHeroText: 'Connecting our village with modern facilities.',
        demoPosts: 'Community Voices',
        demoExplain: 'Our mission is to transform Suryapura into a self-reliant, transparent, and digital Gram Panchayat.',

        storyHeading: 'Rooted in Tradition',
        storyText1: 'Suryapura blends heritage with technology.',
        storyText2: 'Digital governance creates transparency and trust.',
        storyLink: 'Read Story',

        initiativesHeading: 'Core Initiatives',
        initiativesText: 'Education, agriculture, healthcare and infrastructure.',
        pillarLink: 'Learn More',

        voicesHeading: 'Voices of Suryapura',
        noticeHeading: 'Digital Notice Board',
        noticeLink: 'View Notices',

        galleryHeading: 'Gallery',
        galleryText: 'Moments from village development.',
        galleryLink: 'View Gallery',

        faqHeading: 'Frequently Asked Questions',

        contactHeading: 'Need Assistance?',
        contactText: 'Our Panchayat is here to help you.',
        grievanceCta: 'Open Grievance Portal',
      };

  const stats = [
    { label: 'Population', labelHi: 'जनसंख्या', value: 4250, suffix: '+' },
    { label: 'Literacy', labelHi: 'साक्षरता', value: 88, suffix: '%' },
    { label: 'Solar', labelHi: 'सौर ऊर्जा', value: 100, suffix: '%' },
    { label: 'Farms', labelHi: 'खेत', value: 320, suffix: '' },
  ];

const pillars =
  lang === "HI"
    ? [
        {
          id: "education",
          title: "डिजिटल शिक्षा",
          desc: "हर छात्र के लिए स्मार्ट कक्षाएँ।",
          icon: Laptop,
          color: "bg-blue-50 text-blue-600",
        },
        {
          id: "agriculture",
          title: "आधुनिक कृषि",
          desc: "तकनीक आधारित खेती।",
          icon: Sprout,
          color: "bg-surya-100 text-surya-600",
        },
        {
          id: "infrastructure",
          title: "बुनियादी ढांचा",
          desc: "सड़क, बिजली और जल व्यवस्था।",
          icon: Building2,
          color: "bg-terra-500/10 text-terra-500",
        },
        {
          id: "healthcare",
          title: "स्वास्थ्य सेवा",
          desc: "सभी के लिए बेहतर स्वास्थ्य सुविधाएँ।",
          icon: Stethoscope,
          color: "bg-rose-50 text-rose-600",
        },
      ]
    : [
        {
          id: "education",
          title: "Digital Education",
          desc: "Smart classrooms for every student.",
          icon: Laptop,
          color: "bg-blue-50 text-blue-600",
        },
        {
          id: "agriculture",
          title: "Modern Agriculture",
          desc: "Technology enabled farming.",
          icon: Sprout,
          color: "bg-surya-100 text-surya-600",
        },
        {
          id: "infrastructure",
          title: "Infrastructure",
          desc: "Roads, water and electricity.",
          icon: Building2,
          color: "bg-terra-500/10 text-terra-500",
        },
        {
          id: "healthcare",
          title: "Healthcare",
          desc: "Accessible healthcare for everyone.",
          icon: Stethoscope,
          color: "bg-rose-50 text-rose-600",
        },
    ];
    
const testimonials =
  lang === "HI"
    ? [
        {
          name: "रमेश सिंह",
          role: "किसान",
          quote: "नई सिंचाई व्यवस्था ने मेरी खेती बदल दी।",
        },
        {
          name: "प्रिया शर्मा",
          role: "छात्रा",
          quote: "डिजिटल शिक्षा से मेरी पढ़ाई काफी बेहतर हुई।",
        },
        {
          name: "विक्रम देसाई",
          role: "एनआरआई",
          quote: "पारदर्शिता ही विश्वास की सबसे बड़ी नींव है।",
        },
      ]
    : [
        {
          name: "Ramesh Singh",
          role: "Farmer",
          quote: "The irrigation system completely changed my farming.",
        },
        {
          name: "Priya Sharma",
          role: "Student",
          quote: "Digital education transformed my learning.",
        },
        {
          name: "Vikram Desai",
          role: "NRI",
          quote: "Transparency builds trust.",
        },
    ];
    
  const news = [
    {
      date: '25 June 2026',
      tag: 'Governance',
      title: 'Panchayat Budget Approved',
    },
    {
      date: '22 June 2026',
      tag: 'Agriculture',
      title: 'Seed Distribution Started',
    },
    {
      date: '18 June 2026',
      tag: 'Infrastructure',
      title: 'Solar Panels Installed',
    },
  ];

  const faqs = [
    {
      q: 'How can I access Panchayat funds?',
      a: 'Visit the Transparency page.',
    },
    {
      q: 'Can I contribute?',
      a: 'Yes, use the Connect page.',
    },
    {
      q: 'How do I register a complaint?',
      a: 'Use the grievance portal.',
    },
    ];
    
    const socialPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1596422846543-74c6eb273aa7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Community',
      date: '27 June, 2026',
      time: '2h ago',
      author: 'Gram Panchayat',
      verified: true,
      title: 'Panchayat Meeting Highlights',
      titleHi: 'पंचायत बैठक की मुख्य बातें',
      description: 'Important discussions on the new water conservation project and solar street lights installation in Suryapura.',
      descriptionHi: 'सूर्यपुरा में नई जल संरक्षण परियोजना और सोलर स्ट्रीट लाइट लगाने पर महत्वपूर्ण चर्चा।',
      likes: 124,
      comments: 18,
      shares: 5
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Development',
      date: '25 June, 2026',
      time: '1d ago',
      author: 'Vikas Samiti',
      verified: false,
      title: 'New Road Construction Started',
      titleHi: 'नई सड़क का निर्माण शुरू',
      description: 'The long-awaited main link road construction has officially begun today morning.',
      descriptionHi: 'लंबे समय से प्रतीक्षित मुख्य लिंक मार्ग का निर्माण आज सुबह आधिकारिक तौर पर शुरू हो गया है।',
      likes: 89,
      comments: 12,
      shares: 8
    }
  ];

  return (
    <>
      <SEO
        title="Home"
        description="Suryapura Village Development Portal"
        path="/"
      />

      <HeroSection t={t} />

          <DemoShowcase t={t} />
          
          <SocialPostsSection
  heading={t.socialHeading}
  text={t.socialText}
  posts={socialPosts}
/>

      <StatsSection
        stats={stats}
        lang={lang}
      />

      <StorySection t={t} />

      <PillarsSection
        t={t}
        pillars={pillars}
      />

      <TestimonialsSection
        testimonials={testimonials}
        t={t}      
      />

      <NoticeBoard
        title={t.noticeHeading}
        button={t.noticeLink}
        news={news}
      />

      <GallerySection
        heading={t.galleryHeading}
        text={t.galleryText}
        button={t.galleryLink}
      />

      <FaqSection
        heading={t.faqHeading}
        faqs={faqs}
      />

      <ContactCTA
        heading={t.contactHeading}
        text={t.contactText}
        button={t.grievanceCta}
      />
    </>
  );
}