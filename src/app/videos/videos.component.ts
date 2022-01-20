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
  
  public videoSeleccionado:number;


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  over(id:number): void {
    this.videoSeleccionado=id;
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

  public playVideo(){
 
    this.modalService.open(this.modalMensaje);
    
    console.log("Funciono")
  }
}
