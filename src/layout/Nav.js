import { useState } from "react";
import navlist from "../data/navlist";
import { Link as LinkRouter } from "react-router-dom";

import styles from "./layout.module.scss";

function Nav(props) {
  const [open, setOpen] = useState(false);
  const handleMenuClick = () => {
    setOpen(!open);
  };
  const { location } = props;
  const NavList = navlist(location);
  return (
    <nav className={styles.nav}>
      <LinkRouter to="/">
        <div className={styles.logo}></div>
      </LinkRouter>
      <div
        className={open ? styles.menuClose : styles.menuOpen}
        onClick={handleMenuClick}
      ></div>
      <ul
        className={`${styles.menuMobile} ${open ? styles.show : styles.hide}`}
      >
        {NavList.map((item, index) => (
          <li key={index}>
            <LinkRouter
              to={item.link}
              className={`${item.cta ? styles.cta : ""} ${
                item.active ? styles.activeLink : ""
              }`}
            >
              {item.text}
            </LinkRouter>
          </li>
        ))}
      </ul>
      <ul className={styles.menuLarge}>
        {NavList.map((item, index) => (
          <li key={index}>
            <LinkRouter
              to={item.link}
              className={`${item.cta ? styles.cta : ""} ${
                item.active ? styles.activeLink : ""
              }`}
            >
              {item.text}
            </LinkRouter>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Nav;
