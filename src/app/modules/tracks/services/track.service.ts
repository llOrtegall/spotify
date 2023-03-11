import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { observable, Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  public dataTracksTrending$: Observable<TrackModel[]> = of([])
  public datatracksRamdom$: Observable<any> = of([])

  constructor() {
    const { data }: any = (dataRaw as any).default;

    this.dataTracksTrending$ = of(data) // esta data pasa a hacer un obeeservable y debemos subcribirnos

    this.datatracksRamdom$ = new Observable((observer) => {

      const trackExample: TrackModel = {
        _id: 9,
        name: 'Leve',
        album: ' Cartel De Santa ',
        url: 'http://',
        cover: 'https://akamai.sscdn.co/uploadfile/letras/fotos/f/2/8/8/f28893d1d7f27c22764f28b32375960e.jpg'

      }

      setTimeout(() => {
        observer.next([trackExample])
      }, 3500)
    })
  }
}
