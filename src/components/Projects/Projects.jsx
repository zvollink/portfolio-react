import React, { useContext, useEffect } from 'react';
import { SectionContext } from '../../contexts/SectionContext';
import ProjectCard from './ProjectCard';

const projectsList = {
  'highlights': {
    href: 'https://highlightskids.com/',  
    title: 'Highlights Kids',
    description: 'Collaborated with designers to turn pixel mocks into engaging, interactive experiences for children, enhancing educational content with intuitive, user-friendly interfaces and significantly improving the digital presence of Highlights Kids.'
  },
  'bluprint': {
    href: 'https://bluprint.bitsbox.com/',
    title: 'Bluprint',
    description: 'Contributed to frontend, backend, and core system development for Bluprint by Bitsbox, a 3D coding platform where kids can graduate from the original 2D Bitsbox product to code, build worlds, and play games together online.'
  },
  'stemscopes': {
    href: 'https://bitsboxcms.com/demo/?student&licensed/',
    title: 'STEMscopes Coding',
    description: 'Led the frontend development for the STEMscopes Coding product, transforming pixel mocks into interactive elements in collaboration with the lead designer, ensuring a fun and engaging experience to enhance STEM education for students.'
  },
  'bitsbox': {
    href: 'https://bitsbox.com/',
    title: 'Bitsbox',
    description: 'Managed the Bitsbox site over 7 years, balancing efforts between designing and developing engaging frontend experiences within the kids coding environment, and crafting attractive landing pages in collaboration with marketing and other designers to attract customers and boost sales.'
  },
  'bitsbox-store': {
    href: 'https://subscribe.bitsbox.com/',
    title: 'Bitsbox Store',
    description: 'Designed and developed the Bitsbox Store page, creating a visually appealing and user-friendly interface optimized for desktop and mobile devices. Collaborated with the marketing team to align the page\'s design with campaign goals, driving higher engagement and conversions.'
  },
  'skoolie-locker-rentals': {
    href: 'https://skoolielockers.com/',
    title: 'Skoolie Locker Rentals',
    description: 'Built a single-page application (SPA) using React for a local mobile locker service, leveraging Vercel for deployment, Tailwind CSS for styling, and Google Analytics for performance tracking. Worked closely with the client throughout the project to ensure site functionality and design aligned with their vision.'
  }
}

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