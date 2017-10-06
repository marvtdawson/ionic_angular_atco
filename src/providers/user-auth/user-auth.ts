import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from "@ionic/storage";

/*
  Generated class for the UserAuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserAuthProvider {

  memId: any;

  constructor(public http: Http, public storage: Storage) {

    this.memId = this.storage.set('memberId', '656974');
  }

  // define global user variables, these variables are used
  // with selected persistent data module/application for authentication.
  // Currently CouchDB is the default module being used to store persistent data.


  login() {
    return new Promise((resolve, reject) => {
      // set timeout function to 3 seconds
      setTimeout(function () {
        resolve(false);
      }, 2000);
    });
  }

}
