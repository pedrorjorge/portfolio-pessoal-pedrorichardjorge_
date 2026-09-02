import "./styles.css";

export const Projetos = () => {
  return (
    <section id="projetos">
      <div className="titulo-projetos">
        <span></span>Projetos
      </div>

      <div className="project-grid">
        <article className="project-card">
          <div className="project-preview">
            <img
              src="img/frontend.png"
              alt="Aplicação Web Full-Stack"
            />
          </div>
          <div className="project-content">
            <div className="project-tags">
              <span className="project-tag">React</span>
              <span className="project-tag">Node.js</span>
              <span className="project-tag">PostgreSQL</span>
              <span className="project-tag">API REST</span>
            </div>
            <h3>Aplicação Web Full-Stack</h3>
            <p>
              Sistema desenvolvido do zero integrando front-end em React, API REST em Node.js/Express e banco de dados relacional PostgreSQL.
            </p>
            <a
              className="project-link-github"
              href="https://github.com/pedrorjorge/sistemaCadastro_Postgress" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir para o Github
            </a>
          </div>
        </article>

        <article className="project-card">
          <div className="project-preview">
            <img
              src="img/api_image.jpg"
              alt="API REST de Vendas"
            />
          </div>
          <div className="project-content">
            <div className="project-tags">
              <span className="project-tag">JavaScript</span>
              <span className="project-tag">Node.js</span>
              <span className="project-tag">API REST</span>
              <span className="project-tag">MongoDB</span>
              <span className="project-tag">Postman</span>
            </div>
            <h3>API REST de Vendas Mensais</h3>
            <p>
              Desenvolvimento de API com Node.js e MongoDB para gerenciamento de vendas, implementação de CRUD completo e testes de endpoints com Postman.
            </p>
            <a
              className="project-link-github"
              href="https://github.com/pedrorjorge/arquivosConexaoBD_mongodb_sistema-CRUD"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir para o Github
            </a>
          </div>
        </article>

        <article className="project-card">
          <div className="project-preview">
            <img src="img/python_image.png" alt="Portfólio pessoal" />
          </div>
          <div className="project-content">
            <div className="project-tags">
              <span className="project-tag">React</span>
              <span className="project-tag">HTML5</span>
              <span className="project-tag">CSS3</span>
            </div>
            <h3>Portfólio Pessoal</h3>
            <p>
              Página desenvolvida com React para apresentação de projetos, habilidades e contato profissional, com layout responsivo e acessível[cite: 1].
            </p>
            <a
              className="project-link-github"
              href="https://github.com/pedrorjorge"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </div>
        </article>

        <article className="project-card">
          <div className="project-preview">
            <img
              src="img/top-20-python-static-analysis-tools.webp"
              alt="Visualização de dados com Python"
            />
          </div>
          <div className="project-content">
            <div className="project-tags">
              <span className="project-tag">Python</span>
              <span className="project-tag">Pandas</span>
              <span className="project-tag">Matplotlib</span>
            </div>
            <h3>Visualização de dados</h3>
            <p>
              Projeto final do curso do IFSP que analisa preços de carros no Brasil e apresenta gráficos de maneira clara e elegante[cite: 1].
            </p>
            <a
              className="project-link-github"
              href="https://github.com/pedrorjorge/projeto-final-AnaliseDeDadosComPython-IFSP"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir para o Github
            </a>
          </div>
        </article>

      </div>
    </section>
  );
};