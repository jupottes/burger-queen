import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const menu1 = [
    { nome: "Café Americano", preco: 5 },
    { nome: "Café com Leite", preco: 7 },
    { nome: "Sanduiche de Presunto e Queijo", preco: 10 },
    { nome: "Suco de Fruta Natural", preco: 7 }
];


const CardProduct = (props) => (
    <div className="col-12 col-sm-4">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="imgs/cartaodecredito.png" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Button variant="primary">Adicionar</Button>
            </Card.Body>
        </Card>
    </div>
);

export default CardProduct;