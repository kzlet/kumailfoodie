import { GeneralProvider } from './../../providers/general/general';
import { CheckoutConfirmPage } from './../checkout-confirm/checkout-confirm';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CheckoutPaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-checkout-payment',
  templateUrl: 'checkout-payment.html',
})
export class CheckoutPaymentPage {
  selectedMethod: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public generalProvider: GeneralProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPaymentPage');
  }


  gotoCheckoutConfirm() {
    this.navCtrl.push(CheckoutConfirmPage, { animate: true, direction: 'forward' })
  }

  goBack() {
    this.navCtrl.pop({ animate: true, direction: 'back' })
  }

  // selectedMethod

  selectMethod(num) {
    this.selectedMethod = num;
  }

  presentConfirmPayment() {
    let alert = this.alertCtrl.create({
      title: 'Confirm payment',
      message: 'Are you sure you want to pay?',
      cssClass: "confirm-payment-alert",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Pay',
          handler: () => {
            console.log('Buy clicked');
            this.generalProvider.presentToast("Paid succesfully")
            // this.navCtrl.setRoot(TypeSelectionPage)
            // this.toastCtrl.
            this.navCtrl.push(CheckoutConfirmPage, { animate: true, direction: 'forward' })
          }
        }
      ]
    });
    alert.present();
  }

}