import {Link, Outlet} from "react-router-dom";
import Footer from "./components/footer.component";
import Header from "./components/header.component";
import Sidebar from "./components/sidebar.component";

const AppLayout = ()=> {
    return (
        <>
            <Header/>
            <Sidebar/>
            <div className="main-wrapper">
                <aside>
                    <nav>
                        <Link to={"profile"}>Profile</Link>
                    </nav>
                </aside>
                <main>
                    <Outlet/>
                </main>
            </div>

            <Footer/>
        </>

    )
}

export default AppLayout;