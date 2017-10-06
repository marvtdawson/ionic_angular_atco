import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamMembersPage } from "../team-members/team-members";
import { InspectionJobsPage } from "../inspection-jobs/inspection-jobs";
import { UserAuthProvider } from "../../providers/user-auth/user-auth";
import { Storage } from "@ionic/storage";

/**
 * Generated class for the InspectionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inspections',
  templateUrl: 'inspections.html',
})
export class InspectionsPage {

  pushInspectionJobsPage = InspectionJobsPage;
  pushTeamMembersPage = TeamMembersPage;
  currMemberId: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              public userAuth: UserAuthProvider) {

      this.currMemberId = this.storage.get('memberId').then((val) => {
        console.log('Your member id is', val);
      });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad InspectionsPage');
  }

}
