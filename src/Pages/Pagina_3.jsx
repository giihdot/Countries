import { useEffect, useState } from "react";

function Pagina3() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("countryInfo"));
    setInfo(savedData);
  }, []);

  return (
    <div>
      <h2>Capital, Região e Moeda</h2>
      {info ? (
        <>
          <p>Capital: {info.capital}</p>
          <p>Região: {info.region}</p>
          <p>Moeda: {Object.values(info.currencies)[0].name}</p>
        </>
      ) : (
        <p>Selecione um país na página inicial.</p>
      )}
    </div>
  );
}

export default Pagina3;