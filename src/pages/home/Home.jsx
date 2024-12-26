import PlatformStats from "../../shared/PlatformStats";
import Banner from "./Banner";
import FeaturedServices from "./FeaturedServices";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedServices></FeaturedServices>
            <PlatformStats></PlatformStats>
        </div>
    );
};

export default Home;