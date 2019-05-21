import React from 'react';
import { Link } from "react-router-dom";

import logo from '../Assets/Images/logo.png';

import '../Styles/Components/AppNav.scss';

function AppNav() {
    return (
        <div className="component AppNav">
            <div className="flex-container">
                <div className="logo-container">
                    <img className="wwd-logo" src={logo} alt="Where We Drinkin?"></img>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/establishments/">Bars</Link>
                        </li>
                        <li>
                            <Link to="/specials/">Specials</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default AppNav;
