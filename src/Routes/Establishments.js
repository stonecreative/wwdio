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
                        this.setState({ establishments: snapshot.val() })

                        if (this.state.user.location && this.state.establishments[0]) {
                            this.setState({
                                distance: calcDistance(
                                    this.state.user.location.lat,
                                    this.state.user.location.long,
                                    this.state.establishments[0].lat,
                                    this.state.establishments[0].long
                                ).toFixed(4)
                            });
                        }
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
                <div>Your current location is
                    <p>lat: <span className="bold">{this.state.user.location.lat}</span>,</p>
                    <p>long: <span className="bold">{this.state.user.location.long}</span>.</p>
                </div>
                <p>You are currently&nbsp;
                    <span className="bold">{this.state.distance ? this.state.distance : ''}</span> miles away from the&nbsp;
                    <span className="bold">{this.state.establishments[0] ? this.state.establishments[0].name : ''}</span>.
                </p>
            </div>
        );
    }
}

export default Establishments;