import Navbar from "../components/Navbar";
import Hero from '../components/Hero'
import aboutimg from "../backimg/clientsimg.jpg"
import Footer from "../components/Footer";

function UpcomingTreks(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        Heroimg={aboutimg}
        title="Clients"
        
        btntext=""
        url="/"
        btnclass="hide"
        />

        <Footer/>
        </>
    );

}

export default UpcomingTreks;