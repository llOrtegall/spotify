import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tracks-pages',
  templateUrl: './tracks-pages.component.html',
  styleUrls: ['./tracks-pages.component.css']
})
export class TracksPagesComponent implements OnInit {

  tracksTrending: Array<TrackModel> = []
  tracksRamdom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    const observer1$ = this.trackService.dataTracksTrending$
      .subscribe(response => {
        this.tracksTrending = response
        this.tracksRamdom = response
        console.log('Canciones Tranding -------------> ', response);
      })

    const observer2$ = this.trackService.datatracksRamdom$
      .subscribe(response => {
        this.tracksRamdom = [... this.tracksRamdom, ...response]
        console.log('Canciones Ramdomn Entrando -------------> ', response);
      })

    this.listObservers$ = [observer1$, observer2$]
  }

  ngOnDrestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }
}
