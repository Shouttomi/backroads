import { sociallinks } from "../data";
import Footerlink from "./Footerlink";
import Pagelinks from "./Pagelinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <Pagelinks parentclass="footer-links" itemclass="footer-link" />
      {/* <ul className="footer-links">
        {pagelinks.map((link) => {
          const { id, href, text } = link;

          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul> */}

      <ul className="footer-icons">
        {sociallinks.map((link) => {
          

          return (

            <Footerlink key={link.id} {...link} itemclass = 'footer-icon'/>
            /* <li key={id}>
              <a
                href={href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={icon}></i>
              </a>
            </li> */
          );
        })}
      </ul>

      {/*  <ul className="footer-icons">
        {sociallinks.map((link) => {
          const { id, href, icon } = link;

          return (
            <li key={id}>
              <a href={href} target="_blank" className="footer-icon" rel ="noreferrer">
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul> */}
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
