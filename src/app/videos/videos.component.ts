import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoInterface } from '../interface/video-interface';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})

// Aqui se agrego el ciclo del componente (AfterViewInit) el cual se ejecuta cuando termiana de pintar el HTML
export class VideosComponent implements AfterViewInit {
  constructor(
    private modalService: NgbModal,
    private sanitizer:DomSanitizer) {
  
   
  }


  @ViewChild('modalMensaje', { static: false }) modalMensaje: ElementRef;
  //  Aqui se declaro la obtencion del contenedor del HTML
  @ViewChild('contenedorVideos', { static: false }) contenedorVideos: ElementRef<HTMLElement>;

  private  myTrustedURL:any;
  // TODO: Esta variable es para tener las cards del HTML
  private listCardsHTML: NodeListOf<ChildNode>
  // TODO: Esta variable es para tener el video actual
  public currentVideo: VideoInterface = new VideoInterface() 

  public ListVideos = [
    {
      titulo: "Video 1",
      url: "https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4"
    },
    {
      titulo: "video 2 ",
      url: "https://www.youtube.com/watch?v=26xAtkF8h5g&list=RD26xAtkF8h5g&start_radio=1"
    },
    {
      titulo: "Cambio de sello Mecanico y plato en bomba Himp",
      url: "https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4"
    },
    {
      titulo: "Cambio de sello Mecanico y plato en bomba Himp",
      url: "https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4"
    },
    {
      titulo: "Cambio de sello Mecanico y plato en bomba Himp",
      url: "https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4"
    },
    {
      titulo: "Cambio de sello Mecanico y plato en bomba Himp",
      url: '/assets/videos/video1.mp4'
    }
  ]

  /**
   * Se manda a llamar cuando se finaliza de pintar el HTML (en este caso todos los videos)
   */
  ngAfterViewInit(): void {
    this.listCardsHTML = this.contenedorVideos.nativeElement.childNodes
    console.log("Lista de Cards:", this.listCardsHTML);
    
  }


  public overNetflix(idVideo: number) {
    console.log("mouseover en video: ", idVideo);

    // Se obtienen el nodo de video y se parsea a HTMLVideoElement para poder controlar sus eventos
    const videoHTML: HTMLVideoElement = this.listCardsHTML[idVideo].childNodes[0] as HTMLVideoElement
    console.log("Nodo", videoHTML);
    
    console.log("Video encontrado",this.ListVideos[idVideo])
    // TODO: Se inicializa la variable para tener el video actual (en este caso esta variable se ocupa cuando se hace el outCardVideo)
    
   this.myTrustedURL= this.sanitizerVideo(this.ListVideos[idVideo].url)

    this.currentVideo.titulo = this.ListVideos[idVideo].titulo;
    this.currentVideo.url = this.myTrustedURL;
    this.currentVideo.html = videoHTML
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
  public playVideo() {
    this.modalService.open(this.modalMensaje);
    console.log('Funciono');
  }
  
  private sanitizerVideo(url:string):any{
     return this.sanitizer.bypassSecurityTrustUrl(url)
 
  }
}
