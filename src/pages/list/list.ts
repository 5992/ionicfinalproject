import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

import { FirebaseProvider } from '../../providers/firebase/firebase'
import {Drink} from '../../models/drink';
import { DetailsPage } from '../../pages/details/details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  drinks: Array <Drink> = [];
  drinksList: Array <Drink> = [];
  loadedDrinksList: Array <Drink> = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private firebase: FirebaseProvider) {
    //getDrinks
    this.firebase.getDrinks((drinks) => {
      if(drinks){
        this.renderDrinks(drinks);
      }
    });
  }

  //Search function
  initializeItems(): void {
    this.drinksList = this.loadedDrinksList;
  }
  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;

    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
    this.drinksList = this.drinksList.filter((v) => {
      if(v.name && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
    console.log(q, this.drinksList.length);
  }

  renderDrinks(drinks){ //everytime
    //count the number of objects using the keys
    var count = Object.keys(drinks).length;
    //get the keys of objects and store in keys array
    var keys = Object.keys(drinks);
    this.drinks = [];

    for(let i:number =0; i< count; i++){
      this.drinks.push( drinks[ keys[i] ]);
    }
    this.drinksList = this.drinks;
    this.loadedDrinksList = this.drinks;
  }

  launchModalListPage(drink){
    this.navCtrl.push(DetailsPage, drink); // open page
  }
}
