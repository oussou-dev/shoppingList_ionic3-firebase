import { EditShoppingItemPage } from './../pages/edit-shopping-item/edit-shopping-item';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AddShoppingPage } from './../pages/add-shopping/add-shopping';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import {AngularFireModule} from 'angularfire2';


import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';

@NgModule({
  declarations: [
    MyApp,
    ShoppingListPage,
    AddShoppingPage,
    EditShoppingItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Initialize AngularFire with credentials from the dashboard
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    // Import the AngularFireDatabaseModule to use database
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppingListPage,
    AddShoppingPage,
    EditShoppingItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
