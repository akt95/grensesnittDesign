import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalQrPage } from './personal-qr';

@NgModule({
  declarations: [
    PersonalQrPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalQrPage),
  ],
})
export class PersonalQrPageModule {}
