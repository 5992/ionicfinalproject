
import { HttpClient } from '@angular/common/http';
import firebase from 'firebase';
import {Drink} from '../../models/drink';
import { Injectable } from '@angular/core';



/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  public drinks: Array<Drink>;
  count: number;
  newID: number;
  constructor(private http: HttpClient) {

  }

  getDrinks(callback){
      firebase.database().ref('drinks').once('value').then( (snapshot) => {
        callback( snapshot.val() );
      });
  }
  createDrink(data){

    this.newID =  new Date().getTime();
    let drinkID = 'drink' + <string><any> this.newID;

    //create a new drink using the class in /models/drink.ts and the data passed from admin.ts
    let drink = new Drink( drinkID, data.name, data.image, data.ingredients, data.howtomix );
    //write the note object using its created string as a key (leave child blank and firebase will auto generate an id)
    firebase.database().ref('/drinks').child(drinkID).set(drink);
  }
  updateDrink(data,callback){ //in data need to have drink object to get key of drink object
    let drinkdata = {id: data.id, name: data.name, ingredients: data.ingredients, howtomix: data.howtomix, image: data.image }
    //let key = Object.keys(data.drink);
    console.log(data.id);
    let path = '/drinks/' + data.id;//key;
    firebase.database().ref(path).update(drinkdata).then( callback() );
  }
  deleteDrink( id, callback ){
    let path = '/drinks/' + id;
    firebase.database().ref(path).set(null).then( callback() );
  }
}
