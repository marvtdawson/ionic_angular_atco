import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserAuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserAuthProvider {

  constructor(public http: Http) {
    console.log('Hello UserAuthProvider Provider');
  }

  // define global user variables, these variables are used
  // with selected persistent data module/application for authentication.
  // Currently CouchDB is the default module being used to store persistent data.

  login() {
    return new Promise((resolve, reject) => {
      // set timeout function to 3 seconds
      setTimeout(function () {
        resolve(false);
      }, 3000);
    });
  }

}
