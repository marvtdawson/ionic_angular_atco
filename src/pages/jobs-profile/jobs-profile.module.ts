import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobsProfilePage } from './jobs-profile';

@NgModule({
  declarations: [
    JobsProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(JobsProfilePage),
  ],
})
export class JobsProfilePageModule {}
