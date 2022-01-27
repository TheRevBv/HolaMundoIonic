import { Injectable } from '@angular/core';
import { Registro } from './model/registros.model';

@Injectable({
  providedIn: 'root',
})
export class RegistrosService {
  private registros: Registro[] = [
    {
      id: '1',
      nombre: 'Joshua Morin',
      foto: 'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg',
      observaciones: ['guapo', 'veloz'],
    },
    {
      id: '2',
      nombre: 'Juan Mtz',
      foto: 'https://www.akabeko.biz/images/staff_1.jpg',
      observaciones: ['gei', 'anciano'],
    },
    {
      id: '3',
      nombre: 'Zamora gei',
      foto: 'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png',
      observaciones: ['otaku', 'noob'],
    },
  ];

  constructor() {}

  //Metodo para obtener todos los registros
  getRegistros() {
    return [...this.registros];
  }
  //Metodo para obtener un registro
  getRegistro() {}
  //Metodo para añadir un registro
  addRegistro() {}

  deleteRegistro() {}
}
