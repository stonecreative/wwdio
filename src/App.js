import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './Styles/App.scss';

import AppHeader from './Components/AppHeader';
import AppNav from './Components/AppNav';

import Home from './Routes/Home';
import Dashboard from './Routes/Dashboard';
import About from './Routes/About';

function App() {
    return (
        <div className="App">
            <AppHeader />
            <Router>
                <AppNav />
                <Route path="/" exact component={Home} />
                <Route path="/dashboard/" component={Dashboard} />
                <Route path="/about/" component={About} />
            </Router>
        </div>
    );
}

export default App;
