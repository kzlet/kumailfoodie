import { ComingSoonPage } from './../pages/coming-soon/coming-soon';
import { OrderTrackingPage } from './../pages/order-tracking/order-tracking';
import { CheckoutShippingPage } from './../pages/checkout-shipping/checkout-shipping';
import { MapPage } from './../pages/map/map';
import { RestaurantListingPage } from './../pages/restaurant-listing/restaurant-listing';
import { RestaurantMenuPage } from './../pages/restaurant-menu/restaurant-menu';
import { AboutUsPage } from './../pages/about-us/about-us';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ReservationFormPage } from '../pages/reservation-form/reservation-form';
import { TypeSelectionPage } from '../pages/type-selection/type-selection';
import { FilterPage } from '../pages/filter/filter';
import { TrackOrderMapPage } from '../pages/track-order-map/track-order-map';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  // rootPage: any = CheckoutShippingPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: TypeSelectionPage },
      // { title: 'List', component: ListPage },
      { title: 'Reservation', component: ReservationFormPage },
      { title: 'About Us', component: AboutUsPage },
      { title: 'Checkout', component: CheckoutShippingPage },
      { title: 'Order Tracking', component: OrderTrackingPage },
      { title: 'Order Tracking Map', component: TrackOrderMapPage },
      { title: 'Coming Soon', component: ComingSoonPage },
      { title: 'Logout', component: "logout" },


      // { title: 'Filter', component: FilterPage },
      // { title: 'Menu', component: RestaurantMenuPage },
      // { title: 'Restaurant', component: RestaurantListingPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.component == "logout") {
      this.storage.clear()
      this.nav.setRoot(LoginPage);
    } else {
      this.nav.setRoot(page.component);
    }
  }
}
