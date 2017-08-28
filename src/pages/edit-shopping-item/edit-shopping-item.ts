import { ShoppingItem } from './../../models/shopping-item/shopping-item.interface';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



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

  shoppingItemRef$: FirebaseObjectObservable<ShoppingItem>;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private database: AngularFireDatabase) 
              {

        // Capture the shoppingItemId as a NavParameter
        const shoppingItemId = this.navParams.get('shoppingItemId');
        console.log(shoppingItemId);
          


      this.shoppingItemRef$ = this.database.object(`shopping-list/${shoppingItemId}`);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditShoppingItemPage');
  }

}
