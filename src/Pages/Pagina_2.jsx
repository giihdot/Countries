import { useEffect, useState } from "react";

function Pagina2() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    // Carrega as informações do país salvo no Local Storage
    const savedData = JSON.parse(localStorage.getItem("countryInfo"));
    setInfo(savedData);
  }, []);

  return (
    <div>
      <h2>População e Idioma</h2>
      {info ? (
        <>
          <p>População: {info.population}</p>
          <p>Idioma Principal: {Object.values(info.languages)[0]}</p>
          <p>Densidade Populacional: {(info.population / info.area).toFixed(2)} hab/km²</p> {/* Novo componente */}
        </>
      ) : (
        <p>Selecione um país na página inicial.</p>
      )}
    </div>
  );
}

export default Pagina2;

