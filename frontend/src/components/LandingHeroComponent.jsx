import { useEffect, useRef, useState } from "react";
import { useLanguageStore } from "../stores/useLanguageStore";
import { LuLinkedin, LuMail, LuPhone, LuArrowUpRight, LuSparkles, LuArrowDownRight } from "react-icons/lu";
import { SiChromewebstore } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { TbUxCircle } from "react-icons/tb";
import { localizationEnTexts, localizationFaTexts } from "../utils/constance";
import profileImage from '../assets/images/profile.jpg'
import { useScrollStore } from "../stores/useScrollStore";

const LandingHeroComponent = () => {
  const { language } = useLanguageStore();
  const [local, setLocal] = useState({});
  const { scrollToBackHero, setScrollToBackHero } = useScrollStore();
  const sectionRef = useRef(false);

  const setScrollToProjects = useScrollStore((state) => state.setScrollToProjects);

  useEffect(() => {
    setLocal(language === 'en' ? localizationEnTexts : localizationFaTexts);
  }, [language]);


  useEffect(() => {
    if (scrollToBackHero && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setScrollToBackHero(false);
    }
  }, [scrollToBackHero, setScrollToBackHero]);

  const isRTL = language === 'fa';

  return (
    <section className="relative w-full min-h-screen pt-20 pb-24 md:py-28 px-4 md:px-8 overflow-hidden flex items-center bg-transparent rounded-3xl" ref={sectionRef}>

      {/* --- Optimized Background Elements --- */}
      <div className="absolute top-20 -left-20 size-[450px] bg-primary/10 rounded-full blur-[130px] -z-10 animate-pulse" />
      <div className="absolute bottom-20 -right-20 size-[450px] bg-blue-500/10 rounded-full blur-[130px] -z-10 opacity-60" />

      {/* Grid pattern - Pure and Clean */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] -z-20 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      <div className="w-full relative z-10">

        {/* Badge - Pure Glass Style */}
        <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-2xl 
          bg-white/80 dark:bg-white/5 backdrop-blur-xl
          border border-white/40 dark:border-white/10 mb-12 hover:scale-105 transition-all duration-300 shadow-sm shadow-slate-200/50 dark:shadow-none`}>
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--p),0.8)]" />
          <span className="text-sm font-bold tracking-tight text-slate-700 dark:text-slate-100">
            {local.welcomeMessage}
          </span>
          <LuSparkles className="size-4 text-amber-500 ml-1" />
        </div>

        <div className={`flex flex-col ${isRTL ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>

          {/* Avatar Section */}
          <div className="lg:w-5/12 flex flex-col items-center">
            <div className="relative group mb-8">
              <div className="absolute inset-0 bg-primary/15 rounded-full blur-3xl scale-125 opacity-40 group-hover:opacity-60 transition-opacity duration-700" />

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-blue-500/40 rounded-[45px] blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative size-44 rounded-[40px] overflow-hidden border-[3px] border-white/90 dark:border-white/40 shadow-xl bg-white/40 backdrop-blur-md">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="absolute bottom-3 right-3 size-5 bg-primary rounded-full border-4 border-white dark:border-[#1a1f29] shadow-lg" />
            </div>

            {/* Social icons - Crystal Polish */}
            <div className={`flex items-center gap-4 mt-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {[LuPhone, LuMail, LuLinkedin].map((Icon, idx) => (
                <button
                  key={idx}
                  className="size-13 p-3.5 rounded-2xl 
                  bg-white/90 dark:bg-white/5 backdrop-blur-xl 
                  border border-slate-200/60 dark:border-white/10 
                  text-slate-700 dark:text-white shadow-sm
                  flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <Icon className="size-5 transition-transform group-hover:scale-110" />
                </button>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className={`lg:w-7/12 ${isRTL ? 'text-right' : 'text-left'} text-center lg:text-right`}>
            <div className={`mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              <span className="text-xs font-black text-primary uppercase tracking-[0.5em] opacity-80">
                {isRTL ? 'سلام، من هستم' : 'Hello, I am'}
              </span>
            </div>

            <h1 className={`text-6xl font-black mb-5 tracking-tighter leading-none text-slate-800 dark:text-white ${isRTL ? 'text-right' : 'text-left'}`}>
              {local.headerLocalStep1} <span className="relative text-primary inline-block drop-shadow-sm"> {local.headerLocalStep2}</span>
            </h1>

            <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'justify-end' : 'justify-start'} justify-center lg:justify-start`}>
              <div className="px-5 py-2 bg-white/60 dark:bg-primary/10 backdrop-blur-md rounded-xl border border-slate-200 dark:border-primary/20 shadow-sm">
                <span className="text-primary font-black text-sm">{local.jobTitle}</span>
              </div>
              <div className="size-1.5 bg-slate-300 dark:bg-primary/40 rounded-full" />
              <span className="text-slate-500 dark:text-slate-400 font-bold text-sm tracking-tight">{isRTL ? '۵+ سال تجربه حرفه‌ای' : '5+ years experience'}</span>
            </div>

            <p className={
              `
              text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-12 font-medium text-left
              ${isRTL ? "text-right" : "text-left"}
              `
            }>
              {local.jobDescription}
            </p>

            {/* CTA Buttons - Premium Polish */}
            <div className={`flex flex-wrap items-center gap-6 mb-16 ${isRTL ? 'justify-end' : 'justify-start'}`}>
              <button
                className="group relative px-10 py-5 bg-primary text-white rounded-2xl font-black shadow-2xl shadow-primary/30 hover:-translate-y-1.5 transition-all active:scale-95 cursor-pointer"
                onClick={() => setScrollToProjects(true)}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {isRTL ? 'مشاهده پروژه‌ها' : 'View Projects'}
                  <LuArrowDownRight className="size-6 transition-transform rotate-90 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </button>

              {/* <button className="px-10 py-5 rounded-2xl font-black cursor-pointer 
                border-2 border-slate-200 dark:border-white/10 
                bg-white/80 dark:bg-white/5 backdrop-blur-xl
                text-slate-700 dark:text-slate-200 shadow-sm
                hover:bg-slate-50 dark:hover:bg-white/10 transition-all active:scale-95">
                {isRTL ? 'دانلود رزومه' : 'Download CV'}
              </button> */}
            </div>

            {/* Stats - Refined Typography */}
            <div className={`flex items-center gap-12 border-t border-slate-100 dark:border-white/5 pt-10 ${isRTL ? 'justify-end' : 'justify-start'}`}>
              {[
                { val: '۵+', label: isRTL ? 'سال تجربه' : 'Years' },
                { val: '۵۰+', label: isRTL ? 'پروژه موفق' : 'Projects' },
                { val: '۲۰+', label: isRTL ? 'مشتری' : 'Clients' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="text-4xl font-black text-slate-800 dark:text-white leading-none tracking-tight">{stat.val}</div>
                  <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guide cards - Crystal White Edition */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {[
            { icon: SiChromewebstore, title: local.guideCard?.[0], desc: 'توسعه وبسایت حرفه‌ای', color: 'primary' },
            { icon: FaMobileAlt, title: local.guideCard?.[1], desc: 'اپلیکیشن‌های موبایل', color: 'blue-500' },
            { icon: TbUxCircle, title: local.guideCard?.[2], desc: 'طراحی رابط کاربری', color: 'purple-500' }
          ].map((card, index) => (
            <div
              key={index}
              className="group relative 
              bg-white/80 dark:bg-white/[0.03] backdrop-blur-3xl backdrop-saturate-[160%]
              border border-white/90 dark:border-white/10 
              rounded-[40px] p-10 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] 
              transition-all duration-700 hover:-translate-y-4 overflow-hidden shadow-sm"
            >
              <div className={`absolute -bottom-10 -right-10 size-40 bg-${card.color}/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`} />

              <div className="relative mb-8">
                <div className={`size-16 rounded-[24px] bg-white dark:bg-white/10 flex items-center justify-center text-${card.color} border border-slate-100 dark:border-white/10 shadow-sm group-hover:rotate-6 transition-transform`}>
                  <card.icon className="size-8" />
                </div>
              </div>

              <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-3 tracking-tight">{card.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-bold mb-8 leading-relaxed opacity-80">{card.desc}</p>

              <div className="flex items-center gap-2 text-primary font-black text-xs group-hover:gap-4 transition-all uppercase tracking-widest cursor-pointer w-full">
                <span>{isRTL ? 'مشاهده جزییات' : 'Learn more'}</span>
                <LuArrowUpRight className="size-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingHeroComponent;