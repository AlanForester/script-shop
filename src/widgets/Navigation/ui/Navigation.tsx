import s from "../styles/Navigation.module.scss";

const Navigation = () => {
  // const getLinkClassname: NavLinkProps["className"] = ({ isActive }) => {
  //   return isActive ? s.navigation__link_active : s.navigation__link;
  // };

  return (
    <nav className={s.navigation}>
      nav
      {/*<NavLink to={ROUTES.PRODUCTS} className={getLinkClassname}>*/}
      {/*  Products*/}
      {/*</NavLink>*/}
      {/*<NavLink to={ROUTES.OFFERS} className={getLinkClassname}>*/}
      {/*  Hot Offers*/}
      {/*</NavLink>*/}
      {/*<NavLink to={ROUTES.ABOUT} className={getLinkClassname}>*/}
      {/*  About Us*/}
      {/*</NavLink>*/}
      {/*<NavLink to={ROUTES.CONTACTS} className={getLinkClassname}>*/}
      {/*  Contacts*/}
      {/*</NavLink>*/}
    </nav>
  );
};

export default Navigation;
