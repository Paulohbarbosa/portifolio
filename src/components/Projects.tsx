"use client";

import { useState } from "react";
import data from "../data/portfolio.json";
import { GithubProject } from "@/lib/github";

interface ProjectsProps {
  githubProjects?: GithubProject[];
}

export default function Projects({ githubProjects = [] }: ProjectsProps) {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  // Combine local data with github projects
  const allProjects = [...(data.projects || []), ...githubProjects];

  const openModal = (index: number) => {
    setActiveProject(index);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setActiveProject(null);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  };

  const currentProject =
    activeProject !== null ? allProjects[activeProject] : null;

  return (
    <>
      <section id="projetos" className="projects-section">
        <div className="projects-container">
          <div className="section-header reveal">
            <h2 className="title-section ">
              {data.projectsInfo.primaryTitle}{" "}
              <span className="text-blue">
                {data.projectsInfo.secondaryTitle}
              </span>
            </h2>
            <p className="description-section">
              {data.projectsInfo.description}
            </p>
          </div>

          <div className="projects-grid">
            {/* projeto em destaque */}
            {allProjects.map((project, index) => {
              if (!project.isFeatured) return null;
              return (
                <div
                  key={`featured-${index}`}
                  className="project-card featured reveal"
                  onClick={() => openModal(index)}
                >
                  <div className="project-image">
                    <img src={project.img} alt={project.title} />
                    <div className="project-overlay"></div>
                  </div>
                  <div className="project-content">
                    <div className="project-meta">
                      {project.badge} &middot; {project.year}
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                  </div>
                </div>
              );
            })}

            {/* demais projetos */}
            {allProjects.map((project, index) => {
              if (project.isFeatured) return null;
              return (
                <div
                  key={`normal-${index}`}
                  className="project-card reveal"
                  onClick={() => openModal(index)}
                >
                  <div className="project-image">
                    <img src={project.img} alt={project.title} />
                    <div className="project-overlay"></div>
                  </div>
                  <div className="project-content">
                    <div className="project-meta">
                      {project.badge} &middot; {project.year}
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      <div
        className={`modal-overlay ${activeProject !== null ? "active" : ""}`}
        id="projectModal"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        <div className="modal-content glassmorphism">
          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>

          {currentProject && (
            <div className="modal-body">
              <div className="modal-image-wrapper">
                <img src={currentProject.img} alt="Project Image" />
              </div>
              <div className="modal-info">
                <div className="project-meta">
                  {currentProject.badge} &middot; {currentProject.year}
                </div>
                <h3 className="project-title" style={{ fontSize: "2rem" }}>
                  {currentProject.title}
                </h3>

                <div className="modal-tags">
                  {currentProject.techs?.map((tech, idx) => (
                    <span key={idx} className="modal-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div 
                  className="modal-desc" 
                  dangerouslySetInnerHTML={{ __html: currentProject.description }} 
                />

                <div style={{ marginTop: "2.5rem" }}>
                  <a
                    href={currentProject.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: "0.75rem 2rem", borderRadius: "9999px" }}
                  >
                    Ver Projeto
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
