import "./Footer.css"

import { Link } from 'react-router-dom';
import { Menuitems } from './Menuitems';


const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>trekOtour</h1>
                    <p>Easily create, download and print invoices for your clients. No more unsurety, just Invoicer It!</p>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <ul className='nav-menu'>
          {Menuitems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className=''></i>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
                </div>
            
            </div>
        </div>
    )
}

export default Footer;