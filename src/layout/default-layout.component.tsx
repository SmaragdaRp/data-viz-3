import {Outlet} from "react-router-dom";
import Footer from "./components/footer.component";
import Header from "./components/header.component"
import Sidebar from "./components/sidebar.component";

const DefaultLayout = ()=> {
    return (
        <>
            <Header/>
            <Sidebar/>
            <div className="main-wrapper">
                <main>
                    <Outlet/>
                    Outlet2
                </main>
            </div>
            <Footer/>
        </>

    )
}

export default DefaultLayout;