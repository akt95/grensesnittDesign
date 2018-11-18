import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {CommentsOperaHusetPage} from "../opera-huset/comments-opera-huset/comments-opera-huset";



@Component({
  selector: 'page-karl-johan',
  templateUrl: 'karl-johan.html',
})
export class KarlJohanPage {
  constructor(public navCtrl:NavController)
  {

  }
  
  toComment()
  {
    this.navCtrl.push(CommentsOperaHusetPage)
  }
}
