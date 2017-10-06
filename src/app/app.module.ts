import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Push } from "@ionic-native/push";
import { IonicStorageModule } from "@ionic/storage";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { NetworkAuthProvider } from '../providers/network-auth/network-auth';
import { UserAuthProvider } from '../providers/user-auth/user-auth';
import { InspectionsPage } from "../pages/inspections/inspections";
import { InspectionJobsPage} from "../pages/inspection-jobs/inspection-jobs";
import { JobsProfilePage } from "../pages/jobs-profile/jobs-profile";
import { JobRevisionsPage } from "../pages/job-revisions/job-revisions";
import { RevisionModalPage } from "../pages/job-revisions/revision-modal/revision-modal";
import { AtcoIndustriesPage } from "../pages/jobs-profile/atco-industries/atco-industries";
import { GmArlingtonPage } from "../pages/jobs-profile/gm-arlington/gm-arlington";

import { TeamMembersPage } from "../pages/team-members/team-members";
import { MembersProfilePage } from "../pages/members-profile/members-profile";
import { NewJobPage } from "../pages/new-job/new-job";
import { ItaMemberPage } from "../pages/members-profile/ita-member/ita-member";
import { NewTeamMemberPage } from "../pages/new-team-member/new-team-member";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InspectionsPage,
    InspectionJobsPage,
    JobsProfilePage,
    JobRevisionsPage,
    AtcoIndustriesPage,
    GmArlingtonPage,
    TeamMembersPage,
    MembersProfilePage,
    NewJobPage,
    ItaMemberPage,
    RevisionModalPage,
    NewTeamMemberPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InspectionsPage,
    InspectionJobsPage,
    JobsProfilePage,
    JobRevisionsPage,
    AtcoIndustriesPage,
    GmArlingtonPage,
    TeamMembersPage,
    MembersProfilePage,
    NewJobPage,
    ItaMemberPage,
    RevisionModalPage,
    NewTeamMemberPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NetworkAuthProvider,
    UserAuthProvider,
    Push,
    Storage,
  ]
})
export class AppModule {}
