import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.thumbnail} alt={project.title} />
        <div className="project-overlay">
          <h3>{project.title}</h3>
          <p>{project.category}</p>
          <p className="project-client">{project.client}</p>
          <Link to={`/projects/${project.id}`} className="btn btn-outline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;