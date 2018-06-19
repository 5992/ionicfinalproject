import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {Drink} from '../../models/drink';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  drink: Drink;
  title: string;
  howtomix: string;
  ingredients: string;
  image: string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private view: ViewController) {
     this.title = navParams.data.title;
     this.ingredients = navParams.data.ingredients;
     this.howtomix = navParams.data.howtomix;
     this.image = navParams.data.image;
     console.log(navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
  closeModal(){
    let data = {test: 'hello'}; //for editing pass back data to home
    this.view.dismiss(data);
  }
}
