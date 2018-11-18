import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {CommentsOperaHusetPage} from "../opera-huset/comments-opera-huset/comments-opera-huset";
import {OperaHusetDirectionsPage} from "../opera-huset/opera-huset-directions/opera-huset-directions";




@Component({
  selector: 'page-karl-johan',
  templateUrl: 'karl-johan.html',
})
export class KarlJohanPage {
  constructor(public navCtrl:NavController)
  {

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
