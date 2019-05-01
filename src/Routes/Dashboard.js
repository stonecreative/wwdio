import React, { useState, useEffect } from 'react';

import '../Styles/Routes/Dashboard.scss';

function Dashboard() {
    const [user, updateUserLocation] = useState({
        location: {
            lat: null,
            long: null
        }
    });

    useEffect(() => {
        const location = {};

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                location.lat = position.coords.latitude.toFixed(4);
                location.long = position.coords.longitude.toFixed(4);

                updateUserLocation({ location });
            });
        } else {
            throw new Error('Geolocation not enabled.')
        }
    }, []);

    return (
        <div className="route Dashboard">
            <h2>Dashboard</h2>
            <p>Your current location is
            lat: <span className="bold">{user.location.lat}</span>,
            long: <span className="bold">{user.location.long}</span>.
            </p>
        </div>
    );
}

export default Dashboard;