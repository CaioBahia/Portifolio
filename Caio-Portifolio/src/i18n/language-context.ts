import { createContext } from 'react';
import type { LanguageType } from './translations';

export interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
