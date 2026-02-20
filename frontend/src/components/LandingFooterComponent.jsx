import { useLanguageStore } from "../stores/useLanguageStore";
import { LuGithub, LuLinkedin, LuTwitter, LuMail, LuHeart, LuSparkles, LuExternalLink } from "react-icons/lu";
import { useEffect, useState } from "react";
import { localizationEnTexts, localizationFaTexts } from "../utils/constance";

const LandingFooterComponent = () => {
    const { language } = useLanguageStore();
    const [local, setLocal] = useState({});
    const isRTL = language === 'fa';

    useEffect(() => {
        setLocal(language === 'en' ? localizationEnTexts : localizationFaTexts);
    }, [language]);

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: LuGithub, href: "https://github.com/yourusername", color: "hover:bg-slate-900" },
        { icon: LuLinkedin, href: "https://linkedin.com/in/yourusername", color: "hover:bg-blue-700" },
        { icon: LuTwitter, href: "https://twitter.com/yourusername", color: "hover:bg-sky-500" },
        { icon: LuMail, href: "mailto:hello@example.com", color: "hover:bg-rose-500" }
    ];

    const navLinks = [
        { label: isRTL ? "خانه" : "Home", href: "#" },
        { label: isRTL ? "پروژه‌ها" : "Projects", href: "#projects" },
        { label: isRTL ? "مهارت‌ها" : "Skills", href: "#skills" },
        { label: isRTL ? "تماس" : "Contact", href: "#contact" }
    ];

    return (
        <footer className="relative w-full lg:px-6 md:p-4 p-1 py-16 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
            
            {/* Ambient Lighting */}
            <div className="absolute top-0 left-1/4 size-64 bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 size-64 bg-blue-500/10 rounded-full blur-[120px] -z-10" />

            <div className="relative bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-[45px] p-10 md:p-16 shadow-2xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
                
                {/* Top Section */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    
                    {/* Brand Info */}
                    <div className="lg:col-span-5 space-y-6">
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                            <span>{local.headerLocalStep1}</span>
                            <span className="text-primary font-black">.{local.headerLocalStep2}</span>
                        </h2>
                        <p className="lg:text-lg md:text-md text-sm pl-10 text-slate-600 dark:text-slate-400 font-bold leading-relaxed max-w-sm">
                            {isRTL
                                ? "خلق تجربیات دیجیتالی منحصر به فرد با تمرکز بر جزئیات و کدنویسی استاندارد."
                                : "Crafting unique digital experiences with a focus on detail and standard coding."}
                        </p>
                        
                        {/* Social Buttons - High Contrast */}
                        <div className="flex flex-wrap gap-4">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`size-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 transition-all duration-500 hover:text-white ${social.color} hover:-translate-y-2 hover:shadow-lg`}
                                >
                                    <social.icon className="size-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Navigation */}
                    <div className="lg:col-span-3">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8">
                            {isRTL ? "دسترسی سریع" : "Navigation"}
                        </h3>
                        <ul className="space-y-4">
                            {navLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white font-bold transition-all flex items-center gap-3 group"
                                    >
                                        <span className="h-[2px] w-0 bg-primary group-hover:w-4 transition-all duration-300 rounded-full" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Direct Contact */}
                    <div className="lg:col-span-4">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8">
                            {isRTL ? "ارتباط مستقیم" : "Quick Contact"}
                        </h3>
                        <div className="space-y-6">
                            <a href="mailto:hello@example.com" className="flex items-center gap-4 group p-4 bg-slate-50 dark:bg-white/5 rounded-3xl border border-transparent hover:border-primary/20 transition-all">
                                <div className="size-12 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center text-primary shadow-sm">
                                    <LuMail className="size-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{isRTL ? 'ایمیل رسمی' : 'Official Email'}</p>
                                    <p className="text-slate-900 dark:text-white font-black group-hover:text-primary transition-colors">hello@example.com</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar - Copyright */}
                <div className="pt-10 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3 text-sm font-bold text-slate-400">
                        <span>© {currentYear}</span>
                        <div className="size-1 bg-slate-200 dark:bg-white/10 rounded-full" />
                        <span className="text-slate-600 dark:text-slate-300">{local.headerLocalStep1} {local.headerLocalStep2}</span>
                    </div>

                    <div className="px-6 py-2 bg-slate-50 dark:bg-white/5 rounded-full border border-slate-100 dark:border-white/10 flex items-center gap-2 text-xs font-black text-slate-500 dark:text-slate-400">
                        <span>{isRTL ? "ساخته شده با" : "Design with"}</span>
                        <LuHeart className="size-4 text-rose-500 fill-rose-500 animate-pulse" />
                        <span>{isRTL ? "توسط تیم" : "by"} <span className="text-primary">{local.headerLocalStep1}</span></span>
                    </div>
                </div>

                {/* Decorative Element */}
                <div className={`absolute top-10 ${isRTL ? 'left-10' : 'right-10'} opacity-10 dark:opacity-20 pointer-events-none`}>
                    <LuSparkles className="size-24 text-primary animate-spin-slow" />
                </div>
            </div>

            <style jsx>{`
                .animate-spin-slow {
                    animation: spin 10s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </footer>
    );
};

export default LandingFooterComponent;