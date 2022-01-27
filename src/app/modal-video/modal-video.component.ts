import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { VideoInterface, VideosModal } from '../interface/video-interface';
import { VideosComponent } from '../videos/videos.component';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.css']
})
export class ModalVideoComponent {

  constructor(private modalService:NgbModal) { }
  
  @ViewChild('modalMensaje', { static: false }) modalMensaje: ElementRef;  
  @Input() dataVideo:VideosModal;

 

  public currentVideo: VideoInterface

  /* En esta funcion 
    
  */ 

  public playVideo() {
   // Primero se pinta la modal
    this.modalService.open(this.modalMensaje);    
    // El setTimeout()método llama a una función después de una cantidad de milisegundos.
    //En esta caso necesitamos tiempo para mostrarel contenido de la modal 
    
    setTimeout(() => {
      //Se obtiene el objeto video que esta adentro de la modal
      const videoHTML: HTMLVideoElement = document.getElementById('videoPlayer') as HTMLVideoElement
      videoHTML.currentTime=1;
      console.log("El video se reproduce en el segudo ",videoHTML);

      this.currentVideo = {
        html: videoHTML,
        url: this.dataVideo.url,
        titulo: this.dataVideo.titulo
      }
    }, 100)

  }


}





