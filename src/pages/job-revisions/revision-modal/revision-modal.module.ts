import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RevisionModalPage } from './revision-modal';

@NgModule({
  declarations: [
    RevisionModalPage,
  ],
  imports: [
    IonicPageModule.forChild(RevisionModalPage),
  ],
})
export class RevisionModalPageModule {}
