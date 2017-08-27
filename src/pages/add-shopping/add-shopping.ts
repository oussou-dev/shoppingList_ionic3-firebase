import { ShoppingItem } from './../../models/shopping-item/shopping-item.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddShoppingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  // Creating a new Object
  shoppingItem = {} as ShoppingItem
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  addShoppingItem(shoppingItem: ShoppingItem) {
    console.log(shoppingItem);
    
  }



}
