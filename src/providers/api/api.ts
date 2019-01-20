import { LoadingController, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from './../../utils/Contants'
import { Global } from './../../utils/Global';
import { Storage } from '@ionic/storage';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  userToken: any = "";

  constructor(public http: HttpClient, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public storage: Storage) {
    console.log('Hello ApiProvider Provider');
  }


  //Register User
  async registerUser(body) {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Please wait...'
    });

    loading.present()
    var resp;
    var axiosRes = Global.postHttpWithourHeader(Constants.REGISTER, body)
    await axiosRes.then(res => {
      resp = res
      // if (resp.type == 0) {
      //   this.showToast(resp.message.email[0])
      // }
      // console.log(resp)
      // if (resp.status == "False") {
      //   this.showToast(resp.message)
      // }
      loading.dismiss();
    })
    return resp;
  }


  //Login User
  async loginUser(body) {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Please wait...'
    });

    loading.present()
    var resp;
    // var token = this.getToken()
    console.log(this.userToken)
    console.log(Constants.LOGIN)
    console.log(body)

    var axiosRes = Global.postHttpWithourHeader(Constants.LOGIN, body)
    await axiosRes.then(res => {
      resp = res
      console.log(resp)
      // if (resp.type == 0) {
      //   // this.showToast(resp.message.email[0])
      // }
      loading.dismiss();
    })
    return resp;
  }

  async getToken() {
    var resp;
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Please wait...'
    });
    loading.present();

    await this.storage.get(Constants.USER_TOKEN).then(res => {
      resp = res;
      this.userToken = res;
      loading.dismiss();
    })
    return resp;
  }

  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }


}
