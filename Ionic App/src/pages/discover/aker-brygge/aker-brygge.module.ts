import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AkerBryggePage } from './aker-brygge';

@NgModule({
  declarations: [
    AkerBryggePage,
  ],
  imports: [
    IonicPageModule.forChild(AkerBryggePage),
  ],
})
export class AkerBryggePageModule {}
