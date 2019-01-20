import { ApiProvider } from './../../providers/api/api';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Constants } from '../../utils/Contants';
import { LoginPage } from '../login/login';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})


export class SignUpPage {

  username: any = "";
  email: any = "";
  password: any = "";
  confirmPassword: any = "";
  phone: any = ""
  errorHtml: any = "false"

  constructor(public alertCtrl : AlertController ,public nativeStorage : NativeStorage ,public navCtrl: NavController, public navParams: NavParams, public ApiProvider: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  gotoHome() {
    this.navCtrl.setRoot(HomePage)
  }


  registerUser() {
   (<any>window).AccountKitPlugin.loginWithPhoneNumber({
        useAccessToken : true,
        defaultCountrycode : 'PAK',
        facebookNotificationsEnabled : false
      }, (data) => {
        (<any>window).AccountKitPlugin.getAccount((info) => {
          console.log(info);
  
          console.log(info.accountId);

          this.nativeStorage.setItem('accountId', info.accountId)
          .then(
            () => console.log('accountId Stored!'),
            error => console.error('Error storing item', error)
          );

          //Send data through API
          console.log(this.username);
          console.log(this.email);

          const alert = this.alertCtrl.create({
            title: 'User Registration Successfull',
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.setRoot(LoginPage);
        })
      }, (err) => {
        alert(err);
      }
      )
  }

}
