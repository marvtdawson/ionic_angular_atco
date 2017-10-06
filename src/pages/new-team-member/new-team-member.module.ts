import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTeamMemberPage } from './new-team-member';

@NgModule({
  declarations: [
    NewTeamMemberPage,
  ],
  imports: [
    IonicPageModule.forChild(NewTeamMemberPage),
  ],
})
export class NewTeamMemberPageModule {}
