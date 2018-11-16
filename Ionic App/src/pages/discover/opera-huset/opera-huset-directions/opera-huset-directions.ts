import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-opera-huset-directions',
  templateUrl: 'opera-huset-directions.html',
})
export class OperaHusetDirectionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OperaHusetDirectionsPage');
  }

}
