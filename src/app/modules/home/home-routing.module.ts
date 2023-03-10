import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  //Aqui definimos nuestras Rutas
  {
    path:'tracks',
    loadChildren: () => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
  },
  {
    path:'favoritos',
    loadChildren: () => import('@modules/favoritos/favoritos.module').then(m => m.FavoritosModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
