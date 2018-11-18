import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingPage} from "./setting/setting";
import {CouponsPage} from "./coupons/coupons";
import {PersonalQrPage} from "./personal-qr/personal-qr";

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  toSetting()
  {
    this.navCtrl.push(SettingPage);
  }
  toCoupons()
  {
    this.navCtrl.push(CouponsPage);
  }
  toPersonalQR()
  {
    this.navCtrl.push(PersonalQrPage);

  }
}
