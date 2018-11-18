import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QrScan2Page} from "./qr-scan2/qr-scan2";


@IonicPage()
@Component({
  selector: 'page-qr-scan',
  templateUrl: 'qr-scan.html',
})
export class QrScanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toScan2()
  {
    this.navCtrl.push(QrScan2Page)
  }
}
