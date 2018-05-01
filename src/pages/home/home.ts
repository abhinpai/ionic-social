import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LinkedIn } from '@ionic-native/linkedin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isLoggedin: boolean = false;
  linkedinUser: any;

  constructor(public navCtrl: NavController,
    public linkedIn: LinkedIn) {

  }


  login(){
    this.linkedIn.login(['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'], true)
      .then(res =>{
        let data = res;
        this.linkedinUser = data;
        console.log(data);
      })
  }
  logout(){
    this.linkedIn.logout();
    this.isLoggedin = false;
  }

}
