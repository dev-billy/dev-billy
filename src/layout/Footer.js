import styles from "./layout.module.scss";
import navlist from "./data/navlist";
import { Link as LinkRouter } from "react-router-dom";
function Footer(props) {
  const { location } = props;
  const NavList = navlist(location);
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <LinkRouter to="/">
          <div className={styles.logo}></div>
        </LinkRouter>
        <ul>
          {NavList.map((item, index) =>
            !item.cta ? (
              <li key={index}>
                <LinkRouter to={item.link}>{item.text}</LinkRouter>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
      <div className={styles.socials}>
        <a href="https://github.com/dev-billy">
          <div className={styles.github}></div>
        </a>
        <a href="https://twitter.com/itsdevbilly">
          <div className={styles.twitter}></div>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
