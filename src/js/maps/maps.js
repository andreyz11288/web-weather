import refs from '../refs';
<<<<<<< HEAD
import darkTheme from './mapThemeDark.json';
=======
>>>>>>> 8b4f5d67aa31eeadcbb67776d8b36d5bec6d8fa3

let geocoder;
let map;

export default class MyMap {
  constructor() {}

  initializeMap() {
<<<<<<< HEAD
    let mapStyle;
    if (localStorage.getItem('LIGHT')) {
      mapStyle = [];
    } else {
      mapStyle = darkTheme;
    }
=======
>>>>>>> 8b4f5d67aa31eeadcbb67776d8b36d5bec6d8fa3
    geocoder = new google.maps.Geocoder();
    const latlng = new google.maps.LatLng(47.563, 24.113);
    const mapOptions = {
      zoom: 2,
      center: latlng,
<<<<<<< HEAD
      styles: mapStyle,
=======
>>>>>>> 8b4f5d67aa31eeadcbb67776d8b36d5bec6d8fa3
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  eventListenerOnButtons({ target }) {
    map.overlayMapTypes.pop();

    if (target.dataset.layer === 'remove') {
<<<<<<< HEAD
      this.initializeMap();
      this.codeAddress();
=======
>>>>>>> 8b4f5d67aa31eeadcbb67776d8b36d5bec6d8fa3
      return;
    }

    this.addRadar(target.dataset.layer, '50');
  }

  addRadar(layer, opacity) {
    const radar = new google.maps.ImageMapType({
      getTileUrl: function (coord, zoom) {
        return [
<<<<<<< HEAD
          `https://maps.aerisapi.com/tEb0juWxDg7M2WMXyibIh_oRkeZc8ljfmszz1Z2twDOdtwDb2xgR3R9HirYD6n/${layer}:${opacity}/`,
=======
          `https://maps.aerisapi.com/2maTDvFREtWHurd6iYTyL_uD8Jme8ANIunPUXr5vzU1jfyuED7pWqcU88lahdq/${layer}:${opacity}/`,
>>>>>>> 8b4f5d67aa31eeadcbb67776d8b36d5bec6d8fa3
          zoom,
          '/',
          coord.x,
          '/',
          coord.y,
          '/current.png',
        ].join('');
      },
      tileSize: new google.maps.Size(256, 256),
    });

    map.overlayMapTypes.push(radar);
  }

  codeAddress() {
<<<<<<< HEAD
    const address = refs.headerInput.value;

    geocoder.geocode({ address }, function (results, status) {
      if (status === 'OK') {
        map.zoom = 7;
=======
    //   console.log(refs.headerInput);
    const address = refs.headerInput.value;
    map.zoom = 7;

    geocoder.geocode({ address }, function (results, status) {
      if (status === 'OK') {
>>>>>>> 8b4f5d67aa31eeadcbb67776d8b36d5bec6d8fa3
        map.setCenter(results[0].geometry.location);
        const marker = new google.maps.Marker({
          map,
          position: results[0].geometry.location,
        });
      } else {
<<<<<<< HEAD
        swal({
          title: 'Please, write city or country name!',
          icon: 'info',
        });
=======
        alert('Geocode was not successful for the following reason: ' + status);
>>>>>>> 8b4f5d67aa31eeadcbb67776d8b36d5bec6d8fa3
      }
    });
  }
}
<<<<<<< HEAD
=======

// let geocoder;
// let map;

// // const loadGoogleMaps = () => {
// //   return new Promise((resolve, reject) => {
// //     refs.googleMapsScript.onload = () => resolve();
// //     refs.googleMapsScript.onerror = () => reject();
// //   });
// // };

// async function initializeMap() {
//   //   await loadGoogleMaps();
//   geocoder = new google.maps.Geocoder();
//   const latlng = new google.maps.LatLng(47.563, 24.113);
//   const mapOptions = {
//     zoom: 2,
//     center: latlng,
//   };

//   map = new google.maps.Map(document.getElementById('map'), mapOptions);

//   //   addEventListenersOnButtons();
// }

// function eventListenerOnButtons({ target }) {
//   map.overlayMapTypes.pop();

//   if (target.dataset.layer === 'remove') {
//     return;
//   }

//   addRadar(target.dataset.layer, '50');
// }

// function addRadar(layer, opacity) {
//   const radar = new google.maps.ImageMapType({
//     getTileUrl: function (coord, zoom) {
//       return [
//         `https://maps.aerisapi.com/GrAzy4MYDmdT7vTgRDBkx_NRWKJNNZ7xqGXjwqmiCYsVhji3eOH9Jg31vpUS6p/${layer}:${opacity}/`,
//         zoom,
//         '/',
//         coord.x,
//         '/',
//         coord.y,
//         '/current.png',
//       ].join('');
//     },
//     tileSize: new google.maps.Size(256, 256),
//   });

//   map.overlayMapTypes.push(radar);
// }

// function codeAddress() {
//   //   console.log(refs.headerInput);
//   const address = refs.headerInput.value;
//   map.zoom = 7;

//   geocoder.geocode({ address }, function (results, status) {
//     if (status === 'OK') {
//       map.setCenter(results[0].geometry.location);
//       const marker = new google.maps.Marker({
//         map,
//         position: results[0].geometry.location,
//       });
//     } else {
//       alert('Geocode was not successful for the following reason: ' + status);
//     }
//   });
// }

// export { initializeMap, eventListenerOnButtons, codeAddress };

// refs.searchInput.addEventListener('change', codeAddress);
>>>>>>> 8b4f5d67aa31eeadcbb67776d8b36d5bec6d8fa3
