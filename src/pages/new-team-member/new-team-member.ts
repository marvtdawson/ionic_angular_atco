import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from "@angular/forms";


@IonicPage()
@Component({
  selector: 'page-new-team-member',
  templateUrl: 'new-team-member.html',
})
export class NewTeamMemberPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

    newMemberForm =  new FormGroup ({

    name: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    shift: new FormControl('', Validators.required),

});

  ionViewDidLoad() {
    //console.log('ionViewDidLoad NewTeamMemberPage');
  }

}
