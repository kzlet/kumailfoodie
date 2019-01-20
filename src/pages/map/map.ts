import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';

declare var google;
// let map: any;
// let infowindow: any;
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  map: any;
  markers: any;
  autocomplete: any;
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any
  autocompleteItems: any;
  loading: any;
  latLngGobal: any;

  constructor(
    public zone: NgZone,
    public geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    private nativeGeocoder: NativeGeocoder
  ) {
    this.geocoder = new google.maps.Geocoder;
    let elem = document.createElement("div")
    this.GooglePlaces = new google.maps.places.PlacesService(elem);
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = {
      input: ''
    };
    this.autocompleteItems = [];
    this.markers = [];
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidEnter() {
    // let infoWindow = new google.maps.InfoWindow({map: map});
    //Set latitude and longitude of some place
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.9011, lng: -56.1645 },
      zoom: 15,
      mapTypeControl: false,
      zoomControl: false,
      draggable: false,
      scaleControl: false,
      scrollwheel: false,
      navigationControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  }

  tryGeolocation() {
    this.loading.present();
    this.clearMarkers();//remove previous markers

    this.geolocation.getCurrentPosition().then((resp) => {
      let pos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
      this.latLngGobal = pos
      let marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        // icon: "assets.",
        title: 'I am here!'
      });
      this.markers.push(marker);
      this.map.setCenter(pos);
      this.loading.dismiss();
      this.getAddressFromLongLat(pos)
    }).catch((error) => {
      console.log('Error getting location', error);
      this.loading.dismiss();
    });
  }

  updateSearchResults() {
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
      (predictions, status) => {
        this.autocompleteItems = [];
        if (predictions) {
          this.zone.run(() => {
            predictions.forEach((prediction) => {
              this.autocompleteItems.push(prediction);
            });
          });
        }
      });
  }

  selectSearchResult(item) {
    this.clearMarkers();
    this.autocompleteItems = [];
    console.log(item)
    this.autocomplete.input = item.description
    this.geocoder.geocode({ 'placeId': item.place_id }, (results, status) => {
      if (status === 'OK' && results[0]) {

        let pos = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };
        this.latLngGobal = pos
        console.log(this.latLngGobal)
        // let position = {
        //   lat: results[0].geometry.location.lat,
        //   lng: results[0].geometry.location.lng
        // };
        // console.log(position.lat)
        // this.getAddressFromLongLat(position)
        let marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map
        })
        this.markers.push(marker);
        this.map.setCenter(results[0].geometry.location);
      }
    })
  }

  clearMarkers() {
    for (var i = 0; i < this.markers.length; i++) {
      console.log(this.markers[i])
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }



  onButton_click() {

    console.log(this.map)
    // new google.maps.Map().

    // Show the current camera target position.
    // var target = this.map.getCameraTarget();


    // console.log("lat: " + target.lat,
    //   "lng: " + target.lng
    // )

  }

  getAddressFromLongLat(pos) {
    console.log(pos)
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    // subThoroughfare
    // thoroughfare
    // subLocality
    // locality

    this.nativeGeocoder.reverseGeocode(pos.lat, pos.lng, options)
      .then((result: NativeGeocoderReverseResult[]) => this.autocomplete.input = result[0].subThoroughfare + " " + result[0].thoroughfare + " " + result[0].subLocality + " " + result[0].locality)
      .catch((error: any) => console.log(error));
  }

  // getLatLngFromAddress(item) {
  //   var that = this;
  //   var geocoder = new google.maps.Geocoder;
  //   geocoder.geocode({ 'placeId': item.place_id }, function (results, status) {
  //     if (status === 'OK') {
  //       let pos = {
  //         lat: results[0].geometry.location.lat(),
  //         lng: results[0].geometry.location.lng()
  //       };
  //       that.latLngGobal = pos
  //       console.log(that.latLngGobal)
  //     } else {
  //       this.ApiProvider.showToast('Geocoder failed due to: ' + status);
  //     }
  //   });

  // }
}
