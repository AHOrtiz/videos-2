
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

  public coleccion: any[] = []
  public imagenFire: SafeResourceUrl;

  ngOnInit(): void {
    this.imagenes()
  }
  private async urlToBlob(url: string): Promise<Blob> {
    let blob = await fetch(url).then(result => result.blob())
    return blob
  }
  private async imagenes() {
    this.imagesService.dowloadFile().subscribe(
      async resp => {
        console.log(resp);
        this.urlToBlob(resp).then((newBlob: Blob) => {
      let newUrl = URL.createObjectURL(newBlob)
      this.imagenFire = this.sanitizar(newUrl)
        })
       

      }
    )
    this.imagesService.Getimages().subscribe(
      async resp => {
        console.log(resp);
        for (let index = 0; index <= resp.length - 1; index++) {
          let ruta = resp[index].url
          let imageurl: string = await new Promise(async (resolve, error) => {
            const blob = new Blob([ruta], { type: 'image/png' });
            let imgeblob = URL.createObjectURL(blob)
            resolve(imgeblob)
          });
          // let blob = await fetch(resp[index].url).then(r => r.blob());
          // let imageUrl=URL.createObjectURL(blob)

          this.coleccion[index] = {
            nombre: resp[index].nombre,
            url: this.sanitizar(imageurl)
          }
        }
        console.log(this.coleccion)
      }
    )

  }

  sanitizar(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
