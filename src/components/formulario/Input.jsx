// COMPONENTE CONTROLADO E NÃO CONTROLADO
// esse componente só irá refletir na interface se o estado modificar
import React, { useState } from "react";

import "./Input.css";

export default (props) => {
  const [valor, setValor] = useState("Inicial");

  function quandoMudar(e) {
    setValor(e.target.value);
  }

  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div style={{
          display: 'flex',
          flexDirection: 'column'
      }}>
      <input value={valor} onChange={quandoMudar} />
      <input value={valor} readOnly />
      <input value={undefined} />
      </div>
    </div>
  );
};

// Observação: por ser um componente controlado (input) é necessário ter alguma função para modificar o valor, se não houver, utillizar para que o componente seja apenas para leitura (usar readOnly)

// <input value={undefined} /> é um uncontrolled component, não há vinculação com estado