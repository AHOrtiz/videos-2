import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AngularFireStorage} from '@angular/fire/compat/storage';
import { validateNamespace } from '@firebase/util';


@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor( private http: HttpClient, private firebaseStorage: AngularFireStorage) { }
  public respFalse:any[]=[
    {
      nombre:"Prueba",
      url:"https://firebasestorage.googleapis.com/v0/b/imagenes-2510f.appspot.com/o/Diagnostico%20de%20Competencias.PNG?alt=media&token=c3d3405f-dfb0-4ad7-8936-5f0349b93759"
    },
    {
      nombre:"Prueba2",
      url:"https://sumedico.blob.core.windows.net/images/2020/03/17/cuidadosgatobebe_2-focus-min0.07-0.45-640-384.jpg"
    },
    {
      nombre:"Prueba3",
      url:"https://sumedico.blob.core.windows.net/images/2020/03/17/cuidadosgatobebe_2-focus-min0.07-0.45-640-384.jpg"
    },

  ];

  public Getimages():Observable<any> {
    
    return of(this.respFalse)
  }
  public dowloadFile(): Observable<any> {
    const image = this.firebaseStorage.ref('/Diagnostico de Competencias.PNG');
    return image.getDownloadURL();
  }
}
