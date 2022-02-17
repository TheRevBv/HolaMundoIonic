import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  fotos = [];
  constructor(private photosService: PhotosService) {}
  ngOnInit() {
    this.photosService.getFotos().subscribe((data) => (this.fotos = data));
  }
}
