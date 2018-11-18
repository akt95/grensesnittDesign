import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QrCodePage} from "../../qr-code";


@IonicPage()
@Component({
  selector: 'page-qr-scan2',
  templateUrl: 'qr-scan2.html',
})
export class QrScan2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


toScan()
{
  this.navCtrl.push(QrCodePage);
}

}
