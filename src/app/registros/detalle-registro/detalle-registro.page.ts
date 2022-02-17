import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrosService } from '../registros.service';
import { Registro } from '../model/registros.model';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-detalle-registro',
  templateUrl: './detalle-registro.page.html',
  styleUrls: ['./detalle-registro.page.scss'],
})
export class DetalleRegistroPage implements OnInit {
  public registro: Registro;

  constructor(
    private activatedRoute: ActivatedRoute,
    private registrosService: RegistrosService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const responseId = paramMap.get('registroId');
      console.log(responseId);
      this.registro = this.registrosService.getRegistro(responseId);
      console.log(this.registro);
    });
  }
  async deleteRegistro() {
    const alert = await this.alertCtrl.create({
      header: 'Estas seguro?',
      message: '<strong>Se eliminara este registro</strong>!!!',
      buttons: [
        {
          text: 'No lo haga',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ahre ps compa',
          cssClass: 'success',
          handler: () => {
            console.log('Se elimino el registro');
            this.registrosService.deleteRegistro(this.registro.id);
            this.router.navigate(['/', 'registros']);
          },
        },
      ],
    });
    await alert.present();
  }
}
