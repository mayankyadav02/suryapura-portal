import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Building2,
  HeartPulse,
  Leaf,
  Route,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../components/layout/Container";
import SEO from "../components/common/SEO";
import Card from "../components/common/Card";
import Badge from "../components/common/Badge";
import { H1, H2, H3, Lead, P } from "../components/common/Typography";
import Button from "../components/common/Button";
import { useLocale } from "../context/GlobalProviders";

const initiativeCards = [
  {
    icon: BookOpen,
    title: "Digital Learning Hubs",
    titleHi: "डिजिटल शिक्षा केंद्र",
    desc: "Smart classrooms, solar-powered schools, digital libraries and free internet access for every student.",
    descHi:
      "स्मार्ट कक्षाएँ, सौर ऊर्जा से संचालित विद्यालय, डिजिटल पुस्तकालय और प्रत्येक विद्यार्थी के लिए निःशुल्क इंटरनेट।",
  },
  {
    icon: Leaf,
    title: "Climate Smart Farming",
    titleHi: "जलवायु-स्मार्ट खेती",
    desc: "Soil testing, drip irrigation, weather insights and quality seed support for farmers.",
    descHi:
      "मिट्टी परीक्षण, ड्रिप सिंचाई, मौसम आधारित सलाह और किसानों के लिए गुणवत्तापूर्ण बीज सहायता।",
  },
  {
    icon: Route,
    title: "Road & Infrastructure",
    titleHi: "सड़क एवं आधारभूत संरचना",
    desc: "Better village roads, street lighting, drainage and smart public infrastructure.",
    descHi:
      "बेहतर सड़कें, स्ट्रीट लाइट, जल निकासी और आधुनिक सार्वजनिक आधारभूत संरचना।",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Services",
    titleHi: "स्वास्थ्य सेवाएँ",
    desc: "Telemedicine, health camps, emergency support and digital medical records.",
    descHi:
      "टेलीमेडिसिन, स्वास्थ्य शिविर, आपातकालीन सहायता और डिजिटल स्वास्थ्य रिकॉर्ड।",
  },
  {
    icon: Building2,
    title: "Digital Panchayat",
    titleHi: "डिजिटल पंचायत",
    desc: "Transparent governance, online certificates, grievance tracking and public records.",
    descHi:
      "पारदर्शी शासन, ऑनलाइन प्रमाणपत्र, शिकायत ट्रैकिंग और सार्वजनिक अभिलेख।",
  },
  {
    icon: ShieldCheck,
    title: "Digital Identity",
    titleHi: "डिजिटल पहचान",
    desc: "Secure citizen identity, faster services and seamless access to government schemes.",
    descHi:
      "सुरक्षित डिजिटल पहचान, तेज़ सेवाएँ और सरकारी योजनाओं तक सरल पहुँच।",
  },
];

const milestones = [
  {
    year: "2024",
    title: "Village Wi-Fi",
    titleHi: "ग्राम वाई-फाई",
    desc: "Village-wide public internet access.",
    descHi: "पूरे गाँव में सार्वजनिक इंटरनेट सुविधा।",
  },
  {
    year: "2025",
    title: "Smart Education",
    titleHi: "स्मार्ट शिक्षा",
    desc: "Digital classrooms and health kiosks.",
    descHi: "डिजिटल कक्षाएँ और स्वास्थ्य कियोस्क।",
  },
  {
    year: "2026",
    title: "Green Village",
    titleHi: "हरित गाँव",
    desc: "Solar grid and women entrepreneurship hub.",
    descHi: "सौर माइक्रोग्रिड एवं महिला उद्यमिता केंद्र.",
  },
];

const panelClass =
  "rounded-[2rem] border border-slate-200 bg-white shadow-lg transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/80";

