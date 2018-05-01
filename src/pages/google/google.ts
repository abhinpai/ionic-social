import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-google',
  templateUrl: 'google.html',
})
export class GooglePage {

  googleUser: any;
  isLoggedin: boolean = false;

  constructor(public navCtrl: NavController,
    public fire: AngularFireAuth,
     public navParams: NavParams) {
  }

  loginGoogle(){
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        console.log(res);
        this.isLoggedin = true;
        let data = res;
        this.googleUser = data;
      })
  }

  logout(){
    this.fire.auth.signOut().then(res => this.isLoggedin = false);
  }

}
