import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommentsOperaHusetPage} from "./comments-opera-huset/comments-opera-huset";
import {OperaHusetDirectionsPage} from "./opera-huset-directions/opera-huset-directions";

/**
 * Generated class for the OperaHusetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opera-huset',
  templateUrl: 'opera-huset.html',
})
export class OperaHusetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toComment()
  {
    this.navCtrl.push(CommentsOperaHusetPage)
  }

  toDirection()
  {
    this.navCtrl.push(OperaHusetDirectionsPage)
  }
}
