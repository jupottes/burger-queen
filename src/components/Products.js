import React from 'react';
import './products.css';
import Contador from './Contador';

class Cafedamanha extends React.Component {

    render() {
        return (
            <div>
                <div className="description">
                    <h3>Café Americano - 5,00</h3><Contador />
                </div>
                <div className="description">
                    <h3>Café com Leite - 7,00</h3><Contador />
                </div>
                <div className="description">
                    <h3>Sanduiche de Presunto e Queijo - 10,00</h3><Contador />
                </div>
                <div className="description">
                    <h3>Suco de Fruta Natural - 7,00</h3><Contador />
                </div>
            </div>
        );
    }
}


export default Cafedamanha;