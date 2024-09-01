import Navbar from "../components/Navbar";
import Hero from '../components/Hero'
import aboutimg from "../backimg/aboutimg.jpg"
import ServiceSection from "../components/ServicesSection";

function MemoriesPage(){
    return(<>
        <Navbar/>
        <Hero
        cName="hero-mid"
        Heroimg={aboutimg}
        title="Services"
        
        btntext=""
        url="/"
        btnclass="hide"
        />
        <ServiceSection/>
    </>
        );

}

export default MemoriesPage;