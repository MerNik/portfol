import image from './map_marker.svg';

/*global google*/
export default function() {
  let markerImage = new google.maps.MarkerImage(
    image,
    new google.maps.Size(30, 45)
  );
  var mapCenter = {lat: 54.7067730, lng: 20.49555};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: mapCenter,
    draggable: true,
    mapTypeControl: false,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: false,
    styles: 
    [
      {
        'featureType': 'road',
        'elementType': 'geometry',
        'stylers': [
          {
            'lightness': 100,
          },
          {
            'visibility': 'simplified',
          },
        ],
      },
      {
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': [
          {
            'visibility': 'on',
          },
          {
            'color': '#86a77a',
          },
        ],
      },
      {
        'featureType': 'poi',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'color': '#fff',
          },
        ],
      },
      {
        'featureType': 'road',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'color': '#D1D1B8',
          },
        ],
      },
    ],
  });
  var marker = new google.maps.Marker({
    position: {lat: 54.7093730, lng: 20.5026030},
    map: map,
    title: 'Московский проспект, 40',
    icon: markerImage,
  });
}

