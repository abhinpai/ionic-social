import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-facebook',
  templateUrl: 'facebook.html',
})
export class FacebookPage {

  isLoggedin: boolean = false;
  fbUser : any;

  constructor(public navCtrl: NavController, 
      public fire: AngularFireAuth,
      public navParams: NavParams) {
  }



  loginFB(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res =>{
        console.log(res);
        this.isLoggedin = true;

        let data = res;
        this.fbUser = data;
      })
  }


  logout(){
    this.fire.auth.signOut().then(res => this.isLoggedin = false);
  }

}
