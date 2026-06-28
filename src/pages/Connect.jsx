import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';

import Container from '../components/layout/Container';
import SEO from '../components/common/SEO';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import {
  H1,
  H2,
  H3,
  Lead,
  P,
} from '../components/common/Typography';
import Button from '../components/common/Button';
import { useLocale } from '../context/GlobalProviders';

export default function Connect() {

  const { lang } = useLocale();

  const isHi = lang === 'HI';

  const contactCards = [
    {
      title: isHi
        ? 'पंचायत कार्यालय'
        : 'Visit Panchayat',

      content: isHi
        ? 'पंचायत भवन, सूर्यपुरा मुख्य मार्ग'
        : 'Panchayat Bhavan, Suryapura Main Road',

      icon: MapPin,
    },

    {
      title: isHi
        ? 'हमें कॉल करें'
        : 'Call Us',

      content: '+91 1800-SURYA-00',

      icon: Phone,
    },

    {
      title: isHi
        ? 'ईमेल करें'
        : 'Email Us',

      content: 'sarpanch@suryapura.gov.in',

      icon: Mail,
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/60 dark:bg-slate-950 transition-colors duration-300">

      <SEO
        title="Connect"
        description="Reach the Suryapura Panchayat team with questions, feedback, or service requests."
        path="/connect"
      />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-900 py-28 text-white transition-colors duration-300">
        <div className="absolute inset-0">
          <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-600/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        </div>

        <Container>
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-3xl"
          >

            <Badge className="mb-6 border-white/20 bg-white/10 text-white backdrop-blur-md">
              {isHi ? 'संपर्क एवं सहायता' : 'Contact & Support'}
            </Badge>

            <H1 className="mb-6 text-white leading-tight tracking-wide md:text-5xl">
              {isHi
                ? 'हम आपकी बात सुनने और सहायता करने के लिए सदैव तैयार हैं।'
                : "We're always here to listen, support and help our community."}
            </H1>

            <Lead className="mb-8 text-slate-300 max-w-2xl leading-relaxed">
              {isHi
                ? 'प्रश्न, सुझाव, शिकायत या सेवा अनुरोध—सूर्यपुरा ग्राम विकास पोर्टल के माध्यम से सीधे पंचायत टीम से जुड़ें।'
                : 'Questions, feedback, service requests or suggestions—connect directly with the Suryapura Panchayat team through one modern digital platform.'}
            </Lead>

          </motion.div>
        </Container>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">

            {/* ================= CONTACT CARDS ================= */}
            <div className="space-y-6">
              <div className="max-w-md">

                <Badge className="mb-4 bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/40">
                  {isHi ? 'संपर्क जानकारी' : 'Contact Information'}
                </Badge>

                <H2 className="mb-4 text-slate-900 dark:text-white md:text-3xl font-bold tracking-tight">
                  {isHi
                    ? 'हमसे जुड़ना अब और भी आसान है'
                    : 'Reach us through any convenient channel'}
                </H2>

                <P className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isHi
                    ? 'यदि आपके पास कोई सुझाव, शिकायत या सेवा अनुरोध है, तो नीचे दिए गए किसी भी माध्यम से हमसे संपर्क करें।'
                    : 'Have a suggestion, feedback or service request? Connect with us through any of the channels below.'}
                </P>

              </div>

              {contactCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >
                    <Card
                      className="
                        group
                        border
                        border-slate-200
                        bg-white
                        p-6
                        shadow-md
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-emerald-300
                        hover:shadow-xl
                        dark:border-slate-800
                        dark:bg-slate-900/80
                        dark:hover:border-emerald-500
                      "
                    >

                      <div className="flex items-start gap-5">
                        <div
                          className="
                            flex
                            h-14
                            w-14
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            bg-emerald-50
                            text-emerald-600
                            transition-transform
                            duration-300
                            group-hover:scale-110
                            dark:bg-emerald-900/40
                            dark:text-emerald-400
                          "
                        >
                          <Icon className="h-6 w-6" />
                        </div>

                        <div>
                          <H3 className="mb-2 text-slate-900 dark:text-white font-bold text-lg">
                            {item.title}
                          </H3>
                          <P className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {item.content}
                          </P>
                        </div>
                      </div>

                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* ================= CONTACT FORM ================= */}
            <Card className="overflow-hidden p-0 border border-slate-200 shadow-md dark:border-slate-800 dark:bg-slate-900/80">
              <div className="border-b border-surface-muted bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-8 text-white dark:border-slate-800">
                
                <Badge className="mb-4 border-white/20 bg-white/10 text-white backdrop-blur-md">
                  {isHi ? 'ऑनलाइन सहायता' : 'Online Support'}
                </Badge>

                <H2 className="mb-3 text-white md:text-3xl font-bold tracking-tight">
                  {isHi ? 'हमें संदेश भेजें' : 'Send us a Message'}
                </H2>

                <Lead className="text-slate-300">
                  {isHi
                    ? 'आपके सुझाव, शिकायतें और प्रश्न हमारे लिए महत्वपूर्ण हैं। हमारी टीम शीघ्र उत्तर देने का प्रयास करेगी।'
                    : 'Your suggestions, service requests and feedback help improve Suryapura. Our team will respond as quickly as possible.'}
                </Lead>
              </div>

              <div className="p-8 bg-white dark:bg-slate-900/40">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        {isHi ? 'पूरा नाम' : 'Full Name'}
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={isHi ? 'अपना नाम लिखें' : 'Enter your name'}
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 transition focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-800 dark:text-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        {isHi ? 'ईमेल पता' : 'Email Address'}
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 transition focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      {isHi ? 'विषय' : 'Subject'}
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={isHi ? 'संदेश का विषय' : 'Subject'}
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 transition focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-800 dark:text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      {isHi ? 'संदेश' : 'Message'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={
                        isHi
                          ? 'हमें बताइए कि हम आपकी कैसे सहायता कर सकते हैं...'
                          : 'Tell us how we can help you...'
                      }
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 transition focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-800 dark:text-white"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-slate-900 text-white hover:bg-slate-800 dark:bg-emerald-600 dark:text-white dark:hover:bg-emerald-500 shadow-md active:scale-[0.98]"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isHi ? 'संदेश भेजें' : 'Send Message'}
                  </Button>
                </form>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-900/30 dark:text-emerald-300"
                  >
                    <h4 className="mb-2 font-semibold">
                      {isHi
                        ? '✅ संदेश सफलतापूर्वक भेजा गया'
                        : '✅ Message Sent Successfully'}
                    </h4>
                    <P className="text-current leading-relaxed">
                      {isHi
                        ? 'धन्यवाद! आपकी जानकारी सुरक्षित रूप से दर्ज कर ली गई है। हमारी टीम जल्द ही आपसे संपर्क करेगी।'
                        : 'Thank you! Your request has been recorded successfully. Our team will contact you soon.'}
                    </P>
                  </motion.div>
                )}
              </div>
            </Card>

          </div>
        </Container>
      </section>
    </div>
  );
}