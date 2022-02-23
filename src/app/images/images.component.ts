

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
        console.log(resp);
        for (let index = 0; index <= resp.length; index++) {
          let nombre = resp[index].nombre;
          console.log(nombre);
          let ruta = resp[index].url
          console.log(ruta);  
          console.log("La respuesta del servicio es : ", resp);
              this.urlToBlob(ruta).then((newBlob :Blob)=>{
                let newurlCifrada = URL.createObjectURL(newBlob);
                this.imagenFire = this.sanitizar(newurlCifrada)
                console.log("Ruta sanitizada", this.imagenFire);
              })        
         
            this.imagesService.dowloadFile(nombre).subscribe(
             resp => {
              console.log(resp);           
              

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
