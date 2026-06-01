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
              src="img/top-20-python-static-analysis-tools.webp"
              alt="Projeto final IFSP"
            />
          </div>

          <div className="project-content">

            <div className="project-tags">
              <span className="project-tag">Dados</span>
              <span className="project-tag">Análise</span>
              <span className="project-tag">Python</span>
              <span className="project-tag">Pandas</span>
              <span className="project-tag">Matplotlib</span>
            </div>

            <h3>Visualização de dados</h3>

            <p>
              Projeto final do curso que analisa preços de carros no Brasil
              e apresenta gráficos de maneira clara e elegante.
            </p>

            <a
              className="project-link-github"
              href="https://github.com/pedrorjorge/projeto-final-AnaliseDeDadosComPython-IFSP"
            >
              Ir para o Github
            </a>

          </div>
        </article>

        <article className="project-card">
            <div class="project-preview">
              <img src="img/python_image.png" alt="Portfólio pessoal" />
            </div>
            <div className="project-content">
              <div className="project-tags">
                <span className="project-tag">Python</span>
                <span className="project-tag">Lógica de programação</span>
                <span className="project-tag">Resolução de problemas</span>
              </div>
              <h3>Fundamentos de Python</h3>
              <p>
                Repositório com projetos acadêmicos em Python, criados ao longo
                do semestre, explorando lógica de programação e resolução de
                problemas.
              </p>
              <a
                class="project-link-github"
                href="https://github.com/pedrorjorge/logicaProgramacao_python"
                >Ir para o Github</a
              >
            </div>
          </article>

          <article className="project-card">
            <div className="project-preview">
              <img
                src="img/api_image.jpg"
                alt="Dashboard analítico"
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
              <h3>API REST de Vendas Mensais com Node.js e MongoDB</h3>
              <p>
                Desenvolvimento de uma API REST para gerenciamento de vendas mensais, utilizando Node.js, Express e MongoDB.<br></br>
              </p>
              <a
                className="project-link-github"
                href="https://github.com/pedrorjorge/arquivosConexaoBD_mongodb_sistema-CRUD"
                >Ir para o Github</a
              >
            </div>
          </article>
        </div>
      </section>
  );
};

