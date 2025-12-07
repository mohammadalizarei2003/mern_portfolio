import { useEffect, useState } from 'react'
import { LuLinkedin, LuMail, LuPhone } from 'react-icons/lu'
import { FaFlutter } from 'react-icons/fa6'
import { localizationEnTexts, localizationFaTexts, skills } from '../utils/constance'
import { SiChromewebstore } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { TbUxCircle } from 'react-icons/tb';
import { useLanguageStore } from '../stores/useLanguageStore';



const LandingPage = () => {
    const { language } = useLanguageStore();
    const [local, setLocal] = useState({});

    useEffect(() => {
        setLocal(language === 'en' ? localizationEnTexts : localizationFaTexts);
    }, [language]);

    return <section className='space-y-40'>
        <div className='flex flex-col items-center justify-center gap-10 mt-20'>
            <div className="avatar relative flex items-center justify-center">
                <span className='absolute flex size-20 bg-primary duration-1000 animate-ping mask mask-squircle'></span>
                <span className='absolute flex size-22 bg-secondary duration-[2000] animate-ping mask mask-squircle'></span>
                <div className="mask mask-squircle size-36">
                    <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
                </div>
            </div>
            <div className='max-w-2xl w-full mx-auto space-y-8'>
                <h1 className='text-4xl font-semibold text-center'>{local.welcomeMessage}</h1>
                <h3 className='text-xl font-normal'>{local.jobTitle}</h3>
                <p className='text-md text-justify'>{local.jobDescription}</p>

                <div className='flex items-center justify-center gap-4'>
                    <button className='btn btn-lg btn-circle outline-0 border border-primary/20'>
                        <LuPhone className='size-5' />
                    </button>
                    <button className='btn btn-lg btn-circle outline-0 border border-primary/20'>
                        <LuMail className='size-5' />
                    </button>
                    <button className='btn btn-lg btn-circle outline-0 border border-primary/20'>
                        <LuLinkedin className='size-5' />
                    </button>
                </div>

                <div className='grid lg:grid-cols-3 grid-cols-2 gap-2 mt-20'>
                    <div className='w-full h-48 bg-base-200 rounded-2xl border border-primary/20 flex flex-col items-center justify-center gap-y-8 hover:border-primary/50 transition-all hover:shadow-2xl cursor-pointer group'>
                        <div className='size-14 flex items-center justify-center mask mask-squircle bg-primary/20 group-hover:scale-110 transition-all'>
                            <SiChromewebstore className='size-8' />
                        </div>
                        <h2 className='text-md font-bold'>{local.guideCard?.[0]}</h2>
                    </div>
                    <div className='w-full h-48 bg-base-200 rounded-2xl border border-primary/20 flex flex-col items-center justify-center gap-y-8 hover:border-primary/50 transition-all hover:shadow-2xl group cursor-pointer'>
                        <div className='size-14 flex items-center justify-center mask mask-squircle bg-primary/20 group-hover:scale-110 transition-all'>
                            <FaMobileAlt className='size-8' />
                        </div>
                        <h2 className='text-md font-bold'>{local.guideCard?.[1]}</h2>
                    </div>
                    <div className='w-full h-48 bg-base-200 rounded-2xl border border-primary/20 flex flex-col items-center justify-center gap-y-8 hover:border-primary/50 transition-all hover:shadow-2xl group cursor-pointer lg:col-span-1 col-span-2'>
                        <div className='size-14 flex items-center justify-center mask mask-squircle bg-primary/20 group-hover:scale-110 transition-all'>
                            <TbUxCircle className='size-8' />
                        </div>
                        <h2 className='text-md font-bold'>{local.guideCard?.[2]}</h2>
                    </div>
                </div>


            </div>
        </div>

        {/* skills */}
        <div>
            <div className="divider text-xl font-bold">{local.skillText}</div>
            <div className='grid lg:grid-cols-3 grid-cols-2 gap-2 max-w-2xl w-full mx-auto my-10'>
                {skills.map((item, index) => {
                    return <article key={index} className='bg-base-200 p-5 border border-primary/20 rounded-2xl flex flex-col items-center gap-y-4 group hover:shadow-2xl hover:border-primary/50 cursor-pointer transition-all'>
                        <div className='size-16 mask mask-squircle bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-all'>
                            <item.icon className='size-10' />
                        </div>
                        <h2 className='text-sm font-bold'>{language === 'en' ? item.enTitle : item.faTitle}</h2>
                    </article>
                })}

            </div>
        </div>
        <div>
            <div className="divider text-xl font-bold">{local.projectText}</div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-2 max-w-2xl w-full mx-auto my-10'>
                <div className='lg:col-span-2 md:col-span-2 sm:col-span-2 col-span-1 flex items-center justify-center mb-10'>
                    <ul className="menu menu-horizontal bg-base-200 rounded-2xl space-x-2">
                        <li><a className='text-md font-bold px-5 rounded-2xl'>{local.projectFilter?.[0]}</a></li>
                        <li><a className='text-md font-bold px-5 rounded-2xl'>{local.projectFilter?.[1]}</a></li>
                        <li><a className='text-md font-bold px-5 rounded-2xl'>{local.projectFilter?.[2]}</a></li>
                        <li><a className='text-md font-bold px-5 rounded-2xl'>{local.projectFilter?.[3]}</a></li>
                    </ul>
                </div>
                {skills.map((item, index) => {
                    return <article key={index} className='bg-base-200 p-5 border border-primary/20 rounded-2xl flex flex-col items-center gap-y-4 group cursor-pointer hover:shadow-2xl transition-all hover:border-primary/50'>
                        <div className='w-full h-48 rounded-xl overflow-hidden'>
                            <img src="https://img.freepik.com/free-photo/online-blog_53876-123696.jpg?semt=ais_hybrid&w=740&q=80" alt="" className='w-full rounded-xl h-full object-cover group-hover:scale-110 transition-all' />
                        </div>
                        <h2 className='text-sm font-bold'>{item.title}</h2>
                    </article>
                })}

            </div>
        </div>

    </section>
}

export default LandingPage