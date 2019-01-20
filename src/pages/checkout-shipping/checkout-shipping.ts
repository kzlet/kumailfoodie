import { TypeSelectionPage } from './../type-selection/type-selection';
import { HomePage } from './../home/home';
import { CheckoutPaymentPage } from './../checkout-payment/checkout-payment';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CheckoutShippingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-checkout-shipping',
  templateUrl: 'checkout-shipping.html',
})
export class CheckoutShippingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutShippingPage');
  }

  gotoCheckoutPayment() {
    this.navCtrl.push(CheckoutPaymentPage, { animate: true, direction: 'forward' })
  }
  goBack() {
    // this.navCtrl.pop({ animate: true, direction: 'back' })
    this.navCtrl.setRoot(TypeSelectionPage)
  }

}
