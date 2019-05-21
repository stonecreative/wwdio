const global = {
    _user: {
        userLocation: {
            lat: 0,
            long: 0
        }
    },
    get user() {
        return this._user;
    },
    set user(value) {
        if (
            value.userLocation &&
            !isNaN(value.userLocation.lat) && typeof value.userLocation.lat === 'number' &&
            !isNaN(value.userLocation.long) && typeof value.userLocation.lat === 'number'
        ) {
            this._user = value;
        } else {
            throw new Error('Assignment to globalStore _user/user must be formatted as { userLocation: { lat: number , long: number } }');
        }
    },

    _establishments: [],
    get establishments() {
        return this._establishments;
    },
    set establishments(value) {
        if (Array.isArray(value)) {

        } else {
            throw new Error('Assignment to globalStore _establishments/establishments must be an array')
        }
    }
}

export default global;