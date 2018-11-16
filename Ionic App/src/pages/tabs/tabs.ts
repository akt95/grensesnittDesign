import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {DiscoverPage} from "../discover/discover";
import {QrCodePage} from "../qr-code/qr-code";
import {WalletPage} from "../wallet/wallet";
import {ProfileNamePage} from "../profile-name/profile-name";


@Component({
  templateUrl: 'tabs.html'

})
export class TabsPage {

  tab1Root = WalletPage;
  tab2Root = QrCodePage;
  tab3Root = HomePage;
  tab4Root = DiscoverPage;
  tab5root= ProfileNamePage;


  constructor() {

  }
}
