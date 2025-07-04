import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(project => project.id === parseInt(id));

  if (!project) {
    return <div className="container">Project not found</div>;
  }

  return (
    <section className="project-detail-section">
      <div className="container">
        <div className="project-header">
          <br />
          <h1 className="project-title">{project.title}</h1>
          <p className="project-meta">
            <span className="project-category">{project.category}</span>
            <span className="project-date">{project.date}</span>
          </p>
        </div>

        <div className="project-gallery">
          <div className="main-image">
            <img src={project.mainImage} alt={project.title} />
          </div>
          <div className="thumbnail-grid">
            {project.images.map((image, index) => (
              <div key={index} className="thumbnail">
                <img src={image} alt={`${project.title} - ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="project-content">
          <div className="project-description">
            <h2>Project Overview</h2>
            <p>{project.description}</p>
            
            <h3>Project Details</h3>
            <ul className="project-details">
              <li><strong>Location:</strong> {project.location}</li>
              <li><strong>Size:</strong> {project.size}</li>
              <li><strong>Duration:</strong> {project.duration}</li>
              <li><strong>Client:</strong> {project.client}</li>
              <li><strong>Budget:</strong> {project.budget}</li>
            </ul>
          </div>

          <div className="project-sidebar">
            <div className="project-highlights">
              <h3>Key Features</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-team">
              <h3>Project Team</h3>
              <ul>
                {project.team.map((member, index) => (
                  <li key={index}>
                    <strong>{member.role}:</strong> {member.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="project-navigation">
          <a href="/projects" className="btn btn-primary">
            Back to Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;