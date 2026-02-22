import { create } from 'zustand'

const themes = { light: 'nord', dark: 'dim' }

const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem('portfolioTheme') || themes.light;
    document.documentElement.setAttribute('data-theme', theme);
    
    // اضافه کردن این بخش برای هماهنگی با تایلویند در بدو ورود
    if (theme === themes.dark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    return theme;
}
export const useThemeStore = create((set, get) => ({
    theme: getThemeFromLocalStorage(),
    themes: themes,
    toggleThemeMode: () => {
        const isDark = get().theme === themes.dark;
        const selectedTheme = isDark ? themes.light : themes.dark;
        
        set({ theme: selectedTheme });
        localStorage.setItem('portfolioTheme', selectedTheme);
        
        // ۱. تنظیم تم برای DaisyUI (رنگ‌های سیستمی)
        document.documentElement.setAttribute('data-theme', selectedTheme);
        
        // ۲. تنظیم کلاس برای Tailwind (کلاس‌های :dark)
        if (selectedTheme === themes.dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
}))