import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../layout";
import projectList from "../../data/projects";
import NotFound from "../404";
import styles from "../pagestyles/project.module.scss";
import ReactMarkdown from "react-markdown";
function Project() {
  let { id } = useParams();
  const [post, setPost] = useState("");
  let projectData = projectList.filter((project) => project.id === +id)[0];
  useEffect(() => {
    if (projectData) {
      import(`../../data/markdown/${projectData.story}`)
        .then((res) => {
          fetch(res.default)
            .then((res) => res.text())
            .then((res) => setPost(res))
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
  });
  if (projectData) {
    return (
      <Layout>
        <Link to="/projects">
          <button className={styles.backBtn}>
            <span>{"<-"}</span> Project List
          </button>
        </Link>
        <section className={styles.project}>
          <article className={styles.intro}>
            <aside
              className={styles.highlightImg}
              style={{ backgroundImage: `url(${projectData.image})` }}
            ></aside>
            <aside className={styles.highlightText}>
              <h1>{projectData.title}</h1>
              <p>{projectData.shortDescription}</p>
              <ul>
                {projectData.techStack.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className={styles.buttons}>
                <button className={styles.primaryBtn}>Visit Demo</button>
                <button className={styles.secondaryBtn}>View Source</button>
              </div>
            </aside>
          </article>
          <article className={styles.textContent}>
            <h2>Project Background</h2>
            {/* <p>{projectData.story}</p> */}
            <ReactMarkdown children={post} />
          </article>
        </section>
      </Layout>
    );
  } else {
    return <NotFound />;
  }
}

export default Project;
