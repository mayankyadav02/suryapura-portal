import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

import Button from '../common/Button';
import Container from '../layout/Container';

export default function ContactCTA({
  heading,
  text,
  button,
}) {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950 transition-colors duration-300">
      <Container>

        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/80 md:p-12">

          <h2 className="mb-4 font-display text-4xl leading-tight text-slate-900 dark:text-white md:text-5xl font-bold">
            {heading}
          </h2>

          <p className="mb-10 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {text}
          </p>

          <div className="mb-10 grid gap-6 sm:grid-cols-3">

            {/* Address Box */}
            <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-800/50">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
                <MapPin size={24} />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Panchayat Office
                </p>

                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                  Suryapura Main Road
                </p>
              </div>
            </div>

            {/* Helpline Box */}
            <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-800/50">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
                <Phone size={24} />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Helpline
                </p>

                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                  +91 1800 SURYA 00
                </p>
              </div>
            </div>

            {/* Email Box */}
            <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-800/50">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
                <Mail size={24} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Email
                </p>

                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5 break-all">
                  sarpanch@suryapura.gov.in
                </p>
              </div>
            </div>

          </div>

          <Button
            as={Link}
            to="/connect"
            fullWidth
            className="py-5 text-base font-semibold tracking-wide rounded-2xl bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 shadow-md transition-all duration-300 active:scale-[0.98]"
          >
            {button}
          </Button>

        </div>

      </Container>
    </section>
  );
}