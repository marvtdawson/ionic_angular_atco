import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TeamMembersPage} from "../team-members/team-members";

/**
 * Generated class for the MembersProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-members-profile',
  templateUrl: 'members-profile.html',
})
export class MembersProfilePage {

  pushTeamMembersPage = TeamMembersPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembersProfilePage');
  }

}
