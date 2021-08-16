import { useParams } from "react-router-dom";
import Layout from "../../layout";
import projectList from "../../data/projects";
import NotFound from "../404";

function Project() {
  let { id } = useParams();
  let projectData = projectList.filter((project) => project.id === +id)[0];
  if (projectData) {
    return (
      <Layout>
        <h3>Title: {projectData.title}</h3>
        <p>{projectData.story}</p>
      </Layout>
    );
  } else {
    return <NotFound />;
  }
}

export default Project;
