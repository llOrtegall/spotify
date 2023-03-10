import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TrackModel = {
    cover: 'https://media.istockphoto.com/id/1431038798/es/foto/hermosa-joven-usando-una-computadora-port%C3%A1til-y-tomando-notas-mientras-aprende-desde-casa.jpg?s=1024x1024&w=is&k=20&c=Lo79PdCRtdx9Qb5z7upKeoNmK3VzoRljq_4IMTyuJfA=',
    album: 'Gioli y Ashia ',
    name: 'BEBE (OFICIAL)',
    url: 'http://localhost/track.mp3',
    _id: 1
  }

  constructor() { }

  ngOnInit(): void {

  }
}
