import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ArchitectureComponent } from './architecture.component';

import { ArchitectureRoutingModule } from './architecture-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArchitectureRoutingModule
  ],
  declarations: [ArchitectureComponent]
})
export class ArchitectureModule {}
