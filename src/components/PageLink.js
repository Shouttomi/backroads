const PageLink = ({link ,itemclass}) => {
  return (
    <li key={link.id}>
      <a href={link.href} className={itemclass} rel="noreferrer">
        {link.text}
      </a>
    </li>
  );
};
export default PageLink;
