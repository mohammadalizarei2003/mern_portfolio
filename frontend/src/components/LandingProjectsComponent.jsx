import { useEffect, useRef, useState } from "react";
import { useLanguageStore } from "../stores/useLanguageStore";
import { localizationEnTexts, localizationFaTexts } from "../utils/constance";
import { LuSparkles, LuArrowUpRight, LuFolder } from "react-icons/lu";
import { useScrollStore } from "../stores/useScrollStore";

const LandingProjectsComponent = () => {
    const { language } = useLanguageStore();
    const [local, setLocal] = useState({});
    const [activeFilter, setActiveFilter] = useState("all");
    const sectionRef = useRef(null);
    const { scrollToProjects, setScrollToProjects } = useScrollStore();

    useEffect(() => {
        setLocal(language === 'en' ? localizationEnTexts : localizationFaTexts);
    }, [language]);

    useEffect(() => {
        if (scrollToProjects && sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
            setScrollToProjects(false);
        }
    }, [scrollToProjects, setScrollToProjects]);



    const isRTL = language === 'fa';

    const projects = [
        {
            id: 1,
            title: isRTL ? "پلتفرم فروشگاهی" : "E-commerce Platform",
            category: "web",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
            description: isRTL ? "تجربه خرید آنلاین مدرن با ری‌اکت" : "Modern online shopping experience with React",
            tags: ["React", "Node.js", "MongoDB"]
        },
        {
            id: 2,
            title: isRTL ? "اپلیکیشن بانکداری" : "Mobile Banking App",
            category: "mobile",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop",
            description: isRTL ? "مدیریت مالی هوشمند و سریع" : "Smart and fast financial management",
            tags: ["React Native", "Firebase"]
        },
        {
            id: 3,
            title: isRTL ? "سایت نمونه‌کار" : "Portfolio Website",
            category: "web",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop",
            description: isRTL ? "طراحی مینیمال با پرفورمنس بالا" : "Minimal design with high performance",
            tags: ["Next.js", "Tailwind"]
        },
        {
            id: 4,
            title: isRTL ? "ردیاب سلامتی" : "Fitness Tracker",
            category: "mobile",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
            description: isRTL ? "مانیتورینگ فعالیت‌های روزانه" : "Daily activity monitoring",
            tags: ["Flutter", "Firebase"]
        }
    ];

    const filters = [
        { id: "all", label: isRTL ? "همه" : "All" },
        { id: "web", label: isRTL ? "وب" : "Web" },
        { id: "mobile", label: isRTL ? "موبایل" : "Mobile" }
    ];

    const filteredProjects = activeFilter === "all"
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section ref={sectionRef} className="relative max-w-7xl mx-auto lg:px-6 md:px-2 px-1 py-24 overflow-hidden bg-transparent" dir={isRTL ? 'rtl' : 'ltr'}>

            {/* Background Orbs - Softer for Light Mode */}
            <div className="absolute top-20 -left-20 size-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-20 -right-20 size-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] -z-10" />

            {/* Header Section */}
            <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-slate-200 dark:border-white/5 pb-10`}>
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <LuFolder className="text-primary size-5" />
                        <span className="text-primary font-black tracking-widest text-xs uppercase">
                            {isRTL ? 'پروژه‌های من' : 'MY PORTFOLIO'}
                        </span>
                    </div>
                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-black text-slate-900 dark:text-white tracking-tighter">
                        {local.projectText || (isRTL ? 'آثار اخیر' : 'Recent Work')}
                    </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 lg:text-lg md:text-md text-sm max-w-sm font-bold leading-relaxed">
                    {isRTL
                        ? 'نمونه‌ای از چالش‌هایی که به راهکارهای دیجیتال تبدیل شده‌اند.'
                        : 'A showcase of challenges turned into elegant digital solutions.'}
                </p>
            </div>

            {/* Premium Filter Tabs */}
            <div className="flex mb-12 overflow-x-auto pb-4 no-scrollbar">
                <div className="bg-slate-100 dark:bg-white/5 p-1.5 rounded-[22px] flex gap-1 border border-slate-200 dark:border-white/10">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-8 py-2.5 text-sm font-black rounded-[18px] transition-all duration-500 ${activeFilter === filter.id
                                ? 'bg-white dark:bg-primary text-primary dark:text-white shadow-md dark:shadow-primary/20 scale-105'
                                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-10">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="group relative bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-[40px] overflow-hidden transition-all duration-700 hover:-translate-y-3 shadow-xl shadow-slate-200/50 dark:shadow-none"
                    >
                        {/* Image Wrap */}
                        <div className="relative h-72 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Category Badge */}
                            <div className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} bg-white/90 dark:bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-2xl border border-white/20 shadow-sm`}>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white">
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="lg:p-10 md:p-6 p-4">
                            <h3 className="lg:text-3xl md:text-2xl text-xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 font-bold mb-6 line-clamp-2 lg:text-lg md:text-md text-sm">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-4 py-1.5 text-[10px] font-black bg-slate-50 dark:bg-white/5 text-primary border border-primary/10 dark:border-white/10 rounded-xl uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between border-t border-slate-100 dark:border-white/5 pt-6">
                                <span className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                                    {isRTL ? 'مشاهده جزییات' : 'View Case Study'}
                                </span>
                                <div className="size-10 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 group-hover:bg-primary group-hover:text-white transition-all">
                                    <LuArrowUpRight className={`size-5 ${isRTL ? 'group-hover:-rotate-45' : ''} transition-transform`} />
                                </div>
                            </div>
                        </div>

                        {/* Hover Sparkle */}
                        <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-700">
                            <LuSparkles className="size-6 text-white drop-shadow-lg" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Button */}
            <div className="flex justify-center mt-20">
                <button className="group px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-3xl font-black text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30 flex items-center gap-4">
                    <span>{isRTL ? 'همه پروژه‌ها' : 'Explore All'}</span>
                    <LuArrowUpRight className={`size-5 ${isRTL ? 'group-hover:-rotate-45' : ''}`} />
                </button>
            </div>
        </section>
    );
};

export default LandingProjectsComponent;