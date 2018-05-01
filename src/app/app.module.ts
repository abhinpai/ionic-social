import { TwitterPageModule } from './../pages/twitter/twitter.module';
import { GooglePageModule } from './../pages/google/google.module';
import { FacebookPageModule } from './../pages/facebook/facebook.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from 'angularfire2/auth';

import { Facebook } from '@ionic-native/facebook';

import { GooglePlus } from '@ionic-native/google-plus';

var config = {
  apiKey: "AIzaSyAwZRy0ce9aODDfABR3B0MU5sLq71Z1Osw",
  authDomain: "ionic-social-f8a22.firebaseapp.com",
  databaseURL: "https://ionic-social-f8a22.firebaseio.com",
  projectId: "ionic-social-f8a22",
  storageBucket: "ionic-social-f8a22.appspot.com",
  messagingSenderId: "57813302265"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FacebookPageModule,
    GooglePageModule,
    TwitterPageModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
