import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ScannerComponent } from './scanner.component';

import { ScannerRoutingModule } from './scanner-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScannerRoutingModule
  ],
  declarations: [ScannerComponent]
})
export class ScannerModule {}
