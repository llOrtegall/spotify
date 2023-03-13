import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { map, tap, mergeMap, catchError } from 'rxjs/operators';
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

    /**
     * En Esta Linea se esta conectando con la API 
     */
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
                tap(data => console.log('--->', data)),
                mergeMap(({ data }: any) => this.skipById(data, 1)),
                tap(data => console.log('--->', data)),

                catchError((err) => {
                    const [ status, statusText] = err;
                    console.log('Algo Paso Revisame', [status, statusText])

                    return of([])
                })
            )
    }
}
