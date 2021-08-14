import Layout from "../../layout";
import styles from "../pagestyles/portfolio.module.scss";
function Portfolio() {
  return (
    <Layout>
      <section className={styles.intro}>
        <h1>My Projects</h1>
        <p>
          These are some of the projects, I have built over the years with
          interesting stories behind them
        </p>
      </section>

      <section className={styles.projectList}>
        <div className={styles.project}>
          <div className={styles.highlightImg}></div>
          <div className={styles.textContent}>
            <div className={styles.titles}>
              <h2>Project Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et.
              </p>
            </div>
            <ul>
              <li>Figma</li>
              <li>Figma</li>
            </ul>
            <button className={styles.readMore}>Read More</button>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.highlightImg}></div>
          <div className={styles.textContent}>
            <div className={styles.titles}>
              <h2>Project Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et.
              </p>
            </div>
            <ul>
              <li>Figma</li>
              <li>Figma</li>
            </ul>
            <button className={styles.readMore}>Read More</button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Portfolio;
