import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GooglePage } from './google';

@NgModule({
  declarations: [
    GooglePage,
  ],
  imports: [
    IonicPageModule.forChild(GooglePage),
  ],
})
export class GooglePageModule {}
