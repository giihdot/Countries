import { useEffect, useState } from "react";

function Pagina1() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("countryInfo"));
    setInfo(savedData);
  }, []);

  return (
    <div>
      <h2>Informações Gerais</h2>
      {info ? (
        <>
          <p>Área: {info.area} km²</p>
          <p>Fuso Horário: {info.timezones[0]}</p>
          <p>Domínio da Internet: {info.tld[0]}</p>
        </>
      ) : (
        <p>Selecione um país na página inicial.</p>
      )}
    </div>
  );
}

export default Pagina1;