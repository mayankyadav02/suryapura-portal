import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  FileText,
  ShieldCheck,
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

export default function Transparency() {
  const { lang } = useLocale();
  const isHi = lang === 'HI';

  const budgetRows = [
    {
      label: isHi ? 'शिक्षा' : 'Education',
      value: '38%',
      color: 'bg-emerald-600 dark:bg-emerald-500',
    },
    {
      label: isHi ? 'कृषि' : 'Agriculture',
      value: '24%',
      color: 'bg-teal-600 dark:bg-teal-500',
    },
    {
      label: isHi ? 'स्वास्थ्य' : 'Healthcare',
      value: '18%',
      color: 'bg-cyan-600 dark:bg-cyan-500',
    },
    {
      label: isHi ? 'बुनियादी ढाँचा' : 'Infrastructure',
      value: '20%',
      color: 'bg-amber-600 dark:bg-amber-500',
    },
  ];

  const updates = [
    isHi
      ? 'त्रैमासिक बजट 48 घंटों के भीतर सार्वजनिक डैशबोर्ड पर प्रकाशित किया जाता है।'
      : 'Quarterly budget is published to the public dashboard within 48 hours.',

    isHi
      ? 'सभी खरीद रिकॉर्ड और भुगतान नागरिक समीक्षा के लिए उपलब्ध हैं।'
      : 'All procurement records and payments are available for citizen review.',

    isHi
      ? 'मासिक प्रगति रिपोर्ट हिंदी और अंग्रेज़ी दोनों में साझा की जाती हैं।'
      : 'Monthly progress reports are shared in both Hindi and English.',
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20 dark:bg-slate-950 transition-colors duration-300">

      <SEO
        title="Transparency"
        description="Track how Suryapura allocates funds and publishes progress updates."
        path="/transparency"
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-3xl"
          >
            <Badge className="mb-6 border-white/20 bg-white/10 text-white backdrop-blur-md">
              {isHi ? 'खुला शासन' : 'Open Governance'}
            </Badge>

            <H1 className="mb-6 text-white leading-tight tracking-wide md:text-5xl">
              {isHi
                ? 'वित्तीय पारदर्शिता जिसे हर नागरिक आसानी से समझ सके।'
                : 'Financial transparency every citizen can easily understand.'}
            </H1>

            <Lead className="mb-8 text-slate-300 max-w-2xl leading-relaxed">
              {isHi
                ? 'हर रुपये का हिसाब सुरक्षित डिजिटल रिकॉर्ड, सार्वजनिक डैशबोर्ड और स्पष्ट रिपोर्टों के माध्यम से सभी नागरिकों तक पहुँचाया जाता है।'
                : 'Every rupee is tracked through secure digital records, public dashboards and easy-to-understand reports.'}
            </Lead>

            <Button
              as={Link}
              to="/connect"
              variant="secondary"
              aria-label={isHi ? 'प्रश्न पूछें' : 'Ask a Question'}
              className="group bg-white text-slate-900 transition-all duration-300 hover:bg-slate-100 dark:bg-emerald-600 dark:text-white dark:hover:bg-emerald-500 shadow-md active:scale-[0.98]"
            >
              {isHi ? 'प्रश्न पूछें' : 'Ask a Question'}
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* ================= Budget & Updates ================= */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

            {/* Budget Allocation */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
                    <BarChart3 className="h-7 w-7" />
                  </div>

                  <div>
                    <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/40">
                      {isHi ? 'वर्तमान आवंटन' : 'Current Allocation'}
                    </Badge>

                    <H2 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                      {isHi
                        ? 'वर्तमान तिमाही का बजट वितरण'
                        : 'Budget Distribution for the Current Quarter'}
                    </H2>
                  </div>
                </div>

                <div className="space-y-6">
                  {budgetRows.map((row, index) => (
                    <motion.div
                      key={row.label}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                          {row.label}
                        </span>
                        <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">
                          {row.value}
                        </span>
                      </div>

                      <div
                        className="h-3.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"
                        role="progressbar"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={parseInt(row.value)}
                      >
                        <motion.div
                          className={`${row.color} h-full rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: row.value }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            ease: 'easeOut',
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Public Updates */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .15 }}
            >
              <Card className="h-full border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
                    <FileText className="h-7 w-7" />
                  </div>

                  <div>
                    <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/40">
                      {isHi ? 'सार्वजनिक रिकॉर्ड' : 'Public Records'}
                    </Badge>

                    <H3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                      {isHi ? 'लाइव सार्वजनिक अपडेट' : 'Live Public Updates'}
                    </H3>
                  </div>
                </div>

                <ul className="space-y-5">
                  {updates.map((item, index) => (
                    <motion.li
                      key={index}
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
                        delay: index * 0.12,
                      }}
                      className="flex items-start gap-4 rounded-2xl border border-slate-50 bg-slate-50/70 p-4 transition-all duration-300 hover:shadow-sm dark:border-slate-800/60 dark:bg-slate-800/40"
                    >
                      <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <span className="leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* Why Transparency Matters */}
      <section className="pb-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-10 shadow-lg dark:border-slate-800 dark:from-emerald-950/20 dark:via-slate-900 dark:to-slate-950">
              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md dark:bg-emerald-500">
                  <BarChart3 className="h-7 w-7" />
                </div>

                <div className="flex-1">
                  <Badge className="mb-4 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800">
                    {isHi ? 'विश्वास और जवाबदेही' : 'Trust & Accountability'}
                  </Badge>

                  <H2 className="mb-4 text-slate-900 dark:text-white leading-tight md:text-3xl">
                    {isHi
                      ? 'पारदर्शिता ही विकास की सबसे मजबूत नींव है.'
                      : 'Transparency is the strongest foundation for sustainable development.'}
                  </H2>

                  <P className="mb-8 max-w-3xl text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    {isHi
                      ? 'जब बजट, योजनाएँ और प्रगति सभी नागरिकों के लिए खुले रूप में उपलब्ध हों, तो विश्वास बढ़ता है, निर्णय बेहतर होते हैं और ग्राम विकास अधिक प्रभावी बनता है.'
                      : 'When budgets, projects, and progress remain open to every citizen, trust grows, decisions improve, and village development becomes more effective.'}
                  </P>

                  <div className="grid gap-6 sm:grid-cols-3">
                    <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-800/60">
                      <p className="text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
                        100%
                      </p>
                      <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                        {isHi ? 'सार्वजनिक रिकॉर्ड' : 'Public Records'}
                      </p>
                    </div>

                    <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-800/60">
                      <p className="text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
                        24/7
                      </p>
                      <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                        {isHi ? 'ऑनलाइन उपलब्ध' : 'Online Access'}
                      </p>
                    </div>

                    <div className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-800/60">
                      <p className="text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
                        48h
                      </p>
                      <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                        {isHi ? 'रिपोर्ट प्रकाशित' : 'Report Published'}
                      </p>
                    </div>
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