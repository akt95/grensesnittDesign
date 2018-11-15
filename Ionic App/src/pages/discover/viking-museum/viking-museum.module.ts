import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VikingMuseumPage } from './viking-museum';

@NgModule({
  declarations: [
    VikingMuseumPage,
  ],
  imports: [
    IonicPageModule.forChild(VikingMuseumPage),
  ],
})
export class VikingMuseumPageModule {}
