import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';

import { SignupRoutingModule } from './signup-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupRoutingModule
  ],
  declarations: [SignupComponent]
})
export class SignupModule {}
