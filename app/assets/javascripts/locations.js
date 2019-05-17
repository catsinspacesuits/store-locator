// FIND COORDINATES OF CURRENT LOCATION  

window.onload = function() {
    var currentLocation = document.getElementById('coordinatesStore');
    document.querySelector('.add-button').addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(({
                coords: {
                    latitude,
                    longitude
                }
            }) => {
                currentLocation.value = latitude + ", " + longitude;
            });
        } else {
            currentLocation.value = "Geolocation is not supported by this browser.";
        }
    });
}
