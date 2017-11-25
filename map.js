
/**
 * Created by Mari on 29.12.2016.
 */
var map;
var MarkersArray= []
function initMap() {

    var location = {lat: 41.701974, lng: 44.798289}
    map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 8


    });

    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'GIPA'
    });
    MarkersArray.push(marker);
}






