import './App.css';
import { Nav } from './components/Nav/index';
import { Logo } from './components/Logo/index';
import { Paragrafo } from './components/Paragrafo/index';
import { Skils} from './components/Skils/index';
import { Sobre } from './components/Sobre.css/index';
import { Projetos } from './components/Projetos/index';
import { Contato } from './components/Contato/index';
import { Rodape } from './components/Rodape/index';

function App() {
  return (
    <div className="App">
      <div className="page-shell">
        <header className="topbar">
          <div className="brand">
            <title>Portfolio - Pedro Richard Jorge</title>
          </div>
          <Nav />
          <Logo />
        </header>

        <main className="hero">
          <p className="hero-subtitle">Olá, eu sou</p>
          <h1 className="hero-title">Pedro Richard Jorge</h1>
          <br></br>
          <Paragrafo />
          <Skils />
          <Sobre />
          <Projetos />
          <Contato />
          <Rodape />
        </main>
      </div>
    </div>
  );
}

export default App;
