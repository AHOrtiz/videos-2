import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  OnInit  
} from '@angular/core';

import { VideoInterface, VideosModal } from '../interface/video-interface';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})

// Aqui se agrego el ciclo del componente (AfterViewInit) el cual se ejecuta cuando termiana de pintar el HTML
export class VideosComponent implements OnInit, AfterViewInit {
  constructor() { }


  @ViewChild('modalMensaje', { static: false }) modalMensaje: ElementRef;
  //  Aqui se declaro la obtencion del contenedor del HTML
  @ViewChild('contenedorVideos', { static: false }) contenedorVideos: ElementRef<HTMLElement>;



  // TODO: Esta variable es para tener las cards del HTML
  private listCardsHTML: NodeListOf<ChildNode>
  // TODO: Esta variable es para tener el video actual
  public currentVideo: VideoInterface = new VideoInterface()
  public ListVideos: VideosModal[] = []


  /**
   * Se manda a llamar cuando se finaliza de pintar el HTML (en este caso todos los videos)
   */
  ngAfterViewInit(): void {
    this.listCardsHTML = this.contenedorVideos.nativeElement.childNodes
    console.log("Lista de Cards:", this.listCardsHTML);

  }

  ngOnInit(): void {
    this.ListVideos = [
      {
        titulo: "Video 1",
        url: "https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4"
      },
      {
        titulo: "video 2 ",
        url: ("assets/videos/video1.mp4")
      },
      {
        titulo: "Cambio de sello Mecanico y plato en bomba Himp",
        url: ("assets/videos/video2.mp4")
      },
      {
        titulo: "Prueba 1",
        url: "https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4"
      },
      {
        titulo: "Prueba 2 ",
        url: "https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4"
      },
      {
        titulo: "Prueba 3",
        url: "https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4"
      },
      {
        titulo: "Cambio de sello Mecanico y plato en bomba Himp",
        url: "https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4"
      },

    ]
    this.ReduccionVideo()

  }

  public overNetflix(idVideo: number) {
    console.log("mouseover en video: ", idVideo);

    // Se obtienen el nodo de video y se parsea a HTMLVideoElement para poder controlar sus eventos
    const videoHTML: HTMLVideoElement = this.listCardsHTML[idVideo].childNodes[0] as HTMLVideoElement
    console.log("Nodo", videoHTML);

    console.log("Video encontrado", this.ListVideos[idVideo])
    // TODO: Se inicializa la variable para tener el video actual (en este caso esta variable se ocupa cuando se hace el outCardVideo)


    this.currentVideo.html = videoHTML;
    this.currentVideo.url = this.ListVideos[idVideo].url;
    console.log(this.currentVideo.url)
    this.currentVideo.titulo = this.ListVideos[idVideo].titulo
    this.currentVideo.html.muted = true;
    this.currentVideo.html.play();
    console.log("video actual", this.currentVideo);
  }
  /**
   * Detectar cuando cursor sale de una card de tipo netflix
   */
  public outCardVideo() {
    this.currentVideo.html.pause()
  }
  /**
   * Abrir una modal cuando seleccionan el icono de reproducir
   */
  // public playVideo() {
  //   this.modalService.open(this.modalMensaje);
  //   console.log('Funciono');
  // }

  public ReduccionVideo() {

    if (this.ListVideos.length >= 5) {
      this.ListVideos = this.ListVideos.slice(0, 5)
    }

  }

}
