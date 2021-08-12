import Nav from "./Nav";
import { withRouter } from "react-router-dom";
import styles from "./layout.module.scss";
import Footer from "./Footer";
function Layout(props) {
  const { location } = props;
  return (
    <main>
      <header>
        <Nav location={location} />
      </header>
      <section className={styles.content}>{props.children}</section>
      <Footer location={location} />
    </main>
  );
}

export default withRouter(Layout);
