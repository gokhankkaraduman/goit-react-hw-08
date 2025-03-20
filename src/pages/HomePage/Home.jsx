import Hero from '../../components/Hero/Hero';
import css from "./Home.module.css";
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import AboutUs from '../../components/AboutUs/AboutUs';
import { selectIsLoggedIn, selectIsLoading } from '../../redux/Auth/selectors';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading/Loading'

function Home() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isLoading = useSelector(selectIsLoading);
    

    return (
        <>{isLoggedIn & isLoading ? (<Loading />) :
            <div>
                <Hero />
                <FeaturesSection />
                <AboutUs />
            </div>}
        </>
    );
}

export default Home;
