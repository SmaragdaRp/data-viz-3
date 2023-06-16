import {Link} from "react-router-dom";
import logo from "../../resources/hs.png"

const Header = ()=> (
    <header className="flex justify-items-stretch items-center bg-hspetrol-light shadow h-20 max-h-20 gap-28">
        <div className="w-28 flex pl-6 pr-3">
            <img className="Logo" src={logo}/>
        </div>
        <div className="flex flex-grow justify-self-auto p-2 gap-4">
            <div className="text-xl">
                WSP for
            </div>
            <button className="bg-gray-200 h-8 w-12">
                Ship
            </button>
        </div>


        <div className="flex flex-grow p-2 gap-6 justify-end items-center pr-16">
            <div className="text-lg">
                Welcome Admin1
            </div>
            <nav className="text-white hover:text-blue-800 transition-colors duration-100">
                <Link to={"error"}>Profile</Link>
            </nav>
        </div>
    </header>
)

export default Header;