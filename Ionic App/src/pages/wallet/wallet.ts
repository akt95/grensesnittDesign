import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QrStep1Page} from "./qr-step1/qr-step1";
import {QrStep2Page} from "./qr-step2/qr-step2";
import {ChatPage} from "../discover/opera-huset/comments-opera-huset/chat/chat";

/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
  }

  toChat()
{
  this.navCtrl.push(ChatPage);
}

  toQr1(){this.navCtrl.push(QrStep1Page);}
  toQr2(){this.navCtrl.push(QrStep2Page);}
}
