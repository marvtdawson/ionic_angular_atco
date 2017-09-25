import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobRevisionsPage } from './job-revisions';

@NgModule({
  declarations: [
    JobRevisionsPage,
  ],
  imports: [
    IonicPageModule.forChild(JobRevisionsPage),
  ],
})
export class JobRevisionsPageModule {}
