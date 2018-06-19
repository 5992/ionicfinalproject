
import { Injectable } from '@angular/core';
import firebase from 'firebase';
/*
  Generated class for the FirebaseauthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseauthenticationProvider {
  public userid: string;
  public useremail: string;
  constructor() {
    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
        if (!user) {
          this.userid = '';
          this.useremail = '';
          unsubscribe();
        } else {
          this.useremail = user.email;
          this.userid = user.uid;
          unsubscribe();
        }
      });
  }
  login( email: string, password: string ): Promise <any>{
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  logout(): Promise<void> {
    return firebase.auth().signOut();
  }
}
