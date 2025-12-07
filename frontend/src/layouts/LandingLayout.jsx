import { Outlet } from "react-router-dom"
import { LandingHeaderComponent } from "../components"

const LandingLayout = () => {
    return <main className="max-w-5xl mx-auto p-2 relative">
        <LandingHeaderComponent />
        <section className="p-5">
            <Outlet />
        </section>
    </main>
}

export default LandingLayout