import './ProjectsPage.css';
import {Header2} from '../Text'
import Project, { ProjectFull } from '../Project';
import { projects_data } from '../../Data/ProjectData';
import {useState} from 'react'

function ProjectsPage({children}) {

    const [currentProject, setCurrentProject] = useState(null)

  return (
    <section id="projects-page" className="projects-page">
        <Header2>Projects</Header2>
        {currentProject != null ? <ProjectFull onClose={() => setCurrentProject(null)} pj={currentProject}/> : null}
        <div className="project-grid">
            {projects_data.map((pj, i) => <Project onProjectClick={() => setCurrentProject(pj)} key={i} pj={pj}/>)}
        </div>
    </section>
  );
}

export default ProjectsPage
