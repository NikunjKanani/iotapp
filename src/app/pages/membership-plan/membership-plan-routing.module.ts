import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MembershipPlanComponent } from './membership-plan.component';

const routes: Routes = [
  {
    path: '',
    component: MembershipPlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipPlanRoutingModule { }
