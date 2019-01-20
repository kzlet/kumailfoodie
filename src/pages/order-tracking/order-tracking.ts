import { TrackOrderMapPage } from './../track-order-map/track-order-map';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TypeSelectionPage } from '../type-selection/type-selection';

/**
 * Generated class for the OrderTrackingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-order-tracking',
  templateUrl: 'order-tracking.html',
})
export class OrderTrackingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderTrackingPage');
  }
  goBack() {
    // this.navCtrl.pop({ animate: true, direction: 'back' })
    this.navCtrl.setRoot(TypeSelectionPage)
  }
  gotoTrackingMap() {
    this.navCtrl.push(TrackOrderMapPage)
  }
}
