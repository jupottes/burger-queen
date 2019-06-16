import React from 'react';
import Button from './button'
import './contador.css';

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
          <Button text="-" onClick={this.decrementar.bind(this)} />
          <h3 className="quant">{this.state.contador}</h3>
          <Button text="+" onClick={this.incrementar.bind(this)} />
        </div>
      </section >
    );
  }
}


export default Contador;