import { Component } from '@angular/core';
import {AlertController, LoadingController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserAuthProvider } from "../providers/user-auth/user-auth";
import { Push, PushObject, PushOptions } from "@ionic-native/push";

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
              public userAuth: UserAuthProvider,
              public push: Push,
              public alertCtrl: AlertController
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
            this.rootPage = InspectionsPage;
          } else {
            this.rootPage = HomePage;
          }
          this.loader.dismiss();
        });


    this.pushSetUp();

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

  /**
   * set up push notifications
   */
  pushSetUp(){

    const options: PushOptions = {
      android: {

      },
      ios: {
        alert: "true",
        badge: "true",
        sound: "false"
      },
      windows: {}
    };

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('notification').subscribe((notification: any) => {

      // check if user has app in the foreground
      if(notification.additionalData.foreground){
        let sysPushAlert = this.alertCtrl.create({
          title:  'New Push Notification',
          message: notification.message,
        });
        sysPushAlert.present();
      }
    });

    pushObject.on('registration').subscribe((registration: any) => alert("Device is register" + registration));

    pushObject.on('error').subscribe(error  => alert("Error with the push plugin" + error));
  }

}
