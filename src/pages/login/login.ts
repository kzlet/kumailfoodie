import { ApiProvider } from './../../providers/api/api';
import { HomePage } from './../home/home';
import { Component, TestabilityRegistry } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { TypeSelectionPage } from '../type-selection/type-selection';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage';

//HTTP
//import { HTTP } from '@ionic-native/http';
import { Headers, RequestOptions  } from '@angular/http';
import { HttpClientModule, HttpClient  } from '@angular/common/http';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: any = ""
  password: any = ""
  errorHtml: any = "false"
  apiUrl: string;
  data: any;

  constructor(public http: HttpClient , private nativeStorage: NativeStorage ,public navCtrl: NavController, public navParams: NavParams, public ApiProvider: ApiProvider, public storage: Storage,public alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  gotoHome() {
    this.navCtrl.setRoot(TypeSelectionPage)
  }

  gotoSignup() {
    console.log("click ")
    this.navCtrl.push(SignUpPage)
  }

  loginUser2() {
    this.navCtrl.setRoot(TypeSelectionPage);
  }

  
  // loginUser3() {

  //   this.apiUrl = 'http://dinertap.pk/dinertap/api/login/login?user_name=' + this.username + '&password=' + this.password;
  //   console.log(this.apiUrl)

  //    if (this.username === undefined || this.password === undefined) {
  //      let alert = this.alertCtrl.create({
  //        title: 'Sign-in Error',
  //        subTitle: 'Username and Password Required',
  //        buttons: ['OK']
  //      });
  //      alert.present();
  //      return;
  //    }
  //    let loader = this.loadingCtrl.create({
  //      content: "Signing In..."
  //    });
  //    loader.present();
 
  //    console.log(this.apiUrl);

  //    this.http.get(this.apiUrl).map(res => res.json())
  //    .subscribe(data => {
 
  //      console.log(data);
  //      loader.dismissAll();

  //      var str = data.Status;

  //      if (str === 'success') {

  //       let alert = this.alertCtrl.create({
  //         title: 'Login Successful',
  //         subTitle: 'Welcome to DinerTap',
  //         buttons: ['OK']
  //       });
  //       alert.present();

  //       // this.nativeStorage.setItem('user_email', data.email)
  //       // .then(
  //       //   () => console.log('User Email Stored!'),
  //       //   error => console.error('Error storing item', error)
  //       // );

  //       // this.nativeStorage.setItem('user_name', data.name)
  //       // .then(
  //       //   () => console.log('name Stored!'),
  //       //   error => console.error('Error storing item', error)
  //       // );

  //       // this.nativeStorage.setItem('user_profile_pic', data.profile_pic)
  //       // .then(
  //       //   () => console.log('profile_pic Stored!'),
  //       //   error => console.error('Error storing item', error)
  //       // );
       
  //        this.navCtrl.setRoot(HomePage);
 
  //      } else if (str === 'failed') {
  //        let alert = this.alertCtrl.create({
  //          title: 'Authentication Failed',
  //          subTitle: 'Username or Password is Invalid',
  //          buttons: ['OK']
  //        });
  //        alert.present();
  //      }
  //    }, error => {
  //      console.log(error); // Error getting the data
 
  //      let alert = this.alertCtrl.create({
  //        title: 'Network Failed',
  //        subTitle: 'Please try again later',
  //        buttons: ['OK']
 
  //      });
  //      alert.present();
  //      loader.dismissAll();
  //    });
  // }

  // signin() {
  //   if (this.username === '' || this.password === '') {
  //    // this.presentToast('Plese Fill All Field');
  //   } else {
  //     var link = 'http://dinertap.pk/dinertap/api/login/login';
  //     var myData = JSON.stringify({ user_name: this.username, password: this.password });

  //     this.http.post(link, myData)
  //       .subscribe(data => {
  //         this.data = JSON.parse(data["_body"]);

  //         console.log(data);
  //         if (this.data.result === 'ok') {
  //           if(this.data.active === '1'){
  //           //  this.loading.present();
  //             console.log(this.data);
  //           //  this.presentToast("Successfull");
  //          //   this.goToDashboard();
  //           }else{
  //            console.log("Account Suspended, please contact administration");
  //           }
  //         } else if (this.data.result === 'no') {
  //           console.log("Wrong Email Or Password");
  //         } else {
  //           console.log("Cannot Communicate to the server");
  //         }
  //       }, error => {
  //         console.log("Connection Problem");
  //       });
  //   }
  // }


  sendPostRequest() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    var requestOptions = new RequestOptions({ headers: headers });

    let postData = {
            "user_name": this.username,
            "password": this.password,
    }

    this.http.post("http://dinertap.pk/dinertap/api/login/login", postData )
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }

signin() {
  if (this.username === '' || this.password === '') {
   // this.presentToast('Plese Fill All Field');
  } else {
    var link = 'http://dinertap.pk/dinertap/api/login/login';
    var myData = JSON.stringify({ user_name: this.username, password: this.password });

    this.http.post(link, myData)
      .subscribe(data => {
        this.data = JSON.parse(data["_body"]);
console.log(this.data);
        if (this.data.result === 'ok') {
          if(this.data.active === '1'){
           // this.loading.present();
            console.log(this.data);
        //    this.presentToast("Successfull");
        //    this.goToDashboard();
          }else{
       //     this.presentToast("Account Suspended, please contact administration");
          }
        } else if (this.data.result === 'no') {
      //    this.presentToast("Wrong Email Or Password");
        } else {
     //     this.presentToast("Cannot Communicate to the server");
        }
      }, error => {
    //    this.presentToast("Connection Problem");
      });
  }
}



}
