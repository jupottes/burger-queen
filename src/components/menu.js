import React from 'react';
import Cafedamanha from './cafedamanha';
import Almocoejantar from './almocoejantar';
import './menu.css';

class Menu extends React.Component {

    render() {
        return (
            <div>

                <div className="topologo">
                    <div className="topo">
                        <h1>BURGUER QUEEN</h1>
                    </div>
                </div>

                <div className="menu-manha">
                    <div>
                        <h1 className="title">CAFÉ DA MANHÃ</h1>
                    </div>
                    <div className="products">
                        <Cafedamanha />
                    </div>
                </div>

                <div className="menu-tarde">
                    <div>
                        <h1 className="title">ALMOÇO E JANTAR</h1>
                    </div>
                    <div className="products">
                        <Almocoejantar />
                    </div>
                </div>

                <div className="dados">
                    <div className="title">
                        <h5>Observações</h5>
                        <input></input>
                        <h5>Nome Cliente</h5>
                        <input></input>
                    </div>
                </div>

                <div className="footter">
                    <div className="topo">
                        <h1>MENU</h1>
                    </div>
                </div>

            </div>
        );
    }
}


export default Menu;