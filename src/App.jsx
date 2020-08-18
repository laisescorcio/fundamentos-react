import './App.css'

import React from "react";

//Não precisa ser o mesmo nome 'Primeiro', mas o que está aqui no import terá que ser o nome do elemento
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar' 
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from "./components/layout/Card";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

// '_' dizendo que o parâmetro não me interessa nessa função
export default (_) => (
  //pode retirar o corpo da função {return()}
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
    <Card titulo="#08 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={21} />
        <UsuarioInfo usuario={{ nome: 'Fernando' }}/>
      </Card>

    <Card titulo="#07 - Desafio Repetição de Produtos" color="#3A9AD9">
        <TabelaProdutos />
      </Card>

    <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAlunos />
      </Card>

      <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Silva">
        <FamiliaMembro nome="Pedro" />
        <FamiliaMembro nome="Ana" />
        <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Número Aleatório" color="#FA6900">
        <NumeroAleatorio min={10} max={50} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
        <ComParametro titulo="Situação do Aluno" aluno="Maria" nota={9.5} />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
