import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/Routes/Home.scss';

function Home() {
    return (
        <div className="route Home">
            <h2>Home</h2>
            <h4>Welcome to Where We Drinkin?</h4>
            <p>
                Check out the Bars and Specials pages<br />
                to see specials near YOU!
            </p>
            <Link className="admin-link" to="/admin/"></Link>
        </div>
    );
}

export default Home;