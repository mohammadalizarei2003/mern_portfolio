import { LuLanguages, LuMoon, LuSun } from "react-icons/lu";
import { useThemeStore } from "../stores/useThemeStore";
import { useLanguageStore } from "../stores/useLanguageStore";
import { useEffect, useState } from "react";
import { localizationEnTexts, localizationFaTexts } from "../utils/constance";

const LandingHeaderComponent = () => {
    const { theme, themes, toggleThemeMode } = useThemeStore();
    const { language, toggleLanguage } = useLanguageStore();
    const [local, setLocal] = useState({});

    useEffect(() => {
        setLocal(language === 'en' ? localizationEnTexts : localizationFaTexts);
    }, [language]);

    const isRTL = language === 'fa';

    return (
        <header 
            className="sticky top-2 z-50 mx-auto w-full 
            flex items-center justify-between px-6 py-2.5 rounded-3xl
            
            /* --- Glass Background Logic --- */
            bg-white/5 
            dark:bg-[#1a1f29]/30 
            
            /* Glass effect */
            backdrop-blur-lg 
            backdrop-saturate-150 
            
            /* --- Luxury Border & Shadow --- */
            border border-white/20 dark:border-white/5
            
            shadow-[0_8px_32px_rgba(0,0,0,0.03),0_1px_2px_rgba(0,0,0,0.02)]
            dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]
            
            transition-all duration-700 ease-in-out"
            dir={isRTL ? 'rtl' : 'ltr'}
        >
            {/* Logo Section */}
            <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative size-10 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative size-9 bg-gradient-to-tr from-primary to-primary-focus rounded-[14px] flex items-center justify-center shadow-lg transform group-hover:rotate-[8deg] transition-all duration-500">
                        <span className="text-primary-content font-black text-lg select-none">
                            {local.headerLocalStep1?.charAt(0)}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-black tracking-tight text-slate-800 dark:text-white leading-none">
                        {local.headerLocalStep1}
                    </span>
                    <span className="text-[9px] font-bold text-primary uppercase tracking-[0.3em] mt-1 opacity-80">
                        {local.headerLocalStep2}
                    </span>
                </div>
            </div>

            {/* Actions Section */}
            <div className="flex items-center gap-3">
                {/* Theme Toggle */}
                <button
                    onClick={() => toggleThemeMode()}
                    className="group relative size-11 flex items-center justify-center rounded-[18px]
                    bg-white/50 dark:bg-white/5 hover:bg-white/30 dark:hover:bg-white/10
                    border border-white/20 dark:border-white/10
                    transition-all duration-300 active:scale-95 cursor-pointer"
                >
                    {theme === themes.light ? (
                        <LuMoon className="size-5" />
                    ) : (
                        <LuSun className="size-5" />
                    )}
                </button>

                {/* Language Toggle */}
                <button
                    onClick={() => toggleLanguage()}
                    className="group flex items-center gap-3 px-4 h-11 rounded-[18px]
                    bg-primary/20 hover:bg-primary/20 border border-primary/20
                    text-primary transition-all duration-300 active:scale-95 cursor-pointer"
                >
                    <LuLanguages className="size-4 opacity-70" />
                    <span className="text-xs font-black tracking-widest uppercase">
                        {language === 'en' ? 'EN' : 'FA'}
                    </span>
                    <span className="relative size-1.5 bg-primary rounded-full">
                        <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-40"></span>
                    </span>
                </button>
            </div>
        </header>
    );
};

export default LandingHeaderComponent;