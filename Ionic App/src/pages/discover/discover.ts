import { Component } from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';

import {KarlJohanPage} from "./karl-johan/karl-johan";
import {AkerBryggePage} from "./aker-brygge/aker-brygge";
import {VikingMuseumPage} from "./viking-museum/viking-museum";
import {OsloCityPage} from "./oslo-city/oslo-city";
import {OperaHusetPage} from"./opera-huset/opera-huset";
import {HolmenkollenPage} from "./holmenkollen/holmenkollen";
import {MatHallenPage} from "./mat-hallen/mat-hallen";
import {MaxBurgerPage} from "./max-burger/max-burger";
import {LuisVuittonPage} from "./luis-vuitton/luis-vuitton";
import {GrillerietPage} from "./grilleriet/grilleriet";

@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html',
})

export class DiscoverPage {

  constructor(
    public navCtrl:NavController,
  private menuCtrl:MenuController)
  {

  }

  toKarlJohan()
  {
    this.navCtrl.push(KarlJohanPage);
  }

  toAkerBrygge()
  {
    this.navCtrl.push(AkerBryggePage);

  }
  toVikingMuseum()
  {
    this.navCtrl.push(VikingMuseumPage);
  }
  toOsloCity()
  {
    this.navCtrl.push(OsloCityPage);
  }
  toOperaHuset()
  {
    this.navCtrl.push(OperaHusetPage);
  }
  toHolmenkollen()
  {
    this.navCtrl.push(HolmenkollenPage);
  }

  toMatHallen()
  {
    this.navCtrl.push(MatHallenPage);
  }
  toMaxBurger()
  {
    this.navCtrl.push(MaxBurgerPage);
  }
  toLuisVuitton()
  {
    this.navCtrl.push(LuisVuittonPage);
  }
  toGrilleriet()
  {
    this.navCtrl.push(GrillerietPage);
  }





openMenu()
{
  this.menuCtrl.open();

}


}
