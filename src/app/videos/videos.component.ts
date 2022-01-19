import { Component, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {

  @ViewChild('videoPlay', { static: false }) videoPlay: QueryList<any>;

  videoClicked = false;


  constructor() { }

  ngOnInit(): void {
  }

  over(id:number): void {
    console.log("Hover activado", id);
    this.videoClicked = true;
     const arreglo=this.videoPlay.toArray()
     console.log(arreglo)
    // this.videoPlay.forEach((elemento:ElementRef) => {
    //   console.log(elemento.nativeElement);
    // });
    // this.videoPlay.nativeElement.play();
    // this.videoPlay.nativeElement.

  }
  out() {

  }
}
