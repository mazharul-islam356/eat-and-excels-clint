import { FaWhatsapp } from "react-icons/fa";
import Membership from "../../Membership&Payment/MemberShip/Membership";
import Banner from "./Banner/Banner";
import Section01 from "./ExtraPages/Section01";
import Section02 from "./ExtraPages/Section02";
import { Link } from "react-router-dom";


const Home = () => {

    return (

        <div>

<Link  to="https://wa.me/+8801866186426">
           <FaWhatsapp className="text-6xl text-[#48c857] fixed ms-[83rem] mt-[31rem]"></FaWhatsapp>
            </Link>
            
            <Banner></Banner>
            <Section01></Section01>
            <Section02></Section02>
            <Membership></Membership>

        </div>
    );
};

export default Home;