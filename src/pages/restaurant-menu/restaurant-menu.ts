import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { TypeSelectionPage } from '../type-selection/type-selection';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the RestaurantMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-restaurant-menu',
  templateUrl: 'restaurant-menu.html',
})
export class RestaurantMenuPage {
  @ViewChild('scrollCat') scrollCat: Content;

  categoryArray: any = [];
  menuItems: any = [];
  selectedItemCount: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.categoryArray = [
      {
        id: 0,
        image: "assets/imgs/filter-assets/donuts.png",
        text: "All Items",
        isSelected: true
      },
      {
        id: 1,
        image: "assets/imgs/filter-assets/hamburger.png",
        text: "Burger",
        isSelected: false
      },
      {
        id: 2,
        image: "assets/imgs/filter-assets/juice.png",
        text: "Fries",
        isSelected: false

      },
      {
        id: 3,
        image: "assets/imgs/filter-assets/noodles.png",
        text: "Grilled Items",
        isSelected: false
      },
      {
        id: 4,
        image: "assets/imgs/filter-assets/pizza.png",
        text: "Sweet",
        isSelected: false
      },
      {
        id: 5,
        image: "assets/imgs/filter-assets/sauces.png",
        text: "Beverages",
        isSelected: false
      },
      {
        id: 6,
        image: "assets/imgs/filter-assets/vegetarian-food.png",
        text: "Veggies",
        isSelected: false
      },
      {
        id: 6,
        image: "assets/imgs/filter-assets/vegetarian-food.png",
        text: "Veggies",
        isSelected: false
      },
      {
        id: 6,
        image: "assets/imgs/filter-assets/vegetarian-food.png",
        text: "Veggies",
        isSelected: false
      },
      {
        id: 6,
        image: "assets/imgs/filter-assets/vegetarian-food.png",
        text: "Veggies",
        isSelected: false
      },
      {
        id: 6,
        image: "assets/imgs/filter-assets/vegetarian-food.png",
        text: "Veggies",
        isSelected: false
      },

    ]

    this.menuItems = [{
      id: 0,
      text: "Chicken Nuggets",
      des: "6 Pieces ",
      price: "Rs190",
      count: 0,
      img: "assets/imgs/menu-img.jpg"
    }, {
      id: 0,
      text: "Chicken Nuggets",
      des: "6 Pieces",
      price: "Rs190",
      count: 0,
      img: "assets/imgs/menu-img.jpg"
    }, {
      id: 0,
      text: "Chicken Nuggets",
      des: "6 Pieces",
      price: "Rs190",
      count: 0,
      img: null
    }, {
      id: 0,
      text: "Chicken Nuggets",
      des: "6 Pieces",
      price: "Rs190",
      count: 0,
      img: null
    }, {
      id: 0,
      text: "Chicken Nuggets",
      des: "6 Pieces",
      price: "Rs190",
      count: 0,
      img: null
    }, {
      id: 0,
      text: "Chicken Nuggets",
      des: "6 Pieces",
      price: "Rs190",
      count: 0,
      img: null
    }, {
      id: 0,
      text: "Chicken Nuggets",
      des: "6 Pieces",
      price: "Rs190",
      count: 0,
      img: null
    }, {
      id: 0,
      text: "Chicken Nuggets",
      des: "6 Pieces",
      price: "Rs190",
      count: 0,
      img: null
    }, {
      id: 0,
      text: "Chicken Nuggets",
      des: "6 Pieces",
      price: "Rs190",
      count: 0,
      img: null
    }]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantMenuPage');
  }


  scrollLeft() {
    console.log("here")

    this.scrollCat._scrollContent.nativeElement.scrollTo({ left: -100000, top: 0, behavior: 'smooth' });


  }

  scrollRight() {
    console.log("here")

    this.scrollCat._scrollContent.nativeElement.scrollTo({ left: 100000, top: 0, behavior: 'smooth' });

  }

  selectCategory(i) {
    for (var index in this.categoryArray) {
      this.categoryArray[index].isSelected = false;
    }
    this.categoryArray[i].isSelected = true;
  }

  itemSelected(i) {
    this.menuItems[i].count += 1

    this.selectedItemCount += 1
    console.log(this.selectedItemCount)
  }

  goBack() {
    this.navCtrl.pop()
  }
  gotoCart() {
    var data = {
      pushPage: "hd"
    }
    this.navCtrl.push(CartPage, data)
  }
}
