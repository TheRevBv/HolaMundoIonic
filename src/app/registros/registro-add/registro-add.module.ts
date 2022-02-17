import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroAddPageRoutingModule } from './registro-add-routing.module';

import { RegistroAddPage } from './registro-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroAddPageRoutingModule
  ],
  declarations: [RegistroAddPage]
})
export class RegistroAddPageModule {}
