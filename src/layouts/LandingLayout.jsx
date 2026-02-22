import { Outlet } from "react-router-dom"
import { LandingFooterComponent, LandingHeaderComponent } from "../components"

const LandingLayout = () => {
    return <main className="max-w-6xl mx-auto p-2 relative">
        <LandingHeaderComponent />
        <section className="px-5">
            <Outlet />
            <LandingFooterComponent />
        </section>
    </main>
}

export default LandingLayout