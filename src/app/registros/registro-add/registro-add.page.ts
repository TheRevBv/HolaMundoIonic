import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrosService } from '../registros.service';

@Component({
  selector: 'app-registro-add',
  templateUrl: './registro-add.page.html',
  styleUrls: ['./registro-add.page.scss'],
})
export class RegistroAddPage implements OnInit {
  constructor(
    private router: Router,
    private registrosService: RegistrosService
  ) {}

  ngOnInit() {}
  guardarRegistro(nombre: HTMLInputElement, url: HTMLInputElement) {
    this.registrosService.addRegistro(nombre.value, url.value);
    // https://cdn-icons.flaticon.com/png/512/1144/premium/1144709.png?token=exp=1644885324~hmac=a23c9e5b69728b8047d507da2741d65c
    this.router.navigate(['registros']);
  }
}
