import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './Styles/App.scss';

import AppHeader from './Components/AppHeader';
import AppNav from './Components/AppNav';

import Home from './Routes/Home';
import Establishments from './Routes/Establishments';
import Specials from './Routes/Specials';

function App() {
    return (
        <div className="App">
            <AppHeader />
            <Router>
                <div className="App-background"></div>
                <AppNav />
                <Route path="/" exact component={Home} />
                <Route path="/establishments/" component={Establishments} />
                <Route path="/specials/" component={Specials} />
            </Router>
        </div>
    );
}

export default App;
