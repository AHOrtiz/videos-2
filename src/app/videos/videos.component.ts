import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {

  // @ViewChild('videoPlay',{static:false}) videoPlay:ElementRef;
  videoClicked=false;


  constructor() { }

  ngOnInit(): void {
  }

 over():void{
  console.log("Hover activado");
  this.videoClicked=true;
  // this.videoPlay.nativeElement.play();

 }
 out(){

 }
}
