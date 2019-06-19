import React from 'react';
import CardProduct from './produtos';


class Menu1 extends React.Component {

    // cafedamanha = {
    //     title: 'nome',
    //     text: 'preco',
    //     action: () => alert('ok')
    // }

    product01 = {
        nome: "Café Americano",
        preco: 5
    }

    product02 = {
        nome: "Café com Leite",
        preco: 7
    }

    product03 = {
        nome: "Sanduiche de Presunto e Queijo",
        preco: 10
    }

    product04 = {
        nome: "Suco de Fruta Natural",
        preco: 7
    }

    // menu1 = [
    //     { nome: "Café Americano", preco: 5 },
    //     { nome: "Café com Leite", preco: 7 },
    //     { nome: "Sanduiche de Presunto e Queijo", preco: 10 },
    //     { nome: "Suco de Fruta Natural", preco: 7 }
    // ];


    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <CardProduct title={this.product01.nome}
                        text={this.product01.preco}
                    />
                    <CardProduct title={this.product02.nome}
                        text={this.product02.preco}
                    />
                    <CardProduct title={this.product03.nome}
                        text={this.product03.preco}
                    />
                    <CardProduct title={this.product03.nome}
                        text={this.product03.preco}
                    />
                </div>
            </div>
        );
    }
}

export default Menu1;