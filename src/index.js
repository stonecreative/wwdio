import React from 'react';
import ReactDOM from 'react-dom';

import './Styles/global.scss';

import App from './App';

import * as serviceWorker from './serviceWorker';

import * as firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyDes8wAbJ1Vf-76W1a7I9c33SJYbXiyzG0",
    authDomain: "locals-only-97a0c.firebaseapp.com",
    databaseURL: "https://locals-only-97a0c.firebaseio.com",
    projectId: "locals-only-97a0c",
    storageBucket: "locals-only-97a0c.appspot.com",
    messagingSenderId: "656137639438"
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
