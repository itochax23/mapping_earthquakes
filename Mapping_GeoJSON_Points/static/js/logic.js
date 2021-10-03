// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL, add this after the tileLayer method to load map first
let airportData = "https://raw.githubusercontent.com/itochax23/mapping_earthquakes/main/majorAirports.json";

// // Add GeoJSON data. Note: Coordinates appear in reverse order
// let sanFranAirport = {
//   "type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  pointToLayer: function(feature, latlng) {
    console.log(feature);
    return L.marker(latlng)
    .bindPopup("<h2>Airport code: " + feature.properties.faa + "</h2> <hr>" + "<h3>Airport name: " + feature.properties.name + "</h3>");
    }
    
    }).addTo(map);
});


// L.geoJSON(sanFranAirport, {
//   // Turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2> <hr>" + "<h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
//   }

// }).addTo(map);



/* To change the map's style, change the map id using the list of Mapbox ids below:

mapbox/streets-v11
mapbox/outdoors-v11
mapbox/light-v10
mapbox/dark-v10
mapbox/satellite-v9
mapbox/satellite-streets-v11 
mapbox://styles/mapbox/navigation-night-v1*/

