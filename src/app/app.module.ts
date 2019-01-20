import { TrackOrderMapPage } from './../pages/track-order-map/track-order-map';
import { CartPage } from './../pages/cart/cart';
import { OrderTrackingPage } from './../pages/order-tracking/order-tracking';
import { CheckoutPaymentPage } from './../pages/checkout-payment/checkout-payment';
import { CheckoutShippingPage } from './../pages/checkout-shipping/checkout-shipping';
import { MapPage } from './../pages/map/map';
import { RestaurantListingPage } from './../pages/restaurant-listing/restaurant-listing';
import { RestaurantMenuPage } from './../pages/restaurant-menu/restaurant-menu';
import { FilterPage } from './../pages/filter/filter';
import { TypeSelectionPage } from './../pages/type-selection/type-selection';
import { SignUpPage } from './../pages/sign-up/sign-up';
import { ReservationFormPage } from './../pages/reservation-form/reservation-form';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AboutUsPage } from '../pages/about-us/about-us';
import { StarRatingModule } from 'ionic3-star-rating';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CheckoutConfirmPage } from '../pages/checkout-confirm/checkout-confirm';
import { ComingSoonPage } from '../pages/coming-soon/coming-soon';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { GeneralProvider } from '../providers/general/general';
import { ApiProvider } from '../providers/api/api';

import { IonicStorageModule } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage';

//HTTP
import { HTTP } from '@ionic-native/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ReservationFormPage,
    SignUpPage,
    AboutUsPage,
    TypeSelectionPage,
    FilterPage,
    RestaurantMenuPage,
    RestaurantListingPage,
    MapPage,
    CheckoutShippingPage,
    CheckoutPaymentPage,
    CheckoutConfirmPage,
    OrderTrackingPage,
    CartPage,
    ComingSoonPage,
    TrackOrderMapPage
  ],
  imports: [
    BrowserModule,
    StarRatingModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ReservationFormPage,
    SignUpPage,
    AboutUsPage,
    TypeSelectionPage,
    FilterPage,
    RestaurantMenuPage,
    RestaurantListingPage,
    MapPage,
    CheckoutShippingPage,
    CheckoutPaymentPage,
    CheckoutConfirmPage,
    OrderTrackingPage,
    CartPage,
    ComingSoonPage,
    TrackOrderMapPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    //BarcodeScanner,
    NativeStorage,
    HTTP,
    GeneralProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GeneralProvider,
    ApiProvider
  ]
})
export class AppModule { }
