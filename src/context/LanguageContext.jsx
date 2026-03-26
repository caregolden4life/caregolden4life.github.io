import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { TRANSLATIONS } from '../translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      return localStorage.getItem('gac-lang') || 'vi';
    } catch {
      return 'vi';
    }
  });

  const setLang = useCallback((newLang) => {
    setLangState(newLang);
    try {
      localStorage.setItem('gac-lang', newLang);
    } catch { /* noop */ }
    document.documentElement.lang = newLang;
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback((key) => {
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS['vi']?.[key] || key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
