import React from 'react';
import { database } from 'firebase';
import calcDistance from '../_helpers/calcDistLongLat';

import '../Styles/Routes/Establishments.scss';

class Establishments extends React.Component {
    constructor() {
        super();

        this.state = {
            user: { location: { lat: 0, long: 0 } },
            establishments: [],
            distance: 0
        }
    }

    componentWillMount() {
        // get user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const user = {
                    location: {
                        lat: parseFloat(position.coords.latitude.toFixed(4)),
                        long: parseFloat(position.coords.longitude.toFixed(4))
                    }
                };

                this.setState({ user });

                // read firebase database and calculate the distance
                database().ref('establishments').once('value')
                    .then(snapshot => {
                        let establishments = snapshot.val();

                        establishments.forEach((establishment, i) => establishments[i].distance = calcDistance(
                            this.state.user.location.lat,
                            this.state.user.location.long,
                            establishment.lat,
                            establishment.long
                        ).toFixed(4))

                        // sort by closest distance first
                        establishments.sort((a, b) => {
                            if (a.distance < b.distance) return -1
                            if (a.distance > b.distance) return 1
                            return 0;
                        });

                        this.setState({ establishments });
                    });
            });
        } else {
            throw new Error('Geolocation not enabled.')
        }
    }

    render() {
        return (
            <div className="route Establishments">
                <h2>Establishments</h2>
                <div className="container user-location">Your current location is
                    <p>lat: <span className="bold">{this.state.user.location.lat}</span>,</p>
                    <p>long: <span className="bold">{this.state.user.location.long}</span>.</p>
                </div>
                {
                    this.state.establishments.map(establishment => {
                        return (
                            <p key={establishment.id}>You are currently&nbsp;
                                <span className="bold">{establishment.distance}</span> miles away from&nbsp;
                                <span className="bold">{establishment.name}</span>.
                            </p>
                        )
                    })
                }
            </div>
        );
    }
}

export default Establishments;