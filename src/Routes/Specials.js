import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/Routes/Specials.scss';

function Specials() {
    return (
        <div className="route Specials">
            <h2>Specials</h2>
            <p>Coming soon!</p>
            <Link className="admin-link" to="/admin/"></Link>
        </div>
    );
}

export default Specials;