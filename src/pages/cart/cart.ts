import { CheckoutShippingPage } from './../checkout-shipping/checkout-shipping';
import { TypeSelectionPage } from './../type-selection/type-selection';
import { GeneralProvider } from './../../providers/general/general';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  btnText = "PROCEED TO CHECKOUT"
  paramTxt: any = ""
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public generalProvider: GeneralProvider) {
    // this.navParams.data.pushPage
    console.log(this.navParams.data.pushPage)
    this.paramTxt = this.navParams.data.pushPage;
    if (this.navParams.data.pushPage == "qr") {
      this.btnText = "PAY WITH WALLET"
    } else if (this.navParams.data.pushPage == "hd") {
      // this.btnText = "PAY WITH WALLET"
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  goBack() {
    this.navCtrl.pop();
  }

  gotoCheckoutPayment() {

  }

  btnClick(txt) {
    console.log(txt)
    if (txt == "qr") {
      this.presentConfirmPayment()
    } else if (txt == "hd") {
      this.gotoCheckoutShippingPage()
    }
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
            this.navCtrl.setRoot(TypeSelectionPage)
            // this.toastCtrl.
          }
        }
      ]
    });
    alert.present();
  }

  gotoCheckoutShippingPage() {
    this.navCtrl.push(CheckoutShippingPage)
  }

}
