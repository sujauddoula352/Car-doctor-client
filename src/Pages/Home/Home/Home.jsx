import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Service from "../Services/Service";

const Home = () => {
    return (
        <div>
            <Banner />
            <About/>
            <Service/>
            <Contact/>
        </div>
    );
};

export default Home;