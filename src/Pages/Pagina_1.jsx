import { useState, useEffect } from "react";


function Pagina1() {
  // Estado que armazena as informações do país
  const [info, setInfo] = useState(null);

  // UseEffect para carregar as informações do país a partir do localStorage
  useEffect(() => {
    // Recupera as informações do país do localStorage
    const countryData = localStorage.getItem("countryInfo");
    if (countryData) {
      // Converte os dados do localStorage para um objeto e armazena no estado
      setInfo(JSON.parse(countryData));
    }
  }, []); // O array vazio significa que o efeito só ocorre quando o componente é montado

  return (
    <div className="Flex-Colunm">
      <h2>Informações Gerais</h2>
      {/* Se as informações do país estiverem disponíveis, exibe-as */}
      {info ? (
        <>
          <p>Área: {info.area} km²</p>
          <p>População: {info.population}</p>
          <p>Capital: {info.capital}</p>
          <p>Região: {info.region}</p>
          <p>Moeda: {Object.values(info.currencies)[0].name}</p>
        </>
      ) : (
        // Caso não haja informações do país, exibe uma mensagem
        <p>Selecione um país na página inicial.</p>
      )}
    </div>
  );
}

export default Pagina1;
