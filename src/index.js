// import relativo: import de um arquivo dentro da minha aplicação
import "./index.css";

// para renderizar na tela
import ReactDOM from "react-dom";
// sempre que estiver em JSX (converte para JS), importar o React
import React from "react";

import App from './App'

// para renderizar na tela
// primeiro parametro: O que eu quero que renderize (ola react)
// segundo parametro: elemento que eu quero inserir o 'ola react'
ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
// Isso é igual a: ReactDOM.render('Olá, React!!!', document.getElementById('root'))
