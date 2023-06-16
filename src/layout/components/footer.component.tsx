import eufund from "../../resources/eufund.png"

const Footer = ()=> (
    <footer className="bg-hspetrol-footergray text-blue-800 shadow py-4">
        <div className="container flex flex-col sm:flex-row gap-4 justify-between sm:items-center">
            <div className="container flex flex-col max-w-5xl">
                <div className="text-2xl">
                    Disclaimer
                </div>
                <div className="text-sm ">
                    Funded by the European Union. Views and opinions expressed are however those of the authors
                    only and do not necessarily reflect those of the European Union or the European Climate,
                    Infrastructure and Environment Executive Agency (CINEA). Neither the European Union nor
                    the granting authority can be held responsible for them.
                </div>
            </div>
            <div className="max-w-xs">
                <img className="EUfunded" src={eufund}/>
            </div>
        </div>
    </footer>
)

export default Footer;