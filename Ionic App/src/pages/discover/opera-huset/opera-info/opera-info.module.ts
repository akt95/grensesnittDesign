import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OperaInfoPage } from './opera-info';

@NgModule({
  declarations: [
    OperaInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(OperaInfoPage),
  ],
})
export class OperaInfoPageModule {}
