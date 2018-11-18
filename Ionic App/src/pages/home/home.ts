import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {KarlJohanPage} from "../discover/karl-johan/karl-johan";
import {MatHallenPage} from "../discover/mat-hallen/mat-hallen";
import {OperaHusetPage} from "../discover/opera-huset/opera-huset";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

toKarlJohan()
{
  this.navCtrl.push(KarlJohanPage);
}
toMatHallen()
{
  this.navCtrl.push(MatHallenPage);
}
toOperaHuset()
{
  this.navCtrl.push(OperaHusetPage);
}
}

