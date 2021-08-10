import navlist from "./data/navlist";
import { Link } from "react-router-dom";
function Nav(props) {
  const { location } = props;
  const NavList = navlist(location);
  return (
    <nav>
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
