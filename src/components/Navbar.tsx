export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Paulo<span className="text-blue">Barbosa</span></div>
        <ul className="nav-links">
          <li><a href="#skills">Stack</a></li>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#depoimentos">Depoimentos</a></li>
        </ul>
        <a href="#contato" className="btn-nav">Iniciar Projeto</a>
      </div>
    </nav>
  );
}
