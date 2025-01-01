import React, { useContext, useEffect } from 'react';
import { SectionContext } from '../../contexts/SectionContext';
import ProjectCard from './ProjectCard';
import { projectsList } from '../../constants';

const Projects = () => {
  const { refs, updateHeight } = useContext(SectionContext);

  useEffect(() => {
    if (refs.projects.current) {
      updateHeight('projects', refs.projects.current.clientHeight);
    }
  }, []);

  return (
    <div id="projects" className="resume-section" ref={refs.projects}>
      <h4>Projects</h4>

      <span className="experience">
        {Object.entries(projectsList).map(([name, info]) => 
          <ProjectCard
            key={name}
            id={name}
            href={info.href}
            title={info.title}
            description={info.description}
          />
        )}
      </span>
    </div>
  );
};

export default Projects;