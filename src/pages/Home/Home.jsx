import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import Membership from "../../Membership&Payment/MemberShip/Membership";
import Banner from "./Banner/Banner";
import Section01 from "./ExtraPages/Section01";
import Section02 from "./ExtraPages/Section02";
import { Link } from "react-router-dom";


const Home = () => {

    return (

        <div>

<Link  to="https://www.messenger.com/t/rifat3569">
           <FaFacebookMessenger className="text-5xl text-[#006AFF] fixed ms-[82rem] mt-[31rem]"></FaFacebookMessenger>
            </Link>

            <Banner></Banner>
            <Section01></Section01>
            <Section02></Section02>
            <Membership></Membership>

        </div>
    );
};

export default Home;