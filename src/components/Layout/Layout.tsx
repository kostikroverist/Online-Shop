import Header from '../Header/Header'
import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <>
            <Header />
            <main className="p-11">
                <Outlet />
            </main>

        </>
    )
}

export default Layout
