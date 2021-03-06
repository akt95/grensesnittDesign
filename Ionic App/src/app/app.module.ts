import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


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
import {LouisVuittonPage} from "../pages/discover/louis-vuitton/louis-vuitton";
import {MatHallenPage} from "../pages/discover/mat-hallen/mat-hallen";
import {ChatPage} from "../pages/discover/opera-huset/comments-opera-huset/chat/chat";
import {OperaWriteCommentPage} from "../pages/discover/opera-huset/comments-opera-huset/opera-write-comment/opera-write-comment";
import {HolmenkollenClickHerePage} from "../pages/discover/holmenkollen/holmenkollen-click-here/holmenkollen-click-here";
import {PersonalQrPage} from "../pages/profile-name/sign-in/personal-qr/personal-qr";
import {SettingPage} from "../pages/profile-name/sign-in/setting/setting";
import {CouponsPage} from "../pages/profile-name/sign-in/coupons/coupons";
import {QrStep1Page} from "../pages/wallet/qr-step1/qr-step1";
import {QrStep2Page} from "../pages/wallet/qr-step2/qr-step2";
import {QrScanPage} from "../pages/qr-code/qr-scan/qr-scan";
import {QrScan2Page} from "../pages/qr-code/qr-scan/qr-scan2/qr-scan2";


@NgModule({
  declarations: [
    MyApp,
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
    OperaWriteCommentPage,
    OperaInfoPage,
    SignUpPage,
    SignInPage,
    MaxBurgerPage,
    GrillerietPage,
    LouisVuittonPage,
    MatHallenPage,
    HolmenkollenClickHerePage,
    PersonalQrPage,
    SettingPage,
    CouponsPage,
    QrStep1Page,
    QrStep2Page,
    QrScanPage,
    QrScan2Page,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
    LouisVuittonPage,
    MatHallenPage,
    HolmenkollenClickHerePage,
    OperaWriteCommentPage,
    PersonalQrPage,
    SettingPage,
    CouponsPage,
    QrStep1Page,
    QrStep2Page,
    QrScanPage,
    QrScan2Page,

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
