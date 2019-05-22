const globalStore = {
    _user: {
        userLocation: {
            lat: 0,
            long: 0
        }
    },
    get user() { return this._user; },
    set user(value) { this._user = value; },

    _establishments: [],
    get establishments() { return this._establishments; },
    set establishments(value) { this._establishments = value; }
};

window._wwd_.globalStore = globalStore;