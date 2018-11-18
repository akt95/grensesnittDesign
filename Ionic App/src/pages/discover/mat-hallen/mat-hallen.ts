import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommentsOperaHusetPage} from "../opera-huset/comments-opera-huset/comments-opera-huset";
import {OperaHusetDirectionsPage} from "../opera-huset/opera-huset-directions/opera-huset-directions";

/**
 * Generated class for the MatHallenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mat-hallen',
  templateUrl: 'mat-hallen.html',
})
export class MatHallenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatHallenPage');
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
