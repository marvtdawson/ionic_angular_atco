import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {JobRevisionsPage} from "../../job-revisions/job-revisions";

@Component({
  selector: 'atco-industries',
  templateUrl: 'atco-industries.html'
})
export class AtcoIndustriesPage{

  customerName: string = 'Atco Industies';
  jobTitle: string = 'Start Up';
  revNumber: string = "C";
  revStatus: string = "NEW";
  navToJobRevisionPage = JobRevisionsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
