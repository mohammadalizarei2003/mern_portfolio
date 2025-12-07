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

    return <header className="px-5 py-2 bg-base-200/60 rounded-2xl sticky top-2 left-0 bottom-0 border border-primary/50 shadow-lg backdrop-blur-md flex items-center justify-between z-10">
        <h1 className="text-xl font-semibold">{local.headerLocalStep1}.<span className="text-primary">{local.headerLocalStep2}</span></h1>
        <div className="flex items-center justify-center gap-2">
            <button className='btn btn-md shadow-none btn-circle bg-base-100 border border-primary/30 outline-0' onClick={() => toggleThemeMode()}>
                {theme === themes.light ? <LuMoon className='size-4' /> : <LuSun className='size-4' />}
            </button>
            <button className='btn btn-md shadow-none btn-circle bg-base-100 border border-primary/30 outline-0' onClick={() => toggleLanguage()}>
                <LuLanguages className="size-4" />
            </button>
        </div>
    </header>
}

export default LandingHeaderComponent