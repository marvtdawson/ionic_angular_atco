import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MembersProfilePage} from "../members-profile/members-profile";
import { ItaMemberPage } from "../members-profile/ita-member/ita-member";
import {NewTeamMemberPage} from "../new-team-member/new-team-member";

/**
 * Generated class for the TeamMembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-members',
  templateUrl: 'team-members.html',
})
export class TeamMembersPage {

  pushMemberProfilePage = MembersProfilePage;
  pushItaMemberPage = ItaMemberPage;
  pushNewTeamMemberPage = NewTeamMemberPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamMembersPage');
  }

}
