import React from 'react';
import { Link } from 'react-router-dom';

import getUserLocation from '../_helpers/getUserLocation';
import getEstablishments from '../_helpers/getEstablishments';
import sortEstablishmentsByClosest from '../_helpers/sortEstablishmentsByClosest';

import '../Styles/Routes/Establishments.scss';

const globalStore = window._wwd_.globalStore;

class Establishments extends React.Component {
    constructor() {
        super();

        this.state = {
            user: globalStore.user,
            establishments: globalStore.establishments
        }
    }

    componentWillMount() {
        if (!this.state.user.userLocation.lat) {
            const user = { userLocation: getUserLocation() };

            globalStore.user = user;

            this.setState({ user });
        }

        if (!this.state.establishments.length) {
            getEstablishments()
                .then(firebaseDbSnapshot => {
                    const establishments = sortEstablishmentsByClosest(this.state.user.userLocation, firebaseDbSnapshot.val());

                    globalStore.establishments = establishments;

                    this.setState({ establishments });
                });
        }
    }

    render() {
        const user = this.state.user;
        const establishments = this.state.establishments;

        return (
            <div className="route Establishments">
                <h2>Establishments</h2>
                <div className="container user-location">Your current location is
                    <p>lat: <span className="bold">{user.userLocation.lat}</span>,</p>
                    <p>long: <span className="bold">{user.userLocation.long}</span>.</p>
                </div>
                {
                    establishments.map(establishment => {
                        return (
                            <p key={establishment.id}>You are currently&nbsp;
                                <span className="bold">{establishment.distance}</span> miles away from
                                <br />
                                <span className="bold">{establishment.name}</span>.
                            </p>
                        )
                    })
                }
                <Link className="admin-link" to="/admin/"></Link>
            </div>
        );
    }
}

export default Establishments;