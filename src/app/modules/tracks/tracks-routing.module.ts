import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TracksPagesComponent } from './pages/tracks-pages/tracks-pages.component';

const routes: Routes = [
  {
    path: '',
    component: TracksPagesComponent,
    outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule { }
