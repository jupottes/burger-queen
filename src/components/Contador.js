import React from 'react';
import Button from './button'

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  handleChange(event) {
    this.setState({})
  }

  decrementar() {
    this.setState({
      contador: this.state.contador - 1,
    })
  }

  incrementar() {
    this.setState({
      contador: this.state.contador + 1,
    })
  }

  render() {
    return (
      <section>
        <div id="contador" className="App">
        <h1 className="produtos">Hamburguer</h1>
          <Button text="-" onClick={this.decrementar.bind(this)} />
          <h1 className="quant">{this.state.contador}</h1>
          <Button text="+" onClick={this.incrementar.bind(this)} />
        </div>
      </section >
    );
  }
}


export default Contador;