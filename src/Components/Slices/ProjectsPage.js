import './ProjectsPage.css';
import {Header2, CustomMedium} from '../Text'
import Project, { ProjectFull } from '../Project';
import { projects_data } from '../../Data/ProjectData';
import {useState} from 'react'

function range(start, end) {
  return Array.from({ length: end - start + 1 }, (v, i) => start + i);
}

function ProjectsPage({children}) {

    const [currentProject, setCurrentProject] = useState(null)
    const [currentProjectPage, setCurrentProjectPage] = useState(1)

    const projectsPerPage = () => {
      if(window.innerWidth <= 784){
        return 2;
      }
      if(window.innerWidth <= 1584){
        return 6;
      }
      if(window.innerWidth <= 1984){
        return 8;
      }
      return 16;
    };

    const maxPages = Math.ceil(projects_data.length / projectsPerPage());

    function handlePageChange(chg) {
      if(chg === 'prev'){
        setCurrentProjectPage(currentProjectPage - 1)
      }
      else if(chg === 'next'){
        setCurrentProjectPage(currentProjectPage + 1)
      }
      else {
        setCurrentProjectPage(chg)
      }
    }

  return (
    <section id="projects-page" className="projects-page">
        <Header2>Projects</Header2>
        {currentProject != null ? <ProjectFull onClose={() => setCurrentProject(null)} pj={currentProject}/> : null}
        <div className="project-grid">
            {projects_data.slice(projectsPerPage() * (currentProjectPage - 1),projectsPerPage() * (currentProjectPage - 1) + projectsPerPage()).map((pj, i) => <Project onProjectClick={() => setCurrentProject(pj)} key={i} pj={pj}/>)}
        </div>
        <div className="projects-button-grid">
          <button disabled={currentProjectPage === 1} onClick={() => handlePageChange('prev')}><CustomMedium>Previous</CustomMedium></button>
          {range(1, maxPages).map((n) => <button disabled={currentProjectPage === n} className={currentProjectPage === n ? "current-projects-page" : null} onClick={() => handlePageChange(Number(n))}><CustomMedium>{n}</CustomMedium></button>)}
          <button disabled={currentProjectPage === maxPages} onClick={() => handlePageChange('next')}><CustomMedium>Next</CustomMedium></button>
        </div>
    </section>
  );
}

export default ProjectsPage
