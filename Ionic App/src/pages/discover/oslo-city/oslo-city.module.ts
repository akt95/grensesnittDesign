import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OsloCityPage } from './oslo-city';

@NgModule({
  declarations: [
    OsloCityPage,
  ],
  imports: [
    IonicPageModule.forChild(OsloCityPage),
  ],
})
export class OsloCityPageModule {}
