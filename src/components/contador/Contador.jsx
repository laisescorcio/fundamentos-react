// COMPONENTE BASEADO EM CLASSE
import React, { Component } from "react";

import './Contador.css';

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (e) => {
    this.setState({
      passo: +e.target.value,
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <h3>{this.state.numero}</h3>
        <div>
          <label htmlFor="passoInput">Passo: </label>
          <input
            id="passoInput"
            type="number"
            value={this.state.passo}
            onChange={this.setPasso}
          />
        </div>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    );
  }
}

export default Contador;

//Observação: Como é um componente baseado em classe, deve ser chamado com 'this' (ex: this.inc; this.setState; etc)

//===============================

//Observação 2: Sobre o 'this'
//
// OPÇÃO I ( menos indicada )
//
// [...]
// constructor(props) {
//     super(props)
//
//     //torna o 'this' fixo ao this que está dentro do construtor
//     this.inc = this.inc.bind(this)
// }
//
//   inc() {
//       this.setState({
//           numero: this.state.numero + 1
//       })
//   }

// OPÇÃO II (tornar função inc uma arrow function)
//[...]
// inc = () => {
//     this.setState({
//         numero: this.state.numero + 1
//     })
// }
//
// render() {
//   return (
//     <div>
//       <h2>Contador</h2>
//       <h3>{this.state.numero}</h3>
//       <button onClick={this.inc)>+</button>
//     </div>
//   );
// }
//[...]

// OPÇÃO III (deixar a funçao inc e tornar a função do onClick uma arrow function)
//[...]
// inc() {
//     this.setState({
//         numero: this.state.numero + 1
//     })
// }
//
// render() {
//   return (
//     <div>
//       <h2>Contador</h2>
//       <h3>{this.state.numero}</h3>
//       <button onClick={(e) => this.inc())>+</button>
//     </div>
//   );
// }
//[...]
