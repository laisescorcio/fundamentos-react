import React, { useState } from "react";

import "./Mega.css";

export default (props) => {
  const [qtde, setQtde] = useState(props.qtde || 6);
  const numerosIniciais = gerarNumeros(qtde);
  const [numeros, setNumeros] = useState(numerosIniciais);

  function gerarNumeroNaoContido(min, max, array) {
    //gera número aleatorio
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;

    //caso o array já incluir o numero aleatorio gerado, chamo a função para gerar um numero aleatorio novamente
    // se não, ele retorna o número aleatório gerado primeiro3
    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio;
  }

  function gerarNumeros(qtde) {
    //gera array com 7 numeros
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums);
        console.log([...nums, novoNumero]);
        //pega o numero anterior e acrescenta na array como um item o novo número. Exemplo:
        // [1]
        // [1, 3]
        // [1, 3, 5]
        // [1, 3, 5, 9]
        return [...nums, novoNumero];
      }, [])
      //para organizar em ordem crescente
      .sort((n1, n2) => n1 - n2);

    return numeros;
  }

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numeros.join(" ")}</h3>
      <div>
        <label>Qtde de Números</label>
        <input
          min="6"
          max="15"
          type="number"
          value={qtde}
          onChange={(e) => {
            setQtde(+e.target.value);
            setNumeros(gerarNumeros(+e.target.value));
          }}
        />
      </div>
      <button onClick={(_) => setNumeros(gerarNumeros(qtde))}>
        Gerar Números
      </button>
    </div>
  );
};
