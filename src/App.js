import React, { Component } from "react";

class Equipe extends Component {
  render() {
    return (
      <div>
        <Sobre
          nome={this.props.nome}
          cargo={this.props.cargo}
          idade={this.props.idade}
        />
        <Social />
        <hr />
      </div>
    );
  }
}

class Sobre extends Component {
  render() {
    return (
      <div>
        <h2>Ola sou o(a) {this.props.nome}</h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Idade: {this.props.idade} anos</h3>
      </div>
    );
  }
}

const Social = () => {
  return (
    <div>
      <a>Facebook </a>
      <a>LinkedIn </a>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>Conheca nossa equipe:</h1>
      <Equipe nome="Matheus" cargo="Programador" idade="24" />
      <Equipe nome="Lucas" cargo="Designer" idade="20" />
    </div>
  );
}

export default App;
