import React from "react";

export default (props) => {
    const callbackProps = props.quandoClicar

    const gerarIdade =() => parseInt(Math.random() * (20)) + 50
    const gerarNerd =() => Math.random() > 0.5

  return (
    <div>
      <div>Filho</div>      
      <button onClick={_ => callbackProps("João", gerarIdade(), gerarNerd())}>
        Fornecer Informações
      </button>
    </div>
  );
};

// Observação: Foi substituído o 'e' (de event) da função anônima por '_' porque não estamos trabalhando com um evento no clique, apenas chamando uma função passando os dados
