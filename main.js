function initMap() {
    var coordinates = {lat: 50.3934625, lng: 30.6299812},
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates
    });

    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        animation: google.maps.Animation.BOUNCE
    });
}

initMap();