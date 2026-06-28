import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();
const LocaleContext = createContext();
const A11yContext = createContext();

export function GlobalProviders({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) return storedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'EN';
    return localStorage.getItem('lang') || 'EN';
  });
  
  // Accessibility State
  const [fontSize, setFontSize] = useState('base'); // base, large, x-large
  const [reducedMotion, setReducedMotion] = useState(false);

  // Apply Theme
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Apply Language & A11y
  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang.toLowerCase());
    
    // Apply font size class to HTML for REM scaling
    document.documentElement.classList.remove('text-base', 'text-lg', 'text-xl');
    const sizeMap = { base: 'text-base', large: 'text-lg', xl: 'text-xl' };
    document.documentElement.classList.add(sizeMap[fontSize]);
  }, [lang, fontSize]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: () => setTheme((t) => t === 'light' ? 'dark' : 'light') }}>
      <LocaleContext.Provider value={{ lang, toggleLang: () => setLang((l) => l === 'EN' ? 'HI' : 'EN') }}>
        <A11yContext.Provider value={{ fontSize, setFontSize, reducedMotion, setReducedMotion }}>
          {children}
        </A11yContext.Provider>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

// Custom Hooks for easy consumption
export const useTheme = () => useContext(ThemeContext);
export const useLocale = () => useContext(LocaleContext);
export const useA11y = () => useContext(A11yContext);