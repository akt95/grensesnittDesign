import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController,List} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-profile-name',
  templateUrl: 'profile-name.html',
})
export class ProfileNamePage {

  @ViewChild(List) list: List ;

  constructor(public navCtrl: NavController) {
  }

  /*stopSliding(){this.list.enableSlidingItems(false)}
*/
}
