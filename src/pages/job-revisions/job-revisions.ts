import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from "ionic-angular";
import { RevisionModalPage } from "./revision-modal/revision-modal";

/**
 * Generated class for the JobRevisionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-revisions',
  templateUrl: 'job-revisions.html',
})
export class JobRevisionsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  presentModal() {
    let modal = this.modalCtrl.create(RevisionModalPage);
    modal.present();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad JobRevisionsPage');
  }

}
