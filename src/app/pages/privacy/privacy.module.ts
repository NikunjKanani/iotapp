import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PrivacyComponent } from './privacy.component';

import { PrivacyRoutingModule } from './privacy-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacyRoutingModule
  ],
  declarations: [PrivacyComponent]
})
export class PrivacyModule {}
