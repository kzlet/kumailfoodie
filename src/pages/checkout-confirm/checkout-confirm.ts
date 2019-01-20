import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderTrackingPage } from '../order-tracking/order-tracking';

/**
 * Generated class for the CheckoutConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-checkout-confirm',
  templateUrl: 'checkout-confirm.html',
})
export class CheckoutConfirmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutConfirmPage');
  }

  goBack() {
    this.navCtrl.pop({ animate: true, direction: 'back' })
  }

  gotoOrderTrackingPage() {
    this.navCtrl.push(OrderTrackingPage)
  }
}
