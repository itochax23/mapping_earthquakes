// Add console.log to check to see if our code is working.
console.log("working");

// We create the map object with options.
let map = L.map('mapid').setView([40.7, -94.5], 5);

// Coordinates for each point to be used in the polyline.
let line = [
  [37.6213, -122.3790],
  [30.198231474919005, -97.66622415397005],
  [43.67854009902276, -79.62473386931336],
  [40.64204379146381, -73.77809618465669]
];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
  color: "blue",
  dashArray: '5,7',
  weight: '4',
  opacity: '0.5'
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

/* To change the map's style, change the map id using the list of Mapbox ids below:

mapbox/streets-v11
mapbox/outdoors-v11
mapbox/light-v10
mapbox/dark-v10
mapbox/satellite-v9
mapbox/satellite-streets-v11 */

