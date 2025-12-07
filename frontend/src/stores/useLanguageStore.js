import { create } from 'zustand'

const languages = {
    fa: 'fa',
    en: 'en',
}

const getLanguageFromLocalStorage = () => {
    const language = localStorage.getItem('portfolioLanguage') || languages.en;
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', language === languages.en ? 'ltr' : 'rtl');
    return language;
}

export const useLanguageStore = create((set, get) => ({
    language: getLanguageFromLocalStorage(),

    toggleLanguage: () => {
        const selectedLanguage = get().language === languages.en ? languages.fa : languages.en;
        document.documentElement.setAttribute('lang', selectedLanguage);
        document.documentElement.setAttribute('dir', selectedLanguage === languages.en ? 'ltr' : 'rtl');
        localStorage.setItem('portfolioLanguage', selectedLanguage);
        set({ language: selectedLanguage });
    },
}))