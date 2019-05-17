// FIND COORDINATES OF CURRENT LOCATION  

var currentLocation = document.getElementById('coordinatesStore'); 
document.querySelector('.add-button').addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) => {
    currentLocation.value = latitude + ", " + longitude;
    });
  } else {
    currentLocation.value = "Geolocation is not supported by this browser.";
  }
});

    // CLEAR FORM FIELDS

// var clearField = document.querySelectorAll('.clear-button');
// document.querySelectorAll('.clear-button').addEventListener('click', () => clearField());
//     function clearField() {
//     currentLocation.value = "";
//       }

    // Array.prototype.forEach.call(
    //   document.querySelectorAll('.clear-button'),
    //   (button, i) => {
    //     button.addEventListener('click', () => clearField(i));
    //   }
    // );

    // function clearField() {
    //     currentLocation.value = "";
    // }
