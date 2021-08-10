import navlist from "./data/navlist";
import { Link } from "react-router-dom";
import styles from "./layout.module.scss";

function Nav(props) {
  const { location } = props;
  const NavList = navlist(location);
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}></div>
      <div className={styles.menu}></div>
      <ul>
        {NavList.map((item, index) => (
          <li onClick={item.onClick} key={index}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Nav;
