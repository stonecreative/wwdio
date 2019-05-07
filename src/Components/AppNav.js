import React from 'react';
import { Link } from "react-router-dom";

import '../Styles/Components/AppNav.scss';

function AppNav() {
    return (
        <div className="component AppNav">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/establishments/">Establishments</Link>
                    </li>
                    <li>
                        <Link to="/specials/">Specials</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default AppNav;
