import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HistoryComponent } from './history.component';

import { HistoryRoutingModule } from './history-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryRoutingModule
  ],
  declarations: [HistoryComponent]
})
export class HistoryModule {}
