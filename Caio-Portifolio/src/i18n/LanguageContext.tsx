import React, { useState, type ReactNode } from 'react';
import type { LanguageType } from './translations';
import { LanguageContext, type LanguageContextType } from './language-context';

const LANGUAGE_STORAGE_KEY = 'vite-ui-language';

interface LanguageProviderProps {
  children: ReactNode;
}

const getStoredLanguage = (): LanguageType => {
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return stored === 'en' || stored === 'pt' ? stored : 'pt';
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageType>(getStoredLanguage);

  const setLanguage = (lang: LanguageType) => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    setLanguageState(lang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
