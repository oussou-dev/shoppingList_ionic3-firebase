import { ShoppingItem } from './../../models/shopping-item/shopping-item.interface';
import { AddShoppingPage } from './../add-shopping/add-shopping';
import { Component } from '@angular/core';
import {ActionSheetController, IonicPage,  NavController,  NavParams} from 'ionic-angular';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';


/**
 * Generated class for the ShoppingListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private database: AngularFireDatabase,
              private actionSheetCtrl: ActionSheetController) {

    /*
      Pointing shoppingListRef$ at Firebase -> 'shopping-list' node
      That means not only can we push things from this reference to the database, but 
      ALSO we have access to everything inside of that node.
    */
    this.shoppingListRef$ = this.database.list('shopping-list');

      // this.shoppingListRef$.subscribe(x => console.log(x));
      

  }

  
  selectShoppingItem(shoppingItem: ShoppingItem) {
    /* Display an ActionSheet that gives the user the following options :
          1. Edit the ShoppingItem
          2. Delete the SHoppingItem
          3. CAcel selection
    */

    this.actionSheetCtrl.create({
      title: `${shoppingItem.itemName}`,
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            // Send the user to the EditShoppingItemPage and pass the key as a parameter

          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            // Delete the current ShoppingItem, passed via the parameter
            this.shoppingListRef$.remove(shoppingItem.$key);
          }
        },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log("The user has selected the cancel button");
              
            }
          }
        ]
    }).present();


  }

  navigateToAddShoppingPage() {
    // Navigate the user to the AddShoppingPAge
    this.navCtrl.push(AddShoppingPage)
  }
 



}
