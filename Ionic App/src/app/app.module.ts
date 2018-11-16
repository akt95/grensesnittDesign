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
import {ChatPage} from "../pages/chat/chat";
import {QrCodePage} from "../pages/qr-code/qr-code";
import {WalletPage} from "../pages/wallet/wallet";
import {ProfileNamePage} from "../pages/profile-name/profile-name";
import {CommentsOperaHusetPage} from "../pages/discover/opera-huset/comments-opera-huset/comments-opera-huset";

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
    CommentsOperaHusetPage,
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
