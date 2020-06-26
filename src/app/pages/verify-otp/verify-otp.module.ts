import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { VerifyOtpComponent } from './verify-otp.component';

import { VerifyotpRoutingModule } from './verify-otp-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyotpRoutingModule
  ],
  declarations: [VerifyOtpComponent]
})
export class VerifyOtpModule {}
