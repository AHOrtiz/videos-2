import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.css']
})
export class ModalVideoComponent implements AfterViewInit {

  constructor() { }
  @ViewChild ('TemplateBotonVideo', { static: true })TemplateBotonVideo:TemplateRef<any>;

  ngAfterViewInit(): void {
    console.log('Template', this.TemplateBotonVideo);
  }

}
