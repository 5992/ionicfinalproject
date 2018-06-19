// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
//
// /**
//  * Generated class for the LogoutPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */
//
// @IonicPage()
// @Component({
//   selector: 'page-logout',
//   templateUrl: 'logout.html',
// })
// export class LogoutPage {
//
//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }
//
//   ionViewDidLoad() {
//     console.log('ionViewDidLoad LogoutPage');
//   }
//
// }

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthenticationPage } from '../authentication/authentication';
import { FirebaseauthenticationProvider } from '../../providers/firebaseauthentication/firebaseauthentication';

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: FirebaseauthenticationProvider) {
  }
  logout(){
    this.auth.logout();
    this.navCtrl.setRoot( AuthenticationPage );
  }

}