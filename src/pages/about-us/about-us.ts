import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {
  imagesArray: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imagesArray = [
      {
        id: 0,
        image: "upload_image_1.png"
      },
      {
        id: 1,
        image: "upload_image_1.png"
      },
      {
        id: 2,
        image: "upload_image_1.png"
      },
      {
        id: 3,
        image: "upload_image_1.png"
      },
      {
        id: 3,
        image: "upload_image_1.png"
      },
      {
        id: 3,
        image: "upload_image_1.png"
      },
      {
        id: 3,
        image: "upload_image_1.png"
      },
      {
        id: 3,
        image: "upload_image_1.png"
      },
      {
        id: 3,
        image: "upload_image_1.png"
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutUsPage');
  }

}
