// function used to calculate distance between 2 pairs of lat and long coords
// miles is the default return value unit; however, if 'km' is passed to unit parameter, then result is in kilometers

function calcDistance(lat1, long1, lat2, long2, unit) {
    if ((lat1 === lat2) && (long1 === long2)) {
        return 0;
    } else {
        const radlat1 = Math.PI * lat1 / 180;
        const radlat2 = Math.PI * lat2 / 180;
        const theta = long1 - long2;
        const radtheta = Math.PI * theta / 180;
        let distance = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

        if (distance > 1) { distance = 1; }

        distance = Math.acos(distance);
        distance = distance * 180 / Math.PI;
        distance = distance * 60 * 1.1515;

        if (unit === "km") { distance = distance * 1.609344 }

        return distance;
    }
}

export default calcDistance;