import Layout from "../../layout";
import styles from "../pagestyles/portfolio.module.scss";
import projectList from "../../data/projects";
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
        {projectList.map((project) => (
          <div className={styles.project} key={project.id}>
            <div className={styles.highlightImg}></div>
            <div className={styles.textContent}>
              <div className={styles.titles}>
                <h2>{project.title}</h2>
                <p>{project.shortDescription}</p>
              </div>
              <ul>
                {project.techStack.map((techItem, index) => (
                  <li key={index}>{techItem}</li>
                ))}
              </ul>
              <button className={styles.readMore}>Read More</button>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}

export default Portfolio;
