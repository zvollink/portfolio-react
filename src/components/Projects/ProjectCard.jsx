import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectCard = ({ id, href, title, description }) => {
  return (
    <span className="project-card">
      <div className={id + ' card-backdrop'}>
        <span className="hover-info">
          <a href={href} target="_blank" title="Visit site" rel='noreferrer'>
            <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
          </a>
          <span className="title">{title}</span>
          <span className="description">{description}</span>
        </span>
      </div>
    </span>
  );
}

export default ProjectCard;