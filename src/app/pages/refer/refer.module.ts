import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ReferComponent } from './refer.component';

import { ReferRoutingModule } from './refer-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferRoutingModule
  ],
  declarations: [ReferComponent]
})
export class ReferModule {}
