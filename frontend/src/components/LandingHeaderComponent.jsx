import { LuMoon, LuSun } from "react-icons/lu";
import { useThemeStore } from "../stores/useThemeStore";

const LandingHeaderComponent = () => {
    const { theme, themes, toggleThemeMode } = useThemeStore();
    return <header className="px-5 py-2 bg-base-200/60 rounded-2xl sticky top-2 left-0 bottom-0 border border-primary/50 shadow-lg backdrop-blur-md flex items-center justify-between z-10">
        <h1 className="text-xl font-semibold">Mr.<span className="text-primary">Zarei</span></h1>
        <div className="flex items-center justify-center gap-4">
            <button className='btn btn-md btn-circle bg-base-100 border-0 outline-0' onClick={() => toggleThemeMode()}>
                {theme === themes.nord ? <LuMoon className='size-4' /> : <LuSun className='size-4' />}
            </button>
        </div>
    </header>
}

export default LandingHeaderComponent