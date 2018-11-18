import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChatPage} from "./chat/chat";
import {OperaWriteCommentPage} from "./opera-write-comment/opera-write-comment";

/**
 * Generated class for the CommentsOperaHusetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comments-opera-huset',
  templateUrl: 'comments-opera-huset.html',
})
export class CommentsOperaHusetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsOperaHusetPage');
  }

  toChat()
  {
    this.navCtrl.push(ChatPage);
  }

  toWrite()
  {
    this.navCtrl.push(OperaWriteCommentPage);
  }
}
