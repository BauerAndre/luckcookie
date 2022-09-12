import React from "react";

const Bemvindo = (props) => {
  return (
    <div>
      <h2>Bem vindo(a) {props.nome}</h2>
      <h3>Tenho {props.idade} anos</h3>
    </div>
  );
};

function App() {
  return (
    <div>
      Ola mundo
      <Bemvindo nome="Matheus" idade="24" />
      <Bemvindo nome="Amanda" idade="19" />
      <h1>Curso react</h1>
    </div>
  );
}

export default App;
