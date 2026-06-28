import { NavLink } from 'react-router-dom';
import { Landmark, GraduationCap, Tractor, IdCard } from 'lucide-react';
import Container from './Container';
import { useLocale } from '../../context/GlobalProviders';

export default function Footer() {
  const { lang } = useLocale();
  const isHindi = lang === 'HI';

  const links = [
    { label: isHindi ? 'मुख्य पृष्ठ' : 'Home', path: '/' },
    { label: isHindi ? 'ग्राम पहल' : 'Initiatives', path: '/initiatives' },
    { label: isHindi ? 'पारदर्शिता' : 'Transparency', path: '/transparency' },
    { label: isHindi ? 'डिजिटल सेवाएँ' : 'Services', path: '/services' },
    { label: isHindi ? 'संपर्क' : 'Connect', path: '/connect' },
  ];

  const highlights = [
    {
      icon: Tractor,
      title: isHindi ? 'किसान विकास' : 'Farmer Development',
    },
    {
      icon: GraduationCap,
      title: isHindi ? 'शिक्षा' : 'Education',
    },
    {
      icon: Landmark,
      title: isHindi ? 'पंचायत' : 'Panchayat',
    },
    {
      icon: IdCard,
      title: isHindi ? 'डिजिटल पहचान' : 'Digital Identity',
    },
  ];

  return (
    <footer className="mt-20 border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 transition-colors duration-300">
      <Container className="py-14">

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">

          {/* Brand & Logo Section (Synced with Header) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <NavLink
              to="/"
              className="flex flex-col transition-transform duration-300 hover:scale-105"
            >
              <h2 className="font-display text-3xl font-extrabold tracking-wide text-slate-900 dark:text-white leading-none">
                सूर्यपुरा
              </h2>
              {/* Fixed className syntax error below */}
              <span className="text-[11px] font-semibold tracking-wider text-emerald-600 dark:text-emerald-400/90 leading-none mt-2">
                {isHindi ? 'आपका गाँव, अपना गाँव' : 'Your Village, Our Village'}
              </span>
            </NavLink>

            <p className="mt-6 text-sm font-medium text-slate-700 dark:text-slate-200">
              {isHindi ? 'ग्राम विकास पोर्टल' : 'Village Development Portal'}
            </p>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {isHindi
                ? 'एक विकसित गाँव, एक सशक्त भविष्य। यह एक काल्पनिक ग्रामीण विकास पोर्टल है जो शिक्षा, किसान, सड़क, पंचायत और डिजिटल पहचान को आधुनिक तकनीक से जोड़ता है।'
                : 'A fictional rural development portal promoting education, farmers, roads, panchayat and digital identity through modern technology.'}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-5 text-lg font-bold text-slate-900 dark:text-white">
              {isHindi ? 'त्वरित लिंक' : 'Quick Links'}
            </h3>

            <ul className="space-y-4 text-center md:text-left">
              {links.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Development Focus */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-5 text-lg font-bold text-slate-900 dark:text-white">
              {isHindi ? 'विकास के प्रमुख क्षेत्र' : 'Development Focus'}
            </h3>

            <div className="w-full max-w-xs space-y-4">
              {highlights.map(({ icon: Icon, title }) => (
                <div key={title} className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-900/60">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
                    <Icon size={20} />
                  </div>

                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Footer Credits */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-8 text-center md:flex-row dark:border-slate-800">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} {isHindi ? 'सूर्यपुरा ग्राम विकास पोर्टल' : 'Suryapura Village Development Portal'}
          </p>

          <p className="text-xs text-slate-400 dark:text-slate-500">
            {isHindi
              ? 'यह केवल प्रदर्शन (Demo) हेतु बनाया गया एक काल्पनिक ग्रामीण विकास पोर्टल है।'
              : 'This is a fictional rural development demo built using React + Vite.'}
          </p>
        </div>

      </Container>
    </footer>
  );
}