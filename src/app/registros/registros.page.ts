/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrosService } from './registros.service';
@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {
  public registros: Array<any>;

  constructor(
    private registrosService: RegistrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registros = this.registrosService.getRegistros();
  }
  ionViewWillEnter() {
    this.registros = this.registrosService.getRegistros();
  }
  addRegistro() {
    this.router.navigate(['new-registro']);
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
}