export default function Initiatives() {
  const { lang } = useLocale();

  const isHi = lang === "HI";

  return (
    <div className="bg-slate-50/60 dark:bg-slate-950 transition-colors duration-300">
      <SEO
        title="Initiatives"
        description="Explore Suryapura's flagship civic and community development initiatives."
        path="/initiatives"
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
              {isHi ? "मुख्य विकास पहलें" : "Flagship Initiatives"}
            </Badge>

            <H1 className="mb-6 text-white leading-tight tracking-wide md:text-5xl">
              {isHi
                ? "सूर्यपुरा की विकास यात्रा अब हर परिवार तक पहुँच रही है।"
                : "Suryapura's development journey is transforming every home."}
            </H1>

            <Lead className="mb-8 text-slate-300 max-w-2xl leading-relaxed">
              {isHi
                ? "शिक्षा, कृषि, सड़क, स्वास्थ्य, डिजिटल पंचायत और डिजिटल पहचान के माध्यम से आधुनिक एवं आत्मनिर्भर गाँव का निर्माण।"
                : "Building a modern, self-reliant village through education, agriculture, healthcare, roads, digital governance and digital identity."}
            </Lead>

            <Button
              as={Link}
              to="/connect"
              variant="secondary"
              className="group bg-white text-slate-900 transition-all duration-300 hover:bg-slate-100 dark:bg-emerald-600 dark:text-white dark:hover:bg-emerald-500 shadow-md active:scale-[0.98]"
            >
              {isHi ? "हमसे जुड़ें" : "Join the Movement"}
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* ================= INITIATIVES ================= */}
      <section className="py-24">
        <Container>
          <div className="mb-16 max-w-3xl">
            <H2 className="mb-4 text-slate-900 dark:text-white leading-tight md:text-4xl">
              {isHi ? "आज हम क्या बना रहे हैं" : "What We Are Building Today"}
            </H2>

            <P className="text-lg text-slate-600 dark:text-slate-400">
              {isHi
                ? "हर पहल का उद्देश्य गाँव के प्रत्येक नागरिक के जीवन को सुरक्षित, सरल, डिजिटल और समृद्ध बनाना है।"
                : "Every initiative is designed to make village life smarter, safer, transparent and future-ready."}
            </P>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {initiativeCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                >
                  <Card
                    className="
                      group
                      flex
                      h-full
                      flex-col
                      rounded-[2rem]
                      border
                      border-slate-200
                      bg-white
                      p-8
                      shadow-md
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:shadow-xl
                      dark:border-slate-800
                      dark:bg-slate-900/80
                    "
                  >
                    <div
                      className="
                        mb-6
                        flex
                        h-16
                        w-16
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
                      <Icon className="h-8 w-8" />
                    </div>

                    <H3 className="mb-4 text-slate-900 dark:text-white font-bold text-xl">
                      {isHi ? item.titleHi : item.title}
                    </H3>

                    <P className="flex-grow text-slate-600 dark:text-slate-300 leading-relaxed">
                      {isHi ? item.descHi : item.desc}
                    </P>

                    <div
                      className="
                        mt-8
                        flex
                        items-center
                        gap-2
                        font-semibold
                        text-emerald-600
                        transition-all
                        duration-300
                        group-hover:gap-3
                        dark:text-emerald-400
                      "
                    >
                      {isHi ? "और जानें" : "Learn More"}
                      <ArrowRight
                        className="
                          h-4
                          w-4
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="bg-white py-24 dark:bg-slate-900 transition-colors duration-300 border-t border-slate-100 dark:border-slate-800">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-start">
            
            {/* LEFT: Impact Data */}
            <div className={`${panelClass} bg-slate-50/50 p-10 dark:bg-slate-900/60`}>
              <Badge className="mb-5 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800">
                {isHi ? "प्रभाव" : "Impact"}
              </Badge>

              <H2 className="mb-5 text-slate-900 dark:text-white leading-tight md:text-4xl">
                {isHi ? "मापी जा सकने वाली प्रगति" : "Measurable Progress"}
              </H2>

              <P className="mb-10 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                {isHi
                  ? "हम ऐसी सुविधाएँ विकसित कर रहे हैं जिन्हें हर नागरिक प्रत्यक्ष रूप से अनुभव कर सके — बेहतर शिक्षा, कृषि, स्वास्थ्य और पारदर्शी शासन।"
                  : "Our initiatives focus on improvements that every resident can truly experience through education, healthcare, farming and transparent governance."}
              </P>

              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-800/60">
                  <Leaf className="mb-4 h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  <p className="mb-2 text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    +40%
                  </p>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {isHi ? "कृषि उत्पादकता" : "Farm Productivity"}
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-800/60">
                  <HeartPulse className="mb-4 h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  <p className="mb-2 text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    24/7
                  </p>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {isHi ? "स्वास्थ्य सहायता" : "Healthcare Support"}
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-800/60">
                  <ShieldCheck className="mb-4 h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  <p className="mb-2 text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    98%
                  </p>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {isHi ? "डिजिटल सेवाएँ" : "Digital Services"}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Development Timeline */}
            <div className={`${panelClass} p-10`}>
              <H3 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
                {isHi ? "विकास यात्रा" : "Development Timeline"}
              </H3>

              <div className="relative pl-4">
                {/* Vertical Line */}
                <div className="absolute left-[22px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800" />

                <div className="space-y-10">
                  {milestones.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      className="relative flex gap-6"
                    >
                      {/* Timeline Dot */}
                      <div className="relative z-10 mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-extrabold text-white shadow-lg dark:bg-emerald-500">
                        {item.year.slice(-2)}
                      </div>

                      {/* Content */}
                      <div className="flex-1 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 transition-all duration-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-800/40">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                          {item.year}
                        </p>
                        <h4 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                          {isHi ? item.titleHi : item.title}
                        </h4>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          {isHi ? item.descHi : item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}