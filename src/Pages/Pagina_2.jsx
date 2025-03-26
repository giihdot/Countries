// Importação do hook useState e useEffect
import { useState, useEffect } from "react";


function Pagina2() {
  // Estado que armazena as informações do país
  const [info, setInfo] = useState(null);

  // UseEffect para carregar as informações do país a partir do localStorage
  useEffect(() => {
    // Recupera as informações do país do localStorage
    const countryData = localStorage.getItem("countryInfo");
    if (countryData) {
      // Converte os dados armazenados no localStorage para um objeto
      setInfo(JSON.parse(countryData));
    }
  }, []); // O array vazio significa que o efeito acontece apenas uma vez

  return (
    <div className="Flex-Colunm">
      <h2>População, Idioma e Densidade Demográfica</h2>
      {/* Verifica se as informações do país estão disponíveis */}
      {info ? (
        <>
          {/* Exibe a população, idioma e calcula a densidade populacional */}
          <p>População: {info.population}</p>
          <p>Idioma Principal: {Object.values(info.languages)[0]}</p>
          <p>
            Densidade Populacional: {(
              info.population / info.area
            ).toFixed(2)} hab/km²
          </p>
        </>
      ) : (
        // Caso não haja dados, exibe uma mensagem
        <p>Selecione um país na página inicial.</p>
      )}
    </div>
  );
}

export default Pagina2;
