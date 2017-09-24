import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamMembersPage } from './team-members';

@NgModule({
  declarations: [
    TeamMembersPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamMembersPage),
  ],
})
export class TeamMembersPageModule {}
