

const Footerlink = ({  href, icon, itemclass }) => {
  return (
    <li >
          <a href={href} target="_blank" className={itemclass} rel ="noreferrer">
            <i className={icon}></i>
          </a>
        </li>
  )
}
export default Footerlink