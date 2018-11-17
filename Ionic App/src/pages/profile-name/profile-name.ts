import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController,List} from 'ionic-angular';


import {SignUpPage} from "./sign-up/sign-up";
import {SignInPage} from "./sign-in/sign-in";


@IonicPage()
@Component({
  selector: 'page-profile-name',
  templateUrl: 'profile-name.html',
})
export class ProfileNamePage {

  @ViewChild(List) list: List ;

  constructor(public navCtrl: NavController) {
  }

  //stopSliding(){this.list.enableSlidingItems(false)}

  toSignUp()
  {
    this.navCtrl.push(SignUpPage);
  }
  toSignIn()
  {
    this.navCtrl.push(SignInPage);
  }
}
