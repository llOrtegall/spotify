import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosPageComponent } from './pages/favoritos-page/favoritos-page.component';

const routes: Routes = [
  {
    path:'',
    component: FavoritosPageComponent,
    outlet:'child'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritosRoutingModule { }
