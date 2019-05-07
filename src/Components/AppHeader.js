import React from 'react';

import '../Styles/Components/AppHeader.scss';
import AppNav from './AppNav';
function AppHeader() {
    return (
        <div className="component AppHeader">
            <header>
                <AppNav/>
            </header>
        </div>
    );
}

export default AppHeader;
