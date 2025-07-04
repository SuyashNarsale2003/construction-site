import React from 'react';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
  return (
    <section className="projects-page">
      <div className="container">
        <br />
        <h1 className="page-title">All Projects</h1>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <br />
        <div className="text-center mt-5">
          <a href="/projects" className="btn btn-primary">
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;