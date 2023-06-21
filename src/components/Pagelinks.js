import { pagelinks } from "../data";
import PageLink from "./PageLink";

const Pagelinks = ({parentclass, itemclass}) => {
  return (
    <ul className={parentclass} id="nav-links">
      {pagelinks.map((link) => {
        return (

            <PageLink key = {link.id} link ={link} itemclass = {itemclass}/>
          /* <li key={link.id}>
            <a href={link.href} className={itemclass} rel="noreferrer">
              {link.text}
            </a>
          </li> */
        );
      })}
    </ul>
  );
};
export default Pagelinks;
