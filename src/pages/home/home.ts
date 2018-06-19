import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseProvider } from '../../providers/firebase/firebase'
import {Drink} from '../../models/drink';

import { ModalController } from 'ionic-angular';
import {DetailsPage} from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  drinks: Array <Drink> = [];
  constructor(public navCtrl: NavController,
    private firebase: FirebaseProvider,
    private modal: ModalController) {

      this.firebase.getDrinks((drinks) => {
        if(drinks){
          this.renderDrinks(drinks);
        }
      });
    }

    renderDrinks(drinks){
      //count the number of objects using the keys
      var count = Object.keys(drinks).length;
      //get the keys of objects and store in keys array
      var keys = Object.keys(drinks);
      this.drinks = [];
      for(let i:number =0; i< count; i++){
        this.drinks.push( drinks[ keys[i] ]);
      }
    }
    openModal(modaldata){
    let md = this.modal.create( DetailsPage, modaldata ); //send modal data as an object
    //set listener for data sent from modal
    md.onDidDismiss( (data) => {
      //receive data when modal is closed
        console.log(data);
    });
    md.present();
  }
}
