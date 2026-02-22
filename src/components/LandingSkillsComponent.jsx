import { useEffect, useState } from "react";
import { useLanguageStore } from "../stores/useLanguageStore";
import { localizationEnTexts, localizationFaTexts, skills } from "../utils/constance";
import { LuSparkles, LuArrowUpRight } from "react-icons/lu";
import { FaX } from "react-icons/fa6";

const LandingSkillsComponent = () => {
    const { language } = useLanguageStore();
    const [local, setLocal] = useState({});
    const [isShowDetailModal, setIsShowDetailModal] = useState(false);
    const [dialogContent, setDialogContent] = useState({
        icon: null,
        title: "",
        description: "",
        variant: null,
    });

    useEffect(() => {
        setLocal(language === 'en' ? localizationEnTexts : localizationFaTexts);
    }, [language]);

    const isRTL = language === 'fa';


    // Color variants optimized for Pure Light & Deep Dark
    const colorVariants = [
        { shadow: "hover:shadow-blue-500/10", text: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-500/10", border: "border-blue-100 dark:border-blue-500/20" },
        { shadow: "hover:shadow-purple-500/10", text: "text-purple-600", bg: "bg-purple-50 dark:bg-purple-500/10", border: "border-purple-100 dark:border-purple-500/20" },
        { shadow: "hover:shadow-amber-500/10", text: "text-amber-600", bg: "bg-amber-50 dark:bg-amber-500/10", border: "border-amber-100 dark:border-amber-500/20" },
        { shadow: "hover:shadow-emerald-500/10", text: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-500/10", border: "border-emerald-100 dark:border-emerald-500/20" },
        { shadow: "hover:shadow-rose-500/10", text: "text-rose-600", bg: "bg-rose-50 dark:bg-rose-500/10", border: "border-rose-100 dark:border-rose-500/20" },
        { shadow: "hover:shadow-cyan-500/10", text: "text-cyan-600", bg: "bg-cyan-50 dark:bg-cyan-500/10", border: "border-cyan-100 dark:border-cyan-500/20" },
    ];

    return (
        <section className="relative w-full lg:px-6 md:px-2 px-0 py-24 md:py-32 overflow-hidden">
            {/* Soft Ambient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-slate-50/50 dark:bg-transparent -z-30" />

            <div className="absolute top-40 -left-20 size-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-40 -right-20 size-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10 opacity-60" />

            {/* Header Section */}
            <div className={`flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10 border-b border-slate-200 dark:border-white/5 pb-12 ${isRTL ? 'md:flex-row-reverse text-right' : 'text-left'}`}>
                <div className="space-y-5">
                    <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="w-12 h-[2px] bg-primary rounded-full" />
                        <span className="text-primary font-black tracking-widest text-xs uppercase">
                            {isRTL ? 'تخصص‌های من' : 'MY EXPERTISE'}
                        </span>
                    </div>
                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9]">
                        {local.skillText}
                    </h2>
                </div>
                <p className="text-slate-500 dark:text-slate-400 lg:text-lg md:text-md text-sm max-w-sm font-medium leading-relaxed">
                    {isRTL
                        ? 'تکنولوژی‌هایی که با آن‌ها جادو می‌کنم و ایده‌ها را به واقعیت تبدیل می‌کنم.'
                        : 'The technologies I use to craft digital magic and turn ideas into reality.'}
                </p>
            </div>

            {/* Skills Grid - Super Clean Style */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7">
                {skills.map((item, index) => {
                    const variant = colorVariants[index % colorVariants.length];

                    return (
                        <div
                            key={index}
                            className={`group relative bg-white dark:bg-white/[0.02] border border-white dark:border-white/10 rounded-[45px] p-12 
                            transition-all duration-500 hover:-translate-y-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] dark:shadow-none ${variant.shadow}`}
                        >
                            {/* Card Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50 dark:to-transparent rounded-[45px] -z-10`} />

                            {/* Icon Container */}
                            <div className="relative mb-10">
                                <div className={`size-20 rounded-[30px] ${variant.bg} ${variant.border} border flex items-center justify-center ${variant.text} shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                    <item.icon className="size-10" />
                                </div>
                                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                                    <LuSparkles className={`size-6 ${variant.text}`} />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                                <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                                    {language === 'en' ? item.enTitle : item.faTitle}
                                </h3>

                                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                    <div className="flex-1 h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                                        <div className={`h-full w-4/5 bg-current ${variant.text} rounded-full`} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        {isRTL ? 'پیشرفته' : 'ADVANCED'}
                                    </span>
                                </div>
                            </div>

                            {/* Footer Link */}
                            <div className={`mt-12 pt-8 border-t border-slate-50 dark:border-white/5 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <span className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest group-hover:text-primary transition-colors">
                                    {isRTL ? 'جزییات فنی' : 'Tech Details'}
                                </span>
                                <div
                                    className={`size-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300`}
                                    onClick={() => {
                                        setDialogContent({
                                            icon: item.icon,
                                            title: language === 'en' ? item.enTitle : item.faTitle,
                                            description: language === 'en' ? item.enDescription : item.faDescription,
                                            variant: variant,
                                        })
                                        setIsShowDetailModal(true);
                                    }}
                                >
                                    <LuArrowUpRight className="size-5" />
                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>
            {isShowDetailModal && (
                <dialog className={`modal ${isShowDetailModal ? "modal-open" : ""} px-4`}>
                    <div
                        className={`
        modal-box 
        relative
        max-w-3xl w-full 
        rounded-3xl 
        bg-base-100/70 dark:bg-base-300/70
        backdrop-blur-xl md:backdrop-blur-2xl   /* بلور قوی‌تر روی دسکتاپ */
        border border-base-content/10 dark:border-base-content/15
        shadow-2xl shadow-black/25 dark:shadow-black/40
      `}
                    >
                        <div className="flex items-center w-full justify-end">
                            <button
                                className={`
            btn btn-circle btn-md
            bg-base-100/40 dark:bg-base-300/40
            backdrop-blur-xl
            border border-base-content/15
            text-base-content/80 hover:text-base-content
            hover:bg-base-100/60 dark:hover:bg-base-300/60
            hover:border-base-content/25 hover:shadow-xl
            transition-all duration-300 ease-out
            active:scale-95
            shadow-md
          `}
                                aria-label="بستن دیالوگ"
                                onClick={() => {
                                    setIsShowDetailModal(false);
                                    setDialogContent({
                                        icon: null,
                                        title: '',
                                        description: '',
                                        variant: null,
                                    })
                                }}
                            >
                                <FaX className="size-4" />
                            </button>

                        </div>
                        <div
                            className={`
          px-6 sm:px-10 py-12 sm:py-14
          max-h-[80vh]               /* حداکثر ارتفاع نسبت به صفحه */
          overflow-y-auto            /* اسکرول عمودی فعال */
          scrollbar-thin             /* اگر daisyUI scrollbar داری */
          scrollbar-thumb-base-content/30
          scrollbar-track-transparent
          
        `}
                        >
                            <h3 className="font-bold text-2xl sm:text-3xl flex items-center gap-4 mb-6">
                                <div
                                    className={`
              size-16 sm:size-20 
              rounded-2xl 
              ${dialogContent.variant.bg} 
              border ${dialogContent.variant.border} 
              flex items-center justify-center 
              shadow-lg shadow-black/20 dark:shadow-black/30
              ${dialogContent.variant.text}
              transition-transform duration-400 hover:scale-105
            `}
                                >
                                    <dialogContent.icon className="size-9 sm:size-11" />
                                </div>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-base-content via-base-content to-base-content/70">
                                    {dialogContent.title}
                                </span>
                            </h3>

                            <p className="text-base-content/85 leading-relaxed text-base sm:text-lg whitespace-pre-wrap">
                                {dialogContent.description}
                            </p>

                            {/* اگر محتوای بیشتری داری، اینجا اضافه کن - اسکرول می‌شه */}
                        </div>
                    </div>
                </dialog>
            )}
        </section>
    );
};

export default LandingSkillsComponent;