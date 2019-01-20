import { ComingSoonPage } from './../coming-soon/coming-soon';
import { CartPage } from './../cart/cart';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ReservationFormPage } from '../reservation-form/reservation-form';
/**
 * Generated class for the TypeSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-type-selection',
  templateUrl: 'type-selection.html',
})
export class TypeSelectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {  // private barcodeScanner: BarcodeScanner
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypeSelectionPage');
  }

  gotoHome() {
    this.navCtrl.push(HomePage)
  }

  // openBarcode() {
  //   // var data = {
  //   //   pushPage: "qr"
  //   // }
  //   // this.navCtrl.push(CartPage, data)


  //   this.barcodeScanner.scan().then(barcodeData => {
  //     // console.log('Barcode data', barcodeData);
  //     var data = {
  //       pushPage: "qr"
  //     }
  //     this.navCtrl.push(CartPage, data)

  //   }).catch(err => {
  //     console.log('Error', err);
  //   });
  // }

  gotoComingSoon() {
    this.navCtrl.push(ComingSoonPage)
  }
  gotoReservationPage() {
    this.navCtrl.push(ReservationFormPage)
  }
}
