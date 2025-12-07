import { create } from 'zustand'

const themes = { light: 'light', dark: 'dark' }

const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem('portfolioTheme') || themes.light;

    document.documentElement.setAttribute('data-theme', theme)
    return theme;
}

export const useThemeStore = create((set, get) => ({
    theme: getThemeFromLocalStorage(),
    themes: themes,
    toggleThemeMode: () => {
        const selectedTheme = get().theme === themes.dark ? themes.light : themes.dark;
        set({ theme: selectedTheme });
        localStorage.setItem('portfolioTheme', selectedTheme);
        document.documentElement.setAttribute('data-theme', selectedTheme);
    }
}))