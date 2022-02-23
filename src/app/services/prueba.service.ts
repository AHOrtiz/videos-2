import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AngularFireStorage} from '@angular/fire/compat/storage';



@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor( private http: HttpClient, private firebaseStorage: AngularFireStorage) { }
  public respFalse:any[]=[
    {
      nombre:"Diagnostico de Competencias",
      url:"https://firebasestorage.googleapis.com/v0/b/imagenes-2510f.appspot.com/o/Diagnostico%20de%20Competencias.PNG?alt=media&token=c3d3405f-dfb0-4ad7-8936-5f0349b93759"
    },
    {
      nombre:"Datos para cancer de mama",
      url:"https://firebasestorage.googleapis.com/v0/b/imagenes-2510f.appspot.com/o/datos%20para%20cancer%20de%20mama.PNG?alt=media&token=6cc337ef-cccb-4897-8660-feb9ef719f36"
    },
    {
      nombre:"stretched-1440-900-642527",
      url:"https://firebasestorage.googleapis.com/v0/b/imagenes-2510f.appspot.com/o/stretched-1440-900-642527.jpg?alt=media&token=040ea5d9-deb1-4e14-be71-c214383a12f3"
    },

  ];

  public Getimages():Observable<any> {
    
    return of(this.respFalse)
  }
  public dowloadFile(nombre:string): Observable<any> {
    const image = this.firebaseStorage.ref( "/" + nombre);
    return image.getDownloadURL();
  }
}
