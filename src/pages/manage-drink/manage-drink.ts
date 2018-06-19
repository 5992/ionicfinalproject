import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Drink} from '../../models/drink';

/**
 * Generated class for the ManageDrinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-drink',
  templateUrl: 'manage-drink.html',
})
export class ManageDrinkPage {
    public drinkForm:FormGroup;
    //to store the form data ngModels
    public name: string;
    public image: string;
    public ingredients: string;
    public howtomix: string;
    public mode: string;
    public id: string;
    constructor(public navCtrl:NavController, public navParams:NavParams, public viewCtrl:ViewController, private formBuilder: FormBuilder) {
      //create validator for the drink form
      this.drinkForm = this.formBuilder.group({
        name: ['',Validators.compose([
            //the field is required
            Validators.required,
            //the minimum length is 4 characters
            Validators.minLength(4)
          ])
        ],
        ingredients: ['',Validators.compose([
            Validators.required
          ])
        ],
        howtomix: ['',Validators.compose([
            Validators.required
          ])
        ],
        image: ['',Validators.compose([
            Validators.required
          ])
        ]
      });
      //get mode
      this.mode = navParams.data.mode;

      console.log(this.mode);
      if(navParams.data.mode == 'edit'){
        this.name = navParams.data.name;
        this.ingredients = navParams.data.ingredients;
        this.howtomix = navParams.data.howtomix;
        this.image = navParams.data.image;
        this.id = navParams.data.id;
      }
    }

    ionViewDidLoad() {

    }
    closeModal(){
      //user cancels so don't pass any data
      this.viewCtrl.dismiss();
    }
    saveDrink(){
      let data = {};
      if( this.mode == 'add' ){
        //get the drink atts from the page's ngModels
        data = {name: this.name, ingredients: this.ingredients, howtomix: this.howtomix, image: this.image, mode: this.mode };
      }
      if( this.mode == 'edit' ){
        data = {name: this.name, ingredients: this.ingredients, howtomix: this.howtomix, image: this.image, mode: this.mode, id: this.id }
      }
      //pass the data when the modal is closed
      this.viewCtrl.dismiss(data);
    }
}
