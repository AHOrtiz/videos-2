

import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { PruebaService } from '../services/prueba.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private imagesService: PruebaService, private readonly sanitizer: DomSanitizer) { }

  public coleccion: any[] = [];

  public imagenFire: SafeResourceUrl;
  public urlim: string;

  ngOnInit(): void {
    this.imagenes()
  }
  private async urlToBlob(url: string): Promise<Blob> {
    let blob = await fetch(url).then(result => result.blob())
    return blob
  }
  private async imagenes() {


    this.imagesService.Getimages().subscribe(
      async resp => { 
       
        for (let index = 0; index <= resp.length -1; index++) {
          let nombre = resp[index].nombre;
          
            this.imagesService.dowloadFileImageFirabe(nombre).subscribe(
             async respuesta => {
                         
              let blob = await fetch(respuesta).then(result => result.blob());
              let urlCifrada = URL.createObjectURL(blob);
              let newurl = this.sanitizar(urlCifrada);
              this.coleccion.push({
                nombre : nombre ,
                url : newurl
              })

            }
          )
        }

      }
    )

  }

  sanitizar(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
