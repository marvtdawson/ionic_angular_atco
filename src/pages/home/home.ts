import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import {InspectionsPage} from "../inspections/inspections";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //navPushInspectionsPage = InspectionsPage;
  constructor(public navCtrl: NavController) {}

}
