import { Component, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {

  @ViewChild('videoPlay', { static: false }) videoPlay: ElementRef;
  
  public videoSeleccionado:number;


  constructor() { }

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
}
