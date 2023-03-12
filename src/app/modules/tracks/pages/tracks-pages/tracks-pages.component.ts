import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
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

    constructor(private trackService: TrackService) {

    }


    ngOnInit(): void {
        this.loadDataAll()
        this.loadDataRamdom()
    }

    async loadDataAll(): Promise<any> {
        this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
    }

    loadDataRamdom(): void {
        this.trackService.getAllRamdom$()
            .subscribe((response: TrackModel[]) => {
                // console.log('Respuesta Aquí Desde la API ', response)
                this.tracksRamdom = response
            })
    }

    ngOnDestroy(): void {

    }

}