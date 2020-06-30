import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookSuccessComponent } from './book-success.component';

const routes: Routes = [
  {
    path: '',
    component: BookSuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSuccessRoutingModule { }
