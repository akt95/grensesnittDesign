import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import {Camera} from'@ionic-native/camera';
import{StatusBar} from "@ionic-native/status-bar";
import {BarcodeScanner} from "@ionic-native/barcode-scanner"

import { SplashScreen } from '@ionic-native/splash-screen';

import {DiscoverPage} from "../pages/discover/discover";
import {KarlJohanPage} from "../pages/discover/karl-johan/karl-johan";
import {AkerBryggePage} from "../pages/discover/aker-brygge/aker-brygge";
import {VikingMuseumPage} from "../pages/discover/viking-museum/viking-museum";
import {OperaHusetPage} from "../pages/discover/opera-huset/opera-huset";
import {HolmenkollenPage} from "../pages/discover/holmenkollen/holmenkollen";
import {OsloCityPage} from "../pages/discover/oslo-city/oslo-city";
import {ChatPage} from "../pages/discover/opera-huset/comments-opera-huset/chat/chat";
import {QrCodePage} from "../pages/qr-code/qr-code";
import {WalletPage} from "../pages/wallet/wallet";
import {ProfileNamePage} from "../pages/profile-name/profile-name";
import {CommentsOperaHusetPage} from "../pages/discover/opera-huset/comments-opera-huset/comments-opera-huset";
import {OperaHusetDirectionsPage} from "../pages/discover/opera-huset/opera-huset-directions/opera-huset-directions";
import{OperaInfoPage} from "../pages/discover/opera-huset/opera-info/opera-info";
import {SignUpPage} from "../pages/profile-name/sign-up/sign-up";
import {SignInPage} from "../pages/profile-name/sign-in/sign-in";
import {MaxBurgerPage} from "../pages/discover/max-burger/max-burger";
import {GrillerietPage} from "../pages/discover/grilleriet/grilleriet";
import {LuisVuittonPage} from "../pages/discover/luis-vuitton/luis-vuitton";
import {MatHallenPage} from "../pages/discover/mat-hallen/mat-hallen";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DiscoverPage,
    KarlJohanPage,
    AkerBryggePage,
    TabsPage,
    VikingMuseumPage,
    OperaHusetPage,
    HolmenkollenPage,
    OsloCityPage,
    ChatPage,
    QrCodePage,
    WalletPage,
    ProfileNamePage,
    CommentsOperaHusetPage,
    OperaHusetDirectionsPage,
    OperaInfoPage,
    SignUpPage,
    SignInPage,
    MaxBurgerPage,
    GrillerietPage,
    LuisVuittonPage,
    MatHallenPage,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    DiscoverPage,
    KarlJohanPage,
    ContactPage,
    AkerBryggePage,
    VikingMuseumPage,
    OperaHusetPage,
    OsloCityPage,
    HolmenkollenPage,
    HomePage,
    ChatPage,
    QrCodePage,
    TabsPage,
    WalletPage,
    ProfileNamePage,
    OperaInfoPage,
    CommentsOperaHusetPage,
    OperaHusetDirectionsPage,
    SignUpPage,
    SignInPage,
    MaxBurgerPage,
    GrillerietPage,
    LuisVuittonPage,
    MatHallenPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    BarcodeScanner,
  ]
})
export class AppModule {}
