import { useEffect, useState } from "react";
import { useLanguageStore } from "../stores/useLanguageStore";
import { localizationEnTexts, localizationFaTexts } from "../utils/constance";
import { LuSparkles, LuCalendar, LuBriefcase, LuGraduationCap, LuMapPin, LuAward } from "react-icons/lu";

const LandingAboutComponent = () => {
    const { language } = useLanguageStore();
    const [local, setLocal] = useState({});

    useEffect(() => {
        setLocal(language === 'en' ? localizationEnTexts : localizationFaTexts);
    }, [language]);

    const isRTL = language === 'fa';

    const experiences = [
        {
            title: isRTL ? "توسعه‌دهنده ارشد فرانت‌اند" : "Senior Frontend Developer",
            company: isRTL ? "شرکت نوآوران وب" : "Web Innovators Co.",
            date: "2022 - PRESENT",
            description: isRTL
                ? "طراحی و توسعه اپلیکیشن‌های وب با React, Next.js و Tailwind CSS با تمرکز بر پرفورمنس."
                : "Design and development of web applications with React, Next.js and Tailwind CSS.",
            icon: LuBriefcase,
            color: "text-blue-600 dark:text-blue-400",
            bg: "bg-blue-600",
            lightBg: "bg-blue-50"
        },
        {
            title: isRTL ? "طراح UI/UX" : "UI/UX Designer",
            company: isRTL ? "آژانس دیجیتال خلاق" : "Creative Digital Agency",
            date: "2020 - 2022",
            description: isRTL
                ? "خلق رابط‌های کاربری مدرن و بهبود تجربه کاربری برای پروژه‌های بین‌المللی."
                : "UI/UX design for websites and mobile applications for international projects.",
            icon: LuCalendar,
            color: "text-primary",
            bg: "bg-primary",
            lightBg: "bg-primary/5"
        },
        {
            title: isRTL ? "کارشناسی ارشد مهندسی نرم‌افزار" : "M.Sc. Software Engineering",
            company: isRTL ? "دانشگاه تهران" : "University of Tehran",
            date: "2018 - 2020",
            description: isRTL
                ? "تحقیق بر روی سیستم‌های توزیع شده و بهینه‌سازی الگوریتم‌های فرانت‌اند."
                : "Research on distributed systems and frontend algorithm optimization.",
            icon: LuGraduationCap,
            color: "text-purple-600 dark:text-purple-400",
            bg: "bg-purple-600",
            lightBg: "bg-purple-50"
        }
    ];

    return (
        <section className="relative px-2 overflow-hidden bg-transparent" dir={isRTL ? 'rtl' : 'ltr'}>
            
            {/* --- Background Decorations - Softened for Light Mode --- */}
            <div className="absolute top-1/4 -left-20 size-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[130px] -z-10" />
            <div className="absolute bottom-1/4 -right-20 size-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[130px] -z-10" />
            
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] -z-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

            {/* --- Section Header - High Contrast --- */}
            <div className={`flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-slate-200 dark:border-white/5 pb-10`}>
                <div className="space-y-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black tracking-widest uppercase">
                        {isRTL ? 'درباره من' : 'ABOUT ME'}
                    </span>
                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
                        {isRTL ? 'مسیر حرفه‌ای' : 'My Journey'}
                    </h2>
                </div>
                <p className={`text-slate-600 dark:text-slate-400 lg:text-lg md:text-md text-sm max-w-sm font-bold leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                    {isRTL
                        ? 'خلاصه‌ای از تجربیات و دستاوردهایی که شخصیت حرفه‌ای من را شکل داده‌اند.'
                        : 'A roadmap of my professional evolution and milestones.'}
                </p>
            </div>

            {/* --- Biography & Quick Info Card - Re-polished --- */}
            <div className="grid lg:grid-cols-12 gap-12 items-start mb-32">
                <div className="lg:col-span-7 space-y-8">
                    <p className="lg:text-3xl md:text-2xl text-lg text-slate-800 dark:text-slate-200 leading-tight font-black tracking-tight">
                        {isRTL
                            ? "سلام! من یک توسعه‌دهنده فرانت‌اند با وسواس روی جزئیات هستم. پیکسل‌ها برای من داستان می‌سازند."
                            : "Hi! I'm a detail-obsessed frontend developer. For me, pixels tell stories."}
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {['WEB', 'MOBILE', 'UI/UX'].map(tag => (
                            <span key={tag} className="px-5 py-2 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-black shadow-sm">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-5">
                    <div className="relative bg-white/90 dark:bg-white/[0.03] backdrop-blur-2xl border border-white dark:border-white/10 rounded-[40px] p-10 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-500 hover:-translate-y-2">
                        <h3 className="lg:text-2xl md:text-xl text-md font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                            <LuAward className="text-primary size-7" />
                            {isRTL ? 'اطلاعات کلیدی' : 'Quick Insights'}
                        </h3>
                        <div className="space-y-6">
                            {[
                                { icon: LuMapPin, text: isRTL ? 'تهران، ایران' : 'Tehran, Iran' },
                                { icon: LuBriefcase, text: isRTL ? 'آماده همکاری' : 'Open to projects' },
                                { icon: LuGraduationCap, text: isRTL ? 'کارشناسی ارشد نرم‌افزار' : 'Master of Software Eng.' }
                            ].map((info, i) => (
                                <div key={i} className="flex items-center gap-5 group/item">
                                    <div className="size-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover/item:bg-primary group-hover/item:text-white transition-all">
                                        <info.icon className="size-6" />
                                    </div>
                                    <span className="text-slate-800 dark:text-slate-300 font-black text-sm">{info.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Timeline - Bold & Clean --- */}
            <div className="relative">
                {/* Fixed Line for Light Mode Visibility */}
                <div className={`absolute top-0 bottom-0 w-1 bg-slate-200 dark:bg-white/10 
                    ${isRTL ? 'right-6 md:right-1/2' : 'left-6 md:left-1/2'} md:-translate-x-1/2 rounded-full`} 
                />

                <div className="space-y-16">
                    {experiences.map((item, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            

                            <div className="md:w-1/2">
                                <div className={`group relative bg-white/95 dark:bg-white/[0.02] backdrop-blur-3xl border border-white dark:border-white/10 rounded-[40px] p-10 
                                    shadow-lg shadow-slate-200/60 dark:shadow-none transition-all duration-700 hover:-translate-y-3
                                    ${index % 2 === 0 ? 'text-right m-3' : 'text-left m-1'}`}>
                                    
                                    <div className={`flex items-center gap-5 mb-6 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <div className={`lg:size-24 md:size-16 size-12 rounded-xl p-4 ${item.lightBg} dark:bg-white/5 flex items-center justify-center ${item.color} border border-white dark:border-white/10 shadow-inner transition-transform duration-500 group-hover:rotate-6`}>
                                            <item.icon className="size-8" />
                                        </div>
                                        <div>
                                            <span className="text-xs font-black tracking-widest text-primary uppercase mb-1 block">{item.date}</span>
                                            <h4 className="lg:text-2xl md:text-xl text-lg font-black text-slate-900 dark:text-white tracking-tight">
                                                {item.title}
                                            </h4>
                                        </div>
                                    </div>

                                    <div className={`text-base font-black text-slate-700 dark:text-slate-400 mb-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                        <span className="text-sm px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5">{item.company}</span>
                                    </div>

                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-bold lg:text-lg md:text-md text-sm">
                                        {item.description}
                                    </p>

                                    <div className={`absolute top-8 ${isRTL ? 'left-10' : 'right-10'} opacity-0 group-hover:opacity-100 transition-all duration-700`}>
                                        <LuSparkles className="size-6 text-primary animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LandingAboutComponent;