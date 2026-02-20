import { useEffect, useState } from 'react'
import { localizationEnTexts, localizationFaTexts, skills } from '../utils/constance'
import { useLanguageStore } from '../stores/useLanguageStore';
import { LandingAboutComponent, LandingContactComponent, LandingHeroComponent, LandingProjectsComponent, LandingSkillsComponent } from '../components';



const LandingPage = () => {
    const { language } = useLanguageStore();
    const [local, setLocal] = useState({});

    useEffect(() => {
        setLocal(language === 'en' ? localizationEnTexts : localizationFaTexts);
    }, [language]);

    return <section className='space-y-40'>
        {/*  */}
        <LandingHeroComponent />

        {/* skills */}
        <LandingAboutComponent />
        <LandingSkillsComponent />
        <LandingProjectsComponent />
        <LandingContactComponent />



    </section>
}

export default LandingPage