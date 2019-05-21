// function to get the user's location
// throws error is gelocation not enabled

function getUserLocation() {
    const userLocation = {
        lat: 0,
        long: 0
    };

    if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(position => {
            userLocation.lat = Number(position.coords.latitude.toFixed(2));
            userLocation.long = Number(position.coords.longitude.toFixed(2));
        });
    } else {
        throw new Error('Couldn\'nt getUserLocation because geolocation is not enabled');
    }

    return userLocation;
}

export default getUserLocation;