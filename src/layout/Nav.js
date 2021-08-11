import navlist from "./data/navlist";
import { Link as LinkRouter } from "react-router-dom";

import styles from "./layout.module.scss";

function Nav(props) {
  const { location } = props;
  const NavList = navlist(location);
  return (
    <nav className={styles.nav}>
      <LinkRouter to="/">
        <div className={styles.logo}></div>
      </LinkRouter>
      <div className={styles.menu}></div>
      <ul>
        {NavList.map((item, index) => (
          <li onClick={item.onClick} key={index}>
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
