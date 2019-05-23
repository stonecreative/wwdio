/**
 * takes in userLocation and establishments
 * adds distance property to establishments
 * returns a list of establishments sorted by closest first
 * @param { { lat: Number, long: Number } } userLocation 
 * @param { [{ lat: Number, long: Number }] } establishments 
 */

import calcDistance from '../_helpers/calcDistLongLat';

function sortEstablishmentsByClosest(userLocation, establishments) {
    establishments.forEach((establishment, i) => establishments[i].distance = calcDistance(
        Number(userLocation.lat),
        Number(userLocation.long),
        Number(establishment.lat),
        Number(establishment.long)
    ).toFixed(2));

    establishments.sort((a, b) => {
        const aDistNum = Number(a.distance);
        const bDistNum = Number(b.distance);

        if (aDistNum < bDistNum) return -1
        if (aDistNum > bDistNum) return 1
        return 0;
    });

    return establishments;
}

export default sortEstablishmentsByClosest;