import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../../data/tracks.json'

@Component({
  selector: 'app-tracks-pages',
  templateUrl: './tracks-pages.component.html',
  styleUrls: ['./tracks-pages.component.css']
})
export class TracksPagesComponent implements OnInit {

  mockTranksList:Array<TrackModel> = [

  ]

  constructor() { }

  ngOnInit(): void {
    const {data}:any = (dataRaw as any).default
    this.mockTranksList = data;
  }
}
