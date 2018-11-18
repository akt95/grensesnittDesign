import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {CommentsOperaHusetPage} from "../opera-huset/comments-opera-huset/comments-opera-huset";

@Component({
  selector: 'page-aker-brygge',
  templateUrl: 'aker-brygge.html',
})
export class AkerBryggePage {

  constructor(public navCtrl: NavController) {
  }

  toComment()
  {
    this.navCtrl.push(CommentsOperaHusetPage)
  }

}
