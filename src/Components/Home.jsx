import { useState, useEffect } from "react";
import "../App.css"

function Home() {
  // Estado para armazenar a lista de países
  const [paises, setPaises] = useState([]);
  
  // Estado para armazenar o país selecionado
  const [selectedPais, setSelectedPais] = useState("");
  
  // Estado para armazenar o link da bandeira do país selecionado
  const [flag, setFlag] = useState("");

  // Hook useEffect que será executado quando o componente for montado
  useEffect(() => {
    // Fazendo a requisição para obter todos os países
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json()) // Converte a resposta para JSON
      .then((data) => {
        // Mapeia os dados para obter apenas o nome do país e a bandeira
        const listaPaises = data.map((pais) => ({
          name: pais.name.common, // Nome do país
          flag: pais.flags?.png || pais.flags?.svg || "", // Bandeira, preferindo o formato PNG ou SVG
        }));
        // Atualiza o estado 'paises' com a lista de países
        setPaises(listaPaises);
        
        // Verifica se há um país salvo no Local Storage e o carrega
        const savedCountry = localStorage.getItem("selectedCountry");
        if (savedCountry) {
          setSelectedPais(savedCountry); // Atualiza o país selecionado
          fetchCountryData(savedCountry); // Busca os dados do país salvo
        }
      });
  }, []); // O array vazio garante que esse efeito só será executado uma vez, quando o componente for montado

  // Função para buscar dados detalhados sobre o país selecionado
  function fetchCountryData(nome) {
    // Faz a requisição para obter detalhes do país baseado no nome
    fetch(`https://restcountries.com/v3.1/name/${nome}`)
      .then((res) => res.json()) // Converte a resposta para JSON
      .then((data) => {
        // Armazena os dados do país no Local Storage
        localStorage.setItem("countryInfo", JSON.stringify(data[0])); 
        // Atualiza a bandeira do país na tela
        setFlag(data[0].flags?.png || ""); // Se não tiver uma bandeira PNG, a variável flag será uma string vazia
      });
  }

  // Função que lida com a mudança no select (quando o usuário escolhe um país)
  function Mud_Select(e) {
    const selected = e.target.value; // Obtém o nome do país selecionado
    setSelectedPais(selected); // Atualiza o estado do país selecionado
    localStorage.setItem("selectedCountry", selected); // Armazena o país selecionado no Local Storage
    fetchCountryData(selected); // Busca os dados do país selecionado
  }

  return (
    <div className="Flex-Colunm">
      {/* Rótulo do select */}
      <label>Selecione um país:</label>
      {/* Dropdown para selecionar um país */}
      <select value={selectedPais} onChange={Mud_Select}>
        <option value="">Selecione...</option>
        {/* Itera sobre os países para criar as opções do select */}
        {paises.map((pais, index) => (
          <option key={index} value={pais.name}>{pais.name}</option>
        ))}
      </select>

      {/* Exibe a bandeira do país selecionado */}
      {flag && <img src={flag} alt="Bandeira do país" style={{ width: "200px", marginTop: "20px" }} />}
    </div>
  );
}

export default Home;
