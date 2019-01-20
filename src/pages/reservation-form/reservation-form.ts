import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestaurantListingPage } from '../restaurant-listing/restaurant-listing';

/**
 * Generated class for the ReservationFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-reservation-form',
  templateUrl: 'reservation-form.html',
})
export class ReservationFormPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationFormPage');
  }
  gotoRestaurantListing() {
    this.navCtrl.push(RestaurantListingPage)
  }
}
