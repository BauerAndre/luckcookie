import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        email: "",
        password: "",
        error: "",
      },
    };
    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar(event) {
    const { name, email, password } = this.state;

    if (name !== "" && email !== "" && password !== "") {
      alert(`Nome; ${name} \n Email: ${email} \n Senha: ${password}`);
    } else {
      this.setState({ error: "Ops! parece que esta faltando algo" });
    }
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>Novo usuario</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.cadastrar}>
          <label>Name:</label>
          <input
            type="text"
            value={this.state.form.nome}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            value={this.state.form.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={this.state.form.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <br />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}
export default App;
