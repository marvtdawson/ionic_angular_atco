import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AtcoIndustriesPage} from "../jobs-profile/atcoindustries/atco-industries";
import {GmArlingtonPage} from "../jobs-profile/gm-arlington/gm-arlington";

/**
 * Generated class for the InspectionJobsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inspection-jobs',
  templateUrl: 'inspection-jobs.html',
})
export class InspectionJobsPage {

  pushAtcoIndustriesPage = AtcoIndustriesPage;
  pushGmArlintonPage =  GmArlingtonPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InspectionJobsPage');
  }

}
