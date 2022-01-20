import { Component, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {

  @ViewChild('videoPlay', { static: false }) videoPlay: ElementRef;
  @ViewChild('modalMensaje', { static: false })modalMensaje:ElementRef;
  @ViewChild('playCardNetflix', { static: false})playCardNetflix:ElementRef;
  
  public videoSeleccionado:number;


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  over(id:number): void {
    //this.videoSeleccionado=id;
    const video=this.videoPlay.nativeElement;

    console.log("Hover activado", id); 
    video.muted=true;
    video.play(); 

  }
  out() {
    const video=this.videoPlay.nativeElement;
    console.log("toy juera")
    video.pause();
  }

  
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
