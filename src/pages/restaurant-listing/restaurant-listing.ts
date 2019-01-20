import { CartPage } from './../cart/cart';
import { MapPage } from './../map/map';
import { FilterPage } from './../filter/filter';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content, Slides } from 'ionic-angular';
import { RestaurantMenuPage } from '../restaurant-menu/restaurant-menu';

/**
 * Generated class for the RestaurantListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-restaurant-listing',
  templateUrl: 'restaurant-listing.html',
})
export class RestaurantListingPage {
  @ViewChild('scrollCat') scrollCat: Content;
  // @ViewChild('scrollPop') scrollPop: Content;

  @ViewChild(Slides) slides: Slides;

  categoryArray: any = [];
  resList: any = []
  latlngGlobal: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.categoryArray = [
      {
        id: 0,
        image: "assets/imgs/filter-assets/donuts.png",
        text: "Donuts",
      },
      {
        id: 1,
        image: "assets/imgs/filter-assets/hamburger.png",
        text: "Burger",
      },
      {
        id: 2,
        image: "assets/imgs/filter-assets/juice.png",
        text: "Juice",

      },
      {
        id: 3,
        image: "assets/imgs/filter-assets/noodles.png",
        text: "Noodles",
      },
      {
        id: 4,
        image: "assets/imgs/filter-assets/pizza.png",
        text: "Pizza",
      },
      {
        id: 5,
        image: "assets/imgs/filter-assets/sauces.png",
        text: "Sauces",
      },
      {
        id: 6,
        image: "assets/imgs/filter-assets/vegetarian-food.png",
        text: "Veggies",
      },

    ]
  }

  ionViewWillEnter() {
    this.latlngGlobal = this.navParams.get("latlng")
    console.log(this.latlngGlobal)

    this.resList = []
    for (let i = 0; i < 5; i++) {
      this.resList.push("asdf")
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantListingPage');
  }

  scrollLeft() {
    console.log("here")
    this.scrollCat._scrollContent.nativeElement.scrollTo({ left: -100000, top: 0, behavior: 'smooth' });
  }

  scrollRight() {
    console.log("here")
    this.scrollCat._scrollContent.nativeElement.scrollTo({ left: 100000, top: 0, behavior: 'smooth' });
  }


  gotoRestaurantMenu() {
    this.navCtrl.push(RestaurantMenuPage)
  }

  gotoFilterPage() {
    this.navCtrl.push(FilterPage)
  }

  gotoMapPage() {
    this.navCtrl.push(MapPage)
  }

  gotoCart() {
    var data = {
      pushPage: "hd"
    }
    this.navCtrl.push(CartPage, data)
  }
}


