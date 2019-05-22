// function to get establishments from the database
// !!! ASYNC !!! returns a promise so use .then() on the return value of the function

import { database } from 'firebase';

function getEstablishments() {
    return database().ref('establishments').once('value');
}

export default getEstablishments;