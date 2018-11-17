import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

import {KarlJohanPage} from "./karl-johan/karl-johan";
import {AkerBryggePage} from "./aker-brygge/aker-brygge";
import {VikingMuseumPage} from "./viking-museum/viking-museum";
import {OsloCityPage} from "./oslo-city/oslo-city";
import {OperaHusetPage} from"./opera-huset/opera-huset";
import {HolmenkollenPage} from "./holmenkollen/holmenkollen";

@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html',
})

export class DiscoverPage {

  constructor(public navCtrl:NavController){}

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
  toVigelandsParken()
  {
    this.navCtrl.push(vigeLands)
  }

}
