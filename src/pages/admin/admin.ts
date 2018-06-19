import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseProvider } from '../../providers/firebase/firebase'
import {Drink} from '../../models/drink';

import { ModalController } from 'ionic-angular';
import {DetailsPage} from '../details/details';
import {ManageDrinkPage} from '../manage-drink/manage-drink';
/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  drinks: Array <Drink> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
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
  //Detail Modal
  openModal(modaldata){
    let md = this.modal.create( DetailsPage, modaldata ); //send modal data as an object
    //set listener for data sent from modal
    md.onDidDismiss( (data) => {
      //receive data when modal is closed
        console.log(data);
    });
    md.present();
  }

  //Create & Edit Modal
  openCreateModal(modeobj){
    let md = this.modal.create( ManageDrinkPage, modeobj );
    //add a listener for when the modal is closed
    md.onDidDismiss( (data) => {
      //save the data to firebase usin the DataserviceProvider
      if(data){
        if(data.mode == 'add'){
          this.firebase.createDrink(data);
          this.firebase.getDrinks((drinks) => {
            this.renderDrinks(drinks);
          });
        }
        if(data.mode == 'edit'){
          console.log(data);
          this.firebase.updateDrink( data, () => {
            this.firebase.getDrinks((drinks) => {
              this.renderDrinks(drinks);
            });
          });
        }
      }

    });
    md.present();
  }
  delete(id){
    console.log(id);
    this.firebase.deleteDrink(id, () => {
      this.firebase.getDrinks((drinks) => {
        this.renderDrinks(drinks);
      });
    });

  }
}
