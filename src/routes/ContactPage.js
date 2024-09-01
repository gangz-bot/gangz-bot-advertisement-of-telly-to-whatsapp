import Navbar from "../components/Navbar";
import Hero from '../components/Hero'
import aboutimg from "../backimg/contactimg.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function ContactPage(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-contact"
        Heroimg={aboutimg}
        title="Contact Us"
        
        btntext=""
        url="/"
        btnclass="hide"
        />
        <ContactForm/>

        <Footer/>
        </>
    );

}

export default ContactPage;

