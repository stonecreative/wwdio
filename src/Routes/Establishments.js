import React, { useState, useEffect } from 'react';
import { database } from 'firebase';
import calcDistance from '../_helpers/calcDistLongLat';

import '../Styles/Routes/Establishments.scss';

function Establishments() {
    const [user, updateUser] = useState({ location: { lat: 0, long: 0 } });
    const [establishments, updateEstablishments] = useState([]);
    let [distance, updateDistance] = useState(0);

    useEffect(() => {
        // get user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const user = {
                    location: {
                        lat: parseFloat(position.coords.latitude.toFixed(4)),
                        long: parseFloat(position.coords.longitude.toFixed(4))
                    }
                };

                updateUser(user);

                // read firebase database and calc distance
                database().ref('establishments').once('value')
                    .then(snapshot => {
                        updateEstablishments(snapshot.val());

                        // pass return of calcDistance to updateDistance
                        if (user.location && establishments[0]) {
                            updateDistance(
                                calcDistance(
                                    user.location.lat,
                                    user.location.long,
                                    establishments[0].lat,
                                    establishments[0].long
                                ).toFixed(4)
                            );
                        }
                    });
            });
        } else {
            throw new Error('Geolocation not enabled.')
        }
    });

    return (
        <div className="route Establishments">
            <h2>Establishments</h2>
            <p>Your current location is
            lat: <span className="bold">{user.location.lat}</span>,
            long: <span className="bold">{user.location.long}</span>.
            </p>
            <p>You are currently&nbsp;
            <span className="bold">{distance ? distance : ''}</span> miles away from&nbsp;
            <span className="bold">{establishments[0] ? establishments[0].name : ''}</span>.
            </p>
        </div>
    );
}

export default Establishments;