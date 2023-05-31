import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Sidemenu from "../pages/Sidemenu";
const Layout = () => {
    return (
        <div>
            
            <div className="flex flex-row flex-1">
                <div className="w-1/4 bg-gray-900">
                    <Sidemenu />
                </div>
            <div className="flex-1">
            
            <Outlet />

            </div>
            </div>
            
        </div>
    )
}
export default Layout