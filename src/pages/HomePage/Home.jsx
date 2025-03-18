import Hero from '../../components/Hero/Hero';
import css from "./Home.module.css";
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import AboutUs from '../../components/AboutUs/AboutUs';


function Home() {


    return (
        <>
            <Hero />
            <FeaturesSection />
            <AboutUs />
        </>
    );
}

export default Home;
