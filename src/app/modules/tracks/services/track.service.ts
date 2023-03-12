import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { catchError, map, mergeMap, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TrackService {

    private readonly URL = environment.api
    constructor(private http: HttpClient) {

    }

    private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
        return new Promise((resolve, reject) => {
            const lisTmp = listTracks.filter(a => a._id !== id)
            resolve(lisTmp)
        })
    }

    getAllTracks$(): Observable<any> {
        return this.http.get(`${this.URL}/tracks`)
            .pipe(
                map(({ data }: any) => {
                    return data
                })
            )
    }

    getAllRamdom$(): Observable<any> {
        return this.http.get(`${this.URL}/tracks`)
            .pipe(
                mergeMap(({ data }: any) => this.skipById(data, 2)),
                tap(data => console.log('--->', data)),
                catchError((err) => {
                    console.log('Algo de Paso', err)
                    return of([])
                })
            )
    }
}
