import useAuth from "../../hooks/useAuth";
import PlatformStats from "../../shared/PlatformStats";
import Banner from "./Banner";
import FeaturedServices from "./FeaturedServices";


const Home = () => {
    const { user } = useAuth();

    return (
        <div>
            <Banner></Banner>
            <FeaturedServices></FeaturedServices>
            {user &&
                <PlatformStats></PlatformStats>}
        </div>
    );
};

export default Home;