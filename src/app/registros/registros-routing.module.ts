import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrosPage } from './registros.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrosPage
  },
  {
    path: 'detalle-registro',
    loadChildren: () => import('./detalle-registro/detalle-registro.module').then( m => m.DetalleRegistroPageModule)
  },
  {
    path: 'registro-add',
    loadChildren: () => import('./registro-add/registro-add.module').then( m => m.RegistroAddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrosPageRoutingModule {}
