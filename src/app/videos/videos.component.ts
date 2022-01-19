import { Component, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {

  @ViewChild('videoPlay', { static: false }) videoPlay: ElementRef;

  videoClicked = false;


  constructor() { }

  ngOnInit(): void {
  }

  over(id:number): void {
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
