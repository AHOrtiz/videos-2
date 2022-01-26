import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { VideoInterface } from '../interface/video-interface';
import { VideosComponent } from '../videos/videos.component';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.css']
})
export class ModalVideoComponent {

  constructor(private modalService: NgbModal) { }

  @ViewChild('modalMensaje', { static: false }) modalMensaje: ElementRef;
  @Input() dataVideo: any

  public currentVideo: VideoInterface

  public playVideo() {

    this.modalService.open(this.modalMensaje);

    setTimeout(() => {
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





