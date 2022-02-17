import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroAddPage } from './registro-add.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroAddPageRoutingModule {}
