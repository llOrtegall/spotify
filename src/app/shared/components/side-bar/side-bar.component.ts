import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []

  constructor(private router: Router, private trackService: TrackService) {

  }

  ngOnInit(): void {

    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth'],
        query: { hola: 'mundo' }
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history'],
        query: { hola: 'mundo' }
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favoritos'],//TODO: http://localhost:4200/
        query: { hola: 'mundo' }
      },
      {
        name: 'Tus Canciones',
        icon: 'uil uil-music',
        router: ['/', 'tracks'],//TODO: http://localhost:4200/
        query: { hola: 'mundo' }
      },
    ]
    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]
    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]

    this.trackService.datatracksRamdom$.subscribe((response: any) => {
      console.log('---------->', response);
      this.customOptions.push({
        name: response[0].name,
        router: []
      })
    })

  }

}
