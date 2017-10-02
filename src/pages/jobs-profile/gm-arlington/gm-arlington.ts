import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { JobRevisionsPage } from "../../job-revisions/job-revisions";

@Component({
  selector: 'gm-arlington',
  templateUrl: 'gm-arlington.html'
})
export class GmArlingtonPage{

  customerName: string = 'GM Arlington';
  jobTitle: string = 'Battery Cables';
  revNumber: string = "E";
  revStatus: string = "SAME";
  navToJobRevisionPage = JobRevisionsPage;
}
