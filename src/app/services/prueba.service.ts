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
      nombre:"Diagnostico de Competencias.PNG",
      url:""
    },
    {
      nombre:"datos para cancer de mama.PNG",
      url:""
    },
    {
      nombre : "stretched-1440-900-642527.jpg",
      url : ""
    }
   ];

  public Getimages():Observable<any> {
    
    return of(this.respFalse)
  }
  public dowloadFileImageFirabe(nombre:string): Observable<any> {
    const image = this.firebaseStorage.ref( "/" + nombre);
    return image.getDownloadURL();
  }
}
