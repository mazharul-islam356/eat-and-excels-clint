import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";


const LayOut = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default LayOut;