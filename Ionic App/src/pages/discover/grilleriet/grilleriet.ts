import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommentsOperaHusetPage} from "../opera-huset/comments-opera-huset/comments-opera-huset";
import {OperaHusetDirectionsPage} from "../opera-huset/opera-huset-directions/opera-huset-directions";

/**
 * Generated class for the GrillerietPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grilleriet',
  templateUrl: 'grilleriet.html',
})
export class GrillerietPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrillerietPage');
  }

  toDirection()
  {
    this.navCtrl.push(OperaHusetDirectionsPage)
  }

  toComment()
  {
    this.navCtrl.push(CommentsOperaHusetPage)
  }

}
