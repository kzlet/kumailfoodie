import { ApiProvider } from './../../providers/api/api';
import { RestaurantListingPage } from './../restaurant-listing/restaurant-listing';
import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: any;
  markers: any;
  autocomplete: any;
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any
  autocompleteItems: any;
  loading: any;
  latLngGobal: any;
  constructor(public navCtrl: NavController,
    public zone: NgZone,
    public geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    private nativeGeocoder: NativeGeocoder,
    public ApiProvider: ApiProvider) {

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
  gotoRestaurantList() {
    if (this.latLngGobal != undefined && this.latLngGobal != "") {
      this.navCtrl.setRoot(RestaurantListingPage, { latlng: this.latLngGobal })
    } else {
      this.ApiProvider.showToast("Select location")
    }

  }


  tryGeolocation() {
    this.loading.present();

    this.geolocation.getCurrentPosition().then((resp) => {
      let pos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude,
      };
      this.loading.dismiss();
      this.getAddressFromLongLat(pos)
    }).catch((error) => {
      console.log('Error getting location', error);
      this.loading.dismiss();
    });
  }
  getAddressFromLongLat(pos) {
    console.log(pos)
    this.latLngGobal = pos
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.reverseGeocode(pos.lat, pos.lng, options)
      .then((result: NativeGeocoderReverseResult[]) => this.autocomplete.input = result[0].subThoroughfare + " " + result[0].thoroughfare + " " + result[0].subLocality + " " + result[0].locality)
      .catch((error: any) => console.log(error));
  }


  updateSearchResults() {
    console.log(this.autocomplete.input);
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
      (predictions, status) => {
        console.log(predictions)
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
    this.autocompleteItems = [];
    console.log(item)
    this.getLatLngFromAddress(item)
    this.autocomplete.input = item.description
  }

  getLatLngFromAddress(item) {
    var that = this;
    var geocoder = new google.maps.Geocoder;
    geocoder.geocode({ 'placeId': item.place_id }, function (results, status) {
      if (status === 'OK') {
        let pos = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };
        that.latLngGobal = pos
        console.log(that.latLngGobal)
      } else {
        this.ApiProvider.showToast('Geocoder failed due to: ' + status);
      }
    });

  }
}
