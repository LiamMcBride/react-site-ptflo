import './ProjectsPage.css';
import {Header2} from '../Text'
import Project from '../Project';
import { projects_data } from '../../Data/ProjectData';

function ProjectsPage({children}) {
  return (
    <section id="projects-page" className="projects-page">
        <Header2>Projects</Header2>
        <div className="project-grid">
            {projects_data.map((pj, i) => <Project key={i} pj={pj}/>)}
        </div>
    </section>
  );
}

export default ProjectsPage
