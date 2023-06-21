import { sociallinks } from "../data";

import logo from "../images/logo.svg";
import Footerlink from "./Footerlink";
import Pagelinks from "./Pagelinks";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <Pagelinks parentclass='nav-links' itemclass='nav-link'/>
        

        <ul className="nav-icons">

            {sociallinks.map((link)=>{

             
             
             return( 
              <Footerlink key = {link.id} {...link} itemclass = 'nav-icon'/>
             );


            })}
        
         
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
