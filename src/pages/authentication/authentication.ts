import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//we use a modal to show terms and conditions
//import { ModalController } from 'ionic-angular';
//we use the tcmodal page as content for our modal to show the terms and conditions
import { HomePage } from '../home/home';
import { FirebaseauthenticationProvider } from '../../providers/firebaseauthentication/firebaseauthentication';

@IonicPage()
@Component({
  selector: 'page-authentication',
  templateUrl: 'authentication.html',
})
export class AuthenticationPage {
  loginForm : FormGroup;

  public title: string = 'Admin Sign In';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public auth: FirebaseauthenticationProvider,
              private formBuilder: FormBuilder ) {

    //validate login form
    this.loginForm = this.formBuilder.group({
      email: ['',Validators.compose([
          Validators.email,
          Validators.required
        ])
      ],
      password: ['',
        Validators.required
      ]
    });
  }

  login(){
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.auth.login( email, password )
    .then( () => {
      this.navCtrl.setRoot(HomePage);
    },
    (error) => {
      console.log(error);
    });
  }
}
