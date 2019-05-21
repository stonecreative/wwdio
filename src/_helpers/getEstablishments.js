// function to get establishments from the database
// returns a promise so use .then()

import { database } from 'firebase';

function getEstablishments() {
    return database().ref('establishments').once('value');
}

export default getEstablishments;