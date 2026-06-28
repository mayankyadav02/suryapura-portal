import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, X, Home, Sprout, GraduationCap, Landmark, Route, BadgeCheck, Phone, FileText,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLocale } from '../../context/GlobalProviders';

export default function CommandSearch({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { lang } = useLocale();
  const [query, setQuery] = useState('');

  const searchItems = [
    { title: 'Home', hiTitle: 'मुख्य पृष्ठ', description: 'Village development overview', hiDescription: 'गाँव विकास का मुख्य पृष्ठ', path: '/', icon: Home, keywords: ['home', 'hero', 'village', 'gram', 'मुख्य', 'होम'] },
    { title: 'Village Initiatives', hiTitle: 'ग्राम पहल', description: 'Education, health and development', hiDescription: 'शिक्षा, स्वास्थ्य एवं विकास', path: '/initiatives', icon: Sprout, keywords: ['initiative', 'farmer', 'education', 'village', 'किसान', 'शिक्षा', 'ग्राम'] },
    { title: 'Transparency', hiTitle: 'पारदर्शिता', description: 'Budget and public records', hiDescription: 'बजट एवं सार्वजनिक रिकॉर्ड', path: '/transparency', icon: Landmark, keywords: ['budget', 'fund', 'records', 'पारदर्शिता', 'बजट'] },
    { title: 'Digital Services', hiTitle: 'डिजिटल सेवाएँ', description: 'Certificates and Digital Identity', hiDescription: 'प्रमाण पत्र एवं डिजिटल पहचान', path: '/services', icon: BadgeCheck, keywords: ['digital', 'identity', 'certificate', 'सेवा', 'डिजिटल', 'पहचान'] },
    { title: 'Road Development', hiTitle: 'सड़क विकास', description: 'Road connectivity projects', hiDescription: 'सड़क एवं संपर्क परियोजनाएँ', path: '/initiatives', icon: Route, keywords: ['road', 'transport', 'सड़क'] },
    { title: 'Education', hiTitle: 'शिक्षा', description: 'Schools and literacy mission', hiDescription: 'विद्यालय एवं साक्षरता अभियान', path: '/initiatives', icon: GraduationCap, keywords: ['education', 'school', 'student', 'विद्यालय', 'शिक्षा'] },
    { title: 'Contact Panchayat', hiTitle: 'संपर्क', description: 'Reach village administration', hiDescription: 'ग्राम पंचायत से संपर्क', path: '/connect', icon: Phone, keywords: ['contact', 'help', 'support', 'संपर्क', 'मदद'] },
    { title: 'Announcements', hiTitle: 'घोषणाएँ', description: 'Latest village updates', hiDescription: 'ग्राम की नवीनतम घोषणाएँ', path: '/transparency', icon: FileText, keywords: ['news', 'notice', 'announcement', 'घोषणा'] },
  ];

  const filteredItems = useMemo(() => {
    if (!query.trim()) return searchItems;
    const value = query.toLowerCase();
    return searchItems.filter((item) => (
      item.title.toLowerCase().includes(value) ||
      item.hiTitle.includes(query) ||
      item.description.toLowerCase().includes(value) ||
      item.hiDescription.includes(query) ||
      item.keywords.some((word) => word.toLowerCase().includes(value))
    ));
  }, [query]);

  // Handle Keyboard Shortcuts & Background Scroll Lock
  useEffect(() => {
    // Scroll Lock Logic
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
      }
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset'; // Cleanup on unmount
    };
  }, [isOpen, onClose]);

  const handleNavigate = (path) => {
    navigate(path);
    setQuery('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center pt-16 px-4 sm:justify-center sm:pt-0 sm:px-0">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-surface-muted bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900 flex flex-col"
          >
            <div className="flex items-center gap-3 border-b border-surface-muted px-5 py-4 dark:border-slate-700 shrink-0">
              <Search className="h-5 w-5 text-surya-600" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={lang === 'HI' ? 'सेवाएँ, योजनाएँ, किसान, शिक्षा खोजें...' : 'Search services, education, farmers...'}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-ink-low dark:text-white"
              />
              <button onClick={onClose} className="rounded-lg p-2 transition hover:bg-surya-100 dark:hover:bg-slate-800">
                <X className="h-5 w-5 text-ink-low dark:text-slate-400" />
              </button>
            </div>

            {/* Added overscroll-contain for better trackpad/mouse feel */}
            <div className="max-h-[50vh] sm:max-h-[420px] overflow-y-auto overscroll-contain p-3">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.title}
                      onClick={() => handleNavigate(item.path)}
                      className="mb-2 flex w-full items-start gap-4 rounded-2xl p-4 text-left transition hover:bg-surya-50 dark:hover:bg-slate-800"
                    >
                      <div className="rounded-xl bg-surya-100 p-3 text-surya-600 dark:bg-surya-900/40 dark:text-surya-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-ink-high dark:text-white">
                          {lang === 'HI' ? item.hiTitle : item.title}
                        </h3>
                        <p className="mt-1 text-sm text-ink-low dark:text-slate-400">
                          {lang === 'HI' ? item.hiDescription : item.description}
                        </p>
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Search className="mb-4 h-12 w-12 text-surya-400 opacity-50" />
                  <h3 className="text-lg font-semibold text-ink-high dark:text-white">
                    {lang === 'HI' ? 'कोई परिणाम नहीं मिला' : 'No Results Found'}
                  </h3>
                  <p className="mt-2 text-sm text-ink-low dark:text-slate-400">
                    {lang === 'HI' ? 'कृपया दूसरा शब्द खोजें।' : 'Try searching with another keyword.'}
                  </p>
                </div>
              )}
            </div>

            <div className="hidden sm:flex items-center justify-between border-t border-surface-muted px-5 py-3 text-xs text-ink-low dark:border-slate-700 dark:text-slate-400 shrink-0">
              <span>{lang === 'HI' ? 'Esc दबाएँ बंद करने के लिए' : 'Press Esc to close'}</span>
              <span>Ctrl + K</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}