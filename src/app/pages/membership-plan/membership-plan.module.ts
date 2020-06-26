import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MembershipPlanComponent } from './membership-plan.component';

import { MembershipPlanRoutingModule } from './membership-plan-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembershipPlanRoutingModule
  ],
  declarations: [MembershipPlanComponent]
})
export class MembershipPlanModule {}
