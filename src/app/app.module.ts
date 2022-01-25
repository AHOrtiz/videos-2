import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalVideoComponent } from './modal-video/modal-video.component';


@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    ModalVideoComponent
  ],
  imports: [
    BrowserModule,   
    NgbModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
