import React from 'react';

import getUserLocation from '../_helpers/getUserLocation';
import getEstablishments from '../_helpers/getEstablishments';
import sortEstablishmentsByClosest from '../_helpers/sortEstablishmentsByClosest';

import '../Styles/Routes/Establishments.scss';

class Establishments extends React.Component {
    constructor() {
        super();

        this.state = {
            user: { userLocation: { lat: 0, long: 0 } },
            establishments: []
        }
    }

    componentWillMount() {
        const userLocation = getUserLocation();

        getEstablishments()
            .then(snapshot => {
                let establishments = sortEstablishmentsByClosest(userLocation, snapshot.val());

                this.setState({ user: { userLocation } });
                this.setState({ establishments })
            });
    }

    render() {
        return (
            <div className="route Establishments">
                <h2>Establishments</h2>
                <div className="container user-location">Your current location is
                    <p>lat: <span className="bold">{this.state.user.userLocation.lat}</span>,</p>
                    <p>long: <span className="bold">{this.state.user.userLocation.long}</span>.</p>
                </div>
                {
                    this.state.establishments.map(establishment => {
                        return (
                            <p key={establishment.id}>You are currently&nbsp;
                                <span className="bold">{establishment.distance}</span> miles away from
                                <br />
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