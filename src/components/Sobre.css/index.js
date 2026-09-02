import "./styles.css";

export const Sobre = () => {
  return (
    <section className="sobre-container">
      <h2>Quem eu sou</h2>

      <p>
        Sou Pedro Richard Jorge, estudante do 3º semestre de Análise e Desenvolvimento de Sistemas pelo IFSP campus São Carlos e técnico em Desenvolvimento de Sistemas pela ETEC Paulino Botelho.
      </p>

      <p>
        Possuo vivência prática em desenvolvimento web full stack e experiência prévia em suporte de TI. Atualmente, atuo como Desenvolvedor Full Stack, focando na construção e manutenção de aplicações web.
      </p>

      <p>
        Direciono meus estudos e projetos para tecnologias modernas, utilizando no dia a dia React, JavaScript, Node.js, Python, APIs REST e bancos de dados relacionais e não-relacionais (PostgreSQL e MongoDB).
      </p>

      <h2>Formação e Objetivo</h2>

      <p>
        Minha formação técnica me deu uma base sólida em programação e lógica. No IFSP, aprofundo meus conhecimentos em engenharia de software, arquitetura web e metodologias ágeis (Scrum e Kanban).
      </p>

      <p>
        Busco uma oportunidade de estágio em desenvolvimento de software para aplicar minha experiência prática, colaborar com equipes multidisciplinares e crescer profissionalmente.
      </p>

      <h2>Experiência e Projetos</h2>

      <ul>
        <li>
          <strong>Experiência em Destaque:</strong> 
          <br />
          <em>Desenvolvedor Full Stack (Voluntário) na CoCriarse:</em> Desenvolvimento e manutenção de páginas e aplicações web com HTML5, CSS3, JavaScript e metodologias ágeis, atuando em equipe na entrega de funcionalidades.
          <br /><br />
          <em>Estágio em TI na Bianchini:</em> Suporte técnico a usuários, manutenção de equipamentos e apoio em sistemas internos.
        </li>

        <li>
          <strong>Projetos em Destaque:</strong> <br />
          <strong>Aplicação Web Full-Stack:</strong> Sistema integrado com front-end em React, API REST em Node.js/Express e banco de dados PostgreSQL.<br />
          <strong>API de Vendas:</strong> Desenvolvimento de rotas REST e CRUD completo utilizando Node.js e MongoDB, testado via Postman.<br />
          <strong>Portfólio Pessoal:</strong> Página desenvolvida em React com layout responsivo, componentização e estruturação semântica.
        </li>
      </ul>

    </section>
  );
};