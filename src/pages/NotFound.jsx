import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  Home,
  MapPinned,
} from "lucide-react";

import SEO from "../components/common/SEO";
import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import { H1, Lead, P } from "../components/common/Typography";
import { useLocale } from "../context/GlobalProviders";

export default function NotFound() {

  const { lang } = useLocale();

  const isHi = lang === "HI";

  return (
    <>

      <SEO
        title="404"
        description="Requested page not found."
        path="*"
      />

      <main
        role="alert"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50/60 px-6 py-16 dark:bg-slate-950 transition-colors duration-300"
      >

        {/* Background Decoration */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-900/10" />
          <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-slate-200/40 blur-3xl dark:bg-slate-800/40" />
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .6,
          }}
          className="relative z-10 max-w-2xl text-center"
        >

          <Badge className="mb-6 bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/40">
            {isHi ? "404 त्रुटि" : "404 Error"}
          </Badge>

          <div className="mb-8 flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-lg dark:bg-emerald-900/40 dark:text-emerald-300">
              <MapPinned className="h-12 w-12" />
            </div>
          </div>

          <h2 className="select-none text-8xl font-display text-slate-200 dark:text-slate-900 md:text-9xl tracking-tight">
            404
          </h2>

          <H1 className="mt-6 mb-5 text-slate-900 dark:text-white md:text-4xl font-bold tracking-tight">
            {isHi
              ? "यह पृष्ठ उपलब्ध नहीं है।"
              : "This page could not be found."}
          </H1>

          <Lead className="mx-auto mb-6 max-w-xl text-slate-600 dark:text-slate-300">
            {isHi
              ? "लगता है जिस पृष्ठ की आप तलाश कर रहे हैं वह सूर्यपुरा ग्राम विकास पोर्टल में उपलब्ध नहीं है या उसका पता बदल गया है।"
              : "The page you're looking for doesn't exist in the Suryapura Village Development Portal or may have been moved."}
          </Lead>

          <P className="mx-auto mb-10 max-w-lg text-slate-500 dark:text-slate-400">
            {isHi
              ? "मुख्य पृष्ठ पर वापस जाकर गाँव की योजनाएँ, सेवाएँ और विकास की जानकारी देखें।"
              : "Return to the homepage to continue exploring village development initiatives, services and digital governance."}
          </P>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              as={NavLink}
              to="/"
              className="w-full sm:w-auto bg-slate-900 text-white hover:bg-slate-800 dark:bg-emerald-600 dark:text-white dark:hover:bg-emerald-500 shadow-md active:scale-[0.98]"
              aria-label={
                isHi
                  ? "मुख्य पृष्ठ पर जाएँ"
                  : "Go to Home Page"
              }
            >
              <Home className="mr-2 h-4 w-4" />
              {isHi ? "मुख्य पृष्ठ" : "Back to Home"}
            </Button>

            <Button
              as={NavLink}
              to="/connect"
              variant="outline"
              className="w-full sm:w-auto border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 active:scale-[0.98]"
              aria-label={
                isHi
                  ? "संपर्क करें"
                  : "Contact Us"
              }
            >
              {isHi ? "सहायता प्राप्त करें" : "Contact Support"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60">
              <h3 className="mb-2 font-semibold text-emerald-700 dark:text-emerald-400">
                {isHi ? "ग्राम सेवाएँ" : "Village Services"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {isHi ? "ऑनलाइन सेवाओं और नागरिक सुविधाओं का उपयोग करें।" : "Explore digital services and citizen facilities."}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60">
              <h3 className="mb-2 font-semibold text-emerald-700 dark:text-emerald-400">
                {isHi ? "पारदर्शिता" : "Transparency"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {isHi ? "बजट, योजनाएँ और सार्वजनिक जानकारी देखें।" : "View budgets, reports and public information."}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60">
              <h3 className="mb-2 font-semibold text-emerald-700 dark:text-emerald-400">
                {isHi ? "ग्राम विकास" : "Development"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {isHi ? "शिक्षा, कृषि और स्वास्थ्य संबंधी पहलें देखें।" : "Learn about education, farming and healthcare initiatives."}
              </p>
            </div>
          </div>
        </motion.div>

      </main>

    </>
  );
}