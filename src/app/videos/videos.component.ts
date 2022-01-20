import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})

// Aqui se agrego el ciclo del componente (AfterViewInit) el cual se ejecuta cuando termiana de pintar el HTML
export class VideosComponent implements AfterViewInit {
  constructor(private modalService: NgbModal) { }


  @ViewChild('modalMensaje', { static: false }) modalMensaje: ElementRef;
  //  Aqui se declaro la obtencion del contenedor del HTML
  @ViewChild('contenedorVideos', { static: false }) contenedorVideos: ElementRef<HTMLElement>;  
  
  // TODO: Esta variable es para tener las cards del HTML
  private listCardsHTML: NodeListOf<ChildNode>
  // TODO: Esta variable es para tener el video actual
  private currentVideo: HTMLVideoElement

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

    // TODO: Se inicializa la variable para tener el video actual (en este caso esta variable se ocupa cuando se hace el outCardVideo)
    this.currentVideo = videoHTML
    this.currentVideo.muted = true;
    this.currentVideo.play();
  }
  /**
   * Detectar cuando cursor sale de una card de tipo netflix
   */
  public outCardVideo() {
    this.currentVideo.pause()
  }
  /**
   * Abrir una modal cuando seleccionan el icono de reproducir
   */
  public playVideo() {
    this.modalService.open(this.modalMensaje);
    console.log('Funciono');
  }
}
