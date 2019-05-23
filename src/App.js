import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppNav from './Components/AppNav';

import Home from './Routes/Home';
import Establishments from './Routes/Establishments';
import Specials from './Routes/Specials';
import Admin from './Routes/Admin';

import './Styles/App.scss';

function App() {
    return (
        <div className="App">
            <div className="App-background"></div>
            <Router>
                <AppNav />
                <Route path="/" exact component={Home} />
                <Route path="/establishments/" component={Establishments} />
                <Route path="/specials/" component={Specials} />
                <Route path="/admin/" component={Admin} />
            </Router>
        </div>
    );
}

export default App;
