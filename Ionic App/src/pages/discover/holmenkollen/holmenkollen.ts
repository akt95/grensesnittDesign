import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HolmenkollenClickHerePage} from "./holmenkollen-click-here/holmenkollen-click-here";
import {OperaHusetDirectionsPage} from "../opera-huset/opera-huset-directions/opera-huset-directions";


/**
 * Generated class for the HolmenkollenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-holmenkollen',
  templateUrl: 'holmenkollen.html',
})
export class HolmenkollenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HolmenkollenPage');
  }

  toDirection()
  {
    this.navCtrl.push(OperaHusetDirectionsPage)
  }

clickHere()
{
  this.navCtrl.push(HolmenkollenClickHerePage);
}
}
