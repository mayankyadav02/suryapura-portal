import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  Layers,
  PieChart,
  ShieldCheck,
  MessageCircle,
  Search,
  Sun,
  Moon,
  Languages,
  ChevronRight,
} from 'lucide-react';

import Container from './Container';
import CommandSearch from './CommandSearch';
import { cn } from '../../utils/cn';
import { useTheme, useLocale } from '../../context/GlobalProviders';

const navLinks = [
  { path: '/', label: 'Home', hiLabel: 'मुख्य पृष्ठ', icon: Home },
  { path: '/initiatives', label: 'Initiatives', hiLabel: 'ग्राम पहल', icon: Layers },
  { path: '/transparency', label: 'Transparency', hiLabel: 'पारदर्शिता', icon: PieChart },
  { path: '/services', label: 'Services', hiLabel: 'डिजिटल सेवाएँ', icon: ShieldCheck },
  { path: '/connect', label: 'Connect', hiLabel: 'संपर्क', icon: MessageCircle },
];

export default function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLocale();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const constraintsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleShortcut = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  return (
    <>
      <div ref={constraintsRef} className="fixed inset-0 z-0 pointer-events-none" />

      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45 }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'border-b border-surface-muted bg-white/60 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/60'
            : 'bg-transparent'
        )}
      >
        <Container className="flex h-20 items-center w-full">
          
          <div className="flex flex-1 justify-start lg:hidden">
            <button
              onClick={toggleLang}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-muted bg-white/80 transition hover:bg-surya-50 dark:border-slate-700 dark:bg-slate-900/80 dark:hover:bg-slate-800"
            >
              <Languages size={18} className="text-ink-low dark:text-slate-300" />
            </button>
          </div>

          {/* ================= LOGO SECTION (FIXED ALIGNMENT & COLOR) ================= */}
          <div className="flex flex-1 justify-center items-center lg:justify-start lg:flex-none h-full">
            <NavLink
              to="/"
              className="flex flex-col items-center justify-center lg:items-start transition-transform duration-300 hover:scale-105"
            >
              {/* Gradient hata kar solid text-surya-900 kiya hai aur pb-1 hata diya hai */}
              <h1 className="font-display text-2xl font-extrabold tracking-wide text-surya-900 dark:text-white sm:text-3xl drop-shadow-sm leading-none">
                सूर्यपुरा
              </h1>
              <span className="text-[10px] font-semibold tracking-wide text-surya-700 dark:text-surya-300/90 leading-none mt-1">
                {lang === 'HI' ? 'आपका गाँव, अपना गाँव' : 'Your Village, Our Village'}
              </span>
            </NavLink>
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-2 lg:flex">
            {navLinks.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {({ isActive }) => (
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      'relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                      isActive
                        ? 'bg-surya-600 text-white shadow-md'
                        : 'text-ink-low hover:bg-surya-50 hover:text-surya-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-surya-300'
                    )}
                  >
                    {lang === 'HI' ? item.hiLabel : item.label}
                  </motion.div>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-1 justify-end items-center gap-2 lg:flex-none">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden lg:flex items-center gap-2 rounded-full border border-surface-muted bg-white/80 px-4 py-2 text-sm text-ink-low shadow-sm transition hover:border-surya-300 hover:text-surya-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:text-surya-300"
            >
              <Search size={18} />
              <span className="hidden xl:block">{lang === 'HI' ? 'खोजें' : 'Search'}</span>
              <kbd className="ml-1 hidden rounded bg-slate-100/50 px-2 py-0.5 text-xs dark:bg-slate-800 xl:block">Ctrl K</kbd>
            </button>

            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-muted bg-white/80 transition hover:bg-surya-50 dark:border-slate-700 dark:bg-slate-900/80 dark:hover:bg-slate-800"
            >
              {theme === 'dark' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-700" />}
            </button>

            <button
              onClick={toggleLang}
              className="hidden lg:flex items-center gap-2 rounded-full border border-surface-muted bg-white/80 px-4 py-2 text-sm font-medium transition hover:bg-surya-50 dark:border-slate-700 dark:bg-slate-900/80 dark:hover:bg-slate-800 text-ink-low dark:text-slate-300"
            >
              <Languages size={17} />
              <span>{lang === 'HI' ? 'EN' : 'हिन्दी'}</span>
            </button>

            <NavLink
              to="/services"
              className="hidden xl:flex items-center gap-2 rounded-full bg-surya-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-surya-700 hover:shadow-xl"
            >
              {lang === 'HI' ? 'डिजिटल सेवाएँ' : 'Digital Services'}
              <ChevronRight size={16} />
            </NavLink>
          </div>
        </Container>
      </motion.header>

      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        dragMomentum={false}
        className="fixed bottom-24 right-6 z-[90] cursor-grab active:cursor-grabbing lg:hidden pointer-events-auto"
      >
        <motion.button
          onClick={() => setIsSearchOpen(true)}
          whileHover={{ scale: 1.1, backgroundColor: theme === 'dark' ? "rgba(30, 41, 59, 0.9)" : "rgba(255, 255, 255, 0.9)" }}
          whileTap={{ scale: 0.9 }}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/20 text-ink-high shadow-xl backdrop-blur-md transition-all duration-300 dark:border-white/5 dark:bg-black/20 dark:text-white"
        >
          <Search size={24} className="opacity-70" />
        </motion.button>
      </motion.div>

      <div className="fixed inset-x-0 bottom-4 z-40 px-4 lg:hidden">
        <nav className="mx-auto flex max-w-md items-center justify-around rounded-2xl border border-surface-muted bg-white/80 p-2 shadow-xl backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/80">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={cn(
                  'flex flex-col items-center gap-1 rounded-xl px-3 py-2 transition',
                  active ? 'text-surya-600 dark:text-surya-400' : 'text-ink-low dark:text-slate-400'
                )}
              >
                <Icon size={20} />
                <span className="text-[10px] font-medium">{lang === 'HI' ? item.hiLabel : item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <CommandSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}