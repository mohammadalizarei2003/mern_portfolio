import { Outlet } from "react-router-dom"
import { LandingHeaderComponent } from "../components"

const LandingLayout = () => {
    return <main className="max-w-5xl mx-auto p-2 relative">
        <LandingHeaderComponent />
        <section className="p-5">
            <Outlet />
            <footer className="mt-40">
                <div className="divider"></div>
                <p className="text-lg">تمام حق و حقوق این وبسایت به محمدعلی زارعی تعلق دارد</p>
            </footer>
        </section>
    </main>
}

export default LandingLayout