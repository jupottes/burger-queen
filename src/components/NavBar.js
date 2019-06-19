import React from 'react';

const NavBar = () => {
    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Café da Manhã</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Almoço e Jantar</a>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
