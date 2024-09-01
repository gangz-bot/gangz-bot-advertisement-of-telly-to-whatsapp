import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Purpose from '../components/Purpose'
import Footer from '../components/Footer';


function HomePage(){
    return(<>
        <Navbar/>
        
        <Hero
        cName="hero"
        Heroimg="https://cdn.pixabay.com/photo/2019/10/18/19/51/financial-4560047_1280.jpg"
        title="generate your invoice here"
        text="#Make Every Day Simple"
        btntext="Generate Now"
        url="/http://localhost:3001/"
        btnclass="show"
        />
        <Purpose/>
        <Footer/>
        </>
        );
        
}

export default HomePage;