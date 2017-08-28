import { ShoppingItem } from './../../models/shopping-item/shopping-item.interface';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Subscription} from 'rxjs/Subscription'; 

/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  shoppingItemSubscription: Subscription;

  shoppingItemRef$: FirebaseObjectObservable<ShoppingItem>;

  shoppingItem = {} as ShoppingItem;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private database: AngularFireDatabase) 
              {

        // Capture the shoppingItemId as a NavParameter
        const shoppingItemId = this.navParams.get('shoppingItemId');
        console.log(shoppingItemId);
          

      // Set the scope of our Firebase Object equel to our NavParams to our selected item
      this.shoppingItemRef$ = this.database.object(`shopping-list/${shoppingItemId}`);
      
      // Subscribe to the Object and assign the result to this.shoppingItem
      this.shoppingItemSubscription = this.shoppingItemRef$.subscribe(shoppingItem => this.shoppingItem = shoppingItem)
 
    }

    editShoppingItem(shoppingItem: ShoppingItem) {
      // Update our Firebase node with new item data
      this.shoppingItemRef$.update(shoppingItem);

      // Send the user back to ShoppingListPAge
      this.navCtrl.pop();
    }

  ionViewWillLeave() {
    // Unsubscribe from the Observable when leaving the page
    this.shoppingItemSubscription.unsubscribe();
  }

}
