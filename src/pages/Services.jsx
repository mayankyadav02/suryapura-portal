import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';

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

export default function Services() {
  const { lang } = useLocale();

  const isHi = lang === 'HI';

  const services = [
    {
      title: isHi
        ? 'सौर सब्सिडी सहायता'
        : 'Solar Subsidy Assistance',

      description: isHi
        ? 'छत पर सौर ऊर्जा के लिए आवेदन करें और उसी पोर्टल के माध्यम से अपनी आवेदन स्थिति आसानी से ट्रैक करें।'
        : 'Apply for rooftop solar support and track your application from one simple portal.',
    },

    {
      title: isHi
        ? 'पंचायत सेवा अनुरोध'
        : 'Panchayat Service Requests',

      description: isHi
        ? 'सड़क, पानी, स्ट्रीट लाइट और अन्य नागरिक सेवाओं के लिए ऑनलाइन अनुरोध भेजें।'
        : 'Submit requests for roads, water supply, street lights, and civic services online.',
    },

    {
      title: isHi
        ? 'समुदाय कार्यक्रम पंजीकरण'
        : 'Community Event Registration',

      description: isHi
        ? 'स्वास्थ्य शिविर, प्रशिक्षण कार्यक्रम और सामुदायिक आयोजनों में ऑनलाइन पंजीकरण करें।'
        : 'Register online for health camps, training workshops, and community events.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20 dark:bg-slate-950 transition-colors duration-300">

      <SEO
        title="Services"
        description="Use online services for public support, grants, and civic requests in Suryapura."
        path="/services"
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
              {isHi ? 'डिजिटल सेवाएँ' : 'Digital Services'}
            </Badge>

            <H1 className="mb-6 text-white leading-tight tracking-wide md:text-5xl">
              {isHi
                ? 'हर नागरिक के लिए तेज़, सरल और पारदर्शी डिजिटल सेवाएँ।'
                : 'Fast, simple and transparent digital services for every citizen.'}
            </H1>

            <Lead className="mb-8 text-slate-300 max-w-2xl leading-relaxed">
              {isHi
                ? 'सूर्यपुरा ग्राम विकास पोर्टल के माध्यम से पंचायत सेवाएँ, सरकारी सहायता और सामुदायिक कार्यक्रम अब एक ही स्थान पर उपलब्ध हैं।'
                : 'Access Panchayat services, government assistance, and community programs through one modern digital platform.'}
            </Lead>

            <Button
              as={Link}
              to="/connect"
              variant="secondary"
              aria-label={
                isHi
                  ? 'अनुरोध शुरू करें'
                  : 'Start a Request'
              }
              className="group bg-white text-slate-900 transition-all duration-300 hover:bg-slate-100 dark:bg-emerald-600 dark:text-white dark:hover:bg-emerald-500 shadow-md active:scale-[0.98]"
            >
              {isHi ? 'अनुरोध शुरू करें' : 'Start a Request'}
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

          </motion.div>
        </Container>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="mb-14 max-w-3xl">

            <Badge className="mb-4 bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/40">
              {isHi ? 'ऑनलाइन नागरिक सेवाएँ' : 'Citizen Services'}
            </Badge>

            <H2 className="mb-5 text-slate-900 dark:text-white md:text-3xl font-bold tracking-tight">
              {isHi
                ? 'एक ही पोर्टल पर सभी आवश्यक सेवाएँ'
                : 'All essential services in one digital portal'}
            </H2>

            <P className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {isHi
                ? 'सूर्यपुरा ग्राम विकास पोर्टल नागरिकों को तेज़, पारदर्शी और आसान डिजिटल सेवाएँ प्रदान करता है। अब आवेदन, शिकायत और सामुदायिक कार्यक्रमों के लिए अलग-अलग कार्यालयों के चक्कर लगाने की आवश्यकता नहीं है।'
                : 'The Suryapura Village Development Portal provides fast, transparent and easy digital services. Residents can submit requests, apply for schemes and join community programs without visiting multiple offices.'}
            </P>

          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <Card
                  className="
                    group
                    h-full
                    border
                    border-slate-200
                    bg-white
                    p-8
                    shadow-md
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-emerald-300
                    hover:shadow-xl
                    dark:border-slate-800
                    dark:bg-slate-900/80
                    dark:hover:border-emerald-500
                  "
                >

                  <div
                    className="
                      mb-6
                      flex
                      h-14
                      w-14
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
                    <Sparkles className="h-7 w-7" />
                  </div>

                  <H3 className="mb-4 text-slate-900 dark:text-white font-bold text-xl">
                    {item.title}
                  </H3>

                  <P className="leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </P>

                  <div
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-2
                      font-semibold
                      text-emerald-600
                      dark:text-emerald-400
                    "
                  >
                    <BadgeCheck className="h-5 w-5" />
                    <span>
                      {isHi ? 'अब उपलब्ध' : 'Available Now'}
                    </span>
                  </div>

                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= SUPPORT ================= */}
      <section className="pb-28">
        <Container>
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
          >
            <Card
              className="
                overflow-hidden
                rounded-[2rem]
                border
                border-emerald-200
                bg-gradient-to-br
                from-emerald-50
                via-white
                to-slate-50
                p-8
                shadow-lg
                md:p-12
                dark:border-slate-800
                dark:from-emerald-950/20
                dark:via-slate-900
                dark:to-slate-950
              "
            >
              <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

                {/* Left */}
                <div>
                  <Badge className="mb-5 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800">
                    {isHi ? 'सहायता' : 'Need Help?'}
                  </Badge>

                  <H2 className="mb-5 text-slate-900 dark:text-white leading-tight md:text-3xl">
                    {isHi
                      ? 'सरकारी सेवाओं तक पहुँच अब पहले से कहीं अधिक आसान है।'
                      : 'Government services are now easier and faster than ever.'}
                  </H2>

                  <P className="mb-8 max-w-2xl text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    {isHi
                      ? 'ऑनलाइन आवेदन करें, अपने अनुरोध की स्थिति देखें और पंचायत से सीधे जुड़ें। हमारा उद्देश्य प्रत्येक नागरिक तक तेज़, पारदर्शी और भरोसेमंद सेवाएँ पहुँचाना है।'
                      : 'Apply online, track your requests and connect directly with the Panchayat. Our goal is to deliver transparent, reliable and citizen-friendly digital services for everyone.'}
                  </P>

                  <Button
                    as={Link}
                    to="/connect"
                    aria-label={
                      isHi
                        ? 'संपर्क करें'
                        : 'Contact Us'
                    }
                    className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-emerald-600 dark:text-white dark:hover:bg-emerald-500 shadow-md active:scale-[0.98]"
                  >
                    {isHi ? 'संपर्क करें' : 'Contact Us'}
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>

                {/* Right */}
                <div className="grid gap-4">
                  <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-800/60">
                    <p className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                      24×7
                    </p>
                    <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                      {isHi ? 'ऑनलाइन सेवा सहायता' : 'Online Service Support'}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-800/60">
                    <p className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                      100%
                    </p>
                    <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                      {isHi ? 'डिजिटल आवेदन ट्रैकिंग' : 'Digital Request Tracking'}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-800/60">
                    <p className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                      3+
                    </p>
                    <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                      {isHi ? 'मुख्य ऑनलाइन सेवाएँ' : 'Essential Online Services'}
                    </p>
                  </div>
                </div>

              </div>
            </Card>
          </motion.div>
        </Container>
      </section>

    </div>
  );
}