import React from 'react';
import './products.css';
import Contador from './Contador';

class Almocoejantar extends React.Component {

    render() {
        return (
            <div>
                <div className="description">
                    <h3>Hamburguer Simples - 10,00</h3><Contador />
                </div>
                <div className="description">
                    <h3>Hamburguer Duplo - 15,00</h3><Contador />
                </div>
                <div className="description">
                    <h3>Batata Frita - 5,00</h3><Contador />
                </div>
                <div className="description">
                    <h3>Anéis de Cebola - 5,00</h3><Contador />
                </div>
                <div className="description">
                    <h3>Água 500ml - 5,00</h3><Contador />
                </div>
                <div className="description">
                    <h3>Água 750ml - 7,00</h3><Contador />
                </div>
                <div className="description">
                    <h3>Bebida Gaseificada 500ml - 7,00</h3><Contador />
                </div>
                <div className="description">
                    <h3>Bebida Gaseificada 750ml - 10,00</h3><Contador />
                </div>
            </div>
        );
    }
}


export default Almocoejantar;