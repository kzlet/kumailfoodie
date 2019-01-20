import { TypeSelectionPage } from './../type-selection/type-selection';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  @ViewChild('scrollCat') scrollCat: Content;
  categoryArray: any = [];

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }

  scrollLeft() {
    console.log("here")

    this.scrollCat._scrollContent.nativeElement.scrollTo({ left: -100000, top: 0, behavior: 'smooth' });


  }

  scrollRight() {
    console.log("here")

    this.scrollCat._scrollContent.nativeElement.scrollTo({ left: 100000, top: 0, behavior: 'smooth' });

  }

  goBack() {
    this.navCtrl.pop()
  }

}
