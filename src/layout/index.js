import Nav from "./Nav";
import { withRouter } from "react-router-dom";
import styles from "./layout.module.scss";
function Layout(props) {
  const { location } = props;
  return (
    <main>
      <section>
        <Nav location={location} />
      </section>
      <section className={styles.content}>{props.children}</section>
    </main>
  );
}

export default withRouter(Layout);
