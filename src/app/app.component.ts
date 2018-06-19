import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';
import { Configuration } from '../configuration/configuration';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AuthenticationPage } from '../pages/authentication/authentication';
import { LogoutPage } from '../pages/logout/logout';
import { AdminPage } from '../pages/admin/admin';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    //firebase section
    firebase.initializeApp( Configuration.firebase );
    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
      if (!user) {
        this.rootPage = HomePage;
        this.pages = [
          { title: 'Home', component: HomePage },
          { title: 'Search', component: ListPage },
          { title: 'Admin Sign In', component: AuthenticationPage }
        ];
      }
      else {
        this.rootPage = AdminPage;
        this.pages = [
          // Them admin update and deleteDrink
          // { title: 'Home', component: HomePage },
          { title: 'Search', component: ListPage },
          { title: 'Admin Page', component: AdminPage },
          { title: 'Logout', component: LogoutPage }
        ];
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
