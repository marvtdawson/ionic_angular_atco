import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public altCtrl: AlertController) {
  }

  if(closeJob){
    this.altCtrl.create({
      title:  'Close' + this.jobTitle,
      message: 'You are about to close this job to the entire team.  Are you sure you want to proceed?',
    });
  }

}
