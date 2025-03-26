// Importação do hook useState e useEffect
import { useState, useEffect } from "react";


function Pagina3() {
  // Estado que armazena as informações do país
  const [info, setInfo] = useState(null);

  // UseEffect para carregar as informações do país a partir do localStorage
  useEffect(() => {
    // Recupera as informações do país do localStorage
    const countryData = localStorage.getItem("countryInfo");
    if (countryData) {
      // Converte os dados do localStorage para um objeto
      setInfo(JSON.parse(countryData));
    }
  }, []); // O efeito é disparado apenas uma vez, quando o componente é montado

  return (
    <div className="Flex-Colunm">
      <h2>Capital, Região e Moeda</h2>
      {/* Verifica se as informações do país estão presentes */}
      {info ? (
        <>
          {/* Exibe a capital, região e moeda do país */}
          <p>Capital: {info.capital}</p>
          <p>Região: {info.region}</p>
          <p>Moeda: {Object.values(info.currencies)[0].name}</p>
        </>
      ) : (
        // Se não houver informações, exibe uma mensagem
        <p>Selecione um país na página inicial.</p>
      )}
    </div>
  );
}

export default Pagina3;
