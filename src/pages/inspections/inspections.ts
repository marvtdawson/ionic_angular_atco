import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamMembersPage } from "../team-members/team-members";
import { InspectionJobsPage } from "../inspection-jobs/inspection-jobs";

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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InspectionsPage');
  }

}
