import Nav from "./Nav";
import { withRouter } from "react-router-dom";

function Layout(props) {
  const { location } = props;
  return (
    <main>
      <section>
        <Nav location={location} />
      </section>
      <section>{props.children}</section>
    </main>
  );
}

export default withRouter(Layout);
