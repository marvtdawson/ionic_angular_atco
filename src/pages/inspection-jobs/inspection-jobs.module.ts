import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InspectionJobsPage } from './inspection-jobs';

@NgModule({
  declarations: [
    InspectionJobsPage,
  ],
  imports: [
    IonicPageModule.forChild(InspectionJobsPage),
  ],
})
export class InspectionJobsPageModule {}
