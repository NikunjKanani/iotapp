import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FaqComponent } from './faq.component';

import { FaqRoutingModule } from './faq-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaqRoutingModule
  ],
  declarations: [FaqComponent]
})
export class FaqModule {}
