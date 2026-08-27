"use client";

import { useState } from "react";

const projectsData = [
  {
    title: "Design System Corporativo",
    meta: "Nubank · 2021",
    techs: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
    desc: "Construção do zero de uma biblioteca de componentes altamente reutilizável e documentada. O foco principal foi garantir acessibilidade (padrão WCAG AA) e performance. A adoção do Design System reduziu o tempo de prototipagem e desenvolvimento de novas features em mais de 40% em mais de 20 times internos.",
    btn: "Ver Case Study",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Dashboard Financeiro de Alta Performance",
    meta: "Nubank · 2021",
    techs: ["Next.js", "React Query", "Recharts", "Virtualização"],
    desc: "Desenvolvimento de uma interface crítica para visualização de transações financeiras em tempo real. O grande desafio técnico foi lidar com renderização de grandes volumes de dados. Através de virtualização de listas e otimização do ciclo de vida dos componentes, garantimos uma navegação fluida em 60fps sem travar a thread principal do navegador.",
    btn: "Acessar Dashboard",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Plataforma Interativa de Educação",
    meta: "Google · 2022",
    techs: ["React", "Framer Motion", "GraphQL", "Zustand"],
    desc: "Criação de um web app educacional focado em alto engajamento e retenção de usuários. A interface foi construída com foco absoluto em micro-interações e transições de página perfeitas, entregando uma experiência de usuário imersiva, muito semelhante à de um aplicativo nativo no celular.",
    btn: "Acessar Plataforma",
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

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

  const currentProject = activeProject !== null ? projectsData[activeProject] : null;

  return (
    <>
      <section id="projetos" className="projects-section">
        <div className="projects-container">
          <h2 className="projects-headline reveal">
            Projetos que eu <span className="text-blue">já criei</span>
          </h2>

          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card featured reveal" onClick={() => openModal(0)}>
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
                  alt="Design System Corporativo"
                />
                <div className="project-overlay"></div>
              </div>
              <div className="project-content">
                <div className="project-meta">Nubank &middot; 2021</div>
                <h3 className="project-title">Design System Corporativo</h3>
                <p className="project-desc">
                  Padronizou e construiu a interface de dezenas de aplicações
                  internas, reduzindo o tempo de desenvolvimento dos times em 40%.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div
              className="project-card reveal"
              style={{ transitionDelay: '0.2s' }}
              onClick={() => openModal(1)}
            >
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                  alt="Dashboard Financeiro"
                />
                <div className="project-overlay"></div>
              </div>
              <div className="project-content">
                <div className="project-meta">Nubank &middot; 2021</div>
                <h3 className="project-title">
                  Dashboard Financeiro de Alta Performance
                </h3>
                <p className="project-desc">
                  Criou uma interface responsiva e com atualização em tempo real
                  para visualização de transações sem perda de fluidez.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div
              className="project-card reveal"
              style={{ transitionDelay: '0.4s' }}
              onClick={() => openModal(2)}
            >
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop"
                  alt="Plataforma Interativa"
                />
                <div className="project-overlay"></div>
              </div>
              <div className="project-content">
                <div className="project-meta">Google &middot; 2022</div>
                <h3 className="project-title">Plataforma Interativa de Educação</h3>
                <p className="project-desc">
                  Desenvolveu um web app altamente interativo utilizando animações
                  avançadas (Framer Motion/GSAP) e gerenciamento de estado global
                  otimizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <div 
        className={`modal-overlay ${activeProject !== null ? 'active' : ''}`} 
        id="projectModal"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        <div className="modal-content glassmorphism">
          <button className="modal-close" onClick={closeModal}>&times;</button>
          
          {currentProject && (
            <div className="modal-body">
              <div className="modal-image-wrapper">
                <img src={currentProject.img} alt="Project Image" />
              </div>
              <div className="modal-info">
                <div className="project-meta">{currentProject.meta}</div>
                <h3 className="project-title" style={{ fontSize: '2rem' }}>
                  {currentProject.title}
                </h3>
                
                <div className="modal-tags">
                  {currentProject.techs.map((tech, idx) => (
                    <span key={idx} className="modal-tag">{tech}</span>
                  ))}
                </div>
                
                <p className="modal-desc">{currentProject.desc}</p>
                
                <div style={{ marginTop: '2.5rem' }}>
                  <a href="#" className="btn-primary" style={{ padding: '0.75rem 2rem', borderRadius: '9999px' }}>
                    {currentProject.btn}
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
