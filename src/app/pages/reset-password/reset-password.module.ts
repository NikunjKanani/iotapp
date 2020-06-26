import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password.component';

import { ResetPasswrodRoutingModule } from './reset-password-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPasswrodRoutingModule
  ],
  declarations: [ResetPasswordComponent]
})
export class ResetPasswordModule {}
