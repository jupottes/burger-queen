import React from 'react';
import './menu.css';
import NavBar from './NavBar'
import Menu1 from './menu1';

class Menu extends React.Component {

    render() {
        return (
            <div className="container col-12">
                <div>
                    <div className="topo">
                        <h1>BURGUER QUEEN</h1>
                    </div>
                </div>

                <div className="menu-manha">
                    <div>
                        <NavBar />
                    </div>
                    <div className="products">
                        <Menu1 />
                    </div>
                </div>

                <div className="dados">

                </div>

                <div className="footter">

                </div>

            </div>
        );
    }
}

export default Menu;