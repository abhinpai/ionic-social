import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

import { GooglePlus } from '@ionic-native/google-plus';


@IonicPage()
@Component({
  selector: 'page-google',
  templateUrl: 'google.html',
})
export class GooglePage {

  googleUser: any;
  isLoggedin: boolean = false;

  constructor(public navCtrl: NavController,
    public google: GooglePlus,
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


  login(){
    this.google.login({})
      .then(res =>{
        let data = res;
        this.isLoggedin = true;
        this.googleUser = data;
        console.log(data);
      })
  }

  logout(){
    // this.fire.auth.signOut().then(res => this.isLoggedin = false);
    this.google.logout()
    .then(res =>{
      this.isLoggedin = false;
    })
  }

}
