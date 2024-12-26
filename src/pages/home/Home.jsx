import useAuth from "../../hooks/useAuth";
import PlatformStats from "../../shared/PlatformStats";
import MeetOurPartners from "../meetOurPartners/MeetOurPartners";
import Banner from "./Banner";
import CallToAction from "./CallToAction";
import FeaturedServices from "./FeaturedServices";
import HowItWorks from "./HowItWorks";


const Home = () => {
    const { user } = useAuth();

    return (
        <div className="bg-blue-100">
            <Banner></Banner>
            <FeaturedServices></FeaturedServices>
            <MeetOurPartners></MeetOurPartners>
            <HowItWorks></HowItWorks>
            <CallToAction></CallToAction>
            {user &&
                <PlatformStats></PlatformStats>
            }
        </div>
    );
};

export default Home;