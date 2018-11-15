import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileNamePage } from './profile-name';

@NgModule({
  declarations: [
    ProfileNamePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileNamePage),
  ],
})
export class ProfileNamePageModule {}
