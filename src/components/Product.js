import React from 'react';
// import ReactDOM from 'react-dom';
import './product.css';
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Product">
        <header className="Product-header">
          <h1>Café americano R$ 5,00</h1>
        </header>
      </div>
    );
  }
}

export default Product;
