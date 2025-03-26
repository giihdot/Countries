import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Pagina1 from "./Pages/Pagina_1";
import Pagina2 from "./Pages/Pagina_2";
import Pagina3 from "./Pages/Pagina_3";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/pagina1">Informações Gerais</Link></li>
          <li><Link to="/pagina2">População e Idioma</Link></li>
          <li><Link to="/pagina3">Capital, Região e Moeda</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagina1" element={<Pagina1 />} />
        <Route path="/pagina2" element={<Pagina2 />} />
        <Route path="/pagina3" element={<Pagina3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
