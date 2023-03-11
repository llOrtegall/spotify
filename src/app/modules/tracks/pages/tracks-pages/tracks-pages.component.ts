import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { TracksModule } from '@modules/tracks/tracks.module';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tracks-pages',
  templateUrl: './tracks-pages.component.html',
  styleUrls: ['./tracks-pages.component.css']
})
export class TracksPagesComponent implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = []
  tracksRamdom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) { }


  ngOnInit(): void {
    this.trackService.getAllTracks$()
      .subscribe((response: TrackModel[]) => {
        this.tracksTrending = response
      })

      this.trackService.getAllRamdom$()
      .subscribe((response: TrackModel[]) => {
        this.tracksRamdom = response
      })

  }
  


  ngOnDestroy(): void {

  }

}