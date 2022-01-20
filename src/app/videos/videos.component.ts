import { Component, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {

  @ViewChild('modalMensaje', { static: false })modalMensaje:ElementRef;
  @ViewChild('playCardNetflix', { static: false})playCardNetflix:ElementRef;
  
  public videoSeleccionado:number;


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

 
  //Evento para reproducir el video cuando se pasa el cursor
  overNetflix(){
    const video=this.playCardNetflix.nativeElement;
    video.muted=true;
    video.play();
}

  outCardVideo(){
    const video=this.playCardNetflix.nativeElement;
    video.pause();

  }

  //Modal de video 
  public playVideo(){
 
    this.modalService.open(this.modalMensaje);
    
    console.log("Funciono")
  }

}
