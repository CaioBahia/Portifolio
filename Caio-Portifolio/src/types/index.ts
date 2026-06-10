/**
 * Centralized type definitions for the portfolio application
 */

/**
 * Represents a translated project item from i18n
 */
export interface TranslatedProject {
  title: string;
  description: string;
  fullDescription: string;
}

/**
 * Represents a complete project object with all properties
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  isUnderConstruction?: boolean;
  constructionEmoji?: string;
  constructionText?: string;
}

/**
 * Form data structure for contact form
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Form submission status
 */
export interface FormStatus {
  type?: 'success' | 'error';
  message?: string;
}

/**
 * Stack technology item
 */
export interface StackItem {
  name: string;
  icon?: string;
  category: 'frontend' | 'backend' | 'database' | 'devops';
}

/**
 * Theme context type definition
 */
export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

/**
 * Language context type definition
 */
export interface LanguageContextType {
  language: 'pt' | 'en';
  setLanguage: (lang: 'pt' | 'en') => void;
}
