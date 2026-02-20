import { useEffect, useState } from "react";
import { useLanguageStore } from "../stores/useLanguageStore";
import { localizationEnTexts, localizationFaTexts } from "../utils/constance";
import { LuMail, LuPhone, LuMapPin, LuSend, LuSparkles, LuMessageSquare } from "react-icons/lu";

const LandingContactComponent = () => {
    const { language } = useLanguageStore();
    const [local, setLocal] = useState({});

    useEffect(() => {
        setLocal(language === 'en' ? localizationEnTexts : localizationFaTexts);
    }, [language]);

    const isRTL = language === 'fa';

    const contactInfo = [
        {
            icon: LuMail,
            title: isRTL ? "ایمیل" : "Email",
            value: "hello@example.com",
            link: "mailto:hello@example.com",
            color: "text-blue-600",
            bg: "bg-blue-50 dark:bg-blue-500/10"
        },
        {
            icon: LuPhone,
            title: isRTL ? "تلفن" : "Phone",
            value: "+98 912 345 6789",
            link: "tel:+989123456789",
            color: "text-emerald-600",
            bg: "bg-emerald-50 dark:bg-emerald-500/10"
        },
        {
            icon: LuMapPin,
            title: isRTL ? "موقعیت" : "Location",
            value: isRTL ? "تهران، ایران" : "Tehran, Iran",
            link: "#",
            color: "text-orange-600",
            bg: "bg-orange-50 dark:bg-orange-500/10"
        }
    ];

    return (
        <section className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 overflow-hidden bg-transparent" dir={isRTL ? 'rtl' : 'ltr'}>
            
            {/* Soft Background Decor */}
            <div className="absolute top-1/4 -right-20 size-[500px] bg-primary/5 rounded-full blur-[130px] -z-10" />
            <div className="absolute bottom-1/4 -left-20 size-[500px] bg-blue-500/5 rounded-full blur-[130px] -z-10" />

            {/* Section Header - Bold & Clean */}
            <div className={`flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-slate-200 dark:border-white/5 pb-10`}>
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <LuMessageSquare className="text-primary size-5" />
                        <span className="text-primary font-black tracking-[0.3em] text-xs uppercase">
                            {isRTL ? 'ارتباط با من' : 'GET IN TOUCH'}
                        </span>
                    </div>
                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
                        {isRTL ? 'بیا گفتگو کنیم' : "Let's Talk"}
                    </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 lg:text-lg md:text-md text-sm max-w-sm font-bold leading-relaxed">
                    {isRTL
                        ? 'منتظر شنیدن ایده‌های جذاب و همکاری‌های جدید هستم.'
                        : 'I am open to new ideas, collaborations, or just a friendly hello.'}
                </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
                
                {/* Contact Info Cards */}
                <div className="lg:col-span-4 space-y-6">
                    {contactInfo.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className="group block relative bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 lg:rounded-3xl md:rounded-2xl rounded-xl lg:p-8 md:p-4 p-2 transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-slate-200/40 dark:shadow-none"
                        >
                            <div className="flex items-center gap-6">
                                <div className={`size-16 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                    <item.icon className="size-8" />
                                </div>
                                <div>
                                    <h3 className="lg:text-sm md:text-sm text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{item.title}</h3>
                                    <p className="lg:text-lg md:text-md text-sm font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">{item.value}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Modern Contact Form */}
                <div className="lg:col-span-8">
                    <div className="relative bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 lg:rounded-3xl md:rounded-2xl rounded-xl lg:p-12 md:p-8 p-4  shadow-2xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
                        
                        <div className="relative z-10">
                            <h3 className="lg:text-3xl md:text-2xl text-md font-black text-slate-900 dark:text-white mb-10 flex items-center gap-3">
                                {isRTL ? 'ارسال پیام مستقیم' : 'Send a Message'}
                                <LuSparkles className="text-primary size-6 animate-pulse" />
                            </h3>

                            <form className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] px-1">{isRTL ? 'نام کامل' : 'Full Name'}</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-6 py-4 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[20px] focus:outline-none focus:ring-4 focus:ring-primary/10 focus:bg-white dark:focus:bg-white/10 transition-all duration-300 font-bold text-slate-900 dark:text-white"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] px-1">{isRTL ? 'ایمیل' : 'Email Address'}</label>
                                    <input
                                        type="email"
                                        placeholder="hello@example.com"
                                        className="w-full px-6 py-4 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[20px] focus:outline-none focus:ring-4 focus:ring-primary/10 focus:bg-white dark:focus:bg-white/10 transition-all duration-300 font-bold text-slate-900 dark:text-white"
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-3">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] px-1">{isRTL ? 'پیام شما' : 'Your Message'}</label>
                                    <textarea
                                        rows={5}
                                        placeholder={isRTL ? 'در مورد چه چیزی می‌خواهید صحبت کنید؟' : 'What would you like to discuss?'}
                                        className="w-full px-6 py-4 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[25px] focus:outline-none focus:ring-4 focus:ring-primary/10 focus:bg-white dark:focus:bg-white/10 transition-all duration-300 font-bold text-slate-900 dark:text-white resize-none"
                                    />
                                </div>
                                <div className="md:col-span-2 flex justify-end">
                                    <button className="group relative px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[22px] font-black text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30 flex items-center gap-4">
                                        <span>{isRTL ? 'ارسال درخواست' : 'Send Request'}</span>
                                        <LuSend className={`size-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 ${isRTL ? 'group-hover:-translate-x-1' : ''}`} />
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Background Decoration Pattern */}
                        <div className="absolute top-0 right-0 size-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingContactComponent;