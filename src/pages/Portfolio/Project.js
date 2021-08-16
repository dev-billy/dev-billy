import { Link, useParams } from "react-router-dom";
import Layout from "../../layout";
import projectList from "../../data/projects";
import NotFound from "../404";
import styles from "../pagestyles/project.module.scss";
function Project() {
  let { id } = useParams();
  let projectData = projectList.filter((project) => project.id === +id)[0];
  if (projectData) {
    return (
      <Layout>
        <Link to="/portfolio">
          <button className={styles.backBtn}>
            {" "}
            <span>{"<-"}</span> Project List
          </button>
        </Link>
        <section className={styles.project}>
          <div
            className={styles.highlightImg}
            style={{ backgroundImage: `url(${projectData.image})` }}
          ></div>
          <article className={styles.textContent}>
            <h1>{projectData.title}</h1>
            <ul>
              {projectData.techStack.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>{projectData.story}</p>
          </article>
          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>Visit Demo</button>
            <button className={styles.secondaryBtn}>View Source</button>
          </div>
        </section>
      </Layout>
    );
  } else {
    return <NotFound />;
  }
}

export default Project;
