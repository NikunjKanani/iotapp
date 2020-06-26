import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EditProfileComponent } from './edit-profile.component';

import { EditProfileRoutingModule } from './edit-profile-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfileRoutingModule
  ],
  declarations: [EditProfileComponent]
})
export class EditProfileModule {}
