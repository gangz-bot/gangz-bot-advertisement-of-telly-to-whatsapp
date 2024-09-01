import "./ServiceSection.css"
import Footer from "./Footer";

function ServiceSection(){
    return(
        <>
        
        <div className="About">
            <h1>About Invoicer</h1>
            </div> 
            <div className="AboutText">
                <p>Invoicer is an Invoicing application designed and built by Thomas Sankara, whose main purpose is to - as the name suggests - create and send invoices to clients, because this is something I've struggled with before. I hope it helps you as well.</p><br/>
                <p>We value your time. Our feature-rich platform includes time-saving elements such as recurring invoices, client profiles, and itemized lists, streamlining your invoicing workflow</p>
                <p>We prioritize simplicity without compromising functionality. Our intuitive interface allows you to create professional invoices with ease, even if you're new to the world of invoicing.</p>
                <p>Please note that even though most of the functionality is done, there are still some things to add such as saving invoices, and improving the Login and Logout experience. Thank you as you bear with me.</p>
            </div>

            <Footer/>
             



            
           
        
        </>
    );
}

export default ServiceSection;