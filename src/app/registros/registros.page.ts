/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { RegistrosService } from './registros.service';
@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {
  registros: Array<any>;

  constructor(private registrosService: RegistrosService) {}

  ngOnInit(): void {
    this.registros = this.registrosService.getRegistros();
  }
}
