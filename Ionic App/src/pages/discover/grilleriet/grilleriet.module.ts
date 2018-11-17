import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrillerietPage } from './grilleriet';

@NgModule({
  declarations: [
    GrillerietPage,
  ],
  imports: [
    IonicPageModule.forChild(GrillerietPage),
  ],
})
export class GrillerietPageModule {}
