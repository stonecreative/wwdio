import React from 'react';
import ReactDOM from 'react-dom';

// -----------------------------------------------------------------------------------------------------

import getUserLocation from './_helpers/getUserLocation';
import getEstablishments from './_helpers/getEstablishments';
import sortEstablishmentsByClosest from './_helpers/sortEstablishmentsByClosest';

// just to initialize the global store
import _globalStore from './_stores/globalStore';

// -----------------------------------------------------------------------------------------------------

import './Styles/global.scss';

import App from './App';

// -----------------------------------------------------------------------------------------------------

import * as serviceWorker from './serviceWorker';

// -----------------------------------------------------------------------------------------------------
// Firebase initialization

import * as firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyDes8wAbJ1Vf-76W1a7I9c33SJYbXiyzG0",
    authDomain: "locals-only-97a0c.firebaseapp.com",
    databaseURL: "https://locals-only-97a0c.firebaseio.com",
    projectId: "locals-only-97a0c",
    storageBucket: "locals-only-97a0c.appspot.com",
    messagingSenderId: "656137639438"
});

// -----------------------------------------------------------------------------------------------------
// globalStore initialization

let globalStore = _globalStore; // just so linter doesn't yell at me
globalStore = window._wwd_.globalStore;

let userLocation;
let establishments;

if (!globalStore.user.userLocation.lat) {
    userLocation = getUserLocation();
    globalStore.user.userLocation = userLocation;
}

if (!globalStore.establishments.length) {
    getEstablishments()
        .then(firebaseDbSnapshot => {
            establishments = sortEstablishmentsByClosest(userLocation, firebaseDbSnapshot.val());
            globalStore.establishments = establishments;
        });
}

// -----------------------------------------------------------------------------------------------------

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
