import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageDrinkPage } from './manage-drink';

@NgModule({
  declarations: [
    ManageDrinkPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageDrinkPage),
  ],
})
export class ManageDrinkPageModule {}
