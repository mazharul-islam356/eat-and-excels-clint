import Membership from "../../Membership&Payment/MemberShip/Membership";
import Banner from "./Banner/Banner";
import Section01 from "./ExtraPages/Section01";
import Section02 from "./ExtraPages/Section02";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Section01></Section01>
            <Section02></Section02>
            <Membership></Membership>
        </div>
    );
};

export default Home;