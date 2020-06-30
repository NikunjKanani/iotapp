import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BookSuccessComponent } from './book-success.component';

import { BookSuccessRoutingModule } from './book-success-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookSuccessRoutingModule
  ],
  declarations: [BookSuccessComponent]
})
export class BookSuccessModule {}
