import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Push } from "@ionic-native/push";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { NetworkAuthProvider } from '../providers/network-auth/network-auth';
import { UserAuthProvider } from '../providers/user-auth/user-auth';
import { InspectionsPage } from "../pages/inspections/inspections";
import { InspectionJobsPage} from "../pages/inspection-jobs/inspection-jobs";
import { JobsProfilePage } from "../pages/jobs-profile/jobs-profile";
import { AtcoIndustriesPage } from "../pages/jobs-profile/atco-industries/atco-industries";
import { GmArlingtonPage } from "../pages/jobs-profile/gm-arlington/gm-arlington";

import { TeamMembersPage } from "../pages/team-members/team-members";
import { MembersProfilePage } from "../pages/members-profile/members-profile";
import { NewJobPage } from "../pages/new-job/new-job";
import { ItaMemberPage } from "../pages/members-profile/ita-member/ita-member";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InspectionsPage,
    InspectionJobsPage,
    JobsProfilePage,
    AtcoIndustriesPage,
    GmArlingtonPage,
    TeamMembersPage,
    MembersProfilePage,
    NewJobPage,
    ItaMemberPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InspectionsPage,
    InspectionJobsPage,
    JobsProfilePage,
    AtcoIndustriesPage,
    GmArlingtonPage,
    TeamMembersPage,
    MembersProfilePage,
    NewJobPage,
    ItaMemberPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NetworkAuthProvider,
    UserAuthProvider,
    Push
  ]
})
export class AppModule {}
