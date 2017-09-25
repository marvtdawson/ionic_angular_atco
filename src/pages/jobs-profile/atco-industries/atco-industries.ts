import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'atco-industries',
  templateUrl: 'atco-industries.html'
})
export class AtcoIndustriesPage{

  customerName: string = 'Atco Industies';
  jobTitle: string = 'Start Up';
  revNumber: string = "C";
  revStatus: string = "NEW";

}
