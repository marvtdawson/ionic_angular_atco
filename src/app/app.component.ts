import { Component } from '@angular/core';
import {LoadingController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserAuthProvider } from "../providers/user-auth/user-auth";

import { HomePage } from '../pages/home/home';
import {InspectionsPage} from "../pages/inspections/inspections";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  loader: any;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public loadingCtrl: LoadingController,
              public userAuth: UserAuthProvider
              ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

      // call loading controller for app authentication
      this.presentLoading();

    // 2. check if user login information is present
    this.userAuth.login().then((isLoggedIn) => {

        if (isLoggedIn === false) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = HomePage;
        }
        this.loader.dismiss();
      });

    }

    /**
     * show Authenticating loader
     */
    presentLoading() {
      this.loader = this.loadingCtrl.create({
        content: "Authenticating App..."
      });
      this.loader.present();
    }

}
