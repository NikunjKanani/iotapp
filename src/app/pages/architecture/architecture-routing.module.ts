import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArchitectureComponent } from './architecture.component';

const routes: Routes = [
  {
    path: '',
    component: ArchitectureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchitectureRoutingModule { }
