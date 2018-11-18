import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrStep1Page } from './qr-step1';

@NgModule({
  declarations: [
    QrStep1Page,
  ],
  imports: [
    IonicPageModule.forChild(QrStep1Page),
  ],
})
export class QrStep1PageModule {}
