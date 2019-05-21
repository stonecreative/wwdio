import React from 'react';

import getUserLocation from '../_helpers/getUserLocation';
import getEstablishments from '../_helpers/getEstablishments';
import sortEstablishmentsByClosest from '../_helpers/sortEstablishmentsByClosest';

import globalStore from '../_stores/globalStore';

import '../Styles/Routes/Home.scss';

function Home() {
    const userLocation = getUserLocation();

    globalStore.user = { userLocation };

    getEstablishments()
        .then(snapshot => {
            globalStore.establishments = sortEstablishmentsByClosest(userLocation, snapshot.val());
        });

    return (
        <div className="route Home">
            <h2>Home</h2>
            <h4>Welcome to Where We Drinkin?</h4>
            <p>
                Check out the Bars and Specials pages<br />
                to see specials near YOU!
            </p>
        </div>
    );
}

export default Home;