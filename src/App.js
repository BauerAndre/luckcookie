import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.frases = [
      "Siga os bons e aprenda com eles.",
      "O bom-senso vale mais do que muito conhecimento.",
      "O riso é a menor distância entre duas pessoas.",
      "Deixe de lado as preocupações e seja feliz.",
      "Realize o óbvio, pense no improvável e conquiste o impossível.",
      "Acredite em milagres, mas não dependa deles.",
      "A maior barreira para o sucesso é o medo do fracasso.",
    ];
  }

  render() {
    return (
      <div className="container">
        <img src={require("./assets/biscoito.png")} className="img" />
        <Botao name="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">Frase numero 1 aleatoria</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={}>{this.props.name}</button>
      </div>
    );
  }
}

export default App;
