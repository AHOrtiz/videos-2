import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalVideoComponent } from './modal-video/modal-video.component';
import { ImagesComponent } from './images/images.component';
import { environment } from '../environments/environment';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    ModalVideoComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,   
    NgbModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
   
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
