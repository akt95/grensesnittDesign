import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiscoverPage } from './discover';

import {KarlJohanPage} from "./karl-johan/karl-johan";

@NgModule({
  declarations: [
    DiscoverPage,
    KarlJohanPage,
  ],
  imports: [
    IonicPageModule.forChild(DiscoverPage),
    KarlJohanPage,
  ],
})
export class DiscoverPageModule {}
