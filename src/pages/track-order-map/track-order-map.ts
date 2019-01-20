import { TypeSelectionPage } from './../type-selection/type-selection';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
declare var google;
/**
 * Generated class for the TrackOrderMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-track-order-map',
  templateUrl: 'track-order-map.html',
})
export class TrackOrderMapPage {

  directionsDisplay: any;
  map: any;
  polyLine: any;
  polyOptions: any;
  directionsService = new google.maps.DirectionsService();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.initialize()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackOrderMapPage');
  }
  ionViewDidEnter() {
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    // let infoWindow = new google.maps.InfoWindow({map: map});
    //Set latitude and longitude of some place
    this.map = new google.maps.Map(document.getElementById('track-map'), {
      center: { lat: 24.91944, lng: 67.103592 },
      zoom: 15,
      mapTypeControl: false,
      draggable: true,
      scaleControl: false,
      scrollwheel: false,
      navigationControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    // this.polyOptions = {
    //   path: [{ lat: 24.896091, lng: 67.160454 },
    //   { lat: -34.9011, lng: -56.1645 }],
    //   strokeColor: '#0026b3',
    //   strokeOpacity: 1.0,
    //   strokeWeight: 1,
    //   geodesic: true,
    // }

    // this.polyLine = new google.maps.Polyline(this.polyOptions);
    // this.polyLine.setMap(this.map);
    this.directionsDisplay.setMap(this.map);

    this.calcRoute()


  }

  // initialize() {

  //   var mapOptions = {
  //     zoom: 5,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP,
  //     center: new google.maps.LatLng(0, 0)
  //   };

  //   this.map = new google.maps.Map(document.getElementById('track-map'), mapOptions);

  //   this.polyOptions = {
  //     strokeColor: '#0026b3',
  //     strokeOpacity: 1.0,
  //     strokeWeight: 1,
  //     geodesic: true,
  //   }

  //   this.polyLine = new google.maps.Polyline(this.polyOptions);
  //   this.polyLine.setMap(this.map);

  //   google.maps.event.addListener(this.map, 'click', function (event) {

  //     this.addPoint(event);
  //   });
  // }

  addPoint(event) {

    var path = this.polyLine.getPath();
    path.push(event.latLng);

    var marker = new google.maps.Marker({
      position: event.latLng,
      map: this.map,
    });

    this.map.setCenter(event.latLng);
  }


  goBack() {
    // this.navCtrl.pop()
    this.navCtrl.setRoot(TypeSelectionPage)
  }

  calcRoute() {
    console.log("here")



    var start = new google.maps.LatLng(24.91944, 67.103592);
    //var end = new google.maps.LatLng(38.334818, -181.884886);
    var end = new google.maps.LatLng(24.8637, 67.0547);

    var startMarker = new google.maps.Marker({
      position: start,
      map: this.map,
      draggable: true
    });
    var endMarker = new google.maps.Marker({
      position: end,
      map: this.map,
      draggable: true
    });

    var bounds = new google.maps.LatLngBounds();
    bounds.extend(start);
    bounds.extend(end);
    this.map.fitBounds(bounds);
    var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING
    };
    // var directionsDisplay = new google.maps.DirectionsRenderer();
    var that = this;
    this.directionsService.route(request, function (response, status) {
      console.log(status)
      if (status == google.maps.DirectionsStatus.OK) {
        console.log(response)
        that.directionsDisplay.setDirections(response);
        that.directionsDisplay.setMap(this.map);
      } else {
        alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
      }
    });
  }
}
