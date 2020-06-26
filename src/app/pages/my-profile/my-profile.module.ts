import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MyProfileComponent } from './my-profile.component';

import { MyProfileRoutingModule } from './my-profile-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyProfileRoutingModule
  ],
  declarations: [MyProfileComponent]
})
export class MyProfileModule {}
