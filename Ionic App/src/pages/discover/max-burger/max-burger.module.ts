import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaxBurgerPage } from './max-burger';

@NgModule({
  declarations: [
    MaxBurgerPage,
  ],
  imports: [
    IonicPageModule.forChild(MaxBurgerPage),
  ],
})
export class MaxBurgerPageModule {}
