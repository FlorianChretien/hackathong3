function initMap() {
    var muAngouleme  = {lat: 45.64882, lng: 0.15215};
    var muCACP       = {lat: 44.84828, lng: -0.57216};
    var musBeauArt   = {lat: 44.83736, lng: -0.58054};
    var musNatAdriDu = {lat: 45.83263, lng: 1.25267};
    var musJacChirac = {lat: 45.40876, lng: 1.93971};

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 44.954, lng: 0.578},
        zoom: 7,
        styles: [
            {"elementType": "geometry",
                "stylers": [ { "color": "#212121" } ]
            },
            {"elementType": "labels.icon",
                "stylers": [{ "visibility": "off" } ]
            },
            { "elementType": "labels.text.fill",
                "stylers": [{ "color": "#757575"  } ]
            },
            { "elementType": "labels.text.stroke",
                "stylers": [ {  "color": "#212121" }  ]
            },
            { "featureType": "administrative",
                "stylers": [ { "visibility": "on"  }  ]
            },
            { "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [ { "color": "#757575"  }  ]
            },
            { "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [ { "color": "#9e9e9e" }  ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [ { "visibility": "off" } ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#181818"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1b1b1b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2c2c2c"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8a8a8a"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#373737"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3c3c3c"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#4e4e4e"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3d3d3d"
                    }
                ]
            }
        ]
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Le titre</h1>'+
        '<div id="bodyContent">'+
        '<p>La description.</p>'+
        '<p class="button-quete-start"><a href="http://localhost/_ECVDigital/hackathongit/hackathong3/page-interne/quete.php">'+
        'Commencer la quête</a></p>'+
        '<p>La catégorie</p>'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var iconBase = window.location.href;
    var iconBaseSplit = iconBase.split("hackathong3");

    var marker5 = new google.maps.Marker({
        position: muAngouleme,
        map: map,
        icon: iconBaseSplit[0] + 'hackathong3/img/marker-art.png',
        title: 'Musée d\'Angoulême'
    });
    var marker6 = new google.maps.Marker({
        position: muCACP,
        map: map,
        icon: iconBaseSplit[0] + 'hackathong3/img/marker-art.png',
        title: 'CAPC musée d\'art contemporain de Bordeaux'
    });
    var marker11 = new google.maps.Marker({
        position: musBeauArt,
        map: map,
        icon: iconBaseSplit[0] + 'hackathong3/img/marker-art.png',
        title: 'Musée des Beaux-arts'
    });
    var marker12 = new google.maps.Marker({
        position: musNatAdriDu,
        map: map,
        icon: iconBaseSplit[0] + 'hackathong3/img/marker-art.png',
        title: 'Musée national Adrien Dubouché'
    });
    var marker13 = new google.maps.Marker({
        position: musJacChirac,
        map: map,
        icon: iconBaseSplit[0] + 'hackathong3/img/marker-art.png',
        title: 'Musée du Président Jacques Chirac'
    });

    marker11.addListener('click', function() {
        infowindow.open(map, marker11);
    });
}

initMap();