import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommentsOperaHusetPage} from "../opera-huset/comments-opera-huset/comments-opera-huset";
import {OperaHusetDirectionsPage} from "../opera-huset/opera-huset-directions/opera-huset-directions";

/**
 * Generated class for the VikingMuseumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viking-museum',
  templateUrl: 'viking-museum.html',
})
export class VikingMuseumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VikingMuseumPage');
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
