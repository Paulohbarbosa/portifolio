"use client";

import Image from "next/image";
import { useState } from "react";
import data from "../data/portfolio.json";
import { GithubProject } from "@/lib/github";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faFlask } from "@fortawesome/free-solid-svg-icons";

interface ProjectsProps {
  githubProjects?: GithubProject[];
}

export default function Projects({ githubProjects = [] }: ProjectsProps) {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  // Combine local data with github projects
  const allProjects = [...((data as any).projects || []), ...githubProjects];

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
            {/* listagem de projetos */}
            {allProjects.map((project, index) => {
              if (project.isFeatured) return null;

              const hasTopics = Array.isArray(project.topics);
              const isLaboratorio = hasTopics
                ? project.topics.includes("laboratorio")
                : project.badge?.toLowerCase().includes("lab");

              return (
                <div
                  key={`normal-${index}`}
                  className="project-card reveal"
                  onClick={() => openModal(index)}
                >
                  <div className="project-image">
                    {/* Otimização Lighthouse: Imagens da lista de projetos com next/image.
                        O uso do layout preenchido com 'fill' e 'objectFit: cover' melhora o CLS e a responsividade. */}
                    <Image
                      src={project.img || "/placeholder.jpg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div className="project-overlay"></div>
                  </div>
                  <div className="project-content">
                    <div className="project-meta flex justify-between items-center w-full mb-4">
                      <span>
                        {project.badge} &middot; {project.year}
                      </span>
                      <span
                        title={
                          isLaboratorio
                            ? "Este é um projeto de estudo"
                            : "Este projeto está em produção"
                        }
                        className={`flex gap-1 items-center text-xs px-2.5 py-1 rounded-full whitespace-nowrap ml-2 ${isLaboratorio ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"}`}
                      >
                        {isLaboratorio ? (
                          <FontAwesomeIcon icon={faFlask} />
                        ) : (
                          <FontAwesomeIcon icon={faCircleCheck} />
                        )}
                        {isLaboratorio ? "Laboratório" : "Produção"}
                      </span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">
                      {project.description.replace(/<[^>]+>/g, "")}
                    </p>
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
              <div
                className="modal-image-wrapper"
                style={{ overflow: "hidden" }}
              >
                {/* Otimização Lighthouse: Imagem do modal usando next/image. */}
                <Image
                  src={currentProject.img || "/placeholder.jpg"}
                  alt="Project Image"
                  width={800}
                  height={500}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="modal-info">
                <div className="project-meta flex gap-1 items-center">
                  <span>
                    {currentProject.badge} &middot; {currentProject.year}
                  </span>
                  <span
                    className={`flex gap-1 items-center text-xs px-2.5 py-1 rounded-full whitespace-nowrap ${
                      (
                        Array.isArray(currentProject.topics)
                          ? currentProject.topics.includes("laboratorio")
                          : currentProject.badge?.toLowerCase().includes("lab")
                      )
                        ? "text-purple-400"
                        : "text-emerald-400"
                    }`}
                  >
                    {(
                      Array.isArray(currentProject.topics)
                        ? currentProject.topics.includes("laboratorio")
                        : currentProject.badge?.toLowerCase().includes("lab")
                    ) ? (
                      <FontAwesomeIcon icon={faFlask} />
                    ) : (
                      <FontAwesomeIcon icon={faCircleCheck} />
                    )}
                  </span>
                </div>
                <h3 className="project-title" style={{ fontSize: "2rem" }}>
                  {currentProject.title}
                </h3>

                <div className="modal-tags">
                  {currentProject.techs?.map((tech: string, idx: number) => (
                    <span key={idx} className="modal-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="modal-desc"
                  dangerouslySetInnerHTML={{
                    __html: currentProject.description,
                  }}
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
