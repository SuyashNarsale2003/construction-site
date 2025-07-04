import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const navigate = useNavigate();
  const featuredProjects = projectsData.slice(0, 3); // Show first 3 as featured

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Our recent work</p>
        
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <br />
        <div className="text-center mt-5">
          <button 
            onClick={() => navigate('/projects')} 
            className="btn btn-primary"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;